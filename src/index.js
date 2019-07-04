import _ from 'loadsh'
import printMe from './print'
import './style.scss'
let element = null;
function component() {
    element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.addEventListener('click', printMe, false);
    return element;
}

document.body.appendChild(component());

/**
 * 当print内部发生变化时可以告诉webpack接受更新模块
 */
if (module.hot) {
    module.hot.accept('./print.js', () => {
        console.log('Accpeting the updated printMe module!');
        document.body.removeChild(element);
        element = component();  //重新渲染页面, component更新click事件处理
        document.body.appendChild(element);
    })
}
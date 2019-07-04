import _ from 'loadsh'
import printMe from './print'
import './style.scss'

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.addEventListener('click', printMe, false);
    return element;
}

document.body.appendChild(component());
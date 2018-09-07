const element = document.createElement('div');
element.innerHTML = 'hello world!';
document.body.appendChild(element);


const btn = document.createElement('BUTTON');
const text = document.createTextNode('CLICK ME TO DYNAMICALLY LOAD MORE CODE');
btn.appendChild(text);
btn.setAttribute('id', 'myButton');
document.body.appendChild(btn);

document.getElementById('myButton').addEventListener('click', function(){
	return import(/* webpackChunkName: 'lodash' */ 'lodash')
		.then(({ default: _ }) => {
			const newElement = document.createElement('div');
			newElement.innerHTML = _.join(['Hello', 'lodash'], ' ');
			document.body.appendChild(newElement);
		});
});

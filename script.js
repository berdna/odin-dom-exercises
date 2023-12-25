const container = document.querySelector('#container');

// Header
const header = document.createElement('h1');
header.textContent = "My shopping list";
container.appendChild(header);

// Form
const form = document.createElement("form");
const formtext = document.createElement('label');
formtext.textContent = "Enter a new item: ";
const forminput = document.createElement('input');
forminput.setAttribute('type', 'text');
forminput.setAttribute('id', 'formVal');
const formbutton = document.createElement('input');
formbutton.setAttribute('type', 'submit');
formbutton.value = 'Add item';
container.appendChild(form);
form.appendChild(formtext);
form.appendChild(forminput);
form.appendChild(formbutton);

const list = document.createElement('ul');

container.appendChild(list);

const addItem = (item) => {
    return item.value;
};
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent form from submitting
    const listItem = document.createElement('li');
    const deleteItem = document.createElement('button');
    deleteItem.textContent= 'Delete';
    deleteItem.addEventListener('click', function (event) {
        event.target.parentElement.remove();
    });
    list.appendChild(listItem);
    listItem.textContent = addItem(forminput);
    listItem.appendChild(deleteItem);
    forminput.value = null; //reset form input
});








// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

// const redHello = document.createElement('p');
// redHello.classList.add('red');
// redHello.textContent = "Hey I'm red!";
// redHello.style.color = 'red';

// container.appendChild(redHello);
// // 
// const header3 = document.createElement('h3');
// header3.style.color = 'blue';
// header3.textContent = "I'm a blue h3!";

// container.appendChild(header3);
// // 
// const div = document.createElement('div');
// div.style.border = 'black';
// div.style.backgroundColor = 'pink';

// container.appendChild(div);

// const h1div = document.createElement('h1');
// h1div.textContent = "I'm in a div";
// div.appendChild(h1div);
// const pdiv = document.createElement('p');
// pdiv.textContent = "ME TOO!";
// div.appendChild(pdiv);

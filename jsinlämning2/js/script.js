const input = document.querySelector('#input');
const output = document.querySelector('#output');

let items = []


const fetchItems = async () => {
    let url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

    const res = await fetch(url);
    const _items = await res.json();
    items = _items
    listItems(items);
}

fetchItems();

const newItem = item => {
    let listing = `
    <div id="${item.id}" class="item mt-5">
    <h3>${item.title}</h3>
    <button type="button" class="btn btn-outline-danger" id="deleteTodo">Remove</button>
    </div>
    `
    return listing
}

const listItems = (items) => {
    output.innerHTML = '';
    items.forEach(item => {
    output.innerHTML += newItem(item);
})
}

const addItem = async title => {

    let url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
    const _item = {
        title,
        completed: false
    }

    const res = await fetch(url, {
    method: 'POST',
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(_item)
})

    const item = await res.json()

    items.unshift(item)
    listItems(items);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    addItem(input.value);
    input.value = '';
}) 


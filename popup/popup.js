const button = document.getElementById('message');

console.log('popup!');

button.addEventListener('click', () => {
    browser.runtime.sendMessage({message: "clicked"})
    .then((responce) => {
        console.log('responce');
    });
})

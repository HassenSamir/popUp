const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');
//creating new const and link it with the id's

//using addEventListener to open and close the pop up by adding active or removing it 
//The add will be made by the css file that have a class.container and so we add to it active
open.addEventListener('click', () => {
    container.classList.add('active')
});

close.addEventListener('click', () => {
    container.classList.remove('active')
});
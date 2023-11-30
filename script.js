const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

/* we have to check if navbar is already open, if not & clicked it'll be open & vice versa */
if (bar) { 
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    }) /*  */
}

if (close) { 
    bar.addEventListener('click', () => {
        nav.classList.remove('active')
    }) /*  */
}
const { hash } = window.location;

const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#secretCard').classList.add('hide');
    document.querySelector('#messageCard').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}



document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const secretCard = document.querySelector('#secretCard');
    secretCard.classList.add('hide');

    const linkCard = document.querySelector('#linkCard');
    linkCard.classList.remove('hide');

    const message = document.querySelector('#secret');
    const encrypted = btoa(message.value);

    const link = document.querySelector('#link');
    link.value = `${window.location}#${encrypted}`;
    link.select();

})

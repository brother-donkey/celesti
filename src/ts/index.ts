const helloWorld = document.querySelector('.hello-world') as HTMLElement;

helloWorld.insertAdjacentHTML('beforeend', `
    Well, this set up has been easy.
`)
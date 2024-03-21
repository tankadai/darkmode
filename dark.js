const button = document.getElementById('btn1');
button.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor;
    if (currentColor === 'black') {
        document.body.style.backgroundColor = 'white';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
    }
});
const ball = document.querySelector('.ball')

ball.addEventListener('click', function(){
    ball.classList.add('animate__wobble');
    setTimeout(() => {
    ball.style.cssText = `
    background-color: blue;
    box-shadow: 0px 0px 100px blue;
    transition: background-color 2s, box-shadow 2s;
    `
}, 500);
    setTimeout(() => {
    ball.style.cssText = `
    background-color: green;
    box-shadow: 0px 0px 100px green;
    transition: background-color 2s, box-shadow 2s;
    `
}, 1500);
})

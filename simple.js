const colors = ["Red", "Blue", "Yellow"]
const btn_color = document.getElementById('btn-color')
const btn_reload = document.getElementById('btn-reload')
const color = document.getElementById('span-color')

btn_color.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(colors[randomNumber])
})

btn_reload.addEventListener('click', function(){
    location.reload();
})



function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
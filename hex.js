const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const btn_color = document.getElementById('btn-color')
const btn_reload = document.getElementById('btn-reload')
const color = document.getElementById('span-color')

btn_color.addEventListener('click', function(){
    let randomNumber = '#';
    for(let i=0; i<6; i++){
        randomNumber += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
    console.log(randomNumber)
})

btn_reload.addEventListener('click', function(){
    location.reload();
})


function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
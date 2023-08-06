const hexColors =[0, 1, 2, 3, 4, 5, 6, 7, 8 ,9 ,"A" ,"B" ,"C" ,"D",]

const button= document.querySelector(".btn")
// console.log(button)
const colorSpan = document.querySelector(".color-span")
// console.log(colorSpan)

button.addEventListener("click",()=> {
    let hexValue = "#"
    // getRandomNum = Math.round( Math.random()*hexColors.length);
    // console.log(getRandomNum)
for (let i = 0 ; i < 6 ; i++){
hexValue += hexColors [getRandomNumber()];
// console.log(hexValue)
}
colorSpan.textContent = hexValue;
document.body.style.backgroundColor = hexValue;

})

function getRandomNumber(){
    return Math.floor( Math.random()*hexColors.length);
}
console.log(getRandomNumber()   )


// "A" ,"B" ,"C" ,"D"
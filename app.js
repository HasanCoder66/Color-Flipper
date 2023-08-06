// const colorsName = ["Red", "Orange", "Purple", "Black", "Yellow", "Blue", "White", "Beige", "Skin", "Peach", "Green", "Lightgreen", "Skyblue", "Pink", "Brown", "Gray", "Golden", "Maroon", "Cream", "Dodgerblue", "Cyan", "Silver"]

// const button = document.querySelector(".btn")
// // console.log(button)

// const colorSpan = document.querySelector(".color-name")
// // console.log(colorSpan)
// button.addEventListener("click", function () {
//     const getRandomNumber =Math.round(Math.random()*colorsName.length)
//     console.log(getRandomNumber)
//    document.body.style.backgroundColor =colorsName [getRandomNumber]
//    colorSpan.textContent = colorsName[getRandomNumber]


// })  
























// const randomNumber = Math.round( Math.random() * colorsName.length ) ;
// //    console.log(randomNumber)
//     document.body.style.backgroundColor = colorsName[randomNumber]
//     colorSpan.textContent = colorsName[randomNumber]
    




// const randomNumber =Math.round( Math.random() * colorsName.length )
// // console.log(randomNumber)
// document.body.style.backgroundColor = colorsName[randomNumber];
// colorSpan.textContent = colorsName[randomNumber]








const colorsName =["Red", "Orange", "Purple", "Black", "Yellow", "Blue", "White","Green", "Lightgreen", "Skyblue", "Pink", "Brown", "Gray", "Maroon",  "Dodgerblue", "Cyan", "Silver"]


const button = document.querySelector(".btn")
// console.log(button )
const colorSpan = document.querySelector(".color-span")
// console.log(colorSpan)

button.addEventListener("click" , ()=>  {
    const randomNum =Math.round( Math.random()* colorsName.length);
    // console.log(randomNum)
document.body.style.backgroundColor = colorsName[ randomNum]
colorSpan.textContent=  colorsName[ randomNum]
})
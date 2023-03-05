const colors = ['green','red','rgba(133,122,200)','skyblue','grey','pink','blue','lightpink','violet','white']

const btn = document.getElementById('btn')
const colorName = document.querySelector('.color')
const container = document.querySelector('.container')



btn.addEventListener('click',function(){

const randomNumber = randomColor()
// console.log(randomNumber)
container.style.backgroundColor = colors[randomNumber]
colorName.innerHTML = colors[randomNumber]
//   console.log(colorName)
  randomColor()
})

function randomColor (){
    return Math.floor(Math.random() * colors.length )
   
}


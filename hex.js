

// const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

// const container = document.querySelector('.container')
// const colorName = document.querySelector('.color')

// const btn = document.getElementById('btn')

// btn.addEventListener('click', function() {
//   let hexColor = '#';
//   for(let i = 0; i < 6; i++) {
//     hexColor += hex[randomHex()];
//     console.log(hexColor)
   
//   }
//   colorName.textContent = hexColor;
//   container.style.backgroundColor = hexColor;
// });



// function randomHex() {
//   return Math.floor(Math.random() * hex.length);
  
// }




const container = document.querySelector('.container');
const colorName = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  const hexColor = '#' + Math.random().toString(16).slice(2, 8);
  colorName.textContent = hexColor;
  container.style.backgroundColor = hexColor;
});


// #BC2F6A This code generates a valid hexadecimal color code without an alpha component, like #BC2F6A
// i < 6 hai matlab wo jo hexcode hai 6 tak generate karega then agar 8 kiya to 8 ka hext code generate karega
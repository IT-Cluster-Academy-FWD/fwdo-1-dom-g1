const colorChange = document.querySelectorAll('#theWicher-list li button')

for (let colorButton of colorChange) {
  colorButton.addEventListener('click', function (){
    colorButton.parentElement.style.black ="red";
  })
}


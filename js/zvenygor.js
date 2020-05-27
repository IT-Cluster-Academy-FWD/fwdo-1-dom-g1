const $fruitList = document.querySelectorAll('.fruit-list li button');

for (const $fruitListName of $fruitList) {
  $fruitListName.addEventListener('click', function() {
    $fruitListName.parentElement.style.color = "red";
  });
}
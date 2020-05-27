const $buttonColors = document.querySelectorAll(".animals-list li button");

for (const $btn of $buttonColors) {
  $btn.addEventListener('click', function (){
    $btn.parentElement.style.color = "white";
    $btn.parentElement.style.backgroundColor = "green";
  });
}
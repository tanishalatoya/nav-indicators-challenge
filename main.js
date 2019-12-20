var navigationBar = document.querySelector('nav');

navigationBar.addEventListener('click', highlightSelection);

function highlightSelection() {
  var listItem = document.querySelectorAll('li');

  for (var i = 0; i < listItem.length; i++) {
    if (event.target === listItem[i]) {
      listItem[i].classList.add('highlight');
    }
  }
}

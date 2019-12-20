var navigationBar = document.querySelector('nav');

navigationBar.addEventListener('click', highlightSelection);
navigationBar.addEventListener('click', displayInformation);


function highlightSelection() {
  var navParagraphs = document.querySelectorAll('nav > p');

  for (var i = 0; i < navParagraphs.length; i++) {
    if (event.target !== navParagraphs[i]) {
      !navParagraphs[i].classList.remove('highlight');
    } else {
      navParagraphs[i].classList.add('highlight')
    }
  }
}

// function highlightSelection(event) {
//     var allCourses = document.querySelector('#all-courses');
//     var collections = document.querySelector('#collections');
//     var wishlist = document.querySelector('#wishlist');
//     var archived = document.querySelector('#archived');
//
//     if (event.target.id === 'all-courses') {
//       allCourses.classList.add ('highlight');
//       collections.classList.remove('highlight');
//       wishlist.classList.remove('highlight');
//       archived.classList.remove('highlight');
//
//     } else if (event.target.id === 'collections') {
//       collections.classList.add ('highlight');
//       allCourses.classList.remove('highlight');
//       wishlist.classList.remove('highlight');
//       archived.classList.remove('highlight');
//
//     } else if (event.target.id === 'wishlist') {
//       wishlist.classList.add ('highlight');
//       allCourses.classList.remove('highlight');
//       collections.classList.remove('highlight');
//       archived.classList.remove('highlight');
//
//     } else {
//       archived.classList.add ('highlight');
//       allCourses.classList.remove('highlight');
//       collections.classList.remove('highlight');
//       wishlist.classList.remove('highlight');
//     }
// }




// Refactor this to use a variable to pull in teh various messages.
function displayInformation(event) {
  var main = document.querySelector('main');


  if (event.target.id === 'all-courses') {
    main.innerHTML =
    `<section>
      <img src="open-magazine.svg" alt="book icon">
      <p>We have a wide range of courses to choose from!</p>
    </section>`

  } else if (event.target.id === 'collections') {
    main.innerHTML =
    `<section>
      <p>Another chunk of text goes here related to collections!</p>
    </section>`

  } else if(event.target.id === 'wishlist') {
    main.innerHTML =
    `<section>
      <p>Courses I'd love to take in my free time go here!</p>
    </section>`

  } else {
  main.innerHTML =
  `<section>
    <p>Courses I've already taken go here!</p>
  </section>`
  }
}

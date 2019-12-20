var navigationBar = document.querySelector('nav');
var main = document.querySelector('main');

navigationBar.addEventListener('click', highlightSelection);

function highlightSelection(event) {
    var allCourses = document.querySelector('#all-courses');
    var collections = document.querySelector('#collections');
    var wishlist = document.querySelector('#wishlist');
    var archived = document.querySelector('#archived');

    if (event.target.id === 'all-courses') {
      allCourses.classList.add ('highlight');
      collections.classList.remove('highlight');
      whishlist.classList.remove('highlight');
      archived.classList.remove('highlight');

    } else if (event.target.id === 'collections') {
      collections.classList.add ('highlight');
      allCourses.classList.remove('highlight');
      whishlist.classList.remove('highlight');
      archived.classList.remove('highlight');

    } else if (event.target.id === 'wishlist') {
      wishlist.classList.add ('highlight');
      allCourses.classList.remove('highlight');
      collections.classList.remove('highlight');
      archived.classList.remove('highlight');

    } else {
      archived.classList.add ('highlight');
      allCourses.classList.remove('highlight');
      collections.classList.remove('highlight');
      wishlist.classList.remove('highlight');
    }
}

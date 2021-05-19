const button = document.querySelector('.search-button').addEventListener('click', showSearchBar);
const searchBar = document.getElementById('search');

function showSearchBar(e) {
    document.querySelector('.search-container').classList.toggle('show-search-bar');
    searchBar.focus();
    searchBar.style.color = '#333';
}
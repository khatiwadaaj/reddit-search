const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
import reddit from './redditapi';


searchForm.addEventListener('submit', e => {
    //get search term
    const searchTerm = searchInput.value;

    //get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    
    //get limit
    const searchLimit =document.getElementById('limit').value;
    
    //check input
    if(searchTerm === ''){
        //show message
        showMessage('Please add a search term', 'alert-danger');
    }

    //Clear Input
    searchInput.value = '';

    //Search Reddit
    reddit.search(searchTerm, searchLimit, sortBy);
   
    e.preventDefault();
});


function showMessage(message, className){
    //create the div
    const div = document.createElement('div');

    //add classes
    div.className = `alert ${className}`;

    //add text
    div.appendChild(document.createTextNode(message));

    // Get Parent
    const searchContainer = document.getElementById('search-container');

    //Get Search
    const search = document.getElementById('search');
    
    //Insert Message
    searchContainer.insertBefore(div, search);

    //Timeout Alert
    setTimeout(() => document.querySelector('.alert').remove(), 1500);
}
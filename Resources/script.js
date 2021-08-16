
// filter events function
 function filterEvents (filter) {
    let eventsList = document.getElementById('events_Container').getElementsByClassName('event');
    for (let i = 0; i < eventsList.length; i++ ) {
        if (filter == "showAll") eventsList[i].style.display = 'flex';
        else if (eventsList[i].className.indexOf(filter) > -1) eventsList[i].style.display ='flex';
        else eventsList[i].style.display = 'none';
    };
 };

// create button event handerlers
arrBtn = ['Carcassonne', 'Catan', 'MTG', 'Takenoko', 'Monopoly', 'cardGame', 'boardGames', 'showAll'];
arrBtn.forEach( button => {
    document.getElementById(button).addEventListener('click', () => filterEvents(button));
});
// search bar event handler
let searchBar = document.getElementById('SearchBar');
searchBar.addEventListener('keyup', () => {
    let searchFilter= document.getElementById('SearchBar').value.toLowerCase();
    filterEvents(searchFilter);
});
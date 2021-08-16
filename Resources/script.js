
// filter events function
 function filterEvents (filter) {
    let eventsList = document.getElementById('events_Container').getElementsByClassName('event');
    let filterToLowerCase = filter.toLocaleLowerCase();
    for (let i = 0; i < eventsList.length; i++ ) {
        let classStr = eventsList[i].className.toLocaleLowerCase();
        if (filter == "showAll") eventsList[i].style.display = 'flex';
        else if (classStr.indexOf(filterToLowerCase) > -1) eventsList[i].style.display ='flex';
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
    let searchFilter= document.getElementById('SearchBar').value;
    filterEvents(searchFilter);
});
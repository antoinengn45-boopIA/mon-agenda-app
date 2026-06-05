// Sauvegarder dans le navigateur
function saveData() {
    localStorage.setItem('agenda_people', JSON.stringify(people));
    localStorage.setItem('agenda_events', JSON.stringify(events));
}

// Charger au démarrage
function loadData() {
    const savedPeople = localStorage.getItem('agenda_people');
    const savedEvents = localStorage.getItem('agenda_events');
    if (savedPeople) people = JSON.parse(savedPeople);
    if (savedEvents) events = JSON.parse(savedEvents);
}

// Appelez loadData() au tout début de votre script
// Et ajoutez saveData() à la fin de vos fonctions saveEvent et savePerson

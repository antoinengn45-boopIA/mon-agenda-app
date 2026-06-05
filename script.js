// Initialisation des données avec chargement automatique
let people = JSON.parse(localStorage.getItem('agenda_people')) || [];
let events = JSON.parse(localStorage.getItem('agenda_events')) || [];

function saveData() {
    localStorage.setItem('agenda_people', JSON.stringify(people));
    localStorage.setItem('agenda_events', JSON.stringify(events));
}

function exportData() {
    const data = JSON.stringify({ people, events });
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'backup_agenda.json';
    a.click();
}

// Modifiez vos fonctions de sauvegarde pour inclure saveData()
function saveEvent() {
    // ... votre code existant ...
    events.push({ /* ... */ });
    saveData(); // <--- Ajout de la sauvegarde
    render();
}

function savePerson() {
    // ... votre code existant ...
    people.push({ /* ... */ });
    saveData(); // <--- Ajout de la sauvegarde
    render();
}

function deletePerson(id) {
    people = people.filter(p => p.id !== id);
    events = events.filter(e => e.personId !== id);
    saveData(); // <--- Ajout de la sauvegarde
    render();
}

// ... Reste de vos fonctions de rendu et d'affichage ...

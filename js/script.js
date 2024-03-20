// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.

// MILESTONE 0
// creo l'array di oggetti 

const teamArray = [
    {
        nameAndLastName: 'Wayne Barnett',
        role: 'founder and ceo',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nameAndLastName: 'Angela caroll ',
        role: 'chief editor ',
        image: 'angela-carrol-chief-editor.jpg'
    },
    {
        nameAndLastName: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        nameAndLastName: 'Angela lopez',
        role: 'Social media manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nameAndLastName: 'Scott Estrada',
        role: 'developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        nameAndLastName: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

// MILESTONE 1
// faccio un ciclo for per scorrere gli oggetti dell'array
for (let i = 0; i < teamArray.length; i++) {
    // prendo tutti gli elementi presenti negli oggetti
    const thisMember = teamArray[i]
    console.log('Nome del membro: ' + thisMember.nameAndLastName)

    console.log('Ruolo del membro: ' + thisMember.role)
    console.log('Immagine del membro: ' + thisMember.image)
}

// li stampo in console
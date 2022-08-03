// intercettare l'evento di submit della form 
const ticketForm = document.getElementById('ticketForm');
// con questo console.log vedo se mi ha preso affettivamente la form
//console.log(ticketForm);

ticketForm.addEventListener('submit', computeTicket);
ticketForm.addEventListener('input', hideOutput);

// funzioni 
//gestisce input e output
//funzione principale
function computeTicket(event) {
    // impedisci di fare la cosa di default                 
    event.preventDefault();
    //console.log(event);
    // leggere il valore di km e di age
    const kmInput = document.getElementById('km');
    const ageInput = document.getElementById('age');
    // questi console.log mi aiutano a capire se sono sulla strada giusta 
    //console.log(kmInput);
    //console.log(kmInput.value);
    //console.log(ageInput.value);

    // è meglio fare sempre un parseInt perchè più sicura sul fatto che ti torna un int
    const kmValue = parseInt(kmInput.value);
    const ageValue = parseInt(ageInput.value);
    // richiamo la funzione di calcolo
    const priceOutput = getPrice(kmValue, ageValue);
    // verifico se funziona 
    //console.log(priceOutput);


//inserire i valori nell'output html
document.getElementById('kmOutput').innerHTML =kmValue;
document.getElementById('offerOutput').innerHTML = priceOutput.offer;
document.getElementById('priceOutput').innerHTML = new Intl.NumberFormat(
    'it-IT',
    {style: 'currency', currency: 'EUR'}
).format(priceOutput.price);

// allora posso mostrare la table
document.getElementById('output').className='';
}

// funzione di calcolo del biglietto
//calcolare il prezzo del biglietto in base a km e age
function getPrice(km, age){
let price = km*0.21;
let offer = 'Standard';
if(age<18){
    price = price - price*0.2;
    offer = 'Sconto minorenni';
}
if (age >=65){
    price = price - price*0.4;
    offer = 'Sconto over 65';
}
// ritorno un oggetto
return {
    price : price,
    offer : offer,
};
}

//funzione che nasconde la table
function hideOutput(){
    document.getElementById('output').className='hidden';
}
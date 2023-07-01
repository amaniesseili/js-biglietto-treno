const firstName = prompt("Inserici il tuo nome");
const lasttName = prompt("Inserici il tuo cognome");
const userAge = prompt("Quanti anni hai?");
const distance = prompt ("Inserici la distanza che vuoi percorrere in Kilometri");
const priceKm = 0.21;
const finalPrice = distance * priceKm ;

const discount20 =((distance * priceKm) * 20) / 100 
const discount40 =((distance * priceKm) * 40) / 100


document.getElementById("welcome-title").innerHTML = ` Benvenuto ${firstName} ${lasttName}`;

document.getElementById("age").innerHTML = `${userAge}`;

document.getElementById("km").innerHTML = `${distance}`;

document.getElementById("price").innerHTML = `${finalPrice}`;

document.getElementById("discount").innerHTML = `${discount20}`;



// come faccio a mettere il discount del 20 e del 40 in html .. 
// perche js ha smesso di funzionare quando  ho aggiunto if user age tra 18 e 65 

if (userAge < 18) {
        document.getElementById("age").innerHTML = ` Complimenti hai uno sconto del 20% `;
} else {
    if ( userAge > 18 && userAge < 65){
        document.getElementById("age").innerHTML = ` Ci dispiace, nessun sconto per te!`;
    else ( userAge > 65){
        document.getElementById("age").innerHTML = ` Complimenti hai uno sconto del 40% `;
    }
}
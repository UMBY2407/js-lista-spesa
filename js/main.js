let listaDellaSpesa = [];
let elementoSpesa;
let numeroElementiSpesaStringa = prompt("Quanti Elementi vuoi comprare?");

//verifica input utente
    while(isNaN(numeroElementiSpesaStringa) || numeroElementiSpesaStringa == ""){
        numeroElementiSpesaStringa = prompt("Hai inserito un numero non Valido! Quanti Elementi vuoi comprare?");
    }
    let numeroElementiSpesa = parseInt(numeroElementiSpesaStringa);
    listaDellaSpesa = [numeroElementiSpesa - 1];

//inserimento elementi spesa
    for(let i = 0; i < numeroElementiSpesa; i++){
        elementoSpesa = prompt("Cosa vuoi comprare?");

            while(!isNaN(elementoSpesa) || elementoSpesa == ""){
                elementoSpesa = prompt("Hai inserito un elemento non valido! Inserire un nuovo elemento:");
            }
        listaDellaSpesa[i] = elementoSpesa;
        console.log(listaDellaSpesa);
        do{
            document.getElementById('listaSpesa').innerHTML = `<li>${listaDellaSpesa[i]}</li>`;
        }while(i< numeroElementiSpesa);
    }
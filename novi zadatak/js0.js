let akcije = document.querySelectorAll('.akcija')
let aktivanIndeks = 0;

function klik(mojargument) {
    for (let i=0; i<akcije.length; i++){
        akcije[i].classList.remove('active')
    }
    mojargument.classList.add('active')
    let selektor = mojargument.getAttribute('data-selektor')
    let elementi = document.querySelectorAll('.akcije')
    for (let i=0; i<elementi.length; i++){
        if(elementi[i].classList.contains(selektor)){
            elementi[i].classList.remove('hide')

        }else{
            elementi[i].classList.add('hide')
        }
    }
}
for (let i=0; i<akcije.length; i++){
    console.log(akcije[i])
    let node = akcije[i]
    node.addEventListener('click', function () {
        klik(node)
        aktivanIndeks = i;
    } )
}

let levo = document.querySelector('#levo');
let desno = document.querySelector('#desno');


levo.addEventListener('click', function () {
    aktivanIndeks = (akcije.length + aktivanIndeks - 1) % akcije.length;
    klik(akcije[aktivanIndeks])
})

desno.addEventListener('click', function () {
    aktivanIndeks = (aktivanIndeks + 1) % akcije.length;
    klik(akcije[aktivanIndeks])
})



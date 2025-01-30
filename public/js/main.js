// // recuperer element avec le tag
// let h1 = document.getElementsByTagName('h1')[0];

// console.log(h1.hasAttribute('class'));
// console.log(h1.hasAttribute('id'));

// h1.className = 'unNom'
// h1.className = 'housseyn'
// h1.classList.add('unNom')
// console.log(h1);

// h1.style.backgroundColor = 'purple'
// h1.style.color = 'white' 


// let p = document.querySelector('#test')
// console.log(p.innerText);
// console.log(p.textContent);
// console.log(p.innerHTML);
// // let input = document.querySelector('input')
// // console.log(input.attributes);

// console.clear()

// let pEvent = document.querySelector('.event')
// console.log(pEvent);

// // pEvent.addEventListener('click', function(){
// //     console.log("Coucou c'est moi");
// // })

// // pEvent.addEventListener('click',()=>{
// //     console.log("Coucou c'est moi");
// // } )

// function coucou (){
//     console.log("Coucou c'est moi");
// }
// pEvent.addEventListener('click', coucou)










// // let firstP = document.querySelector('p')
// // console.log(firstP);
// // firstP.innerHTML = 'coucou <b>bella</b>'

// // let firsth1 = document.getElementsByTagName('h1')[3];

// // console.log(h1);
// // console.log(firsth1);

// // // recuperer element avec le classname
// // let classnametag = document.getElementsByClassName('changeName');

// // console.log(classnametag);

// // // recuperer element avec l'id '
// // let idtag = document.getElementById('name');

// // console.log(idtag);


// // //queryselector
// // let h1first = document.querySelector('h1.h1class');
// // let h1all = document.querySelectorAll('h1.h1class, button');

// // console.log(h1all);




// // theorie creation d'element
// let body = document.body
// let premierP = document.createElement('p') //creation d'un p
// let textPremierP = document.createTextNode('Coucou la MolenGeek School') // creation d'un texte
// premierP.appendChild(textPremierP) // ajout du texte dans le p

// // premierP.innerText = 'Je rajoute du texte via innerText' // rajoute du texte via innerText




// body.append(premierP)// ajout du p dans le body

// //theorie suppression element
// let pASupp = document.querySelector('.toDelete') //cibler l'element à supprimer
// pASupp.remove() // supprimer l'élément
// // premierP.remove()

let body = document.body
// let divContent = document.querySelector('div.content')

// let h1 = document.createElement('h1')
// h1.innerText = 'Ceci est mon premier site avec un dark mode'
// divContent.append(h1)
let btnDark = document.querySelector('.darkMode')
let nav = document.querySelector('nav.navbar')
let logo = document.querySelector('img.logo')

btnDark.addEventListener('click', function(){
    if (body.className == 'dark') {
        body.className = 'light'
        btnDark.innerText = 'Dark'
        nav.setAttribute('data-bs-theme',"light")
        logo.style = 'filter: invert(0)'
    } else {
        body.className = 'dark'
        btnDark.innerText = 'Light'
        nav.setAttribute('data-bs-theme',"dark")
        logo.style = 'filter: invert(1)'      
    }
})


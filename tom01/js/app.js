const array = [
    {
      "id": 1,
      "patarimas": "Kiekvieną dieną užrašykite, ką išmokote ir ką norėtumėte dar išmokti. Tai padės jums stebėti savo pažangą ir identifikuoti sritis, kuriose reikia tobulėti."
    },
    {
      "id": 2,
      "patarimas": "Ieškokite mokymosi partnerio arba draugo, su kuriuo galėtumėte dalintis žiniomis ir mokytis kartu. Diskutuodami su kitu žmogumi galite giliau suprasti temą ir lengviau įsisavinti naują medžiagą."
    },
    {
      "id": 3,
      "patarimas": "Sukurkite efektyvią laiko valdymo sistemą, kuri padės jums efektyviau planuoti mokymosi laiką ir išlaikyti produktyvumą."
    },
    {
      "id": 4,
      "patarimas": "Naudokite mokymosi programas ir technologijas, kurios gali padėti jums įsisavinti medžiagą interaktyviai ir įdomiai."
    },
    {
      "id": 5,
      "patarimas": "Pasirinkite kokybiškus mokymosi vadovėlius, kurie gerai struktūruoti ir pateikia aiškią informaciją. Tai padės jums suprasti sunkias temas lengviau."
    },
    {
      "id": 6,
      "patarimas": "Kiekvieną dieną sukurti mokymosi įpročius ir laikytis jų. Nuoseklumas yra labai svarbus norint pasiekti mokymosi tikslus."
    },
    {
      "id": 7,
      "patarimas": "Sukurkite raminančią mokymosi aplinką, kurioje galėtumėte susikoncentruoti ir dirbti be pertraukų."
    },
    {
      "id": 8,
      "patarimas": "Nustatykite aiškius ir realistiškus mokymosi tikslus, kurie padės jums sukoncentruoti pastangas į svarbiausias sritis."
    },
    {
      "id": 9,
      "patarimas": "Išmokite įvairias mokymosi strategijas, kurios geriausiai atitinka jūsų mokymosi stilių ir poreikius."
    },
    {
      "id": 10,
      "patarimas": "Nustatykite sau mokymosi apdovanojimus už pasiektus tikslus arba sėkmes mokymosi procese. Tai padės jums išlaikyti motyvaciją ir džiugintis savo pažanga."
    }
  ]
   


  function createElement(){
      for(let i=0;i<array.length;i++){
        let h1 = document.createElement('h1');
        h1.textContent = array[i].patarimas;
        let div = document.createElement('div')
        if(i===0){
            div.setAttribute('class','carousel-item active')    
        }else{
            div.setAttribute('class','carousel-item')
        }
        h1.setAttribute('class','d-block w-100')
        div.appendChild(h1)
        let carusele = document.querySelector('#carusele')
        carusele.appendChild(div)
      }
  }



const students = ['Ieva','Tomas','Kristina'];

localStorage.setItem('studentsList',JSON.stringify(students));

console.log(JSON.parse(localStorage.getItem('studentsList')));
 
localStorage.removeItem('studentsList')

localStorage.clear()
   


'use strict'

firstName = 'Jonas';
let [firstName,lastName,email] = ['Jonas','Jonaitis','jonas@gmail.com'];

const personalInformation = {
    firstName: 'Jonas',
    lastName: 'Jonaitis',
    email: 'jonas@gmail.com'
}
const {firstName: vardas,lastName:pavarde} =personalInformation;

firstName = 'Kristina';

console.log(firstName)
-//-----------------------------------------------------------------------------------------

// let items = ["Computer",'Tablet','Phone'];

// if(items.includes('Tablet')){
//     console.log('Item Found')
// }else{
//     console.log('Item not found')
// }



// const sum = (...numbers)=>{//spread operator
//     console.log(`List of numbers:${numbers}`)
// }

// sum(222,333,444,555)
//-----------------------------------------------------------------------------------------



setTimeout(()=>{
    console.log('Labas')
},5000)

//---------------------------------------------------------------------------------

//Call back funkcija
const syHi = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const firstName="Kristina";
            resolve(firstName);
    }, 2000)
    })
}
syHi()
.then((firstName)=>{console.log(firstName)})
.then(()=>{console.log("Viskas veikia")})
 
const greet = async()=>{
    const firstname = await syHi();
    console.log("Labas, " + firstname)
}
greet()
//---------------------------------------------------------------------------------------



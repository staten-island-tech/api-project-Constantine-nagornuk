import './style.css'

 const page1 = "https://swapi.dev/api/people"
 const page2 = "https://swapi.dev/api/people/?page=2"
 const page3 = "https://swapi.dev/api/people/?page=3"
 const page4 = "https://swapi.dev/api/people/?page=4"
 const page5 = "https://swapi.dev/api/people/?page=5"
 const page6 = "https://swapi.dev/api/people/?page=6"
 const page7 = "https://swapi.dev/api/people/?page7"
 const page8 = "https://swapi.dev/api/people/?page=8"
 const page9 = "https://swapi.dev/api/people/?page=9"
const DOMselectors = {
  inside: document.getElementById("inside")
  
} 
const DOMselectors2 = {
  S1 : document.getElementById("Page1"),
  S2 :document.getElementById("Page2"),
}
  async function getdata(url) { 
     try {
       const repsonce = await fetch(url); 
       if (repsonce.status != 200) {
         throw new Error(repsonce.statusText) 
        } 
    const data = await repsonce.json()
    data.results.forEach((card)=>  {
      let x = card.name
      let y = card.birth_year
      let z = card.eye_color
      let t = card.gender
      const infoholder =  `
      <div id="CardFormant" class="CardTemplate">
        <h2 class="personname">${x}</h2>
        <p>${z}</p>
        <p>${t}</p>
        <p>Mass</p>
        <p>${y}</p>
    
    </div> 
`
DOMselectors.inside.insertAdjacentHTML('beforeend' , infoholder)
    })
   } 
    catch (error){
       error } } 

 getdata(page1)


let pagenumber = 0




DOMselectors2.S1.addEventListener("click" , poop1)
function poop1(){
console.log(--pagenumber)
if(pagenumber = 1){
  pagenumber = 1

}
}

DOMselectors2.S2.addEventListener("click" ,poop )
function poop(){
console.log(++pagenumber)
if(pagenumber > 9) {
  pagenumber = 9

  // why the hell does it add 8 but the other one doesnt? only when i do pagenumber = 9 Now the minus counte ris broekn!
}
/* 
if(pagenumber == 4) {
  console.log("Workis")
  DOMselectors.inside.innerHTML = '';
  getdata(page4)
} */

}









 
/*  i am poop my self if the code doesnt work*/

/* Make the wesbite themed like the starwars archives on courscant. make the name of the site " The Archives" */

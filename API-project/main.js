import './style.css'

 const page1 = "https://swapi.dev/api/people"
 const page2 = "https://swapi.dev/api/people/?page=2"
 const page3 = "https://swapi.dev/api/people/?page=3"
 const page4 = "https://swapi.dev/api/people/?page=4"
 const page5 = "https://swapi.dev/api/people/?page=5"
 const page6 = "https://swapi.dev/api/people/?page=6"
 const page7 = "https://swapi.dev/api/people/?page7"
 const page8 = "https://swapi.dev/api/people/?page=8"
 const pageMAX = "https://swapi.dev/api/people/?page=9"
/* mAYBE i cant make all the urls into a list and iterate over it with the async funstion to load all the data at once? */


const DOMselectors = {
  inside: document.getElementById("inside")
}


const DOMselectors2 = {
  Switch1: document.getElementById("page1"),
  Switch2: document.getElementById("page2"),
  Switch3: document.getElementById("page3"),
  Switch4: document.getElementById("page4"),
  Switch5: document.getElementById("page5"),
  Switch6: document.getElementById("page6"),
  Switch7: document.getElementById("page7"),
  Switch8: document.getElementById("page8"),
  Switch9: document.getElementById("page9"),

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
      <div id="CardFormant" class="CardTemplate">-
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

 getdata(page6)


DOMselectors2.forEach((Selector) => {Selector.addEventListener("click" , Pagego) })
function Pagego() {
  console.log("please wokr?")
}








/*  i might poop my self if the code doesnt work*/



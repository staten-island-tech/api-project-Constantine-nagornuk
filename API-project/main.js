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

 getdata(page6)



DOMselectors2.S2.addEventListener("click" ,poop )
function poop(){DOMselectors.inside.innerHTML = ''; getdata(page5)









 
/*  i am poop my self if the code doesnt work*/

/* Make the wesbite themed like the starwars archives on courscant. make the name of the site " The Archives" */

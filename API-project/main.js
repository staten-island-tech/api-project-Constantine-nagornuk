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
    console.log(data)
    data.results.forEach((card)=>  {
      let x = card.name
      let y = card.birth_year
      let z = card.eye_color
      let t = card.gender
      let pp = card.mass
      let poop = card.skin_color
      let Th = card . height
      const infoholder =  `
      <div id="CardFormant" class="CardTemplate">
        <h2 class="personname">${x}</h2>
        <p>${z}</p>
        <p>${t}</p>
        <p>Mass</p>
        <p>${y}</p>
        <p>${pp} KG</p>
    
    </div> 
`
DOMselectors.inside.insertAdjacentHTML('beforeend' , infoholder)
    })
   } 
    catch (error){
       error } } 

 getdata(page1)


let pagenumber = 1
function loadpages() {
  if(pagenumber === 1) {
    DOMselectors.inside.innerHTML = '';
    getdata(page1)}
    else if (pagenumber === 2) { 
      DOMselectors.inside.innerHTML = '';
      getdata(page2)}
      else if (pagenumber === 3) { 
        DOMselectors.inside.innerHTML = '';
        getdata(page3)} 
        else if (pagenumber === 4) { 
          DOMselectors.inside.innerHTML = '';
          getdata(page4)}
          else if (pagenumber === 5) { 
            DOMselectors.inside.innerHTML = '';
            getdata(page5)}
            else if (pagenumber === 6) { 
              DOMselectors.inside.innerHTML = '';
              getdata(page6)}
              else if (pagenumber === 7) { 
                DOMselectors.inside.innerHTML = '';
                getdata(page7)}
                else if (pagenumber === 8) { 
                  DOMselectors.inside.innerHTML = '';
                  getdata(page8)}
                  else if (pagenumber === 9) { 
                    DOMselectors.inside.innerHTML = '';
                    getdata(page9)}
                  }
                   



DOMselectors2.S1.addEventListener("click" , poop1)
function poop1(){
console.log(--pagenumber)
if(pagenumber < 1){
  pagenumber = 1
}
loadpages()
}

DOMselectors2.S2.addEventListener("click" ,poop )
function poop(){
console.log(++pagenumber)
if(pagenumber > 9) {
  pagenumber = 9
}
loadpages()
}











 

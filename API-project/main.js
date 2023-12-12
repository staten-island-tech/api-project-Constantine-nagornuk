import './style.css'

 const page1 = "https://swapi.dev/api/people"
 const page2 = "https://swapi.dev/api/people/?page=2"
 const page3 = "https://swapi.dev/api/people/?page=3"

/* mAYBE i cant make all the urls into a list and iterate over it with the async funstion to load all the data at once? */


const DOMselectors = {
  inside: document.getElementById("inside")
}
  async function getdata(url) {
     try {
       const repsonce = await fetch(url); 
       if (repsonce.status != 200) {
         throw new Error(repsonce.statusText) 
        } 
    const data = await repsonce.json()
    

   data.results.forEach((info) => console.log(info))
        
    data.results.forEach((card)=>  {
      let x = card.name
      let y = card.birth_year
      let z = card.eye_color
      console.log(x,y,z)
    })

   } 
    catch (error){
       error } } 

 getdata(page3)
 





/* 
 <div id="CardFormant" class="CardTemplate">
      
        <h2>Name</h2>
        <p>Gender</p>
        <p>Height</p>
        <p>Mass</p>
        <p>Birth year</p>
    
    </div> */









/*  i might poop my self if the code doesnt work*/



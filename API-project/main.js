import './style.css'

 const page1 = "https://swapi.dev/api/people"
 const page2 = "https://swapi.dev/api/people/?page=2"
 const page3 = "https://swapi.dev/api/people/?page=3"

/* mAYBE i cant make all the urls into a list and iterate over it with the async funstion to load all the data at once? */




  async function getdata(url) {
     try {
       const repsonce = await fetch(url); 
       if (repsonce.status != 200) {
         throw new Error(repsonce.statusText) 
        } 
    const data = await repsonce.json()
    
    data.results.forEach((info) => console.log(info))
    data.results.forEach((name1) => console.log(name1.name))
   
   } 
    catch (error){
       error } } 

 getdata(page3)










/*  i might poop my self if the code doesnt work*/



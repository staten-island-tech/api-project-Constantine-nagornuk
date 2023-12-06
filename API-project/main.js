import './style.css'

 const url = "https://swapi.dev/api/people"
  async function getdata(url) {
     try {
       const repsonce = await fetch(url); 
       if (repsonce.status != 200) {
         throw new Error(repsonce.statusText) 
        } 
    const data = await repsonce.json()
    console.log(data)
    const poop = data.name
    console.log(poop)
   } 
    catch (error){
       error } } 

const poopy = getdata(url)








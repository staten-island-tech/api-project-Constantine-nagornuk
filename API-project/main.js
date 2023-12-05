import './style.css'

 const url = "http https://swapi.dev/api/people/"
  async function getdata(url) {
     try {
       const repsonce = await fetch(url); 
       console.log(repsonce) 
       if (repsonce.status != 200) {
         throw new Error(repsonce.statusText) 
        } 
    const data = await repsonce.json() } 
    catch (error){
       console.log(error) } } 

getdata(url.count)

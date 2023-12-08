import './style.css'

 const url = "https://swapi.dev/api/people"
  async function getdata(url) {
     try {
       const repsonce = await fetch(url); 
       if (repsonce.status != 200) {
         throw new Error(repsonce.statusText) 
        } 
    const data = await repsonce.json()
    data.results.forEach((info) => console.log(info))
    console.log("1")
    data.results.name.forEach((name) => console.log(name))
    console.log("2")
   } 
    catch (error){
       error } } 

 getdata(url)
 console.log("WHERE IS MY VONSOPLE")








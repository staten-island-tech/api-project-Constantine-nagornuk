import './style.css'

const url = "https://swapi.dev/api/people"

async function getdata(url) {

  try {
    const repsonce = await fetch(url)
    console.log(repsonce)
    if (repsonce.status != 200) {
      throw new Error(repsonce.statusText)
    }
    const data = await repsonce.json()
    

  }
  catch (error){
    document.querySelector("h1").textContent = error

  }

   
  
}

getdata(url)



console.log("HHEHEHHE")
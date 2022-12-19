
async function fetcher(){
  try {
    const response=await fetch('http://localhost:5000/data',{
        method: 'GET',
     
     
        headers: {
            accept: 'application/json',
         
        },
    })
    
    const data =await response.json()
    console.log(data);
    
  } catch (error) {
   console.log(error); 
  }

}
fetcher()
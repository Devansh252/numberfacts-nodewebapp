/* Global Variables */

// Create a new date instance dynamically with JS
window.onload = function() {
    let num = document.getElementById('zip');
    let generate = document.getElementById('generate');
  
    let temp = document.getElementById('temp');
    let content; 

    
    const BASE_URL = 'http://numbersapi.com/';
    
    generate.onclick = async function getWeatherData(){
       let number = num.value;
       const url = `http://numbersapi.com/${number}`;
        try {
            let content = await fetch(url).then(res => res.text())
            console.log(content);
            temp.innerHTML = content;
            
            await addApiData(content)
        }
        catch(e) {
            console.log(e);
        }
    }
    
    async function addApiData(data){
        console.log(data)
        date.innerHTML = content;
        console.log(data)
        
            

            
            

            makeServerRequest(data);
        }

    

    async function makeServerRequest(data) {
        await fetch('/addData', {
            method: 'post', 
    
        }).then(fetchData)
    }
  
    
    async function fetchData(){
        return fetch('/getData')
            .then(updateUI)
    }

    async function updateUI(res) {
        res.text().then(function(res){
            //console.log(content) i Already updated :) just for check;
           
           
        })
     }
}
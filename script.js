// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form"); 
   form.addEventListener("submit", function(event){  
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");  
      let faultyItems = document.querySelector("#faultyItems");
      let launchStatus = document.querySelector("#launchStatus");   
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus"); 
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");      
      } 

      else if(!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Make sure to enter valid information for each field");        
      }  
      
      else {
         if((fuelLevel.value < 10000) && (cargoMass.value > 10000)){
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass high enough for launch`;           
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }
         else if((cargoMass.value) > 10000){
           faultyItems.style.visibility = "visible";
           pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
           copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
           fuelStatus.innerHTML = `Fuel level high enough for launch`;
           cargoStatus.innerHTML = `Cargo mass high enough for launch`;           
           launchStatus.innerHTML = "Shuttle not ready for launch";
           launchStatus.style.color = "red";
         }
         else if((fuelLevel.value) < 10000){           
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `${copilotName.value} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level  too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;           
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }
         else{
           faultyItems.style.visibility = "hidden";
           launchStatus.innerHTML = "Shuttle is ready for launch";
           launchStatus.style.color = "green"
         }      
      } 
      //event.preventDefault(); 
   });

});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
  response.json().then(function(json){
    let missionTarget = document.getElementById("missionTarget");
    
       missionTarget.innerHTML = ` <h2>Mission Destination</h2>
       <ol>
          <li>Name: ${json[3].name}</li>
          <li>Diameter: ${json[3].diameter}</li>
          <li>Star: ${json[3].star}</li>
          <li>Distance from Earth: ${json[3].distance}</li>
          <li>Number of Moons: ${json[3].moons}</li>
       </ol>
       <img src="${json[3].image}">`;
    
   });

});

let findInPut= document.getElementById("find")
let currentLocation=document.querySelectorAll(".currentLocation");
let currentTemp=document.querySelectorAll(".currentTemp");
let currentIcon=document.querySelectorAll(".currentIcon");
let dayNight=document.querySelector(".dayNight");
let temp ;
let myHttp = new XMLHttpRequest();
// array months
let months=["jan","feb","march","april","may","june","july","august","sebtember","october","novomber","dec"]

let allLocation;

myHttp.open("GET","https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=$lon&days=3");

myHttp.send();

myHttp.addEventListener("readystatechange", function(){

    if(myHttp.readyState==4 && myHttp.status==200)
    {
       allLocation=JSON.parse(myHttp.response);
       allLocation.forecast.forecastday.map((forecast,index)=>{
        temp =   forecast.day.avgtemp_c
        currentTemp[index].innerHTML = temp;
       })
       display()
    }
})


function display()
{
     checkInputs();
     for(let i=0 ;i<currentLocation.length;i++)
     {
         currentLocation[i].innerHTML=allLocation.location.name
         currentIcon[i].setAttribute("src","http:"+allLocation.current.condition.icon);
     }
      
     let currentDate= document.querySelectorAll(".current-date")
     for (let i = 0; i < allLocation.forecast.forecastday.length; i++) {
         currentDate[i].innerHTML = allLocation.forecast.forecastday[i].date;
   }


     currentTemp.innerHTML=allLocation.current.temp_c;
     var d=new Date();
     console.log(months[d.getMonth()]);
     d.getMonth;
};


function checkInputs(){

    if(find.value != "" )
    {
         search();
       return true;

    }
    else
    {
        return false ;
    }

};


function search(term)
{
    
myHttp.open("GET",`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${term}&days=3`);

myHttp.send();

myHttp.addEventListener("readystatechange", function(){

    if(myHttp.readyState==4 && myHttp.status==200)
    {
       allLocation=JSON.parse(myHttp.response);
       console.log(allLocation)
       
    }
});
  
};


function clearForm (){

    find.value ="";
};



/* 
myHttp.open("GET" ,"https://api.openweathermap.org/data/2.5/");
     "https://api.openweathermap.org/data/2.5/"

*/


/*
function displayTwo(){

    let cartona =``;
    for (var i=1;i < allLocation.length ;i++)
    {
       cartona+= `
        
       <div class=" col-md-4 weather-day mb-3 ">
       <div class=" d-flex justify-content-between align-items-center">
        <p><span class="current-day"></span></p>   
        <p><span class="current-date"> </span> </p>   
       </div>

       <div class=" weather-info py-5">
        <h4 class=" py-3 currentLocation "></h4>
        <h2> <span class="currentTemp"> <i class="far fa-moon"></i></span><img class="currentIcon" src=" " alt=""></h2>  
        <span class=" clear">Clear</span>
        <h4></h3><span><i class="fas fa-umbrella"></i></span> 20%</h4>
        <span><i class="fas fa-snowflake pl-4"></i> 18km/h</span>
        <span><i class="fas fa-tachometer-alt pl-4"></i> East</span>
       </div>

      
     </div>

     
     <div class=" col-md-4 weather-day bg-dark mb-3">
     <div class=" d-flex justify-content-between align-items-center">
      <p><span class="current-day"></span></p>   
      <p><span class="current-date"> </span> </p>   
     </div>

     <div class=" weather-info py-5">
      <h4 class=" py-3 currentLocation "></h4>
      <h2> <span class="currentTemp"> <i class="far fa-moon"></i></span><img class="currentIcon" src=" " alt=""></h2>  
      <span class=" clear">Clear</span>
      <h4></h3><span><i class="fas fa-umbrella"></i></span> 20%</h4>
      <span><i class="fas fa-snowflake pl-4"></i> 18km/h</span>
      <span><i class="fas fa-tachometer-alt pl-4"></i> East</span>
     </div>

    
   </div> `;
    }

    document.getElementById("row-data").innerHTML= cartona;
};
*/
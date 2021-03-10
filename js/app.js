'use strict '























let table = document.getElementById('mytable')
let workingHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];


function CookiesTable (branchlocation,minNumofcustomers,maxNumofcustomers,averagecookiespercustomer,totalcookiespairhours,totalCookiesPerDayattribute)
{

this.branchlocation=branchlocation;
this.minNumofcustomers=minNumofcustomers;
this.maxNumofcustomers=maxNumofcustomers;
this.averagecookiespercustomer=averagecookiespercustomer;
this.totalCookiesPerDayattribute=0;
this.totalcookiespairhours=[];



}

CookiesTable.prototype.generatenumberofcustomers=function()
{
  let min = Math.floor(this.minNumofcustomers);
  let max = Math.floor(this.maxNumofcustomers);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

CookiesTable.prototype.generatenumofcookies =function()
{
  let numCookies= this.averagecookiespercustomer * this.generatenumberofcustomers();
  return   numCookies;
}

CookiesTable.prototype.firstRowintable = function()
{ 
  let tRow=document.createElement('tr');
  let tHead=document.createElement('td');
  tHead.innerText=this.branchlocation;
  tRow.appendChild(tHead);

  for(let i =0;i<workingHours.length;i++)

{
  let numCookies= Math.ceil( this.generatenumofcookies());
  let tabledata=document.createElement('td');
  tabledata.textContent=numCookies;
  tRow.appendChild(tabledata);
  this.totalCookiesPerDayattribute+=numCookies;

}

let total =  document.createElement('td');
total.textContent = this.totalCookiesPerDayattribute;
tRow.appendChild(total);
table.append(tRow);
}





let Seattle=new CookiesTable('seattle' , 23,65,6.3);
let tokyo=new CookiesTable('tokyo',3,24,1.2);    
let dubai=new CookiesTable('Dubai' , 11,38,3.7 );
let paris =new CookiesTable('Paris',20,38,2.3);
let lima =new CookiesTable('Lima',23,65,6.3);
let locationsList=[Seattle,tokyo,dubai,paris,lima];



function theTableHeader (){
  let tHead = document.createElement('thead');
  let empty = document.createElement("th");
  empty.textContent = ' ';
tHead.appendChild(empty);
  for(let i =0 ; i < workingHours.length ; i++){
      let th = document.createElement('th');
      th.textContent = workingHours[i];
      tHead.appendChild(th);
  }
  let total = document.createElement('th');
  total.textContent = 'Daily Location Total';
  tHead.appendChild(total);

  table.appendChild(tHead);
 
}

theTableHeader();

Seattle.firstRowintable();
tokyo.firstRowintable();
dubai.firstRowintable();
paris.firstRowintable();
lima.firstRowintable();

function makingFooter () {
  let tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
      tableRow.appendChild(tableHeader);
     let totalofTotal = 0;
    for ( let i = 0 ; i < workingHours.length ; i++) {
    let hourlyTotal = 0;
    for ( let j = 0 ; j < location[j] ; j++) {
      hourlyTotal+=hourlyTotal;

  }
    tableHeader = document.createElement('th');
    tableHeader.textContent=hourlyTotal;
    tableRow.appendChild(tableHeader);
}
tableHeader = document.createElement('th');
tableHeader.textContent = totalofTotal;
tableRow.appendChild(tableHeader);
tableHeader.appendChild(tableRow);

}
(function renderTable() {
 
 for(let i = 0; i < location.length; i++){
   locations[i].theTableHeader();
 }
 makingFooter();
})();





















/*
let myMain = document.getElementById('demo');

let workingHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];

let Seattle={
// first requirment
branchlocation:'seattle',
minNumofcustomers:23,
maxNumofcustomers:65,
averagecookiespercustomer:6.3,
totalcookiespairhours:[],
totalCookiesPerDayattribute:0,

// second requirment :  i should find number of cookies : using other attributes 

generatenumberofcustomers:function()
{ 

  let min = Math.floor(this.minNumofcustomers);
  let max = Math.floor(this.maxNumofcustomers);
  return Math.floor(Math.random() * (max - min + 1)) + min;
   
},

generatenumofcookies:function()
{
 return this.averagecookiespercustomer * this.generatenumberofcustomers();
},

// fourth requirment : now we should fill the empty array(totalCookiesPairhours) of all cookies we should generate (14 random cookies)



 totalcookiesinhours: function()  {

  

 for (let i=0; i < workingHours.length; i++){
  let cookies = Math.floor(this.generatenumofcookies());
  console.log(cookies);
   this.totalcookiespairhours.push(cookies);
  //  sum of these hourly totals
  this.totalCookiesPerDayattribute+=cookies;
}

  
  },
  render : function(){

    this.totalcookiesinhours();
    let unorderdList = document.createElement('ul')
    let locationName = document.createElement('h2');
    locationName.innerText=this.branchlocation;
   unorderdList.appendChild(locationName);
   for(let i=0;i<workingHours.length;i++ )
   {
     let listElemnt=document.createElement('li');
     listElemnt.innerText=workingHours[i] + '  ' +this.totalcookiespairhours[i] + 'cookies' ;

     unorderdList.appendChild(listElemnt);
     myMain.appendChild(unorderdList);

   }
   
   let totalcookes= document.createElement('li');
   unorderdList.appendChild(totalcookes);
   totalcookes.innerText='total '+ this.totalCookiesPerDayattribute + 'cookies'
     
        
  }
 

}

Seattle.render();
console.log(Seattle.totalcookiesinhour);

//--------------------------------------------------------------

let Tokyo={
  // first requirment
  branchlocation:'Tokyo',
  minNumofcustomers:3,
  maxNumofcustomers:24,
  averagecookiespercustomer:12,
  totalcookiespairhours:[],
  totalCookiesPerDayattribute:0,
  
  // second requirment :  i should find number of cookies : using other attributes 
  
  generatenumberofcustomers:function()
  { 
  
    let min = Math.floor(this.minNumofcustomers);
    let max = Math.floor(this.maxNumofcustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
     
  },
  
  generatenumofcookies:function()
  {
   return this.averagecookiespercustomer * this.generatenumberofcustomers();
  },
  
  // fourth requirment : now we should fill the empty array(totalCookiesPairhours) of all cookies we should generate (14 random cookies)
  
  
  
   totalcookiesinhours: function()  {
  
    
  
   for (let i=0; i < workingHours.length; i++){
    let cookies = Math.floor(this.generatenumofcookies());
    console.log(cookies);
     this.totalcookiespairhours.push(cookies);
    //  sum of these hourly totals
    this.totalCookiesPerDayattribute+=cookies;
  }
  
    
    },
    render : function(){
  
      this.totalcookiesinhours();
      let unorderdList = document.createElement('ul')
      let locationName = document.createElement('h2');
      locationName.innerText=this.branchlocation;
     unorderdList.appendChild(locationName);
     for(let i=0;i<workingHours.length;i++ )
     {
       let listElemnt=document.createElement('li');
       listElemnt.innerText=workingHours[i] + '  ' +this.totalcookiespairhours[i] + 'cookies' ;
  
       unorderdList.appendChild(listElemnt);
       myMain.appendChild(unorderdList);
  
     }
     
     let totalcookes= document.createElement('li');
     unorderdList.appendChild(totalcookes);
     totalcookes.innerText='total '+ this.totalCookiesPerDayattribute + 'cookies'
       
          
    }
   
  
  }
  
  Tokyo.render();
  console.log(Tokyo.totalcookiesinhour);

//--------------------------------------------------------

  let Dubai={
    // first requirment
    branchlocation:'Dubai',
    minNumofcustomers:11,
    maxNumofcustomers:38,
    averagecookiespercustomer:3.7,
    totalcookiespairhours:[],
    totalCookiesPerDayattribute:0,
    
    // second requirment :  i should find number of cookies : using other attributes 
    
    generatenumberofcustomers:function()
    { 
    
      let min = Math.floor(this.minNumofcustomers);
      let max = Math.floor(this.maxNumofcustomers);
      return Math.floor(Math.random() * (max - min + 1)) + min;
       
    },
    
    generatenumofcookies:function()
    {
     return this.averagecookiespercustomer * this.generatenumberofcustomers();
    },
    
    // fourth requirment : now we should fill the empty array(totalCookiesPairhours) of all cookies we should generate (14 random cookies)
    
    
    
     totalcookiesinhours: function()  {
    
      
    
     for (let i=0; i < workingHours.length; i++){
      let cookies = Math.floor(this.generatenumofcookies());
      console.log(cookies);
       this.totalcookiespairhours.push(cookies);
      //  sum of these hourly totals
      this.totalCookiesPerDayattribute+=cookies;
    }
    
      
      },
      render : function(){
    
        this.totalcookiesinhours();
        let unorderdList = document.createElement('ul')
        let locationName = document.createElement('h2');
        locationName.innerText=this.branchlocation;
       unorderdList.appendChild(locationName);
       for(let i=0;i<workingHours.length;i++ )
       {
         let listElemnt=document.createElement('li');
         listElemnt.innerText=workingHours[i] + '  ' +this.totalcookiespairhours[i] + 'cookies' ;
    
         unorderdList.appendChild(listElemnt);
         myMain.appendChild(unorderdList);
    
       }
       
       let totalcookes= document.createElement('li');
       unorderdList.appendChild(totalcookes);
       totalcookes.innerText='total '+ this.totalCookiesPerDayattribute + 'cookies'
         
            
      }
     
    
    }
    
    Dubai.render();
    console.log(Dubai.totalcookiesinhour);

    //----------------------------------------------------------------

    
    let Paris={
      // first requirment
      branchlocation:'Paris',
      minNumofcustomers:20,
      maxNumofcustomers:38,
      averagecookiespercustomer:2.3,
      totalcookiespairhours:[],
      totalCookiesPerDayattribute:0,
      
      // second requirment :  i should find number of cookies : using other attributes 
      
      generatenumberofcustomers:function()
      { 
      
        let min = Math.floor(this.minNumofcustomers);
        let max = Math.floor(this.maxNumofcustomers);
        return Math.floor(Math.random() * (max - min + 1)) + min;
         
      },
      
      generatenumofcookies:function()
      {
       return this.averagecookiespercustomer * this.generatenumberofcustomers();
      },
      
      // fourth requirment : now we should fill the empty array(totalCookiesPairhours) of all cookies we should generate (14 random cookies)
      
      
      
       totalcookiesinhours: function()  {
      
        
      
       for (let i=0; i < workingHours.length; i++){
        let cookies = Math.floor(this.generatenumofcookies());
        console.log(cookies);
         this.totalcookiespairhours.push(cookies);
        //  sum of these hourly totals
        this.totalCookiesPerDayattribute+=cookies;
      }
      
        
        },
        render : function(){
      
          this.totalcookiesinhours();
          let unorderdList = document.createElement('ul')
          let locationName = document.createElement('h2');
          locationName.innerText=this.branchlocation;
         unorderdList.appendChild(locationName);
         for(let i=0;i<workingHours.length;i++ )
         {
           let listElemnt=document.createElement('li');
           listElemnt.innerText=workingHours[i] + '  ' +this.totalcookiespairhours[i] + 'cookies' ;
      
           unorderdList.appendChild(listElemnt);
           myMain.appendChild(unorderdList);
      
         }
         
         let totalcookes= document.createElement('li');
         unorderdList.appendChild(totalcookes);
         totalcookes.innerText='total '+ this.totalCookiesPerDayattribute + 'cookies'
           
              
        }
       
      
      }
      
      Paris.render();
      console.log(Paris.totalcookiesinhour);

      //---------------------------------------------------------------------

      let Lima={
        // first requirment
        branchlocation:'Lima',
        minNumofcustomers:2,
        maxNumofcustomers:16,
        averagecookiespercustomer:4.6,
        totalcookiespairhours:[],
        totalCookiesPerDayattribute:0,
        
        // second requirment :  i should find number of cookies : using other attributes 
        
        generatenumberofcustomers:function()
        { 
        
          let min = Math.floor(this.minNumofcustomers);
          let max = Math.floor(this.maxNumofcustomers);
          return Math.floor(Math.random() * (max - min + 1)) + min;
           
        },
        
        generatenumofcookies:function()
        {
         return this.averagecookiespercustomer * this.generatenumberofcustomers();
        },
        
        // fourth requirment : now we should fill the empty array(totalCookiesPairhours) of all cookies we should generate (14 random cookies)
        
        
        
         totalcookiesinhours: function()  {
        
          
        
         for (let i=0; i < workingHours.length; i++){
          let cookies = Math.floor(this.generatenumofcookies());
          console.log(cookies);
           this.totalcookiespairhours.push(cookies);
          //  sum of these hourly totals
          this.totalCookiesPerDayattribute+=cookies;
        }
        
          
          },
          render : function(){
        
            this.totalcookiesinhours();
            let unorderdList = document.createElement('ul')
            let locationName = document.createElement('h2');
            locationName.innerText=this.branchlocation;
           unorderdList.appendChild(locationName);
           for(let i=0;i<workingHours.length;i++ )
           {
             let listElemnt=document.createElement('li');
             listElemnt.innerText=workingHours[i] + '  ' +this.totalcookiespairhours[i] + 'cookies' ;
        
             unorderdList.appendChild(listElemnt);
             myMain.appendChild(unorderdList);
        
           }
           
           let totalcookes= document.createElement('li');
           unorderdList.appendChild(totalcookes);
           totalcookes.innerText='total '+ this.totalCookiesPerDayattribute + 'cookies'
             
                
          }
         
        
        }
        
        Lima.render();
        console.log(Lima.totalcookiesinhour);*/
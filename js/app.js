'use strict '


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
        console.log(Lima.totalcookiesinhour);
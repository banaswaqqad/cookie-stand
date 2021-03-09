'use strict '



let ourMain=document.getElementById('demo');

 let Seattle={
 minCustomerinhour :23,
 maxCustomerinhour :65,
 avgofcookiesnumberforeachcustomer :6.3,
 numberofcustomers :0,
 workingHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm' ],
 
gethorsrandom : function(){ return Seattle.workingHours[0] + '  ' + '  '+ Seattle.numberofcustomers   },
generatearandomnumberofcustomersperhour : function(min,max){return Math.floor(Math.random()*(max-min-1)+min)  },

cookiespurchasedforeachhour : function(){this.avgofcookiesnumberforeachcustomer * this.numberofcustomers }


};
Seattle.numberofcustomers=Seattle.generatearandomnumberofcustomersperhour(Seattle.minCustomerinhour,Seattle.maxCustomerinhour);
console.log(Seattle.numberofcustomers);


let myunorderlist = document.createElement('ul');

let myli = document.createElement('li');


myli.innerText=Seattle.gethorsrandom() ;
myunorderlist.appendChild(myli);
ourMain.appendChild(myunorderlist);



let Tokyo = {
  minCustomerinhour:3,
  maxCustomerinhour:24,
  avgofcookiesnumberforeachcustomer:1.2,
  numberofcustomers :0,

  generatearandomnumberofcustomersperhour : function(min,max){return Math.floor(Math.random()*(max-min-1)+min)  },
  cookiespurchasedforeachhour : function(){this.avgofcookiesnumberforeachcustomer * this.numberofcustomers }

};

Tokyo.numberofcustomers=Tokyo.generatearandomnumberofcustomersperhour(Tokyo.minCustomerinhour,Tokyo.maxCustomerinhour);
console.log(Tokyo.numberofcustomers);



let Dubai = {
  minCustomerinhour:11,
  maxCustomerinhour:38,
  avgofcookiesnumberforeachcustomer:3.7,
  numberofcustomers :0,
  generatearandomnumberofcustomersperhour : function(min,max){return Math.floor(Math.random()*(max-min-1)+min)  },
  cookiespurchasedforeachhour : function(){this.avgofcookiesnumberforeachcustomer * this.numberofcustomers }

};

  Dubai.numberofcustomers = Dubai.generatearandomnumberofcustomersperhour(Dubai. minCustomerinhour, Dubai. maxCustomerinhour);
  console.log(Dubai.numberofcustomers);

let Paris = {
  minCustomerinhour:20,
  maxCustomerinhour:38,
  avgofcookiesnumberforeachcustomer:2.3,
  numberofcustomers :0,
  generatearandomnumberofcustomersperhour : function(min,max){return Math.floor(Math.random()*(max-min-1)+min)  },
  cookiespurchasedforeachhour : function(){this.avgofcookiesnumberforeachcustomer * this.numberofcustomers }



};


Paris.numberofcustomers=Paris.generatearandomnumberofcustomersperhour( Paris. minCustomerinhour,  Paris. maxCustomerinhour);
console.log(Paris.numberofcustomers);

let lima ={
  minCustomerinhour:2,
  maxCustomerinhour:16,
  avgofcookiesnumberforeachcustomer:4.6,
  numberofcustomers :0,

  generatearandomnumberofcustomersperhour : function(min,max){return Math.floor(Math.random()*(max-min-1)+min)  },
  cookiespurchasedforeachhour : function(){this.avgofcookiesnumberforeachcustomer * this.numberofcustomers }
  

};
lima.numberofcustomers=lima. generatearandomnumberofcustomersperhour(lima.minCustomerinhour,lima.maxCustomerinhour);
console.log(lima.numberofcustomers);




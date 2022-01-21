/***************  1) JSON iterate Loops  **************/

/***************  For in loop:  **************/

var employeeName = {
    name : "Kalai",
    age : 23,
    year: 1998,
    place : "Coimbatore"
};

for(var i in employeeName){
    console.log(i,employeeName[i]);
}

/*************** for loop : **************/

var cars = [
    {
        make : "Hondai",
        model : "Accent",
        year: 2009,
        color : "white"
    },
    {
        make : "skoda",
        model : "new model2",
        year: 2012,
        color : "black"
    }
]

for (i = 0; i < cars.length; i++){
    if(cars[i].year < 2010){
        console.log(cars[i].make +","+ cars[i].model);
    }
}


/******* for of loop:******/

const addNumbers = [9, 8, 7];

for (let value of addNumbers) {
  value += 1;
  console.log(value);
}
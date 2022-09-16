const aCar = {
    owner : 'Joe Bloggs',
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc: '1800'
    },
    registration : {
        year: '201',
        countyCode: 'WD',
        number: '1058'
    }
  };

  aCar.mileage = '10000' ;
  aCar.colour = {
    exterior : 'red',
    interior : {
        texture : 'leather',
        shade : 'cream'
    }
  } ;
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make + "." + "The registration of the car is " + aCar.registration.year + "-" + aCar.registration.countyCode + "-" + aCar.registration.number + ".")
  console.log("It's a " + aCar.colour.exterior + " car, " + aCar.mileage + " mileage, with a " + aCar.colour.interior.shade + " " + aCar.colour.interior.texture + " interior.")
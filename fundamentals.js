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
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make + "." + "The registration of the car is " + aCar.registration.year + "-" + aCar.registration.countyCode + "-" + aCar.registration.number + ".")
  
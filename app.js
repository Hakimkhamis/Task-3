const arrylist = [{
    "data": [{
        
        "value": "Tape Measure"
      },
  
      {
        id: 2,
        "value": "Lawn Mower"
      },

      {
        id: 3,
        "value": "Lawn Mower"
      },

      {
        id: 4,
        "value": "Lawn Mower"
      }
    ],
    "name": "Garden Todo",
  }]
  
  
  const res = arrylist.map(o => {
    o.data = o.data.map(d => ({ ...d,
      id: randomId(),
     
    })
   
    );
  
    return o;
  })
  
  console.log(res)
  
  function randomId() {
    return Math.random()
  }
  

  


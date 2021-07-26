
export const toOrder = (data, order) => {
  
  let showOrder = data.sort(function(a,z){
    if(a.name < z.name) {
      return order=="A-Z"? -1:1
    }
    if(a.name > z.name) {
      return order=="A-Z"? 1:-1;
    }
  })
  return showOrder
  
}

export const getStatus = (data, targetValue) => {

  return data.filter((item) => item.status === targetValue );
  
  } 

export const getGender = (data, targetValue) => {

  return data.filter((item) => item.gender === targetValue );
    
  } 

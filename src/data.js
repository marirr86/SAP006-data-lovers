
export const toOrder = (data, order) => {
  
  let showOrder = data.sort(function(a,z){
    if(a.name < z.name) {
      return order==="A-Z"? -1:1;
    }
    if(a.name > z.name) {
      return order==="Z-A"? 1:-1;
    }
  })
  return showOrder
  
}

/*export const toDisorder = (data) => {

  let showDisorder = data.sort(function(a,z){
    if(a.name < z.name) {
      return 1;
    }
    if(a.name > z.name) {
      return -1;
    }
  })
  return showDisorder
}*/


/*export const sortData = (data, order) => {
  if (order === "aToZ") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1)
  } else {
    return data.sort((a, z) => a.name > z.name ? -1 : 1)
  }
};*/
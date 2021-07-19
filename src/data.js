export const dataRM = {}

/*export const sortData = (data, order) => {
  if (order === "aToZ") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1)
  } else {
    return data.sort((a, z) => a.name > z.name ? -1 : 1)
  }
};*/

export const getOrder = (data) => {
  
  let showOrder = data.sort(function(a,z){
    if(a.name < z.name) {
      return -1;
    }
    if(a.name > z.name) {
      return 1;
    }
  })
  return showOrder
  
}

export const getDisorder = (data) => {

  let showDisorder = data.sort(function(a,z){
    if(a.name < z.name) {
      return 1;
    }
    if(a.name > z.name) {
      return -1;
    }
  })
  return showDisorder
}

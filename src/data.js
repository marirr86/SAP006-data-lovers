export const ordering = (arr, e) => {
  const element = [...arr];
  if (e === "A-Z") {
      return element.sort((a, b) => a.name > b.name ? 1 : -1);
  } else if (e === "z-a") {
      return element.sort((a, b) => a.name > b.name ? -1 : 1);
  }
}

export const getSpecies = (data, target) => {
  return data.filter((item) => item.species === target );

  }

export const getStatus = (data, target) => {
  return data.filter((item) => item.status === target );

  }

export const getGender = (data, target) => {
  return data.filter((item) => item.gender === target );

  }

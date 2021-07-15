export const anotherExample = () => {
  return 'OMG';
};

export const dataRM = {}

export const sortData = (data, order) => {
  if (order === "A - Z") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1)
  } else {
    return data.sort((a, z) => a.name > z.name ? -1 : 1)
  }
};

export const countAverage = (array) => {
  if (!array) return
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

export const alphaOmega = (array) => {
  if (!array) return;
  return [array[0], array.at(-1)];
};

export const fill = (number, element) => {
  let array = [];
  for (let i = 0; i < number; i += 1) {
    array.push(element);
  }
  return array;
};

export const fromPairs = (array) => {
  if (!array) return;
  return array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc[value[0]] = value[1];
    }
    return acc;
  }, {});
};

export const intersection = (...arrays) => {
  if (!arrays[0]) return
  const result = arrays[0].filter((element) => {
    const indexOfElement = arrays[1].indexOf(element);
    if (indexOfElement >= 0) {
      return element;
    }
  });
  if (arrays.length > 2) {
    intersection(result, ...arrays.slice(2, arrays.length));
  }
  return Array.from(new Set(result));
};

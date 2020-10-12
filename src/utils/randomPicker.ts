export const pickRandomElement = (itemsArray: Array<any>) => {
  const randomIndex = Math.floor(Math.random() * itemsArray.length);
  const item = itemsArray[randomIndex];
  return { randomIndex, item };
};

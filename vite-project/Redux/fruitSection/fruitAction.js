export const BUY_FRUIT = "BUY_FRUIT";

export function buyFruit(fruitName) {
  return {
    type: BUY_FRUIT,
    payload: fruitName,
  };
}
export default buyFruit;

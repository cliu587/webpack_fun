import sum from './sum';
// ASSUME a,b >= 0 :)
const multiply = (a,b) => {
  let total = 0;
  for (let i=0;i<b;i++) {
    total = sum(total,a)
  }
  return total;
};
export default multiply;

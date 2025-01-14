import { add } from "./math.js";

console.log("from logger"); 
export function logger(message) {
  console.log(`[Logger]: ${message}`);
}

export function logSum(a, b) {
  console.log("from logsum", a, b);
  const res = add(a, b);
  logger(`"Sum: ${res}"`);
}

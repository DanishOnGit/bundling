import { logger, logSum } from "./src/math_modules/logger.js";
import { add, subtract } from "./src/math_modules/math.js";

console.log("hmm", _.isEqual(2, 90));
export function calculateAndLog(a, b) {
  const sum = add(a, b);
  const difference = subtract(a, b);
  logger(`From calucalator Sum: ${sum}, Difference: ${difference}`);
  logSum(a, b);
}
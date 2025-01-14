import { logger } from "./modules/logger.js";
import { add, subtract } from "./modules/math.js";

export function calculateAndLog(a, b) {
  const sum = add(a, b);
  const difference = subtract(a, b);
  logger(`Sum: ${sum}, Difference: ${difference}`);
}

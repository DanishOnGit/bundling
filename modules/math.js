import { logger } from "./logger.js";

export function add(a, b) {
  logger(`Adding ${a} and ${b}`);
  return a + b;
}

export function subtract(a, b) {
  logger(`Subtracting ${a} and ${b}`);
  return a - b;
}

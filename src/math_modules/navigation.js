import { logger } from "./logger.js";

console.log("right",_.isEqual(2,90))  
export function navigateToHome() {
  logger("Navigating to home");
  window.location.href = "./home.html";
}

export function navigateToHello() {
  logger("Navigating to hello");
  window.location.href = "/pages/hello.html";
}

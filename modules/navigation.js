import { logger } from "./logger.js";

export function navigateToHome() {
  logger("Navigating to home");
  window.location.href = "./home.html";
}

export function navigateToHello() {
  logger("Navigating to hello");
  window.location.href = "/pages/hello.html";
}

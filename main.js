import { calculateAndLog } from "./calculator.js";
import { runCounter } from "./counter.js"
import { navigateToHello, navigateToHome } from "./modules/navigation.js"
import { highlightContainer } from "./modules/style.js";
console.log('main file')
document.getElementById('toHello').addEventListener('click', navigateToHello);
document.getElementById('toHome').addEventListener('click', navigateToHome);
calculateAndLog(5, 3);
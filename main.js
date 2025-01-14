import { calculateAndLog } from "./calculator.js";
import { navigateToHello, navigateToHome } from "./modules/navigation.js"
console.log('main file')
document.getElementById('toHello').addEventListener('click', navigateToHello);
document.getElementById('toHome').addEventListener('click', navigateToHome);
calculateAndLog(5, 3);
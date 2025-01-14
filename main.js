import { calculateAndLog } from "./calculator.js";
import { sorter } from "./math_modules/math.js";
import { navigateToHello, navigateToHome } from "./math_modules/navigation.js"
console.log('main file')
document.getElementById('toHello').addEventListener('click', navigateToHello);
document.getElementById('toHome').addEventListener('click', navigateToHome);

calculateAndLog(5, 3);
sorter([5, 3, 7, 4, 1]);

console.log(_.isEmpty({}),_.isEqual(2,2));
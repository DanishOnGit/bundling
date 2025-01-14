import { calculateAndLog } from "./calculator.js";
import _ from "lodash";
import './style.css';

console.log('main file')

calculateAndLog(5, 3);

console.log(_.isEmpty({}),_.isEqual(2,2));
import { toMorse, toAlpha } from "./translator.js";

// get the third and fourth index command as args
const input = process.argv.slice(2, 3).join(" ");
const option = process.argv.slice(3, 4).join(" ");

// raise error
if (!input || !option) {
    console.error("Usage: node src/index.js <type your text here> <option: [toMorse or toAlpha]>");
    process.exit(1);
}

// branching option
if (option.toLowerCase() === 'toalpha') {
    const result = toAlpha(input);
    console.log(result);
} else if (option.toLowerCase() === "tomorse") {
    const result = toMorse(input);
    console.log(result);
} else {
    console.error("Invalid translation option [toMorse/toAlpha]");
    process.exit(1);
}

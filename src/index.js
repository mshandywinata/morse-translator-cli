#!/usr/bin/env node
import { toMorse, toAlpha } from "./translator.js";

// get the third and fourth index command as args
const option = process.argv.slice(2, 3).join(" ");
const input = process.argv.slice(3).join(" ");

// raise error
if (!input || !option) {
    console.error("Usage: node src/index.js <input format: [--text or --morse]> <type your input here>");
    process.exit(1);
}

// branching option
if (option.toLowerCase() === "--encode") {
    const result = toAlpha(input);
    console.log(result);
} else if (option.toLowerCase() === "--decode") {
    const result = toMorse(input);
    console.log(result);
} else {
    console.error("Invalid translation option [--text or --morse]");
    process.exit(1);
}

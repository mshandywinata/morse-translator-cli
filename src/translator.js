import { morse } from "./dictionary.js";

// switch key to value and vice versa
function invertObj(obj) {
    const inverted = {};
    Object.keys(obj).forEach(key => {
        inverted[obj[key]] = key;
    });
    return inverted;
}

const alpha = invertObj(morse);

export function toMorse(alphaStr) {
    // create arr of chars
    const morseChars = alphaStr.toLowerCase().split("");

    // each char translated to morse char
    return morseChars.map((char) => {
        if (/[a-zA-Z0-9]/.test(char)) {
            const morseChar = morse[`${char}`];
            return morseChar;
        } else if (/[ ]/.test(char)) {
            // space delimiter
            const morseChar = '/';
            return morseChar;
        }
        return char = `[UNKNOWN: ${char}]`;
    }).join(" ");
}

export function toAlpha(morseStr) {
    const alphaChars = morseStr.split(" ");

    return alphaChars.map((char) => {
        // space delimiter
        if (char === '/') {
            const alphaChar = ' ';
            return alphaChar.toUpperCase();
        } else if (char in alpha) {
            // same as toMorse
            const alphaChar = alpha[`${char}`];
            return alphaChar.toUpperCase();
        }
        return char;
    }).join("");
}
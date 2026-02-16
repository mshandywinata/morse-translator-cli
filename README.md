# morse-translator-cli

A terminal-based utility for bidirectional translation between English text and Morse code.

> "SOS" → ... --- ...

## Overview
 
Node.js utility designed to practice Map data structures and $O(1)$ lookup algorithms. It features a programmatic "Inversion Strategy" to ensure a single source of truth for bidirectional translation.

## Usage

Translate text to Morse or vice-versa using CLI arguments.

Text to Morse:

```
node src/index.js --text "Hello World"
# Output: .... . .-.. .-.. --- / .-- --- .-. .-.. -..
```

Morse to Text:
```
node src/index.js --morse ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
# Output: HELLO WORLD
```

## Logic

1. Normalization: Trim whitespace and convert input to uppercase.
2. Inversion: Programmatically generate the reverse dictionary (Morse → Text) from the primary Map.
3. Tokenization: - Split text by characters (space) and words.
4. Split Morse by symbols (single space) and words (forward slash /).
5. Sanitization: Identify and flag unknown characters (e.g., @!) without interrupting the translation stream.
6. Assembly: Join translated tokens into a formatted string and output.

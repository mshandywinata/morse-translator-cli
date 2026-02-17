# morse-translator-cli

A terminal-based utility for bidirectional translation between English text and Morse code.

> "SOS" → ... --- ...

## Overview
 
Node.js utility designed to practice Map data structures and $O(1)$ lookup algorithms. It features a programmatic "Inversion Strategy" to ensure a single source of truth for bidirectional translation.

## Installation

```bash
git clone https://github.com/mshandywinata/morse-translator-cli.git
cd morse-translator-cli
npm link
```

## Usage

```bash
morse-translator --<flag> "<string>"
```

### Flags

| Flag | Description |
|---|---|
| `--encode` | Convert English text to Morse code |
| `--decode` | Convert Morse code to English text |

### Examples

```bash
morse-translator --encode "Hello World"
morse-translator --decode ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
```

### Sample Output

```
Encode:
  Hello World → .... . .-.. .-.. --- / .-- --- .-. .-.. -..

Decode:
  .... . .-.. .-.. --- / .-- --- .-. .-.. -.. → HELLO WORLD
```

## Logic

1. Normalization: Trim whitespace and convert input to uppercase.
2. Inversion: Programmatically generate the reverse dictionary (Morse → Text) from the primary Map.
3. Tokenization: - Split text by characters (space) and words.
4. Split Morse by symbols (single space) and words (forward slash /).
5. Sanitization: Identify and flag unknown characters (e.g., @!) without interrupting the translation stream.
6. Assembly: Join translated tokens into a formatted string and output.

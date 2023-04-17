# CLI Question and Answer Application

This is a command-line interface application built using Node.js native modules, designed for asking and answering a sequence of questions. The primary focus of this project is to showcase two methods: `ask` and `askYesNo` functions.

## Installation

Before you begin, ensure that you have Node.js installed on your system. To install this application, run the following command:

```bash
npm install
```

## Usage

To use this application, run the following command:

```bash
npm run try
```

This command will compile and start the application, presenting you with a series of questions to answer, including examples of `ask` and `askYesNo` functions.

### Asking Questions

To use the `ask` and `askYesNo` functions, you first need to create a readline interface using the `createInterface` function from the `readline` module. Here's an example:

```js
import { createInterface } from "readline";
import { ask } from "./ask";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

Next, define an array of questions that you want to ask the user. For example:

```js
const questions = [
  "Do you like pizza?",
  "Do you like ice cream?",
  "Do you like tacos?",
];
```

Finally, call the `ask` and `askYesNo` functions to ask the questions and get the user's responses. Here's an example:

```js
const stringAnswers = await ask(rl, questions);
const boolAnswers = await askYesNo(rl, questions);
```

That's it! You can now use these functions to ask and answer questions in a command-line interface.

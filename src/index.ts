import { createInterface } from "readline";
import { askYesNo } from "./ask-yes-no";
import { ask } from "./ask";
import { askQuestions, askYesNoQuestions } from "./data";

const cli = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const answers = await ask(cli, askQuestions);
  const yesNoAnswers = await askYesNo(cli, askYesNoQuestions);

  console.log({ answers, yesNoAnswers });
  cli.close();
}

main();

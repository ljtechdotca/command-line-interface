import { Interface } from "readline";

export function askYesNo(
  cli: Interface,
  questions: string[],
  answers: boolean[] = [],
  index: number = 0
): Promise<boolean[]> {
  return new Promise<boolean[]>((resolve, reject) => {
    cli.question(`\x1b[32m${questions[index]} (y/n)\x1b[0m\n`, (answer) => {
      if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
        answers.push(true);
      } else if (
        answer.toLowerCase() === "no" ||
        answer.toLowerCase() === "n"
      ) {
        answers.push(false);
      } else {
        console.log("Please answer yes or no.");
        askYesNo(cli, questions, answers, index).then(resolve).catch(reject);
      }

      if (
        index === questions.length - 1 &&
        answers.length == questions.length
      ) {
        resolve(answers);
      } else {
        askYesNo(cli, questions, answers, index + 1)
          .then(resolve)
          .catch(reject);
      }
    });
  });
}

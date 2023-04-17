import { Interface } from "readline";

export async function ask(
  cli: Interface,
  questions: string[],
  answers: string[] = [],
  index: number = 0
): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    cli.question(`\x1b[32m${questions[index]}\x1b[0m\n`, (answer) => {
      answers.push(answer);
      if (
        index === questions.length - 1 &&
        answers.length == questions.length
      ) {
        resolve(answers);
      } else {
        ask(cli, questions, answers, index + 1)
          .then(resolve)
          .catch(reject);
      }
    });
  });
}

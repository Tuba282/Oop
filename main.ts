#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import ora from "ora";
import figlet from "figlet";

// -------------------Welcome Message------------------------------

async function Welcome_message() {
  await new Promise((resolve) => {
    figlet(
      "Welcome to OOP Foundation",
      { font: "Slant" },
      function (err: any, data: any) {
        if (err) {
          console.dir("Oops something went wrong");
          console.log(err);
        }
        let animte = chalkAnimation.rainbow(data);
        setTimeout(() => {
          resolve(animte.stop());
        }, 3000);
      }
    );
  });
}

await Welcome_message();

// -------------------------making litlle ora--------------------------------------
const little_ora = async () => {
  await new Promise((res) => {
    const spinner = ora("\nProcessing....\n").start();

    setTimeout(() => {
      res(spinner.succeed("\nHere you go....\n").stop());
    }, 3000);
  });
};

//   -----------------------------------creating Classess----------------------------
const Start = async () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  const visitor = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: chalk.blue("\nWhat is the name of our visitor...?\n\n"),
    },
  ]);

  const person = new Person(visitor.name);
  const visitor_name = visitor.name;

  let animate = figlet.textSync(`Welcome Respected ${visitor_name}`, {
    font: "Slant",
  });
  console.log(animate);

  await little_ora();

  const u_input = await inquirer.prompt([
    {
      name: "user",
      type: "list",
      message: "\nWith Whom You want to Start inquiry.\n\n",
      choices: ["Emplyee", "Manager", "No-One"],
    },
  ]);

  if (u_input.user === "Emplyee") {
    let add = await inquirer.prompt([
      {
        name: "Emplyee",
        type: "input",
        message: "\n\nCall (write) Emplyee name first.\n\n",
      },
    ]);
    if (add.Emplyee) {
      let ask = await inquirer.prompt([
        {
          name: "act",
          type: "list",
          message: `\n\n ${chalk.blue(add.Emplyee)} : Sir You called my name...\n\n`,
          choices: ["Yes", "No"],
        },
      ]);
      if (ask.act === "Yes") {
        console.log(
          chalk.red(
            `\n\n Sorry Sir I can't help you right now My meeting is going on.\n \n We Will talk someother time.\n\n`
          )
        );
      } else {
        console.log(
          chalk.blueBright(
            `\n\nOops Sorry Sir perhaps I got wrong information that you were calling me.\n\n`
          )
        );
      }
    }
  } else if (u_input.user === "Manager") {
    let add = await inquirer.prompt([
      {
        name: "Manager",
        type: "input",
        message: "\n\nCall(write) Manager name first.\n\n",
      },
    ]);
    if (add.Manager) {
      let ask = await inquirer.prompt([
        {
          name: "act",
          type: "list",
          message: `\n\n ${chalk.blue(add.Manager)} : Yes Sir You called my name...\n\n`,
          choices: ["Yes", "No"],
        },
      ]);
      if (ask.act === "Yes") {
        console.log(
          chalk.red(
            `\n\n Sorry Sir I can't help you right now My meeting is going on.\n \n Employees are waiting for me.\n\n`
          )
        );
      } else {
        console.log(
          chalk.blueBright(
            `\n\nOops Sorry Sir perhaps I got wrong information that you were calling my name.\n\n`
          )
        );
      }
    }
  } else if (u_input.user === "No-One") {
    console.log(chalk.green("\n\nThanks for visiting Sir\n\n"));
    process.exit();
  }
};

const again = async () => {
  do {
    await Start();
    var restart = await inquirer.prompt([
      {
        name: "again",
        type: "input",
        message: "\n\nDo you want to visit again...?(Y/N)\n\n",
      },
    ]);
  } while (restart.again === "Y" || restart.again === "y");
};

await again();

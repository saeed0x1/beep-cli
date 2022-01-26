const chalk = require("chalk");
const logSymbols = require("log-symbols");

const red = chalk.red;
const redI = chalk.red.inverse;
const green = chalk.green;
const greenI = chalk.green.inverse;
const orange = chalk.keyword("orange");
const orangeI = chalk.keyword("orange").inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

module.exports = (options) => {
  const defaultOptions = {
    type: `error`,
    msg: `All options aren't defind.`,
    name: ``,
  };

  const opts = { ...defaultOptions, ...options };
  const { type, msg, name } = opts;

  const printName = name ? name : type.toUpperCase();

  if (type === `success`) {
    console.log(
      `\n${logSymbols.success} ${greenI(` ${printName} `)} ${green(msg)}\n`
    );
  }
  if (type === `error`) {
    console.log(`${logSymbols.error} ${redI(` ${printName} `)} ${red(msg)}\n`);
  }

  if (type === `info`) {
    console.log(`${logSymbols.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`);
  }

  if (type === `warning`) {
    console.log(
      `${logSymbols.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`
    );
  }
};

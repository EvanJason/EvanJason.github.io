---
title: node打包学习

categories:
  - nodejs

tags:
  - nodejs

date: "2023-10-10"

author: 深海如梦

excerpt: node打包学习

---


# node打包学习





在react项目下，使用nodejs来进行打包构建前的选择



首先需要配置好各个环境变量对应的数据



配置项 buildCfg.ts

```typescript
const ENV = {
    PRODUCTION: "生产",
    TEST: "测试",
};

const publicCfg = {
    [ENV.PRODUCTION]: {
        VITE_GPT_URL: "//baidu.com",
        VITE_ENV: "production",
    },
    [ENV.TEST]: {
        VITE_GPT_URL: "//192.168.11.22:8000",
        VITE_ENV: "test",
    },
};

const buildCfg = {
    [ENV.PRODUCTION]: {
        ...publicCfg[ENV.PRODUCTION],
    },
    [ENV.TEST]: {
        ...publicCfg[ENV.TEST],
    },
};

module.exports = {
    ENV,
    buildCfg,
};

```



主要代码 build.js

```javascript
const inquirer = require("inquirer");
const { exec } = require("child_process");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const inquirerPrompt = require("inquirer-autocomplete-prompt");
const ora = require("ora");
const { buildCfg, ENV } = require("./buildCfg.ts");

// 创建一个yarn菊花实例
const yarnSpinner = ora(chalk.blueBright("开始执行yarn..."));
// 创建一个打包菊花实例
const buildSpinner = ora(chalk.blueBright("正在打包，请稍候..."));

inquirer.registerPrompt("autocomplete", inquirerPrompt);
const environments = Object.keys(buildCfg);
const defaultEnvironment = ENV.PRODUCTION; // 设置默认选项

const envFile = path.resolve(__dirname, ".env.production");

const questions = [
    {
        type: "autocomplete",
        name: "environment",
        message: "请选择要打包的环境：",
        source: function (answersSoFar, input) {
            input = input || "";
            return Promise.resolve(
                environments.filter((env) =>
                    env.toLowerCase().includes(input.toLowerCase())
                )
            );
        },
        default: defaultEnvironment, // 设置默认选项
        when: function (answers) {
            return !answers.environment; // 仅当用户未选择选项时应用默认选项
        },
    },
];

inquirer.prompt(questions).then((answers) => {
    const selectedEnvironment = answers.environment;
    // 读取.env.production文件内容
    fs.readFile(envFile, "utf8", (err, data) => {
        if (err) {
            console.error(chalk.red("读取.env.production文件失败:"), err);
            return;
        }
        // 根据指定环境更新.env.production文件中的内容
        const configData = buildCfg[selectedEnvironment];
        if (!configData) {
            console.error(
                chalk.red("Invalid environment:"),
                selectedEnvironment
            );
            return;
        }

        let updatedData = data;
        for (const key in configData) {
            const regex = new RegExp(`${key}\\s*=.*`, "g");
            updatedData = updatedData.replace(
                regex,
                `${key}=${configData[key]}`
            );
        }

        // 写入更新后的内容回到.env.production文件
        fs.writeFile(envFile, updatedData, "utf8", (err) => {
            if (err) {
                console.error(chalk.red("写入.env.production文件失败:"), err);
            } else {
                console.log(
                    chalk.green(
                        `.env.production文件更新，${chalk.cyanBright(
                            selectedEnvironment
                        )}环境配置成功`
                    )
                );
                yarnSpinner.start();
                exec("yarn", (error) => {
                    if (!error) {
                        yarnSpinner.succeed(
                            chalk.green("执行yarn成功")
                        );
                        buildSpinner.start();
                        exec(`yarn build`, (err, stdout, stderr) => {
                            if (err) {
                                buildSpinner.fail(
                                    chalk.red(`打包失败：${chalk.red(err)}`)
                                );
                            } else {
                                buildSpinner.succeed(
                                    `${chalk.green(
                                        "打包成功"
                                    )}，打包的环境为：${chalk.cyanBright(
                                        selectedEnvironment
                                    )}`
                                );
                            }
                        });
                    } else {
                        yarnSpinner.fail(
                            chalk.red("执行yarn失败")
                        );
                    }
                });
            }
        });
    });
});
```



完成，在此基础上，可继续叠加，比如有多环境，多版本，就可以自行进行更改

这样处理，可以减少package.json中的命令过多，而且方便管理


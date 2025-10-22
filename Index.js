const readline = require("readline");
const { deflate } = require("zlib");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter two numbers sperated by space : ", (input) => {
    const [num1, num2] = input.split(' ').map(Number);

    rl.question("Enter the operation you want to do (+ , - , / , *):", (op) => {
        let result;

        //Chaos trigger point that have a chance of only 10% of happening 
        const isChaos = Math.random() < 0.2;

        if (isChaos) {
            //Logic is faulty here 😂😂
            switch (op) {
                case '+':
                    result = num1 - num2;
                    break
                case '-':
                    result = num1 * num2;
                    break
                case '*':
                    result = num1 / num2;
                    break
                case '/':
                    result = num1 + num2;
                    break
                default:
                    result = "Unknown operation. Chaos denied. ";
            }
            console.log(`Chaos mode: you pressed " ${op}" but you got ${result}`);
        } else {
            //Normal logic
            switch (op) {
                case '+':
                    result = num1 + num2;
                    break;

                case '-':
                    result = num1 - num2;
                    break;

                case '*':
                    result = num1 * num2;
                    break

                case '/':
                    result = num2 !== 0 ? num1 / num2 :
                        "Division by Zero! is illegal";
                    break

                default:
                    result = "Unknown operation. ";
            }
            console.log(`Normal mode executed: ${num1} ${op} ${num2} = ${result}`);

        }
        rl.close();
    }
    });
});

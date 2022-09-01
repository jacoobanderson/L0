import readline from 'readline'
import fetch from 'node-fetch'

async function getAdvice () {
    const response = await fetch('https://api.adviceslip.com/advice')
    const advice = await response.json()
    console.log(advice.slip.advice)
}

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('What is your name?', name => {
    let count = 0;
    const loader = setInterval(() => {
        if (count < 101) {
            process.stdout.write(` \r${count++}%`)
        }
    }, 25);

    setTimeout(() => {
        clearInterval(loader);
        read.write(` \nGreetings ${name}, `)
        getAdvice()
    }, 3000);

    read.close()
})

import readline from 'readline'

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('What is your name?', name => {
    let count = 0;
    const loader = setInterval(() => {
        read.write(` \r${count++}%`)
    }, 25);

    setTimeout(() => {
        clearInterval(loader);
        read.write(` \nGreetings ${name} `)
    }, 2625);

    read.close()
})

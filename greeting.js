import readline from 'readline'

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('What is your name?', name => {
    console.log(name)
    read.close()
})

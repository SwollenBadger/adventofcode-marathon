const fs = require('node:fs')

function parseInput(inputFile) {
    try {
        const input = fs.readFileSync(`${__dirname}/${inputFile}`, 'utf8')

        const output = input
            .replaceAll(/\s/g, '')
            .split('')
            .map((input) => {
                return input === '(' ? 1 : input === ')' ? -1 : null
            })

        return output
    } catch (e) {
        console.error('File not found')
    }
}

function partOne() {
    const input = parseInput('input.txt')

    console.log(input.reduce((acc, curr) => acc + curr))
}

function partTwo() {
    const input = parseInput('input.txt')

    let currentFloor = 0
    let movePosition = 0

    while (currentFloor >= 0) {
        currentFloor += input[movePosition]
        movePosition++
    }

    console.log(movePosition)
}

partOne()
partTwo()

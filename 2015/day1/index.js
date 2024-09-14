const fs = require('node:fs')
const { argv } = require('node:process')

function parseInput(inputFileName) {
    try {
        const input = fs.readFileSync(`${__dirname}/${inputFileName}`, 'utf8')

        // console.log(
        //     input
        //         .replaceAll(/\s/g, '')
        //         .split('')
        //         .map((input) => {
        //             return input === '(' ? 1 : input === ')' ? -1 : null
        //         }),
        // )

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

    return argv[2]
}

function partOne() {
    const input = parseInput('input.txt').reduce((acc, curr) => acc + curr)
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

const fs = require('node:fs')

function parseInput(inputFile) {
    try {
        const input = fs.readFileSync(`${__dirname}/${inputFile}`, 'utf8')
        const output = input
            .trim()
            .split(/\n/g)
            .map((input) => input.split('x').map((n) => parseInt(n)))

        return output
    } catch (e) {
        console.error(e)
        return null
    }
}

function partOne() {
    const input = parseInput('input.txt')

    let n = 0

    for (const [length, width, height] of input) {
        const areax = length * width
        const areay = width * height
        const areaz = height * length

        const smallest = [areax, areay, areaz].sort((a, b) => a - b)[0]

        n += 2 * areax + 2 * areay + 2 * areaz + smallest
    }

    console.log(n)
}

function partTwo() {
    const input = parseInput('input.txt')

    let n = 0

    for (const [length, width, height] of input) {
        const [x, y] = [length, width, height].sort((a, b) => a - b)

        n += x * 2 + y * 2 + length * width * height
    }

    console.log(n)
}

partOne()
partTwo()

const log = (...args) => {
    console.log.apply(console, args)
}

const randomStr = () => {
    const seed = '1234424215324242uuuuuskdfjsankvdsafslafkjlsafbnm'
    let s = ''
    for(let i = 0; i < 16; i++) {
        const random = Math.random() * (seed.length - 1)
        const index = Math.floor(random)
        s += seed[index]
    }
    return s
}

module.exports.log = log
module.exports.randomStr = randomStr
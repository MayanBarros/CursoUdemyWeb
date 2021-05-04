function getFlagValue (String) {
    const index = process.argv.indexOf(String) + 1
    return process.argv[index]
}
module.exports = getFlagValue 
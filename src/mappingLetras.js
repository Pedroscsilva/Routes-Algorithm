function mappingLetras(string) {
    const charArray = string.split("");
    const countedChars = charArray.reduce((acc, curr) => {
        acc.hasOwnProperty(curr) ? acc[curr] += 1 : acc[curr] = 1;
        return acc;
    }, {});
    return countedChars;
}

console.log(mappingLetras("ola mundo"));
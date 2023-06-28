const palindromes = function (string) {
    /* let theString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' ']/g,"").toLowerCase();
    let newString = theString.split("").reverse().join("");
    return theString === newString; */
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;

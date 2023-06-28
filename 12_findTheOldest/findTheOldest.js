const findTheOldest = function(array) {
    // sort objects by age
    const oldest = array.sort((a, b) => {
        const d = new Date();
        if (a.yearOfDeath === undefined) {a.yearOfDeath = d.getFullYear()};
        if (b.yearOfDeath === undefined) {b.yearOfDeath = d.getFullYear()};
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    return oldest[0];
    // return first object
};

// Do not edit below this line
module.exports = findTheOldest;

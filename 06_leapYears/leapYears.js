const leapYears = function(year) {
// durch 4 / nicht durch 100 außer wenn 400
    if (year % 100 == 0){
        if (year % 400 == 0){return true}
        else {return false}
    } else if (year % 4 == 0){return true}
    return false;

};

// Do not edit below this line
module.exports = leapYears;

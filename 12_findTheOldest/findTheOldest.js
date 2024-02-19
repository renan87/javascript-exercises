const findTheOldest = function(array) {
    const oldestPerson = array.reduce((oldest, currentPerson) => {
        const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        const currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
      
        return oldestAge > currentAge ? oldest : currentPerson;
      });
    return oldestPerson;  
};

// Do not edit below this line
module.exports = findTheOldest;

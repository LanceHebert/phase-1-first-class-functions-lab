// Code your solution in this file!
function returnFirstTwoDrivers(drivers)
{
    const returnFirstTwo = function(){
        return drivers.slice(0,2);
    }
    return returnFirstTwo();
}

function returnLastTwoDrivers(drivers)
{
    const returnLastTwo = function()
    {
        return drivers.slice((drivers.length-2),drivers.length);   
    }
    return returnLastTwo();     
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare)
{
    const fareMult = function(coin){
        return (fare * coin);
    }
    return fareMult;
}

function fareDoubler(fare){
    const doubler = createFareMultiplier(fare);
    return doubler(2);
    }
    
function fareTripler(fare){
    const tripler = createFareMultiplier(fare);
    return tripler(3);
    }

function selectDifferentDrivers(drivers,someFunction){
    return someFunction(drivers);
}    
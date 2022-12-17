
function saturdayFun(placeholder = "roller-skate") {
    return(`This Saturday, I want to ${placeholder}!`)
};

saturdayFun("bathe my dog");


function mondayWork(holdPlace = "go to the office") {
    return(`This Monday, I will ${holdPlace}.`)
};

mondayWork("work from home");

function wrapAdjective (flair = "*") {
    return function(adj = "special") {
        return (`You are ${flair}${adj}${flair}!`)
    };
}

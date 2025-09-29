//Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.


function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let laLigaGoals1 = parseInt(laLigaGoals);
    let copaDelReyGoals1 = parseInt(copaDelReyGoals);
    let championsLeagueGoals1 = parseInt(championsLeagueGoals);
    return laLigaGoals1 + copaDelReyGoals1 + championsLeagueGoals1
}


console.log(goals(6, '4', 1));
console.log(goals(6, 24, 1));


function bestTeam(team1, team2){
    if(typeof team1 !== 'object' || typeof team2 !== 'object'){
        return "Invalid input";
    }
    const score1= team1.foul + team1.cardY + team1.cardR;
    const score2= team2.foul + team2.cardY + team2.cardR;
    if(score1 < score2){
        return team1.name;
    }
    else if(score2 < score1){
        return team2.name;
    }
    else{
        return "Tie";
    }

}
const teamA = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
const teamB = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

const result = bestTeam(teamA, teamB);
console.log(result);
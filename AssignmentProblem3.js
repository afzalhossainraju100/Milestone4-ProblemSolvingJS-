function bestTeam(team1, team2){
    if(typeof team1 !== 'object' || typeof team2 !== 'object'){
        return "Invalid input";
    }
    const score1= team1.foul + team1.cardY + team1.cardR;
    const score2= team2.foul + team2.cardY + team2.cardR;
    if(score1 < score2){
        return team1.t_name;
    }
    else if(score2 < score1){
        return team2.t_name;
    }
    else{
        return "Tie";
    }

}
const teamA={
        t_name: "Team A",
        foul:15,
        cardY:4,
        cardR:1,
        }
const teamB = {
  t_name: "Team B",
  foul: 10,
  cardY: 6,
  cardR: 2,
};

const result = bestTeam(teamA, teamB);
console.log(result);
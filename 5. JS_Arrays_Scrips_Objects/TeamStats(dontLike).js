const team = { 
_players: [
  {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
  {firstName: 'Pete', lastName: 'Wheeler', age: 54},
  {firstName: 'jete', lastName: 'pheeler', age: 53},
],
_games: [
  {opponent: 'titans', teamPoints: 43, opponentPoints: 26},
  {opponent: 'Broncos',teamPoints: 42, opponentPoints: 27},
  {opponent: 'chargers', teamPoints: 50,opponentPoints: 26},
],
 get players(){
    return this._players;
 },
 get games() {
    return this._games;
   },

addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
}
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//console.log(team.players);

team.addGame('titans2', 100, 98);
team.addGame('Broncos2', 56, 90);
team.addGame('chargers2', 300, 47);

console.log(team.games);

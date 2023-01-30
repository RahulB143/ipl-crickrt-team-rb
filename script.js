let players = [
    {
      "id": 0,
      "playerName": "Hardik Pandya",
      "from": "MI",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 1,
      "playerName": "Virat Kohli",
      "from": "RCB",
      "price": "8.00 Cr",
      "isPlaying": true,
      "description": "Batsman"
    }
    // more player data
  ];
  
  localStorage.setItem('players', JSON.stringify(players));
  let players1 = JSON.parse(localStorage.getItem('players'));
  console.log(players);
  let playerCards = '';
  players.forEach((player) => {
    playerCards += `
      <div class="player-card">
        <p>Full Name: ${player.playerName}</p>
        <p>Team: ${player.from}</p>
        <p>Price: ${player.price}</p>
        <p>Playing Status: ${player.isPlaying ? 'Playing' : 'On-bench'}</p>
        <p>Role: ${player.description}</p>
      </div>
    `;
  });
  
  document.getElementById('players-container').innerHTML = playerCards;
  let team = 'MI';
  let filteredPlayers = players.filter((player) => player.from === team);
  console.log(filteredPlayers);

  let newTeam = {
    "id": 2,
    "teamName": "KKR",
    "teamIcon": "URL",
    "playerCount": 7,
    "topBatsman": "Dinesh Karthik",
    "topBowler": "Pat Cummins",
    "championshipsWon": 2
  };
  
  let teams = JSON.parse(localStorage.getItem('teams')) || [];
  teams.push(newTeam);
  localStorage.setItem('teams', JSON.stringify(teams));
  
    
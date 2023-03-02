/* eslint-disable react/prop-types */
import React from 'react';

const Player1Profile = ({ player }) => {
  // position, height, weight, experience, college, age, team, jersey num
  const feet = Math.floor(player.height / 12);
  const inches = player.height - (feet * 12);
  const correctedHeight = `${feet}-${inches}`;

  return (
    <div id="left-profile">
      <h2>{player.full_name}</h2>
      {player.full_name && (
        <ul>
            <li>Team: {player.team.market} {player.team.name}</li>
            <li>Position: {player.position}</li>
            <li>Years in the NBA: {player.experience}</li>
            <li>{correctedHeight}, {player.weight} pounds</li>
            {player.college !== undefined ?
              <li>College: {player.college}</li> : <li>College: n/a</li>
            }
        </ul>
      )}
    </div>
  );
};

export default Player1Profile;


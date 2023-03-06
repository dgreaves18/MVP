/* eslint-disable react/prop-types */
import React from 'react';

const PlayerProfile = ({ player }) => {
  // position, height, weight, experience, college, age, team, jersey num
  const feet = Math.floor(player.height / 12);
  const inches = player.height - (feet * 12);
  const correctedHeight = `${feet}-${inches}`;

  if (player.full_name) {
      return (
        <div className="player-profile">
          {player.pictureURL && (
            <img src={player.pictureURL} alt="player headshot"></img>
            )}
          <h2>{player.full_name}</h2>
          <div className="player-info">
            <ul>
                <li><b>Team:</b> {player.team.market} {player.team.name}</li>
                <li><b>Position:</b> {player.position}</li>
                <li><b>Years in the NBA:</b> {player.experience}</li>
                {player.college !== undefined ?
                  <li><b>College:</b> {player.college}</li> : <li>College: n/a</li>
                }
                <li>{correctedHeight}, {player.weight} pounds</li>
            </ul>
        </div>
      </div>
    );
  }
};

export default PlayerProfile;


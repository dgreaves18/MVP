/* eslint-disable react/prop-types */
import React from 'react';

const PlayerTable = ({ player }) => {

  console.log(player.seasons);
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th data-stat="season">Season</th>
          <th data-stat="pos" title="Position">Pos</th>
          <th data-stat="g" title="Games Played">G</th>
          <th data-stat="gs" title="Games Started">GS</th>
          <th data-stat="mp" title="Minutes Played Per Game">MP</th>
          <th data-stat="fg" title="Field Goals Per Game">FG</th>
          <th data-stat="fga" title="Field Goal Attempts Per Game">FGA</th>
          <th data-stat="fg%" title="Field Goal Percentage">FG%</th>
          <th data-stat="3p" title="3-Point Field Goals Per Game">3P</th>
          <th data-stat="3pa" title="3-Point Field Goal Attempts Per Game">3PA</th>
          <th data-stat="3p%" title="3-Point Percentage">3P%</th>
          <th data-stat="ft" title="Free Throws Per Game">FT</th>
          <th data-stat="fta" title="Free Throw Attempts Per Game">FTA</th>
          <th data-stat="ft%" title="Free Throw Percentage">FT%</th>
          <th data-stat="trb" title="Total Rebounds Per Game">TRB</th>
          <th data-stat="ast" title="Assists Per Game">AST</th>
          <th data-stat="stl" title="Steals Per Game">STL</th>
          <th data-stat="blk" title="Blocks Per Game">BLK</th>
          <th data-stat="tov" title="Turnovers Per Game">TOV</th>
          <th data-stat="pf" title="Personal Fouls Per Game">PF</th>
          <th data-stat="pts" title="Points Per Game">PTS</th>
        </tr>
      </thead>
      <tbody>
        {player.seasons.map((season) => (
          // eslint-disable-next-line react/jsx-key
          <tr>
            <th data-stat="season">{season.year}</th>
            <td className="center" data-stat="pos">{player.position}</td>
            <td className="center"data-stat="g">{season.teams[0].total.games_played}</td>
            <td className="center"data-stat="gs">{season.teams[0].total.games_started}</td>
            <td className="center"data-stat="mp">{season.teams[0].average.minutes}</td>
            <td className="right" data-stat="fg">{season.teams[0].average.field_goals_made}</td>
            <td className="right" data-stat="fga">{season.teams[0].average.field_goals_att}</td>
            <td className="right" data-stat="fg%">{
              season.teams[0].average.field_goals_made ? (Math.floor((season.teams[0].average.field_goals_made / season.teams[0].average.field_goals_att) * 10000) / 100) : 0
            }</td>
            <td className="right" data-stat="3p">{season.teams[0].average.three_points_made}</td>
            <td className="right" data-stat="3pa">{season.teams[0].average.three_points_att}</td>
            <td className="right" data-stat="3p%">{
              season.teams[0].average.three_points_made ? (Math.floor((season.teams[0].average.three_points_made / season.teams[0].average.three_points_att) * 10000) / 100) : 0
              }</td>
            <td className="right" data-stat="ft">{season.teams[0].average.free_throws_made}</td>
            <td className="right" data-stat="fta">{season.teams[0].average.free_throws_att}</td>
            <td className="right" data-stat="ft%">{
              season.teams[0].average.free_throws_made ? (Math.floor((season.teams[0].average.free_throws_made / season.teams[0].average.free_throws_att) * 10000) / 100) : 0
              }</td>
            <td className="right" data-stat="trb">{season.teams[0].average.rebounds}</td>
            <td className="right" data-stat="ast">{season.teams[0].average.assists}</td>
            <td className="right" data-stat="stl">{season.teams[0].average.steals}</td>
            <td className="right" data-stat="blk">{season.teams[0].average.blocks}</td>
            <td className="right" data-stat="tov">{season.teams[0].average.turnovers}</td>
            <td className="right" data-stat="pf">{season.teams[0].average.personal_fouls}</td>
            <td className="right" data-stat="pts">{season.teams[0].average.points}</td>
          </tr>
        ))}
        {/* <tr>
          <th data-stat="season">{player.seasons[0].year}</th>
          <td data-stat="team">{player.team.alias}</td>
          <td data-stat="position">{player.position}</td>
          <td data-stat="gamesPlayed">{player.seasons[0].teams[0].total.games_played}</td>
          <td data-stat="gamesStarted">{player.seasons[0].teams[0].total.games_started}</td>
          <td data-stat="minutes">{player.seasons[0].teams[0].average.minutes}</td>
        </tr> */}
      </tbody>
    </table>
  );
}
// player1.seasons[index].teams[0].average.points
export default PlayerTable;
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';
import PlayerProfile from './PlayerProfile.jsx';
import PlayerTable from './PlayerTable.jsx';
import playerList from '../data/players/playerList.js';

const App = () => {

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [statistic, setStatistic] = useState('PPG');
  const [chart, setChart] = useState('lineChart')

  const handle1stSelect = (e) => {
    e.preventDefault();
    getPlayer(e.target.value)
      .then((results) => {
        setPlayer1(results.data[0]);
      })
      .catch((err) => {
        console.log('Error getting player data', err);
      });
  }
  const handle2ndSelect = (e) => {
    e.preventDefault();
    getPlayer(e.target.value)
      .then((results) => {
        setPlayer2(results.data[0]);
      })
      .catch((err) => {
        console.log('Error getting player data', err);
      });
  }
  const handleMetricSelect = (e) => {
    e.preventDefault();
    setStatistic(e.target.value);
  }
  const handleChartSelect = (e) => {
    e.preventDefault();
    setChart(e.target.value);
  }
  const getPlayer = (player) => {
    return axios({
      method: 'post',
      url: '/player/data',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        full_name: player
      },
    });
  };

  return (
    <div id='app'>
      <div id="title">
        <h1>NBA Player Comparison Tool</h1>
      </div>
      <div id="description"><u>How to use</u>: select two players from the dropdown lists to compare!
      The graph will display the selected statistic in the common time period shared by both players.
      </div>
      <hr></hr>
      <div id='main'>
        <div className="player-container">
          <label>Choose a player: </label>
          <select onChange={handle1stSelect}>
            <option value="" disabled selected hidden>--Select--</option>
            {playerList.map((player) => (
              <option key={player.id} value={player}>{player}</option>
            ))}
          </select>
          <PlayerProfile player={player1}/>
        </div>
        <Chart player1={player1} player2={player2} statistic={statistic} chart={chart}/>
        <div className="player-container">
          <label>Choose a player: </label>
          <select onChange={handle2ndSelect}>
            <option value="" disabled selected hidden>--Select--</option>
            {playerList.map((player) => (
              <option key={player.id} value={player}>{player}</option>
              ))}
          </select>
          <PlayerProfile player={player2}/>
        </div>
      </div>
      <div id="chart-settings">
        <span id="stat-selector">
          <label>Select a statistic: </label>
          <select onChange={handleMetricSelect}>
            <option value="PPG">Points Per Game</option>
            <option value="MPG">Minutes Per Game</option>
            <option value="RPG">Rebounds Per Game</option>
            <option value="APG">Assists Per Game</option>
            <option value="SPG">Steals Per Game</option>
            <option value="BPG">Blocks Per Game</option>
            <option value="TPG">Turnovers Per Game</option>
            <option value="FG%">Field Goal Percentage</option>
            <option value="3P%">Three Point Percentage</option>
            <option value="FT%">Free Throw Percentage</option>
          </select>
        </span>
        {' '}
        <span id="chart-selector">
          <label>Select a chart: </label>
          <select onChange={handleChartSelect}>
            <option value="lineChart">Line Chart</option>
            <option value="areaChart">Area Chart</option>
            <option value="barChart">Bar Chart</option>
          </select>
        </span>
      </div>
      <div id="player-table1">
        {player1.full_name && (
          <PlayerTable player={player1}/>
        )}
      </div>
      <div id="player-table2">
        {player2.full_name && (
          <PlayerTable player={player2}/>
        )}
      </div>
    </div>
  );
}

export default App;
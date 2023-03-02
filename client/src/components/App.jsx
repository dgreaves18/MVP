/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';
import Player1Profile from './Player1Profile.jsx';
import Player2Profile from './Player2Profile.jsx';
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
      <h1>NBA Player Comparison Tool</h1>
      <div id="description"><u>How to use</u>: select two players from the dropdown lists to compare!
      The graph will display the selected statistic in the common time period shared by both players.
      </div>
      <div id='main'>
        <div id="left-player">
          <div id="left-select">
            <label>Choose a player: </label>
            <select onChange={handle1stSelect}>
              <option value="" disabled selected hidden>--Select--</option>
              {playerList.map((player) => (
                <option key={player.id} value={player}>{player}</option>
              ))}
            </select>
          </div>
          <Player1Profile player={player1}/>
        </div>
        <Chart player1={player1} player2={player2} statistic={statistic} chart={chart}/>
        <div id="right-player">
          <div id="right-select">
            <label>Choose a player: </label>
            <select onChange={handle2ndSelect}>
              <option value="" disabled selected hidden>--Select--</option>
              {playerList.map((player) => (
                <option key={player.id} value={player}>{player}</option>
                ))}
            </select>
          </div>
          <Player2Profile player={player2}/>
        </div>
      </div>
      <div id="metric-selector">
        <label>Select a statistic: </label>
        <select onChange={handleMetricSelect}>
          <option value="PPG">Points Per Game</option>
          <option value="MPG">Minutes Per Game</option>
          <option value="RPG">Rebounds Per Game</option>
          <option value="APG">Assists Per Game</option>
          <option value="SPG">Steals Per Game</option>
          <option value="BPG">Blocks Per Game</option>
          <option value="TPG">Turnovers Per Game</option>
        </select>
        {' '}
        <label>Select a chart: </label>
        <select onChange={handleChartSelect}>
          <option value="lineChart">Line Chart</option>
          <option value="barChart">Bar Chart</option>
          <option value="areaChart">Area Chart</option>
        </select>
      </div>
    </div>
  );
}

export default App;
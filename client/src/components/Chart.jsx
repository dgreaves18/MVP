/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const Chart = ({ player1, player2, statistic, chart }) => {

  const playerData = [];
  if (player1.full_name && player2.full_name) {
    if (player1.seasons < player2.seasons) {
      player1.seasons.map((season, index) => {
        playerData.push({
          year: season.year,
          "MPG1": season.teams[0].average.minutes,
          "MPG2": player2.seasons[index].teams[0].average.minutes,
          "PPG1": season.teams[0].average.points,
          "PPG2": player2.seasons[index].teams[0].average.points,
          "RPG1": season.teams[0].average.rebounds,
          "RPG2": player2.seasons[index].teams[0].average.rebounds,
          "APG1": season.teams[0].average.assists,
          "APG2": player2.seasons[index].teams[0].average.assists,
          "SPG1": season.teams[0].average.steals,
          "SPG2": player2.seasons[index].teams[0].average.steals,
          "BPG1": season.teams[0].average.blocks,
          "BPG2": player2.seasons[index].teams[0].average.blocks,
          "TPG1": season.teams[0].average.turnovers,
          "TPG2": player2.seasons[index].teams[0].average.turnovers,
          "FG%1": (Math.floor((season.teams[0].average.field_goals_made / season.teams[0].average.field_goals_att) * 10000) / 100),
          "FG%2": (Math.floor((player2.seasons[index].teams[0].average.field_goals_made / player2.seasons[index].teams[0].average.field_goals_att) * 10000) / 100),
          "3P%1": (Math.floor((season.teams[0].average.three_points_made / season.teams[0].average.three_points_att) * 10000) / 100),
          "3P%2": (Math.floor((player2.seasons[index].teams[0].average.three_points_made / player2.seasons[index].teams[0].average.three_points_att) * 10000) / 100),
          "FT%1": (Math.floor((season.teams[0].average.free_throws_made / season.teams[0].average.free_throws_att) * 10000) / 100),
          "FT%2": (Math.floor((player2.seasons[index].teams[0].average.free_throws_made / player2.seasons[index].teams[0].average.free_throws_att) * 10000) / 100),
        });
      });
    } else {
      player2.seasons.map((season, index) => {
        playerData.push({
          year: season.year,
          "MPG1": player1.seasons[index].teams[0].average.minutes,
          "MPG2": season.teams[0].average.minutes,
          "PPG1": player1.seasons[index].teams[0].average.points,
          "PPG2": season.teams[0].average.points,
          "RPG1": player1.seasons[index].teams[0].average.rebounds,
          "RPG2": season.teams[0].average.rebounds,
          "APG1": player1.seasons[index].teams[0].average.assists,
          "APG2": season.teams[0].average.assists,
          "SPG1": player1.seasons[index].teams[0].average.steals,
          "SPG2": season.teams[0].average.steals,
          "BPG1": player1.seasons[index].teams[0].average.blocks,
          "BPG2": season.teams[0].average.blocks,
          "TPG1": player1.seasons[index].teams[0].average.turnovers,
          "TPG2": season.teams[0].average.turnovers,
          "FG%1": (Math.floor((player1.seasons[index].teams[0].average.field_goals_made / player1.seasons[index].teams[0].average.field_goals_att) * 10000) / 100),
          "FG%2": (Math.floor((season.teams[0].average.field_goals_made / season.teams[0].average.field_goals_att) * 10000) / 100),
          "3P%1": (Math.floor((player1.seasons[index].teams[0].average.three_points_made / player1.seasons[index].teams[0].average.three_points_att) * 10000) / 100),
          "3P%2": (Math.floor((season.teams[0].average.three_points_made / season.teams[0].average.three_points_att) * 10000) / 100),
          "FT%1": (Math.floor((player1.seasons[index].teams[0].average.free_throws_made / player1.seasons[index].teams[0].average.free_throws_att) * 10000) / 100),
          "FT%2": (Math.floor((season.teams[0].average.free_throws_made / season.teams[0].average.free_throws_att) * 10000) / 100),
        });
      });
    }
    playerData.reverse();
  }

  const p1LegendName = player1.full_name === undefined ? 'Player 1' : player1.full_name + ' (' + statistic + ')';
  const p2LegendName = player2.full_name === undefined ? 'Player 2' : player2.full_name + ' (' + statistic + ')';
  const dataKeyName1 = statistic + '1';
  const dataKeyName2 = statistic + '2';

  if (chart === 'lineChart') {
    return (
      <div className='chart-container'>
        <ResponsiveContainer>
          <LineChart
            data={playerData}
            margin={{
              top: 5,
              right: 40,
              left: 10,
              bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis width={40} domain={[0, 'auto']}/>
            <XAxis dataKey="year" />
            <Line type="monotone" name={p1LegendName} dataKey={dataKeyName1} stroke="#0c63c7" activeDot={{ r: 6 }} />
            <Line type="monotone" name={p2LegendName} dataKey={dataKeyName2} stroke="#7d2222" activeDot={{ r: 6 }} />
            {player1.full_name && player2.full_name && (
              <Tooltip />
              )}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (chart === 'barChart') {
    return (
      <div className='chart-container'>
        <ResponsiveContainer>
          <BarChart
            data={playerData}
            margin={{
              top: 5,
              right: 40,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            {player1.full_name && player2.full_name && (
              <Tooltip />
            )}
            <Legend />
            <Bar name={p1LegendName} dataKey={dataKeyName1} fill="#FFC72C" />
            <Bar name={p2LegendName} dataKey={dataKeyName2} fill="#8BB8E8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (chart === 'areaChart') {
    return (
      <div className='chart-container'>
        <ResponsiveContainer>
          <AreaChart
            data={playerData}
            margin={{ top: 5, right: 40, left: 10, bottom: 5, }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            {player1.full_name && player2.full_name && (
                <Tooltip />
            )}
            <Legend />
            <Area type="monotone" name={p1LegendName} dataKey={dataKeyName1} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" name={p2LegendName} dataKey={dataKeyName2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

export default Chart;

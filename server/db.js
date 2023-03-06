const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nba')
  .then(() => {  console.log('Mongoose connection success')})
  .catch((err) => console.log('Mongoose connection failed', err));

const playerSchema = new mongoose.Schema({
  id: {type: String},
  full_name: {type: String},
  height: {type: Number},
  weight: {type: Number},
  position: {type: String},
  jersey_number: {type: String},
  experience: {type: String},
  college: {type: String},
  pictureURL: {type: String},
  team: {
    id: {type: String},
    name: {type: String},
    market: {type: String},
    alias: {type: String},
  },
  seasons: [
    {
      year: {type: Number},
      teams: [
        {
          total: {
            games_played: Number,
            games_started: Number,
            minutes: Number,
            field_goals_made: Number,
            field_goals_att: Number,
            field_goals_pct: Number,
            two_points_made: Number,
            two_points_att: Number,
            two_points_pct: Number,
            three_points_made: Number,
            three_points_att: Number,
            three_points_pct: Number,
            blocked_att: Number,
            free_throws_made: Number,
            free_throws_att: Number,
            free_throws_pct: Number,
            offensive_rebounds: Number,
            defensive_rebounds: Number,
            rebounds: Number,
            assists: Number,
            turnovers: Number,
            assists_turnover_ratio: Number,
            steals: Number,
            blocks: Number,
            personal_fouls: Number,
            tech_fouls: Number,
            points: Number,
            flagrant_fouls: Number,
            ejections: Number,
            foulouts: Number,
            true_shooting_att: Number,
            true_shooting_pct: Number,
            efficiency: Number,
            points_off_turnovers: Number,
            points_in_paint: Number,
            points_in_paint_made: Number,
            points_in_paint_att: Number,
            points_in_paint_pct: Number,
            effective_fg_pct: Number,
            double_doubles: Number,
            triple_doubles: Number,
            fouls_drawn: Number,
            offensive_fouls: Number,
            fast_break_pts: Number,
            fast_break_att: Number,
            fast_break_made: Number,
            fast_break_pct: Number,
            coach_ejections: Number,
            second_chance_pct: Number,
            second_chance_pts: Number,
            second_chance_att: Number,
            second_chance_made: Number,
            minus: Number,
            plus: Number,
            coach_tech_fouls: Number
          },
          average: {
            minutes: Number,
            points: Number,
            off_rebounds: Number,
            def_rebounds: Number,
            rebounds: Number,
            assists: Number,
            steals: Number,
            blocks: Number,
            turnovers: Number,
            personal_fouls: Number,
            flagrant_fouls: Number,
            blocked_att: Number,
            field_goals_made: Number,
            field_goals_att: Number,
            three_points_made: Number,
            three_points_att: Number,
            free_throws_made: Number,
            free_throws_att: Number,
            two_points_made: Number,
            two_points_att: Number,
            efficiency: Number,
            true_shooting_att: Number,
            points_off_turnovers: Number,
            points_in_paint_made: Number,
            points_in_paint_att: Number,
            points_in_paint: Number,
            fouls_drawn: Number,
            offensive_fouls: Number,
            fast_break_pts: Number,
            fast_break_att: Number,
            fast_break_made: Number,
            second_chance_pts: Number,
            second_chance_att: Number,
            second_chance_made: Number
          }
        }
      ]
    }
  ]
});

let Players = mongoose.model('Players', playerSchema);

module.exports = Players;


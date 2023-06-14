<h1 align="center">
  <br>
    NBA Player Comparison Tool
    <h3 align="center">
        <i>An application designed to provide a simple, clean, and direct way of comparing your favorite players' stats</i>
    </h3>
    <br></br>
</h1>

![main page](https://i.imgur.com/pIbJwCg.jpg)

## Demo
![demo gif](https://i.imgur.com/tgiSnrr.gif)

## Tech Stack
### Front-End
<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' />
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
</div>

### Back-End
<div>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</div>

### Miscellaneous
<div>
  <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' />
  <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' />
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
</div>

## How to Use
* Clone repository and navigate into its directory
* Use ```npm install``` to install dependencies
* Create a .env file and add a port number to be used
* In order for the app to work, the player data must be imported into a mongoDB collection
  * In mongoDB, create a database named ```nba``` and a collection inside the nba database named ```players```
  * Inside the repository, navigate to the folder named data. Inside it should be ```player-data.json```
  * Run this command in the terminal: ```mongoimport --db nba --collection players --file player-data.json```
* Back in the repository's main directory, run these two commands
  * ```npm run build```
  * ```npm run start```
* Enter localhost:(your port number here) and enjoy!   

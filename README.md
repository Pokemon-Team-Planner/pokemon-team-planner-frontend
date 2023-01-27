# Frontend for Pokemon Team Planner

![](src\assets\pokemon-team-planner-logo-outlined.png)

## React app for planning and sharing Pokemon teams 

This is the frontend for my Pokemon Team Planner project.
Features:
* Plan a team of up to 6 Pokemon
* Filter by type and exclusiveness to game version
* Save team anonymously or with your user account
* View your and other's Pokemon teams

Try at https://pokemon-team-planner.onrender.com/

## Screenshots

<p>
<img src="screenshots\app-home.PNG" alt="Home view" width="700"/>
<br>
<i>IMAGE 1. Home view</i>
<br>
<br>
<img src="screenshots\team-creation.PNG" alt="Team creation"  width="350"/>
<br>
<i>IMAGE 2. Team creation</i>
<br>
<br>
<img src="screenshots\team-view.PNG" alt="Team view"  width="600"/>
<br>
<i>IMAGE 3. Team view</i>
</p>

## Installation instructions

1. clone this project
2. run `npm install`
3. run `npm start`

(you must also having the backend running, see https://github.com/Pokemon-Team-Planner/pokemon-team-planner-backend)

## Contributing

For now this is a Full Stack course project of mine. Maybe in the future I could accept contributions. Feel free to send me ideas or feedback though! :)

## Known issues (work in progress)

* No user registration feature in the UI
* Save Pokemon team locally -button could be nice to have. Either in browser's localStorage or as an image or a link.
* No support for commenting/upvoting teams
* No support for filtering last evolutions or mythical/legandary pokemon
* Refreshing /teams or /team/.. pages return Unknown endpoint error
* Refreshing resets selected game
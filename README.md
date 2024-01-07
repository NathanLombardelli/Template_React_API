# Template_React_ExpressAPI_Docker_MySQL
Un template React avec une API Express lié à une BD local Docker MySQL.
## Using
### général
- docker compose up (crée la base de données docker)
### API
- npm install (install les packages)
- npm start (lance l'API)
### monApp
- npm install (install les packages)
- npx vite || npm run dev (lance l'Application)
## database
user : admin <br>
mdp : admin <br>
url : localhost:3002
DB Name : app_database
### Change init.sql
Delete dbdata folder before docker compose up.
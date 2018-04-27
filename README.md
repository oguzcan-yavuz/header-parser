# header-parser
Request Header Parser Microservice

[freecodecamp challange link](https://www.freecodecamp.org/challenges/request-header-parser-microservice)

[Heroku link](https://thawing-lowlands-83369.herokuapp.com/)

### Notes on things learned from the project
- dont forget to set node version in package.json before deploying on heroku
- check if the headers include "x-forwarded-for" value while determining IP addresses of clients in case they are behind a proxy

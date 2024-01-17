setup project api

- npm init --y
- npx tsc --init
- npm install typescript --save-dev

command

- Backend
  1. tsc -W //for auto convert ts to js
  2. npm start
- Frontend
  1. npm run dev

package install

- express
- cors
- mysql2
- nodemon

package install --save-dev

- npm i --save-dev @types/express
- npm i --save-dev @types/cors

database

- columns
  1. id
  2. name
  3. detail
  4. image
  5. latitude
  6. longitude
  7. created_at

CREATE TABLE your_table_name (
id INT PRIMARY KEY,  
 name VARCHAR(255),  
 detail TEXT,  
 image TEXT,  
 latitude VARCHAR(20),
longitude VARCHAR(20),
created_at TIMESTAMP
);

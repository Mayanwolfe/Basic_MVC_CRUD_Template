INSTRUCTIONS

1. Open the terminal and run "npm install -y"
2. In the config" folder, create a file called ".env"
3. In .env, type 
    DB_CONNECTION = (your database connection string goes here)
    Replace <password> in the string with your password
    If you want a custom database name (recommended), add the database name between mongodb.net/ and the ? in the string. Example: mongodb.net/BasicFullStackMVC?
4. Save!
5. In the terminal, type "npm start"
6. Open the browser to http://localhost:8500/ and you should see the homepage!
# Guide on how to set up the environment and use server.js

##Step 1 
Open the terminal in the working directory

##Step 2
Download the `node.js` packages for Express, OpenAI, and Cors by running the following commands in the terminal one by one:
```
npm ini
npm install express
npm install openai
npm install cors
```

##Step 3
Replace your own `OpenAI API key` with the placeholder '...' (at line 11) in the  `server.js` file

##Step 4
Start the server by using  `node` command to check whether the server can work 

run the following command:
```
node server.js
```

##Step 5
When you see the message "Server listening on port 3000", you are ready to open  `index.html` to start the chat!

** If the server connection failed or expired, run the code below in the terminal of the working directory again to fix the problem:
```
node server.js
```

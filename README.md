# Guide on how to set up the environment and use server.js

Step 1: Open terminal in your text editor


Step 2: download following node.js packages (express, openai, cors) by running the code below in the terminal of the work directory one by one:
```
npm ini
(press ctrl C if needed)
npm install express
npm install openai
npm install cors
```

Step 3: replace your own openai api key with the old one (line 11) on "server.js"

Step 4: start the server by using 'node' command to check whether the server can work 

run the code below in terminal of the work directory:
```
node server.js
```

Step 5: When you see the message "Server listening on port 3000", you are ready to open index.html to start the chat!

** if the server connection failed or expired, run the code below in terminal of the work directory again to fix the problem:
```
node server.js
```

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


















/*⚙️ 1️⃣ What is Node.js?

Answer:
Node.js is a runtime environment that lets you run JavaScript outside the browser, usually on the server side.

✅ Simple line to say:

“Node.js allows me to run JavaScript on the server.”

⚙️ 2️⃣ Why do we use Node.js?

Answer:
Because it’s fast, lightweight, and uses JavaScript for both frontend and backend.

✅ Example line:

“I used Node.js to run my server code and handle requests easily.”

⚙️ 3️⃣ Who developed Node.js and when?

Answer:
Node.js was created by Ryan Dahl in 2009.

⚙️ 4️⃣ What is NPM?

Answer:
NPM stands for Node Package Manager.
It’s used to install and manage libraries (packages) in Node.js projects.

✅ Example:

“I used NPM to install Express — npm install express.”

⚙️ 5️⃣ What is Express.js?

Answer:
Express.js is a web application framework built on Node.js.
It makes building servers and APIs much simpler.

✅ Example:

“In my project, I used Express to create a simple server.”

⚙️ 6️⃣ What is a module in Node.js?

Answer:
A module is a reusable block of code (like a function or file) that you can import using require().

✅ Example:

“I used built-in modules like path and custom modules like user.js.”

⚙️ 7️⃣ What are some built-in Node.js modules?

Answer:

http → to create web servers

fs → to work with files

path → to handle file paths

os → to get system info

✅ Example:

“In my server, I used the path module to join folder paths safely.”

⚙️ 8️⃣ What does require() do?

Answer:
require() is used to import modules in Node.js.

✅ Example:

const express = require('express');

⚙️ 9️⃣ What is package.json?

Answer:
It’s a file that stores project details — like project name, version, and dependencies.

✅ Example:

“It keeps track of the packages I installed using NPM.”

⚙️ 🔟 What is middleware in Express?

Answer:
Middleware is a function that runs between the request and the response.

✅ Example:

“express.static() is middleware that serves static files.”

⚙️ 11️⃣ What does app.use(express.static('public')) do?

Answer:
It serves all files inside the public folder to the browser (like HTML, CSS, JS, images).

✅ Example:

“It makes my website files accessible to the client.”

⚙️ 12️⃣ What is app.get() used for?

Answer:
It defines a route that runs when a client sends a GET request to the server.

✅ Example:

“I used app.get('/') to send my index.html file.”

⚙️ 13️⃣ What is app.listen() used for?

Answer:
It starts the server and listens on a specific port.

✅ Example:

“app.listen(3000) starts the server on port 3000.”

⚙️ 14️⃣ What is the use of path.join()?

Answer:
It safely joins folder paths (avoids slashes issues in Windows/Linux).

✅ Example:

path.join(__dirname, 'public', 'index.html')

✅ Say in viva:

“It creates a correct file path regardless of the operating system.”

⚙️ 15️⃣ What is __dirname?

Answer:
__dirname means “the current directory of the running file.”

✅ Example:

“I used __dirname to find the path of my project folder.”

⚙️ 16️⃣ What is the difference between Node.js and JavaScript?
JavaScript	Node.js
Runs in browser	Runs outside browser
For frontend	For backend
Limited to client	Can access files, databases, server

✅ Say in viva:

“JavaScript runs in the browser; Node.js runs on the server.”

⚙️ 17️⃣ How do you start a Node.js project?

Answer:
Use the command:

npm init -y


It creates a package.json file.

⚙️ 18️⃣ How do you run a Node.js file?

Answer:
Use the command:

node filename.js


✅ Example:

“To run my server, I used node server.js.”

⚙️ 19️⃣ What are advantages of Node.js?

Answer:

Very fast (uses V8 engine)

Uses JavaScript (easy for frontend developers)

Handles many requests at once (non-blocking)

Has many packages (via NPM)

⚙️ 20️⃣ What is the default port number you used?

Answer:
Port 3000 (but it can be changed to any number).

✅ Say:

“My Node.js server runs on port 3000.”

🧠 Bonus: Real-Project Related Viva Questions
Question	Short Answer
How did you use Node.js in your project?	“I used Node.js with Express to serve my web pages.”
What folder did you use for your HTML files?	“All my web files are in the public folder.”
How did you make the homepage open?	“I used app.get('/') to send index.html.”
What command do you use to start the server?	“node server.js or nodemon server.js.”
What is nodemon?	“It automatically restarts the server when I make changes.”

✅ Final Tips for Viva:

Always start answers with “Node.js is…” or “I used Node.js to…”

Mention Express, app.use(express.static), and port 3000 — teachers love these details.

Keep your answers short and practical — don’t memorize big paragraphs.*/


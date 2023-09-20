# url-shortener

Tool to shorten a long link and create a short URL easy to share on sites, chat and emails.

URL Shortener API
This is a simple URL Shortener API that allows you to shorten long URLs into shorter, more manageable links.

Getting Started
Follow these steps to set up and use the API.

Prerequisites
Node.js and npm installed on your system.
MongoDB installed and running (or use MongoDB Atlas for cloud hosting).
Postman or a similar tool for API testing (optional).

_Installation_
Clone this repository to your local machine:
git clone <https://github.com/GMartinsT/url-shortener>

Change directory to the project folder:
cd url-shortener

Install the project dependencies:
npm install

Create a .env file in the root of your project with the following content:
MONGODB_URI=<your-mongodb-connection-uri>
PORT=<desired-port-number>
Replace <your-mongodb-connection-uri> with your MongoDB connection string, and <desired-port-number> with the port you want the server to run on.

_Usage_
Start the server:
node app.js

(Use a tool like Postman to interact with the API endpoints.)

_API Endpoints_
Shorten a URL
Endpoint: POST /urls/shorten

Request Body:
{
"originalUrl": "<your-long-url>"
}

Response:
{
"shortUrl": "<shortened-url>"
}

Redirect to Original URL
Endpoint: GET /urls/<shortened-url>
Response: Redirects to the original URL.

_Examples_
Shorten a URL

Request:
POST /urls/shorten
{
"originalUrl": "https://www.example.com"
}

Response:
{
"shortUrl": "http://localhost:3000/<shortened-url>"
}

Redirect to Original URL

Request:
GET /urls/<shortened-url>

Response:
Redirects to https://www.example.com.

**Country Flag API**

- This is a simple Node.js API that provides the URL for the flag of a country based on its name. The API uses Express.js as the web framework and CORS for enabling Cross-Origin Resource Sharing.

**Getting Started:**

- Clone this repository to your local machine.
- Run npm install to install the dependencies.
- Run npm start to start the API on port 3000.
- 
**Endpoints:**

- GET /country/:name
Retrieves the flag URL for the specified country. The :name parameter should be replaced with the lowercase name of the country. If the country is found in the countries.js file, the API returns the URL for its flag image. If the country is not found, a 404 error is returned. If an internal server error occurs, a 500 error is returned.

**Example:**

bash
GET http://localhost:3000/country/france
Response:

json
{
  "flagUrl": "https://restcountries.com/data/fra.svg"
}

**Dependencies**

- Express.js
- Cors

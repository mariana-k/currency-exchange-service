# Currency Exchange Service

This service provides the current exchange rate of USD to UAH and allows users to subscribe to a daily email newsletter with the latest exchange rate.
<https://currency-exchange-service-18e40b0c61dd.herokuapp.com/api-docs>

![image](https://github.com/mariana-k/currency-exchange-service/assets/2496186/c3f2efb8-1de9-4237-9ba3-69f3365c4c8b)
![image](https://github.com/mariana-k/currency-exchange-service/assets/2496186/563b281e-ebb9-49cf-a261-b4c4198b6679)

## Requirements

- Node.js
- MongoDB
- Docker

## Installation

1. Clone the repository.
2. Create a `.env` file with the following variables:
`MONGO_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/currency-exchange-service?retryWrites=true&w=majority"`
`EMAIL_USER=your-email@gmail.com`
`EMAIL_PASS=your-email-password`

    Notes:
    EMAIL_USER should be a Gmail email.
    EMAIL_PASS should be a Google app password, not just regular password you login Gmail.
    <https://support.google.com/accounts/answer/185833?hl=en>

3. Run the application with Docker

```bash

docker-compose up --build

```

## Running the application without Docker

```bash

npm install

```

```bash

npm run start 

```

or

```bash

node server.js

```

## API URL

<https://currency-exchange-service-18e40b0c61dd.herokuapp.com/api-docs>

## Endpoints

1. GET /api/rates: Get the current exchange rate.
2. POST /api/subscribe: Subscribe to the email newsletter.
3. Swagger /api-docs: Documentation and testing

## Testing with Postman

Method: POST
URL: `https://currency-exchange-service-18e40b0c61dd.herokuapp.com/api/subscribe`
Body: `x-www-form-urlencoded`
Key: `email`
Value: `test1@example.com` (repeat for other test emails)

Method: GET
URL: `https://currency-exchange-service-18e40b0c61dd.herokuapp.com/api/rate`

## Automated Testing

Run tests with:

```bash

npm run test

```

## Deployment

This service is deployed on Heroku.
Steps to deploy on Heroku (optional):

1. Install Heroku CLI.
2. Run these commands:

    ```bash

    heroku login
    heroku config:set MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/currency-exchange-service?retryWrites=true&w=majority
    heroku config:set EMAIL_USER=your-email@gmail.com
    heroku config:set EMAIL_PASS=your-email-password
    git init
    git add .
    git commit -m "Initial commit"
    heroku git:remote -a your-app-name
    git push heroku main

    ```

3. Verify Your Deployment

```bash

heroku open
heroku logs --tail

```

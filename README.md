# Currency Exchange Service

This service provides the current exchange rate of USD to UAH and allows users to subscribe to a daily email newsletter with the latest exchange rate.

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

node src/app.js

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

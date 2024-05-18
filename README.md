# Currency Exchange Service

This service provides the current exchange rate of USD to UAH and allows users to subscribe to a daily email newsletter with the latest exchange rate.

## Requirements

- Node.js
- MongoDB
- Docker

## Installation

1. Clone the repository.
2. Create a `.env` file with the following variables:
`MONGO_URI=mongodb://mongo:27017/currency-exchange`
`EMAIL_USER=your-email@gmail.com`
`EMAIL_PASS=your-email-password`
3. Run the application with Docker

```bash

docker-compose up --build

```

## Endpoints

GET /api/rates: Get the current exchange rate.
POST /api/subscription: Subscribe to the email newsletter.

## Testing

Run tests with:

```bash

npm test

```
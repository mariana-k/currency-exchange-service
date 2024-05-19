const axios = require('axios');
const { getExchangeRate } = require('../src/controllers/exchangeController');

jest.mock('axios');

describe('Exchange Controller', () => {
  describe('getExchangeRate', () => {
    it('should return the current exchange rate', async () => {
      axios.get.mockResolvedValue({ data: { rates: { UAH: 28 } } });

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getExchangeRate(req, res);

      expect(axios.get).toHaveBeenCalledWith('https://api.exchangerate-api.com/v4/latest/USD');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(28);
    });

    it('should handle errors', async () => {
      axios.get.mockRejectedValue(new Error('Failed to fetch'));

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await getExchangeRate(req, res);

      expect(axios.get).toHaveBeenCalledWith('https://api.exchangerate-api.com/v4/latest/USD');
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Failed to fetch exchange rate');
    });
  });
});

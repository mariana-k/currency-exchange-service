const mockExchangeRate = {
    findOne: jest.fn(),
    deleteMany: jest.fn(),
    save: jest.fn().mockResolvedValue({}),
  };
  
  const ExchangeRate = function() {
    return mockExchangeRate;
  };
  
  ExchangeRate.findOne = mockExchangeRate.findOne;
  ExchangeRate.deleteMany = mockExchangeRate.deleteMany;
  ExchangeRate.save = mockExchangeRate.save;
  
  module.exports = ExchangeRate;
  
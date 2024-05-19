const Subscription = require('../src/models/Subscription');
const { subscribe } = require('../src/controllers/subscriptionController');

jest.mock('../src/models/Subscription');

describe('Subscription Controller', () => {
  let consoleErrorMock;

  beforeAll(() => {
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    consoleErrorMock.mockRestore();
  });

  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });


  describe('subscribe', () => {
    it('should subscribe an email if not already subscribed', async () => {
      Subscription.findOne.mockResolvedValue(null); // No existing subscription
      Subscription.prototype.save = jest.fn().mockResolvedValue({ email: 'test@example.com' });

      const req = { body: { email: 'test@example.com' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await subscribe(req, res);

      expect(Subscription.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
      expect(Subscription.prototype.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith('E-mail додано');
    });

    it('should not subscribe an existing email', async () => {
      Subscription.findOne.mockResolvedValue({ email: 'test@example.com' }); // Existing subscription

      const req = { body: { email: 'test@example.com' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await subscribe(req, res);

      expect(Subscription.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.send).toHaveBeenCalledWith('E-mail вже є в базі даних');
    });

    it('should handle errors', async () => {
      Subscription.findOne.mockRejectedValue(new Error('Database error'));

      const req = { body: { email: 'test@example.com' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await subscribe(req, res);

      expect(Subscription.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Internal Server Error');
    });
  });
});

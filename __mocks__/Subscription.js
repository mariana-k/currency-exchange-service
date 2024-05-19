const mockSubscription = {
  findOne: jest.fn(),
  deleteMany: jest.fn(),
  save: jest.fn().mockResolvedValue({}),
};

const Subscription = function() {
  return mockSubscription;
};

Subscription.findOne = mockSubscription.findOne;
Subscription.deleteMany = mockSubscription.deleteMany;
Subscription.prototype.save = mockSubscription.save;

module.exports = Subscription;

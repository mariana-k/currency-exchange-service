const mongoose = jest.createMockFromModule('mongoose');

const Schema = function (definition) {
  this.definition = definition;
  this.index = jest.fn();
};

const Model = function () {
  return {
    init: jest.fn(),
    save: jest.fn().mockResolvedValue({}),
  };
};
Model.findOne = jest.fn();
Model.find = jest.fn();
Model.updateMany = jest.fn();
Model.deleteMany = jest.fn();

mongoose.Schema = Schema;
mongoose.model = jest.fn(() => Model);
mongoose.connect = jest.fn().mockResolvedValue({});
mongoose.connection = {
  close: jest.fn(),
};

module.exports = mongoose;

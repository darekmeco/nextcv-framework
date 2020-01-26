const { Model, compose } = require('objection');
const Timestamps = require('../mixins/Timestamps.js');

console.log(Model.prototype);

const mixins = compose(
  Timestamps,
);
class BaseModel extends mixins(Model) {
}
console.log(BaseModel.query);
export default BaseModel;

const DateFormat = require('../../../libs/DateFormat');

function Timestamps(Model) {
  return class extends Model {
    async $beforeInsert() {
      this.created_at = new DateFormat(new Date()).mysqlDateTime();
    }

    async $beforeUpdate() {
      this.updated_at = new DateFormat(new Date()).mysqlDateTime();
    }
  };
}
module.exports = Timestamps;

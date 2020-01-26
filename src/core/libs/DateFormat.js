const dateFormat = require('dateformat');

const DateFormat = function DateFormat(date) {
  this.date = date;
};

DateFormat.prototype.mysqlDateTime = function mysqlDateTime() {
  return dateFormat(this.date, 'yyyy-mm-dd hh:mm:ss');
};
export default DateFormat;

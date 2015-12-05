var time = ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var stores = [];

function CookiesNeeded(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dayTotal = 0;

  this.randomHourlyCustomers = function() {
    return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min;
  };

  this.hourlySales = function() {
    for(i = 0; i < time.length; i++) {
      this.hourlySales.push(Math.floor(this.avg * this.randomHourlyCustomers()));
      this.dayTotal += this.hourlySales;
    }
  };

}

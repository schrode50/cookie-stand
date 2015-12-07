var time = ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var pike = {
  min: 17,
  max: 88,
  avg: 5.2,
  hourly: [],
  total: 0,

///stack overflow helped with this////////
  randomHourlyCustomers: function() {
    return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min;
  },
  hourlySales: function() {
    return Math.floor(this.avg) * (this.randomHourlyCustomers());
  },
  totals: function() {
    for(i = 0; i < time.length; i++) {
      var oneHour = this.hourlySales();
      this.hourly.push(oneHour);
      this.total += oneHour;
    }
  },
  passData: function() {
    for(i = 0; i < pike.hourly.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
      node.appendChild(textNode);
      document.getElementById('pike').appendChild(node);
    }
    var node = document.createElement('li');
    var textNode = document.createTextNode('Total: ' + this.total);
    node.appendChild(textNode);
    document.getElementById('pike').appendChild(node);
  }
};
pike.totals();
pike.passData();


/*
var seaTac = {
  min: 6,
  min: 6,
  max: 44,
  avg: 1.2,
  randomHourlyCustomers: function() {
    return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min);
  }
};

var southcenter = {
  min: 11,
  max: 38,
  avg: 1.9,
  randomHourlyCustomers: function() {
    return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min);
  }
};

var bellevue = {
  min: 20,
  max: 48,
  avg: 3.3
  randomHourlyCustomers: function() {
    return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min);
  }
};

var alki = {
  min: 3,
  max: 24,
  avg: 2.6,
  randomHourlyCustomers: function() {
    return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min);
  }
}
*/

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

var seaTac = {
  min: 6,
  max: 44,
  avg: 1.2,
  hourly: [],
  total: 0,
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
    for(i = 0; i < seaTac.hourly.length; i++) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
    node.appendChild(textNode);
    document.getElementById('seaTac').appendChild(node);
    }
    var node = document.createElement('li');
    var textNode = document.createTextNode('Total: ' + this.total);
    node.appendChild(textNode);
    document.getElementById('seaTac').appendChild(node);
  }
};
seaTac.totals();
seaTac.passData();

var southcenter = {
  min: 11,
  max: 38,
  avg: 1.9,
  hourly: [],
  total: 0,
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
    for(i = 0; i < southcenter.hourly.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
      node.appendChild(textNode);
      document.getElementById('southcenter').appendChild(node);
    }
    var node = document.createElement('li');
    var textNode = document.createTextNode('Total: ' + this.total);
    node.appendChild(textNode);
    document.getElementById('southcenter').appendChild(node);
  }
};
southcenter.totals();
southcenter.passData();

var bellevue = {
  min: 20,
  max: 48,
  avg: 3.3,
  hourly: [],
  total: 0,
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
    for(i = 0; i < bellevue.hourly.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
      node.appendChild(textNode);
      document.getElementById('bellevue').appendChild(node);
    }
    var node = document.createElement('li');
    var textNode = document.createTextNode('Total: ' + this.total);
    node.appendChild(textNode);
    document.getElementById('bellevue').appendChild(node);
  }
};
bellevue.totals();
bellevue.passData();

var alki = {
  min: 3,
  max: 24,
  avg: 2.6,
  hourly: [],
  total: 0,
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
    for(i = 0; i < alki.hourly.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
      node.appendChild(textNode);
      document.getElementById('alki').appendChild(node);
    }
    var node = document.createElement('li');
    var textNode = document.createTextNode('Total: ' + this.total);
    node.appendChild(textNode);
    document.getElementById('alki').appendChild(node);
  }
};
alki.totals();
alki.passData();

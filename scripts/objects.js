var time = [ "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var locations = [];

function CookieStand(storeName, min, max, avg) {
  this.storeName = storeName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourly = [];
  this.daily = 0;
  locations.push(this);

  this.random = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  };

  this.hourTotal = function() {
    for (var i = 0; i < time.length; i++){
      var hourly = this.random() * this.avg;
      this.hourly.push(Math.ceil(hourly));
      this.daily += this.hourly[i];
    };
  };

  this.display = function () {
    this.hourTotal();
    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.className = 'first';
    location.textContent = this.storeName;
    row.className = 'second';
    row.appendChild(location);

    for(var i = 0; i < time.length; i++){
      var num = document.createElement('td');
      num.textContent = this.hourly[i];
      row.appendChild(num);
      tbl.appendChild(row);
    }
    var totalCookies = document.createElement('td');
    totalCookies.textContent = this.daily;
    row.appendChild(totalCookies);
    tbl.appendChild(row);
  }
}

var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("SeaTac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevue = new CookieStand("Bellevue Square", 20, 48, 3.3);
var alki = new CookieStand("Alki", 3, 24, 2.6);

var tbl = document.createElement('table');
var headerRow = document.createElement('thead');

var emptyCell = document.createElement('td');
headerRow.appendChild(emptyCell);

for (var i = 0; i < time.length; i++) {
  var td = document.createElement('td');
  td.innerHTML = time[i];
  headerRow.appendChild(td);
}

var dailyTotal = document.createElement('th');
dailyTotal.textContent = "Total";
headerRow.appendChild(dailyTotal);
tbl.appendChild(headerRow);

function displayAllLocations(){
  for (var i = 0; i < locations.length; i++) {
    locations[i].display();
  }
}

displayAllLocations();

document.body.appendChild(tbl);

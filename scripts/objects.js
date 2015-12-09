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

var createPlace = document.getElementById('tbl');
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

createPlace.appendChild(tbl);

//////creating new submission form//////////////////////
var newStandForm = document.getElementById("newStandForm");

var newStand = function(event) {
  event.preventDefault();
  if(!event.target.location.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value){
    return alert("You must fill in all the fields!");
  }
///stack overflow rocks////////////////////////////////
function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    document.getElementById('btnSearch').click();
    document.getElementById('loc').focus();
    return false;
  } return true;
}

  var standName = event.target.location.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = Number(event.target.avg.value);

  var newStand = new CookieStand(standName, min, max, avg);

  event.target.location.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;

  locations.push(newStand);

  newStand.display();
};

newStandForm.addEventListener('submit', newStand);

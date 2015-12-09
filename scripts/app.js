var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var locations = [];
function CookieStand(storeLocations, minCustHr, maxCustHr, avgPerCust) {
  this.storeLocations = storeLocations;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgPerCust = avgPerCust;
  this.hourlySales = [];
  this.dailyTotal = 0;
  locations.push(this);
};

  CookieStand.prototype.custCalc = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  };

  CookieStand.prototype.calcHourlySales = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.floor(this.avgPerCust * this.custCalc()));
      this.dailyTotal += this.hourlySales[i];
    }
  };

  CookieStand.prototype.displayData = function() {
    this.calcHourlySales();

    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.storeLocations;
    row.appendChild(location);

    for(var i = 0; i < hours.length; i++){
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourlySales[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
      var totalCookies = document.createElement('td');
      totalCookies.textContent = this.dailyTotal;
      row.appendChild(totalCookies);
      tbl.appendChild(row);
  }

////////////Variables for the DOM access
var newLocation = document.getElementById('storeLocation');
var minCust = document.getElementById('minCust');
var maxCust = document.getElementById('maxCust');
var avgCookies = document.getElementById('avgCookies');
var chatForm = document.getElementById('chat-form');

///////////////////////////CookieStand Information
var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("SeaTac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("South Center Mall", 11, 38, 1.9);
var bellevueSquare = new CookieStand("Bellevue Square Mall", 20, 48, 3.3);
var alki = new CookieStand("Alki Beach", 3, 24, 2.6);
var issaquah = new CookieStand("The Quah", 6, 35, 7.7);
var junction = new CookieStand("Alaska Junction", 1, 4, 2.6);
var enumclaw = new CookieStand("Enumclaw", 15, 21, 10.6);

var tbl = document.createElement('table');
var headerRow = document.createElement('thead');
var emptyCell = document.createElement('td');
  headerRow.appendChild(emptyCell);

for (var i = 0; i < hours.length; i++) {
  var td = document.createElement('td');
  td.innerHTML = hours[i];
  headerRow.appendChild(td);
};
  var dailyTotal = document.createElement('th');
  dailyTotal.textContent = "Total";
  headerRow.appendChild(dailyTotal);
  tbl.appendChild(headerRow);

function displayAllLocations(){
for (var i = 0; i < locations.length; i++){
  locations[i].displayData();
  }
  document.body.appendChild(tbl);
}
displayAllLocations();

var handleNewEntrySubmit = function(event) {
console.log(handleNewEntrySubmit);
  event.preventDefault();

   if (!event.target.newLocation.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookies.value) {
    return alert('Fields cannot be empty!');
   }

var stand = event.target.newLocation.value;
var min = event.target.minCust.value;
var max = event.target.maxCust.value;
var average = Number(event.target.avgCookies.value);
var newShop = new CookieStand(stand, min, max, average);
   console.log(newShop);

 event.target.newLocation.value = null;
 event.target.minCust.value = null;
 event.target.maxCust.value = null;
 event.target.avgCookies.value = null;

newShop.displayData();
locations.push(newShop);
};

chatForm.addEventListener('submit', handleNewEntrySubmit);


// function updateLocation(){
//  harvest field data via event. target.minCust.value
//  put that into the constructor
  //   displayAllLocations();
  // }

// updateLocation();

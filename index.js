// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");


// Add an event listener to the searchButton
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredUFO to addressData initially
var filteredUFO = dataSet;

// renderTable renders the filteredUFO to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  console.log("render is happening")

  for (var i = 0; i < filteredUFO.length; i++) {
    
    // Get the current sighting object and its fields
    var sighting = filteredUFO[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing whitespace and converting to lowercase 
  var filterDate = $dateInput.value.trim();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

  if (filterDate.length != 0){
    filteredUFO = dataSet.filter(function(sighting) {
      var sightingDate = sighting.datetime;
       return sightingDate === filterDate;
         });
  }
  else {
    filteredUFO = dataSet
  }
  if (filterCity.length != 0){
    filteredUFO = dataSet.filter(function(sighting) {
      var sightingCity = sighting.city;
       return sightingCity === filterCity;
         });
  }
  else {
    filteredUFO = dataSet
  }
  if (filterState.length != 0){
    filteredUFO = filteredUFO.filter(function(sighting) {
      var sightingState = sighting.state;
       return sightingState === filterState;
         });
  }
  else {
    filteredUFO = filteredUFO
  }
  if (filterCountry.length != 0){
    filteredUFO = dataSet.filter(function(sighting) {
      var sightingCountry = sighting.country;
       return sightingCountry === filterCountry;
         });
  }
  else {
    filteredUFO = dataSet
  }
  if (filterShape.length != 0){
    filteredUFO = dataSet.filter(function(sighting) {
      var sightingShape = sighting.shape;
       return sightingShape === filterShape;
         });
  }
  else {
    filteredUFO = dataSet
  }
  renderTable();
}

// Render the table for the first time 
renderTable();
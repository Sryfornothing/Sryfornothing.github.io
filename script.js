function KmhInMiles() {
 var km = document.getElementById("kmh")
  .value;
 var miles = 0.62137 * km;
 var total = document.getElementById("ttl");
 ttl.innerHTML = miles;
}

function MphInKmh() {
 var mp = document.getElementById("mph")
 .value;
 var kmh1 = mp * 1.60934;
 var total1 = document.getElementById("ttm");
 ttm.innerHTML = kmh1;
}

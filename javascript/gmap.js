
const apiKey = document.querySelector('#apikey');
const zoominput = document.querySelector('#zoom');
const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
const errortext = document.querySelector('.error');
const btnSubmit = document.querySelector('.btn-primary');
const output = document.querySelector('#embed-print')
let clicked = false;

btnSubmit.addEventListener('click', e => {
	if( (apiKey.value === "") || (zoominput.value === "") || (latitude.value === "")  || (longitude.value === "") ) {
		errortext.outerHTML ="<p class='errormessage'>please fill out all values</p>"
		return;
	}
	let zoom = parseFloat(zoominput.value);
	let lat = parseFloat(latitude.value);
	let long = parseFloat(longitude.value);
	let apival = apiKey.value;
	

if(clicked === false){	
	
var map_script = document.createElement('script');
map_script.setAttribute('src','https://maps.googleapis.com/maps/api/js?key=' + apival);
document.body.appendChild(map_script);

}
console.log('lat ', lat)
console.log('long', long)
 setTimeout(function() {
var myLatlng = new google.maps.LatLng(lat,long); 
            var myOptions = { 
              zoom: 8, 
              center: myLatlng, 
             
            }; 
            var map = new google.maps.Map(document.getElementById("map"), myOptions);
} , 1000);


const OutputCode = `
<xmp>

<div id="map"></div>
<script>
    var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: ${lat}, lng: ${long}},
          zoom: 8
        });
      }
 </script>
<script 
src="https://maps.googleapis.com/maps/api/js?key=${apival}&callback=initMap"
async defer></script>
</xmp>

`;



console.log(OutputCode)

output.innerHTML = OutputCode;

 zoominput.value = '';
 latitude.value ='';
 longitude.value = '';
 clicked = true;
})

	

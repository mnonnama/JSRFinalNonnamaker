
const apiKey = document.querySelector('#apikey');
const zoominput = document.querySelector('#zoom');
const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
const errortext = document.querySelector('.error');
const btnSubmit = document.querySelector('.btn-primary');


btnSubmit.addEventListener('click', e => {
	if( (apiKey.value === "") || (zoominput.value === "") || (latitude.value === "")  || (longitude.value === "") ) {
		errortext.outerHTML ="<p class='errormessage'>please fill out all values</p>"
		return;
	}
	let zoom = parseInt(zoominput.value);
	let lat = parseInt(latitude.value);
	let long = parseInt(longitude.value);
	let apival = apiKey.value;
	console.log(apival)
	
	function initMap(lat, long, zoom) {
		var map;
		    map = new google.maps.Map(document.getElementById('map'), {
		      center: {lat: lat, lng: long},
		      zoom: zoom,
		    });
		    console.log(zoom);
  	}
  	
	var gmapcall = document.createElement('script');
	gmapcall.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=' + apival + '&callback=initMap');
	document.body.appendChild(gmapcall);

	
})


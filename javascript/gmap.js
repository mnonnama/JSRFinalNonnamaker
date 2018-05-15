
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
	
	function initMap() {
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

	// const output = `
	// <code>
	// 	<div id="map"></div>
 //    	<script>
	// 	function initMap() {
	// 	    map = new google.maps.Map(document.getElementById('map'), {
	// 	      center: {lat: ${lat}, lng: ${long}},
	// 	      zoom: ${zoom},
		       
	// 	    });
	// 	  }
	// 	</script>
	// 	<script src="https://maps.googleapis.com/maps/api/js?key=${apival}&callback=initMap" async defer></script>
	// </code>
	// `

// const  = newShoppingListItemCtown(shoppingInputctwon.value, priceInputctown.value);
	// ctownfoodPrice += parseInt(priceInputctown.value);
	// shoppingInputctwon.value = '';
	// priceInputctown.value = '';
	// renderctown();
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8,
       
//     });
//   }

//AIzaSyAMYg4o2gl9E2dTq7DSai0n5K2kLScM0AU

// var my_awesome_script = document.createElement('script');

// my_awesome_script.setAttribute('src','https://maps.googleapis.com/maps/api/js?key=AIzaSyAMYg4o2gl9E2dTq7DSai0n5K2kLScM0AU&callback=initMap');

// document.body.appendChild(my_awesome_script);
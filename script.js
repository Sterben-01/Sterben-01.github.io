/*
ZIQI ZHAO
CSCI-3308 Homework4
University of Colorado at Boulder
11/5/2020 21:27 UTC+8
*/


function makeApiCall(){
	var keyword = document.getElementById('user_input').value;
	var display_num = document.getElementById('User_Select').value;
	console.log(document.getElementById('user_input').value); // for debug using
	console.log(document.getElementById('User_Select').value); // for debug using
	var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54fdad38656ad59409d3aa47e6e0f666&tags=' + keyword + '&privacy_filter=1&safe_search=1&extras=url_sq&page=&format=json&nojsoncallback=1';
	$.ajax({url: url, dataType: "json"}).then(function(photos) {
		console.log(photos)
		for (var i = 0; i < display_num; i++) {
			document.getElementById('photocard').innerHTML +=
            `<div class="card" style="width: 20%;">
            	<img class="card-img-top" src = '${photos.photos.photo[i].url_sq}' alt = '${photos.photos.photo[i].id}'>
            	<div class="card-body">
            		<p class="card-text"> ${photos.photos.photo[i].title} </p>
            	</div>
            </div>`
        }
  	})
}
function clearpage(){ //refresh page when click the submit
	document.getElementById('photocard').innerHTML="";
}
$(document).ready(function() {
	makeApiCall();
	$(window).scroll(function(){ // check the scroll bar at the buttom of page or not.
		var scrollTop = $(this).scrollTop();
		var scrollHeight = $(document).height();
		var windowHeight = $(this).height();
		if(scrollTop + windowHeight == scrollHeight){
			makeApiCall();
　　		}
	});
});
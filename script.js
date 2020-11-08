/*
ZIQI ZHAO
CSCI-3308 Homework4
University of Colorado at Boulder
11/5/2020 21:27 UTC+8
*/


function makeApiCall(page){
	var keyword = document.getElementById('user_input').value;
	var display_num = document.getElementById('User_Select').value;
	console.log(document.getElementById('user_input').value); // for debug using
	console.log(document.getElementById('User_Select').value); // for debug using
	var u_page = page;
	/*
	Below is for if user choose 30/50/70 images, it will call 30/50/70 images per page.
	But I don't know why sometimes it will only return 28 or less images when i call 30 images per page.
	I know this is not in the requirement of homework, but i'm still interesting in it.
	var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54fdad38656ad59409d3aa47e6e0f666&tags=' + keyword + '&privacy_filter=1&safe_search=1&extras=url_sq&per_page=' + display_num + '&page=' + u_page + '&format=json&nojsoncallback=1';
	*/
	var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54fdad38656ad59409d3aa47e6e0f666&tags=' + keyword + '&privacy_filter=1&safe_search=1&extras=url_sq&per_page=' + display_num + '&page=' + u_page + '&format=json&nojsoncallback=1';
	$.ajax({url: url, dataType: "json"}).then(function(photos) {
		console.log(photos)
		for (var i = 0; i < display_num; i++) {
			var linkfortest = `https://live.staticflickr.com/${photos.photos.photo[i].server}/${photos.photos.photo[i].id}_${photos.photos.photo[i].secret}_b.jpg`;
			document.getElementById('photocard').innerHTML +=
            `<div class="card" style="width: 20%;">
            	<a href="${linkfortest}" target="_blank"> <img class="card-img-top" src = '${photos.photos.photo[i].url_sq}' alt = '${photos.photos.photo[i].id}'> </a>
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
	var page = 1;
	makeApiCall(page);
	$(window).scroll(function(){ // check the scroll bar at the buttom of page or not.
		var scrollTop = $(this).scrollTop();
		var scrollHeight = $(document).height();
		var windowHeight = $(this).height();
		if(scrollTop + windowHeight == scrollHeight){
			page = page + 1;
			makeApiCall(page);
　　		}
	});
});

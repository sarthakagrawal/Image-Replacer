"use strict";

var url = "";

function replace() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].src = url;
	}
}

function replace_name() {
	var name = "Name Hidden"
	// console.log(document.getElementsByClassName("text-heading-xlarge inline t-24 v-align-middle break-words")[0].innerHTML)
	document.getElementsByClassName("text-heading-xlarge inline t-24 v-align-middle break-words")[0].innerHTML = name
}

// function change_my_url()
// {
// 	window.location.href;
// }


chrome.storage.sync.get({
	enabled: false,
	url: ""
}, function(items) {
	if (items.enabled) {
		url = items.url;
		var css = document.createElement("style");
		css.innerHTML = "img { content: url(\"" + url + "\") !important; }";
		document.body.appendChild(css);
		window.setInterval(replace, 0);
		window.setInterval(replace_name, 0);
		replace();
		replace_name();
			}

});
const Travel_Data = "https://www.trackcorona.live/api/travel";



const country = [];
const policy = [];
async function getInfo(){
	const response = await fetch(Travel_Data);
	const datas = await response.json();
	// console.log(datas.data[1].data);
	$.each(datas.data, function (id) {
		country.push(datas.data[id].location);
		policy.push(datas.data[id].data);
		// console.log(country);
		// console.log(datas.data[0].location)
		});
}
getInfo();
			$(document).ready(function(){
				$("#travel_button").click(function(){
					var country_input = $("#country_name").val();
					// console.log(country_input);
					
					for(var i =0; i < country.length; i++){
						// console.log(country_input);
						if(country_input == country[i]){
							document.getElementById("country_text").innerHTML= policy[i];
						}
					}

				});
			})
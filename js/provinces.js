			const api_url = 'https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/Join_Features_to_Enriched_Population_Case_Data_By_Province_Polygon/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
			// const api_url2 = 'https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/province_daily_totals/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
			async function getInfo(){
				
				
				const response = await fetch(api_url);
				const data = await response.json();
				// const {latitude, longitude} = data;
				 var provinces = [];
				 var confirmed = [];
				 var active= [];
				 var recovered = [];
				 var test = [];
				 var deaths = [];
				 
				  // document.getElementById('province');
				 var Province = $('#province').find(":selected").text()
				 // var total_active;
				 // var total_confirmed;
				 // var total_recovered;
				 // var total_deaths;
				 // var total_test;
				 
				 
				 // Province = data.features[2].attributes.NAME;
				 
				 
				 // total_active = data.features[2].attributes.ActiveCases
				 // total_confirmed = data.features[2].attributes.Case_Total;
				 // total_recovered = data.features[2].attributes.Recovered;
				 // total_deaths = data.features[2].attributes.Deaths
				 // total_test = data.features[2].attributes.Tests;
				 
				 // The each loop select a single statewise array element
				 // Take the data in that array and add it to variables
				 $.each(data.features, function (id) {
				   provinces.push(data.features[id].attributes.NAME);
				   confirmed.push(data.features[id].attributes.Case_Total);
				   active.push(data.features[id].attributes.ActiveCases)
				   test.push(data.features[id].attributes.Tests)
				   recovered.push(data.features[id].attributes.Recovered);
				   deaths.push(data.features[id].attributes.Deaths);
				 });
				 
				 $.each(data.features, function (id) {
				   if(Province == data.features[id].attributes.NAME){
				 					   $("#confirmed").text(data.features[id].attributes.Case_Total);
				 					   $("#active").text(data.features[id].attributes.ActiveCases);
				 					   $("#recovered").text(data.features[id].attributes.Recovered);
				 					   $("#deaths").text(data.features[id].attributes.Deaths);
				 					   $("#test").text(data.features[id].attributes.Tests);
				   } 
				  });
				 $('#province').change(() => {
				    var Province = $('#province').find(":selected").text() 
				 $.each(data.features, function (id) {
				   if(Province == data.features[id].attributes.NAME){
					   $("#confirmed").text(data.features[id].attributes.Case_Total);
					   $("#active").text(data.features[id].attributes.ActiveCases);
					   $("#recovered").text(data.features[id].attributes.Recovered);
					   $("#deaths").text(data.features[id].attributes.Deaths);
					   $("#test").text(data.features[id].attributes.Tests);
				   } 
				 });
				 });
				
				 // Remove the first element in the states, confirmed, recovered, and deaths as that is the total value
				 // provinces.shift();
				 // confirmed.shift();
				 // recovered.shift();
				 // deaths.shift();
				 
				 // $("#province").append(Province);
				 // $("#confirmed").append(total_confirmed);
				 // $("#active").append(total_active);
				 // $("#recovered").append(total_recovered);
				 // $("#deaths").append(total_deaths);
				 // $("#test").append(total_test);
				// console.log(data.features);
				// console.log(Province);
				
				
				
				
				
				// Chart initialization
				var myChart = document.getElementById("myChart").getContext("2d");
				var chart = new Chart(myChart, {
				  type: "line",
				  data: {
				    labels: provinces,
				    datasets: [
				      {
				        label: "Confirmed Cases",
				        data: confirmed,
				        backgroundColor: "#f1c40f",
				        minBarLength: 100,
				      },
					  {
					    label: "Active Cases",
					    data: active,
					    backgroundColor: "#f18e54",
					    minBarLength: 100,
					  },
					  {
					    label: "Test Cases",
					    data: test,
					    backgroundColor: "#9bd0f1",
					    minBarLength: 100,
					  },
				      {
				        label: "Recovered",
				        data: recovered,
				        backgroundColor: "#2ecc71",
				        minBarLength: 100,
				      },
				      {
				        label: "Deceased",
				        data: deaths,
				        backgroundColor: "#e74c3c",
				        minBarLength: 100,
				      },
				    ],
				  },
				  option: {},
				});
				}
				
				getInfo();
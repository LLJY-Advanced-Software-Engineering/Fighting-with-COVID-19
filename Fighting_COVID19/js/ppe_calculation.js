			const api_url = 'https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/NewHybridRegionalHeathBoundaries/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
			// const api_url2 = 'https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/province_daily_totals/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
			var province = "Ontario";
			// APP VARIABLES
			
			const Health_Region = [];
			const cases_list = [];
			const recovered_list = [];
			const deaths_list = [];
			const PPE_list = [];
			
  
				async function getInfo(){
					
					const response = await fetch(api_url);
					const data = await response.json();
					
					// console.log(data.features[1].attributes.Deaths)
					$.each(data.features, function (id) {
					// province_list.push(data.features[id].attributes.Province);
					
					 // if(Province == data.features[id].attributes.province){
					  deaths_list.push(data.features[id].attributes.Deaths);
					  recovered_list.push(data.features[id].attributes.Recovered);
					  cases_list.push(data.features[id].attributes.CaseCount);
					 Health_Region.push(data.features[id].attributes.ENGNAME);
					 PPE_list.push(2*(data.features[id].attributes.CaseCount - data.features[id].attributes.Recovered - data.features[id].attributes.Deaths));
					 // }
					  
					});
					
					}
				
				getInfo();
				// console.log(Health_Region);
				
			
			
				
				// Chart initialization
				var myChart = document.getElementById("myChart").getContext("2d");
				var chart = new Chart(myChart, {
				  type: "line",
				  data: {
				    labels: Health_Region,
				    datasets: [
				      {
				        label: "Confirmed Cases",
				        data: cases_list,
				        backgroundColor: "#f1c40f",
				        minBarLength: 100,
				      },
				      {
				        label: "Recovered",
				        data: recovered_list,
				        backgroundColor: "#2ecc71",
				        minBarLength: 100,
				      },
					  {
					    label: "Estimate PPE",
					    data: PPE_list,
					    backgroundColor: "#6b90cc",
					    minBarLength: 100,
					  },
				      {
				        label: "Deceased",
				        data: deaths_list,
				        backgroundColor: "#e74c3c",
				        minBarLength: 100,
				      },
				    ],
				  },
				  option: {},
				});
				
				
				
				
			
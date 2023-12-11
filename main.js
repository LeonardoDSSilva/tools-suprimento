let transformedData = [];

window.addEventListener('load', async () => {
	const data1 = await dados();
	transformedData = data1.map((item) => {
		return item.map((item) => {
			return { [item.title]: item.text };
		});
	});
});

document.querySelector('#suprimento').addEventListener('change', async (event) => {
	let dados = [];
	console.clear();
	transformedData.forEach((item1) => {
		const itemObject = {};

		item1.filter((item) => {
			if (Object.keys(item) == 'OBRA') {
				//console.log(item);
				itemObject[Object.keys(item)] = item[Object.keys(item)];
			}
		});

		item1.filter((item) => {
			if (Object.keys(item) == 'RCD') {
				//console.log(item);
				itemObject[Object.keys(item)] = item[Object.keys(item)];
			}
		});
		item1.filter((item) => {
			if (Object.keys(item) == event.target.value) {
				//console.log(item)
				const data = item[Object.keys(item)].split('-');
				if (data.length >= 3) {
					itemObject['Inicio'] = new Date(data[0], data[1] - 1, data[2]);
					itemObject['Término'] = new Date(data[0], data[1] - 1, 2);
				}
			}
		});
		//Casotenha inicio e do tipo data
		if (itemObject['Inicio']) {
			dados.push(itemObject);
		}
	});	

	regerarGrafico(dados);
	graficoChartJSLine(dados);

});

async function dados() {
	const url = 'https://api.monday.com/v2';
	const api = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI2Njg4NzkwNiwiYWFpIjoxMSwidWlkIjoyMzA5NjM0MiwiaWFkIjoiMjAyMy0wNy0wNVQxNDoyNTo1NS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NDkwNjU3MCwicmduIjoidXNlMSJ9.tRWcVx3Q9oUEPKRMdaEiFzqCf1n0F7NelbjY09jQix4';
	const query = 'query { boards (ids: 5622755750) { items { id name column_values { title text } } } }';

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': api
		},
		body: JSON.stringify({
			'query': query
		})
	});
	const data = await response.json();
	return data.data.boards[0].items.map((item) => item.column_values);
}

function regerarGrafico(dados) {
	google.charts.load('current', { 'packages': ['timeline'] });
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {
		var container = document.getElementById('chart_div');
		var chart = new google.visualization.Timeline(container);
		var dataTable = new google.visualization.DataTable();

		dataTable.addColumn({ type: 'string', id: 'OBRA' });
		dataTable.addColumn({ type: 'date', id: 'Inicio' });
		dataTable.addColumn({ type: 'date', id: 'Termino' });
		dataTable.addRows(dados.map((item) => [item.OBRA, item.Inicio, item.Término]));

		var options = {
			width: 2000,
			height: 200,
			timeline: { showRowLabels: true },
			avoidOverlappingGridLines: false
		};

		chart.draw(dataTable, options);
	}
}


function graficoChartJSLine(dadosObras) {


	// DESTRUIR O GRÁFICO ANTERIOR
	// myChart.destroy();

	if (Chart.getChart("myChart")){
		Chart.getChart("myChart").destroy();
	  }


	const dados = dadosObras.map((item) => {
		return {
			y: item.OBRA,
			x: item.Inicio,
			Término: item.Término,
			RCD: item.RCD
		};
	});

	const ctx = document.getElementById('myChart').getContext('2d');

	// x -> OBRA
	// y -> Data Inicio
	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			datasets: [{
				label: 'OBRAS',
				borderColor: 'rgb(14, 147, 142)',
				data: dados,
				fill: false,
				showLine: false,
				pointRadius: 15,
				pointHoverRadius: 35
			}]
		},
		options: {
			responsive: true,
			scales: {
				x: {
					type: 'time',
					time: {
						unit: 'month',
					},
					min: dados.map(item => item.x).reduce((a, b) => a < b ? a : b),
				},
				y: {
					type: 'category', // Configuração para usar categorias no eixo y
				}
			}
		}

	});
}
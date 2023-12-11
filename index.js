

window.onload = function() {
	carregarInformacoes();

};

function carregarInformacoes() {
	const tipoSuprimento = {
		CAIXILHOSDEALUMINIO: 'CAIXILHOS DE ALUMÍNIO',
		CAIXILHOSDEMADEIRA: 'CAIXILHOS DE MADEIRA',
		PORTADEMADEIRA: 'PORTA DE MADEIRA',
		ESTRUTURADECONCRETO: 'ESTRUTURA DE CONCRETO',
		REVESTIMENTODEPISO: 'REVESTIMENTO DE PISO',
		REVESTIMENTODEPAREDE: 'REVESTIMENTO DE PAREDE',
		ARCONDICIONADO: 'AR CONDICIONADO',
		INSTALACOSHIDRAULICAS: 'INSTALAÇÕES HIDRÁULICAS',
		INSTALACOSELETRICAS: 'INSTALAÇÕES ELÉTRICAS',
		MARMOREEGRANITO: 'MÁRMORES E GRANITOS',
		IMPERMEABILIZACAO: 'IMPERMEABILIZAÇÃO',
		FUNDACAOPROFUNDA: 'FUNDAÇÃO PROFUNDA',
		PINTURA: 'PINTURA',
		LOUCASEMETAIS: 'LOUÇAS E METAIS',
		PISODEMADEIRA: 'PISO DE MADEIRA',
		MARCEARIAFINA: 'MARCENARIA FINA',
		PLANEJADOS: 'PLANEJADOS',
	};
	
	let sctSuprimento = document.getElementById('suprimento');
	if (sctSuprimento) {
		for (let key in tipoSuprimento) {
			let opt = document.createElement('option');
			opt.value = tipoSuprimento[key];
			opt.innerHTML = tipoSuprimento[key];
			sctSuprimento.appendChild(opt);
		}
	}
}




/* 
google.charts.load('current', { 'packages': ['timeline'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var container = document.getElementById('chart_div');
	var chart = new google.visualization.Timeline(container);
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn({ type: 'string', id: 'Obra' });
	dataTable.addColumn({ type: 'date', id: 'Start' });
	dataTable.addColumn({ type: 'date', id: 'End' });
	dataTable.addRows([
		['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
		['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
		['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
		['Madison', new Date(1809, 2, 4), new Date(1817, 2, 4)],
		['Monroe', new Date(1817, 2, 4), new Date(1825, 2, 4)],
		['Adams', new Date(1825, 2, 4), new Date(1829, 2, 4)],
		['Jackson', new Date(1829, 2, 4), new Date(1837, 2, 4)]
	]);

	function options() {
		return {
			width: 2000,
			height: 800,
		};
	}

	chart.draw(dataTable, options());


}
 */

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
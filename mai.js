document.querySelector('#suprimento').addEventListener('change', (event) => {
	event.preventDefault();
	console.log(event.target.value);
});

function carregarInformacoes() {
	const tipoSuprimento = {
		CAIXILHOSDEALUMINIO: 'Caixilhos de Alumínio',
		CAIXILHOSDEMADEIRA: 'Caixilhos de Madeira',
		PORTADEMADEIRA: 'Porta de Madeira',
		ESTRUTURADECONCRETO: 'Estrutura de Concreto',
		REVESTIMENTODEPISO: 'Revestimento de Piso',
		REVESTIMENTODEPAREDE: 'Revestimento de Parede',
		ARCONDICIONADO: 'Ar Condicionado',
		INSTALACAOHIDRAULICA: 'Instalação Hidráulica',
		INSTALACAOELETRICA: 'Instalação Elétrica',
		MARMOREEGRANITO: 'Mármore e Granito',
		IMPERMEABILIZACAO: 'Impermeabilização',
		FUNDACAOPROFUNDA: 'Fundação Profunda',
		PINTURA: 'Pintura',
		LOUCASEMETAIS: 'Louças e Metais',
		PISODEMADEIRA: 'Piso de Madeira',
		MARCEARIAFINA: 'Marcenaria Fina',
		PLANEJADECORATIVA: 'Planejados Decorativos',
	}

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

let dados = () => {
	debugger;
	const url = 'https://api.monday.com/v2';
	const api = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI2Njg4NzkwNiwiYWFpIjoxMSwidWlkIjoyMzA5NjM0MiwiaWFkIjoiMjAyMy0wNy0wNVQxNDoyNTo1NS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NDkwNjU3MCwicmduIjoidXNlMSJ9.tRWcVx3Q9oUEPKRMdaEiFzqCf1n0F7NelbjY09jQix4'
	const query = 'query { boards (ids: 5622755750) { items { id name column_values { title text } } } }';

	const response =  fetch (url, {
		method: 'get',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization' : api
		 },
		 body: JSON.stringify({
		   'query' : query })
	});
	console.log(response);
	return response;
}
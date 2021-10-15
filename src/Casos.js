import React, { useEffect, useState } from 'react';
import GraficoCasosEstados from './GraficoCasosEstados';

const Casos = () => {	
	const [ cases, setCases ] = useState([]);

	useEffect(() => {
		requestCases();
		// if (!cases) {filtrar()};
	}, [])

	async function requestCases() {
		const casesAPI = await fetch("https://covid19-brazil-api.now.sh/api/report/v1", {"method": "GET"});

		// const casos  = [
		// 	{
		// 		"uid": 35,
		// 		"uf": "SP",
		// 		"state": "São Paulo",
		// 		"cases": 4386346,
		// 		"deaths": 150938,
		// 		"suspects": 5334,
		// 		"refuses": 596,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 31,
		// 		"uf": "MG",
		// 		"state": "Minas Gerais",
		// 		"cases": 2162611,
		// 		"deaths": 55064,
		// 		"suspects": 925,
		// 		"refuses": 104,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 41,
		// 		"uf": "PR",
		// 		"state": "Paraná",
		// 		"cases": 1532450,
		// 		"deaths": 39654,
		// 		"suspects": 400,
		// 		"refuses": 119,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 43,
		// 		"uf": "RS",
		// 		"state": "Rio Grande do Sul",
		// 		"cases": 1451069,
		// 		"deaths": 35118,
		// 		"suspects": 416,
		// 		"refuses": 330,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 33,
		// 		"uf": "RJ",
		// 		"state": "Rio de Janeiro",
		// 		"cases": 1304445,
		// 		"deaths": 67342,
		// 		"suspects": 1254,
		// 		"refuses": 148,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 29,
		// 		"uf": "BA",
		// 		"state": "Bahia",
		// 		"cases": 1238652,
		// 		"deaths": 26950,
		// 		"suspects": 573,
		// 		"refuses": 36,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 42,
		// 		"uf": "SC",
		// 		"state": "Santa Catarina",
		// 		"cases": 1203243,
		// 		"deaths": 19457,
		// 		"suspects": 346,
		// 		"refuses": 47,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 23,
		// 		"uf": "CE",
		// 		"state": "Ceará",
		// 		"cases": 941743,
		// 		"deaths": 24335,
		// 		"suspects": 493,
		// 		"refuses": 89,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 52,
		// 		"uf": "GO",
		// 		"state": "Goiás",
		// 		"cases": 882980,
		// 		"deaths": 23856,
		// 		"suspects": 353,
		// 		"refuses": 55,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 26,
		// 		"uf": "PE",
		// 		"state": "Pernambuco",
		// 		"cases": 625147,
		// 		"deaths": 19866,
		// 		"suspects": 89,
		// 		"refuses": 23,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 32,
		// 		"uf": "ES",
		// 		"state": "Espírito Santo",
		// 		"cases": 596771,
		// 		"deaths": 12713,
		// 		"suspects": 71,
		// 		"refuses": 21,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 15,
		// 		"uf": "PA",
		// 		"state": "Pará",
		// 		"cases": 594246,
		// 		"deaths": 16698,
		// 		"suspects": 43,
		// 		"refuses": 23,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 51,
		// 		"uf": "MT",
		// 		"state": "Mato Grosso",
		// 		"cases": 538902,
		// 		"deaths": 13629,
		// 		"suspects": 45,
		// 		"refuses": 8,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 53,
		// 		"uf": "DF",
		// 		"state": "Distrito Federal",
		// 		"cases": 509148,
		// 		"deaths": 10664,
		// 		"suspects": 327,
		// 		"refuses": 107,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 25,
		// 		"uf": "PB",
		// 		"state": "Paraíba",
		// 		"cases": 443294,
		// 		"deaths": 9361,
		// 		"suspects": 85,
		// 		"refuses": 11,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 13,
		// 		"uf": "AM",
		// 		"state": "Amazonas",
		// 		"cases": 427058,
		// 		"deaths": 13750,
		// 		"suspects": 18,
		// 		"refuses": 26,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 50,
		// 		"uf": "MS",
		// 		"state": "Mato Grosso do Sul",
		// 		"cases": 374855,
		// 		"deaths": 9610,
		// 		"suspects": 93,
		// 		"refuses": 26,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 24,
		// 		"uf": "RN",
		// 		"state": "Rio Grande do Norte",
		// 		"cases": 370120,
		// 		"deaths": 7358,
		// 		"suspects": 108,
		// 		"refuses": 22,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 21,
		// 		"uf": "MA",
		// 		"state": "Maranhão",
		// 		"cases": 358395,
		// 		"deaths": 10208,
		// 		"suspects": 125,
		// 		"refuses": 13,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 22,
		// 		"uf": "PI",
		// 		"state": "Piauí",
		// 		"cases": 322304,
		// 		"deaths": 7050,
		// 		"suspects": 12,
		// 		"refuses": 2,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 28,
		// 		"uf": "SE",
		// 		"state": "Sergipe",
		// 		"cases": 278275,
		// 		"deaths": 6020,
		// 		"suspects": 15,
		// 		"refuses": 11,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 11,
		// 		"uf": "RO",
		// 		"state": "Rondônia",
		// 		"cases": 267238,
		// 		"deaths": 6547,
		// 		"suspects": 61,
		// 		"refuses": 2,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 27,
		// 		"uf": "AL",
		// 		"state": "Alagoas",
		// 		"cases": 239074,
		// 		"deaths": 6253,
		// 		"suspects": 43,
		// 		"refuses": 22,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 17,
		// 		"uf": "TO",
		// 		"state": "Tocantins",
		// 		"cases": 226393,
		// 		"deaths": 3825,
		// 		"suspects": 13,
		// 		"refuses": 0,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 14,
		// 		"uf": "RR",
		// 		"state": "Roraima",
		// 		"cases": 126289,
		// 		"deaths": 2006,
		// 		"suspects": 9,
		// 		"refuses": 0,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 16,
		// 		"uf": "AP",
		// 		"state": "Amapá",
		// 		"cases": 123195,
		// 		"deaths": 1986,
		// 		"suspects": 15,
		// 		"refuses": 0,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	},
		// 	{
		// 		"uid": 12,
		// 		"uf": "AC",
		// 		"state": "Acre",
		// 		"cases": 87994,
		// 		"deaths": 1841,
		// 		"suspects": 12,
		// 		"refuses": 0,
		// 		"datetime": "2021-10-14T21:34:07.504Z"
		// 	}
		// ]
		const json = await casesAPI.json();
		
		// console.log(json.data);
		setCases(json.data);
		// setCases(casos);
	}   
	
	return (
		<div className="content">
			<div>
				<h1>Casos</h1>
			</div>
			<div className="card">
				{cases.map((caseBState) => (
					<div className="info" key={caseBState.state}>
						<h3>{caseBState.state}</h3>
						<p>Casos totais: {caseBState.cases}</p>
						<p>Mortes: {caseBState.deaths}</p>
					</div>
				))}
			</div>
			<GraficoCasosEstados cases={cases} />
		</div>
	);
}

export default Casos;
import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GraficoCasosEstados = ( {cases} ) => {
	return (
		<ResponsiveContainer width="100%" height="80%">
		<BarChart
				width={500}
				height={600}
				data={cases}
				margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
				}}
		>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="uf" hide="true"/>
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="cases" fill="#8884d8" />
		</BarChart>
		</ResponsiveContainer>
	)
}

export default GraficoCasosEstados;
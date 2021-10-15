import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu-header">
				<h3>Desafio React</h3>
			</div>
			<nav>
				<ul>
					<li class="nav-item">
						<Link to="/">Inicio</Link>
					</li>
					<li class="nav-item">
						<Link to="/sobre">Sobre</Link>
					</li>
			</ul>
		</nav>
		</div>
	);
}

export default Menu;
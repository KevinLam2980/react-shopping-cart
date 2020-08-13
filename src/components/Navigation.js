import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import {CartContext} from '../contexts/CartContext'
const Navigation = () => {
	const {cart} = useContext(CartContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
				{console.log('from the nav', cart)}
			</NavLink>
		</div>
	);
};

export default Navigation;

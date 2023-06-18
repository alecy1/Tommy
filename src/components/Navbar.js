import * as React from "react";
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
	const header = { logo : './tommy.JFIF',name : 'TOMMY'}
	return(
		<header className="row header">
			<nav className= "col- col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 menuli">
					<NavLink to='/' style={{textDecoration:'none',color:'black',marginLeft:'1rem'}}>
						{<img className="logo" src={header.logo} alt={header.name} width="60" height="68" />}
						{header.name}
					</NavLink>
					<div className="menu">
						<NavLink  to='/' >Inicio</NavLink>
						<NavLink  to='/razas' >Razas</NavLink>
						<NavLink  to='/feed'  >Alimentación</NavLink>
						<NavLink  to='/about' >Contacto</NavLink>
					</div>
			</nav>
		</header>
	)
}

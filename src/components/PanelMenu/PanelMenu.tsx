import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../../images/authorization.png'
import settings from '../../images/settings.png'
import user from '../../images/user.png'
import './PanelMenu.css'

export default function PanelMenu({isHidden}) {
	return (
		<>
			<nav className={isHidden ? "panel__menu hidden" : "panel__menu"}>
				<ul>
					<li>
						<Link to="/user">
							<img src={user} alt="logout"></img>
							Мои данные
						</Link>
					</li>
					<li>
						<Link to="/settings">
							<img src={settings} alt="logout"></img>
							Настройки
						</Link>
					</li>
					<li>
						<Link to="/logout">
							<img src={logout} alt="logout"></img>
							Выйти
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
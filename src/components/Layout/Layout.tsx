import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import PanelMenu from '../PanelMenu'
import logo from '../../images/wheel.jpeg'
import options from '../../images/options.png'

export default function Layout() {
	const [isHidden, toggle] = useState(true)

	return (
		<>
			<div className="container">
				<div className="app">
					<header className="header">
						<div className="logo">
							<Link to="/">
								<img src={logo} alt="logo"></img>
							</Link>
						</div>
						<div className="app-name">
							<h1 className="title">Тачка</h1>
						</div>
						<div className="panel">
							<button
								type="button"
								className="panel__controller"
								onClick={() => toggle(!isHidden)}
							>
								<img src={options} alt="options"></img>
							</button>
							<PanelMenu isHidden={isHidden}/>
						</div>
					</header>

					<main className='main'>
						<div className='page'>
							<Outlet/>
						</div>
					</main>

					<footer className='footer'>
						Написать разработчику: <a className='link' href={'https://t.me/davydkin_valery'} target="_blank" rel="noreferrer">@davydkin_valery</a>
					</footer>
				</div>
			</div>
		</>
	)
}
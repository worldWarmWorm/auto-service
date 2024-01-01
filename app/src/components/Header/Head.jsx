
import './Head.css'
import logo from '../../images/wheel.jpeg'
import user from '../../images/user.png'
import authorization from '../../images/authorization.png'

export default function Head() {
	return (
		<>
			<header className="header">
					<div className="logo">
						<a href={'/'}>
							<img src={logo} alt="logo"></img>
						</a>
					</div>
					<div className="app-name">
						<h1 className="title">Тачка</h1>
					</div>
					<div className="user">
						<div className="user__icon">
							<a href={'/'}>
								<img src={user} alt="user"></img>
							</a>
						</div>
						<div className="user__authorization dp-none">
							<a href={'/'}>
								<img src={authorization} alt="authorization"></img>
							</a>
						</div>
					</div>
				</header>
		</>
	)
}

// import './Header.css'

export default function Head() {
	return (
		<>
			<header className="header">
					<div className="logo">
						<a href={'/'}>
							<img src={'../../images/wheel.jpeg'} alt="logo"></img>
						</a>
					</div>
					<div className="app-name">
						<h1 className="title">Тачка</h1>
					</div>
					<div className="user">
						<div className="user__icon">
							<a href={'/'}>
								<img src={'../../images/user.png'} alt="user"></img>
							</a>
						</div>
						<div className="user__authorization dp-none">
							<a href={'/'}>
								<img src={'../../images/authorization.png'} alt="authorization"></img>
							</a>
						</div>
					</div>
				</header>
		</>
	)
}
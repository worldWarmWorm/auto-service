import Footer from './components/Footer/Footer'
import Header from './components/Header/Head'
import Main from './components/Main/Main'
import './App.css'

export default function App() {
	return (
		<>
			<div className="container">
				<div className="app">
					<Header/>
					<Main/>
					<Footer/>
				</div>
			</div>
		</>
	)
}

import React from 'react'
import { Link } from 'react-router-dom'
import SubTitle from '../components/SubTitle'

export const LoginPage = () => {
	return (
		<>
			<SubTitle text="Вход"/>
			<form action="" className="form">
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Имя</div>
					<input name="name" type="text" placeholder="Введите имя"required></input>
				</label>
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Пароль</div>
					<input name="password" type="password" required></input>
				</label>
				<div className="message">
					<Link to="/restore" className="link">Забыли пароль?</Link>
				</div>
				<input className="btn" type="submit" value="Войти"></input>
				<div className="message">
					<Link to="/registration" className="link">Регистрация</Link>
				</div>
			</form>
		</>
	)
}
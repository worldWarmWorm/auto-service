import React from 'react'
import SubTitle from '../components/SubTitle'
import { Link } from 'react-router-dom'

export const RestorePage = () => {
	return (
		<>
			<SubTitle text="Восстановление пароля"/>
			<form action="" className="form">
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Новый пароль</div>
					<input name="password" type="password" required></input>
				</label>
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Повторите пароль</div>
					<input name="repeat" type="password" required></input>
				</label>
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Email</div>
					<input name="email" type="email" placeholder="example@ya.ru" required></input>
				</label>
				<input className="btn" type="submit" value="Восстановить"></input>
				<div className="message">
					<Link to="/login" className="link">Вспомнил пароль</Link>
				</div>
			</form>
		</>
	)
}
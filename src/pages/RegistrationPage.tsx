import React from 'react'
import SubTitle from '../components/SubTitle'
import { Link } from 'react-router-dom'


export const RegistrationPage = () => {
	return (
		<>
			<SubTitle text="RegistrationPage"/>
			<form action="" className="form">
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Имя</div>
					<input name="name" type="text" placeholder="Введите имя" required></input>
				</label>
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Email</div>
					<input name="email" type="email" placeholder="example@ya.ru" required></input>
				</label>
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Телефон</div>
					<input name="phone" type="tel" pattern="+[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+9-999-999-9999" required></input>
				</label>
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Пароль</div>
					<input name="password" type="password" required></input>
				</label>
				<label className="label">
					<div className="label__title required" title="Обязательное поле">Повторите пароль</div>
					<input name="confirmation" type="password" required></input>
				</label>
				<input className="btn" type="submit" value="Зарегистрироваться"></input>
				<div className="message">
					<Link to="/login" className="link">Вход</Link>
				</div>
			</form>
		</>
	)
}
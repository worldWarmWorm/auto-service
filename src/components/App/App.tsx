import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout.tsx'
import { HomePage } from '../../pages/HomePage.tsx'
import { UserPage } from '../../pages/UserPage.tsx'
import { SettingsPage } from '../../pages/SettingsPage.tsx'
import { LoginPage } from '../../pages/LoginPage.tsx'
import { RegistrationPage } from '../../pages/RegistrationPage.tsx'
import { RestorePage } from '../../pages/RestorePage.tsx'
import { ErrorPage } from '../../pages/ErrorPage.tsx'
import './App.css'

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route index element={<HomePage/>}/>
					<Route path='user' element={<UserPage/>}/>
					<Route path='settings' element={<SettingsPage/>}/>
					<Route path='login' element={<LoginPage/>}/>
					<Route path='registration' element={<RegistrationPage/>}/>
					<Route path='restore' element={<RestorePage/>}/>
					<Route path='*' element={<ErrorPage/>}/>
				</Route>
			</Routes>
		</>
	)
}

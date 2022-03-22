import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import {connect} from 'react-redux'

import { alertActions } from './Pages/AlertAction'
import { HomePage } from './Component/HomePage'
import { LoginPage } from './Component/LoginPage'
import { RegisterPage } from './Component/RegisterPage'
import { PrivateRoute } from './Pages/PrivateRoute'

class App extends Component {
	render() {
		const {alert} = this.props
		return (
			<div className='jumbotron'>
				<div className='container'>
					<div className="col-sm-8 col-sm-offset-2">
						{alert.message &&
							<div className={`alert ${alert.type}`}>
								{alert.message}
							</div>
						}
						<Routes>
							<Route exact path="/" element={<LoginPage />}/>
							<Route path="/login" element={<LoginPage />}/>
							<Route path="/register" element={<RegisterPage />} />
							<Route element={<PrivateRoute />}>
								<Route path="/home" element={<HomePage />}/>
							</Route>
						</Routes>
					</div>
	 			</div>
	 		</div>
	 	)
 }
}

function mapState(state) {
	const {alert} = state
	return {alert}
}

const actionCreators = {
	clearAlerts: alertActions.clear
}

const connectedApp = connect(mapState, actionCreators)(App)
export default connectedApp
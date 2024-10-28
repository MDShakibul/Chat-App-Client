/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';

const ProtectedRoute = ({ children }) => {
	const isLoggedIn = localStorage?.getItem('user:token') !== null || true;
	if (!isLoggedIn) {
		return <Navigate to="/users/sign_in" replace />;
	}else if (isLoggedIn && (location.pathname === '/users/sign_in' || location.pathname === '/users/sign_up')) {
		return <Navigate to="/" />;
	}

	return children;
};

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>} />
			<Route path="/users/sign_in" element={<ProtectedRoute><Form isSignInPage={true} /></ProtectedRoute>} />
			<Route path="/users/sign_up" element={<ProtectedRoute><Form isSignInPage={false} /></ProtectedRoute>} />
		</Routes>
	);
}
 */

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';

const ProtectedRoute = ({ children }) => {
	const isLoggedIn = localStorage?.getItem('user:token') !== null || true;
	const location = useLocation();

	if (!isLoggedIn) {
		return <Navigate to="/users/sign_in" replace />;
	} else if (isLoggedIn && (location.pathname === '/users/sign_in' || location.pathname === '/users/sign_up')) {
		return <Navigate to="/" />;
	}

	return children;
};

const routes = [
	{
		path: '/',
		element: <Dashboard />,
		protected: true,
	},
	{
		path: '/users/sign_in',
		element: <Form isSignInPage={true} />,
		protected: true,
	},
	{
		path: '/users/sign_up',
		element: <Form isSignInPage={false} />,
		protected: true,
	},
];

export default function App() {
	return (
		<Routes>
			{routes.map(({ path, element, protected: isProtected }, index) => (
				<Route
					key={index}
					path={path}
					element={
						isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element
					}
				/>
			))}
		</Routes>
	);
}

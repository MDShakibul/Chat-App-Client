/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Form = ({isSignInPage = true}) => {
	const [data, setData] = useState({
		...(!isSignInPage && {
			fullName:''
		}),
		email: '',
		password: '',
	});

	
	return (
		<div className="bg-white w-[600px] h-[800px] shadow-lg flex flex-col justify-center items-center">
			<div className="text-4xl font-extrabold ">
				Welcome {isSignInPage && 'Back'}
			</div>
			<div className="text-xl font-light mb-10">
				{' '}
				{isSignInPage
					? 'Sing in to  get explore'
					: 'Sign up to get started'}{' '}
			</div>

			<form className='w-full flex flex-col items-center' onSubmit={()=>console.log('clicked')}>

			{!isSignInPage && (
				<Input
					label="First Name"
					name="name"
					placeholder="Enter your full name"
					className="mb-6"
					isRequired={true}
					value={data?.fullName}
					onChange={(e) => setData({ ...data, fullName: e.target.value })}
				/>
			)}
			<Input
				label="Email Address"
				name="email"
				type='email'
				placeholder="Enter your email"
				className="mb-6"
				isRequired={true}
				value={data?.email}
				onChange={(e) => setData({ ...data, email: e.target.value })}
			/>
			<Input
				label="Password"
				type="password"
				name="password"
				placeholder="Enter your password"
				className="mb-14"
				isRequired={true}
				value={data?.password}
				onChange={(e) => setData({ ...data, password: e.target.value })}
			/>
			<Button
				label={isSignInPage ? 'Sign in' : 'Sign up'}
				type='submit'
				className="w-3/4 mb-2"
			/>
			</form>
			<div>
				{isSignInPage ? "Didn't have an account" : 'Alredy have an account?'}{' '}
				<span className="text-primary cursor-pointer underline">
					{isSignInPage ? 'Sign up' : 'Sign in'}
				</span>
			</div>
		</div>
	);
};

export default Form;

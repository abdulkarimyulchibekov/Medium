import React from 'react';
import { HomeRoute } from '../../components/HomeRoute/HomeRoute';
import { Routes, Route } from 'react-router-dom';
import { HomeForYou } from '../../components/HomeForYou/HomeForYou';
import { HomeFollow } from '../../components/HomeFollow/HomeFollow';
export const Home = () => {
	return (
		<div
			style={{
				marginTop: 30,
			}}>
			<HomeRoute />
			<Routes>
				<Route index element={<HomeForYou />} />
				<Route path='following' element={<HomeFollow />} />
			</Routes>
		</div>
	);
};

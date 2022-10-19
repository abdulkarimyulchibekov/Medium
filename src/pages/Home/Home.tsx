import React from 'react';
import { HomeRoute } from '../../components/HomeRoute/HomeRoute';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { HomeForYou } from '../../components/HomeForYou/HomeForYou';
import { HomeFollow } from '../../components/HomeFollow/HomeFollow';
import { SinglePage } from '../SinglePage/SinglePage';
export const Home = () => {
	return (
		<div
			style={{
				marginTop: 30,
			}}>
			<HomeRoute />
			<Routes>
				<Route path='for-you/' element={<HomeForYou />} />
				<Route path='following' element={<HomeFollow />} />
			</Routes>
		</div>
	);
};

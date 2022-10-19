import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { NavLink } from 'react-router-dom';
import './HomeRoute.scss';
export const HomeRoute = () => {
	return (
		<Stack
			className='home__route'
			direction={'row'}
			alignItems='center'
			spacing={3}>
			<IconButton>
				<AddOutlinedIcon />
			</IconButton>
			<div>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'active-home-link' : 'home-link'
					}
					to={'for-you'}>
					For you
				</NavLink>
				<span className='line'></span>
			</div>
			<div>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'active-home-link' : 'home-link'
					}
					to={'following'}>
					Following
				</NavLink>
				<span className='line'></span>
			</div>
		</Stack>
	);
};

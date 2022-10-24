import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const SaveHeader = () => {
	return (
		<>
			<Stack
				direction={'row'}
				alignItems={'center'}
				justifyContent={'space-between'}
				sx={{ my: 5 }}>
				<Typography variant='h3'>Your Lists</Typography>
				<Button
					style={{ borderRadius: 16 }}
					variant='contained'
					color='success'>
					New List
				</Button>
			</Stack>
			<Stack
				className='home__route'
				direction={'row'}
				sx={{ mb: 5 }}
				alignItems='center'
				spacing={3}>
				<div>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'active-save-link' : 'home-link'
						}
						to={'/saved'}>
						Lists
					</NavLink>
					<span className='line'></span>
				</div>
				<div>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'active-save-link' : 'home-link'
						}
						to={'highlights'}>
						Highlights
					</NavLink>
					<span className='line'></span>
				</div>
			</Stack>
		</>
	);
};

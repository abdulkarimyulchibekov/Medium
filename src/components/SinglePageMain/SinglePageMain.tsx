import React from 'react';
import { IData } from '../../Data/Interfaces';
import { Typography, Box } from '@mui/material';
interface IProps {
	data: IData;
}

export const SinglePageMain = ({ data }: IProps) => {
	return (
		<Box sx={{ marginTop: 4 }}>
			<Typography sx={{ fontWeight: 700 }} variant='h4' gutterBottom>
				{data.title}
			</Typography>
			<Typography gutterBottom color='gray' variant='h5'>
				{data.first_subtitle}
			</Typography>
			<img
				style={{ marginBottom: 15 }}
				src={data.image1}
				alt={data.first_subtitle}
			/>
			{data.first_content.map((e) => (
				<Typography
					key={e}
					style={{ marginBottom: 15, fontWeight: 500 }}
					variant='body1'>
					{e}
				</Typography>
			))}
			<img
				style={{ marginBottom: 15 }}
				src={data.image2}
				alt={data.second_subtitle}
			/>
			<Typography gutterBottom color='gray' variant='h5'>
				{data.second_subtitle}
			</Typography>
			{data.second_content.map((e) => (
				<Typography
					key={e}
					style={{ marginBottom: 15, fontWeight: 500 }}
					variant='body1'>
					{e}
				</Typography>
			))}
		</Box>
	);
};

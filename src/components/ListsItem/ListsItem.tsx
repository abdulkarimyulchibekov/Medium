import { ListItem, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { IList } from '../../Data/Interfaces';
import './ListItem.scss';

interface IProps {
	e: IList;
}

export const ListsItem = ({ e }: IProps) => {
	return (
		<ListItem
			style={{
				background: '#eee',
				borderRadius: 10,
				marginBottom: 30,
			}}>
			<Link
				style={{
					textDecoration: 'none',
					width: '100%',
				}}
				to={`${e.id}`}>
				<Stack
					direction={'row'}
					alignItems={'center'}
					justifyContent={'space-between'}>
					<div>
						<Typography color={'black'} variant='h6' sx={{ mb: 10 }}>
							{e.title}
						</Typography>
						<Stack direction={'row'} spacing={2} alignItems='center'>
							<button className='btn'>View List</button>
							<p>{e.stories?.length} stories</p>
						</Stack>
					</div>
					<img
						src={`https://picsum.photos/id/${e.id * 2}/150`}
						alt='list image'
					/>
				</Stack>
			</Link>
		</ListItem>
	);
};

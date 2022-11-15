import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../../components/Item/Item';
import { IData, IList } from '../../Data/Interfaces';
import { useListsStore } from '../../Data/ListsStore';
import { Typography, Box, Stack, Button } from '@mui/material';
import { DeleteModal } from '../../components/DeleteModal/DeleteModal';

export const SingleList = () => {
	const { id } = useParams();
	const lists = useListsStore((state: any) => state.listsStore);
	const list: IList = lists.find((e: IList) => e.id === Number(id));
	const [open, setOpen] = useState(false);

	return (
		<>
			{list.stories?.length ? (
				<>
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						alignItems={'center'}
						style={{ marginTop: 20, marginBottom: 20 }}>
						<Box>
							<Typography variant='h4'>{list.title}</Typography>
							<Stack direction={'row'} spacing={2}>
								<p
									style={{
										marginTop: 5,
										marginBottom: 5,
										color: 'grey',
									}}>
									{list.stories.length} stories
								</p>
							</Stack>
						</Box>
						<Button
							onClick={() => setOpen(true)}
							color={'success'}
							variant='contained'>
							Delete List
						</Button>
					</Stack>
					<ul>
						{list?.stories.map((e: IData) => (
							<Item key={e.id} e={e} />
						))}
					</ul>
				</>
			) : (
				<p className='saved__error'>
					You Have not got any Article in this list
				</p>
			)}
			<DeleteModal list={list} open={open} setOpen={setOpen} />
		</>
	);
};

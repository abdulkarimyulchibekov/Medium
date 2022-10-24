import { IData, IList } from '../../Data/Interfaces';
import { Link } from 'react-router-dom';
import { ListItem, Stack, Typography, IconButton, Box } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { useSavedStore } from '../../Data/SavedStore';
import SimpleSnackbar from '../Snackbar/Snackbar';
import { useState } from 'react';
import './item.scss';
import { useListsStore } from '../../Data/ListsStore';

interface IProps {
	e: IData;
}

export const Item = ({ e }: IProps) => {
	const addList = useListsStore((state: any) => state.addListsStore);
	const deleteList = useListsStore((state: any) => state.deleteListsStore);
	const saved = useSavedStore((state: any) => state.saved);
	const list = useListsStore((state: any) => state.listsStore);
	const i = list.filter((item: IList) =>
		item.stories?.find((el) => el.id == e.id),
	);

	const handleAdd = (item: IData) => {
		if (i.length) {
			deleteList(saved.filter((item: IData) => e.id !== item.id));
			setDeleteOpen(true);
		} else {
			addList(item);
			setOpen(true);
		}
	};
	const [open, setOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);

	return (
		<ListItem className='item' style={{}}>
			<Link className='item__link' to={`/${e.id.toString()}`}>
				<Stack className='item__main' direction={'column'} spacing={2}>
					<Stack className='item__header' direction={'row'} spacing={1}>
						<img
							className='item__img'
							width={24}
							height={24}
							src={
								`https://picsum.photos/id/${e.id * 5}/72` ||
								'https://picsum.photos/72'
							}
							alt='photo of user'
						/>
						<span className='item__name'>{e.name}</span>
						<span className='item__date'>{e.date}</span>
					</Stack>
					<Stack alignItems={'center'} direction={'row'}>
						<Box>
							<Typography className='item__title' variant='h4'>
								{e.title}
							</Typography>
							<Typography className='item__content'>
								{e?.first_content[1]}
							</Typography>
						</Box>
						<img
							width={112}
							height={112}
							src={e.image1 || 'https://picsum.photos/72'}
							alt={e.title}
						/>
					</Stack>
				</Stack>
			</Link>
			<Stack
				alignItems={'center'}
				style={{
					marginBottom: 20,
					justifyContent: 'space-between',
					width: '100%',
				}}
				justifyContent={'space-between'}
				spacing={2}
				direction={'row'}>
				<Stack spacing={2} direction={'row'} alignItems={'center'}>
					<button className='item__btn'>{e.topic}</button>
					<span className='item__read'>{e.read}</span>
					<span className='item__read'>
						{e.id % 2 === 0 ? 'Selected for you' : 'Popular on medium'}
					</span>
				</Stack>
				<Stack direction={'row'} spacing={0} alignItems={'center'}>
					<IconButton
						style={i.length ? { color: 'black' } : { color: 'gray' }}
						onClick={() => handleAdd(e)}>
						{i.length ? <BookmarkAddIcon /> : <BookmarkAddOutlinedIcon />}
					</IconButton>
					<IconButton>
						<RemoveCircleOutlineOutlinedIcon />
					</IconButton>
					<IconButton>
						<MoreHorizOutlinedIcon />
					</IconButton>
				</Stack>
			</Stack>
			<SimpleSnackbar open={open} setOpen={setOpen} message='Saved !!!' />
			<SimpleSnackbar
				open={deleteOpen}
				setOpen={setDeleteOpen}
				message='Deleted !!!'
			/>
		</ListItem>
	);
};

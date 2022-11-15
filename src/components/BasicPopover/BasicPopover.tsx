import { useState } from 'react';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {
	Popover,
	IconButton,
	ListItem,
	Box,
	Checkbox,
	Button,
	List,
} from '@mui/material';
import { IData, IList } from '../../Data/Interfaces';
import { useListsStore } from '../../Data/ListsStore';
import ListCreate from '../ListCreateModal/ListModal';

interface IProps {
	e: IData;
}

export default function BasicPopover({ e }: IProps) {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const openPop = Boolean(anchorEl);
	const id = openPop ? 'simple-popover' : undefined;
	const listsStore = useListsStore((state: any) => state.listsStore);
	const addArticle = useListsStore((state: any) => state.addArticleToList);
	const deleteArticle = useListsStore(
		(state: any) => state.deleteArticleInTheList,
	);

	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<IconButton onClick={handleClick}>
				{listsStore.filter((el: IList) => el?.stories?.includes(e)).length ? (
					<BookmarkAddIcon style={{ fill: 'black' }} />
				) : (
					<BookmarkAddOutlinedIcon style={{ fill: 'black' }} />
				)}
			</IconButton>
			<Popover
				id={id}
				open={openPop}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}>
				<Box>
					<List>
						{listsStore.map((item: IList) => (
							<ListItem key={item.id}>
								<Checkbox
									defaultChecked={
										listsStore
											.find((el: IList) => el.title === item.title)
											.stories.includes(e)
											? true
											: false
									}
									value={item.title}
									onChange={(evt) => {
										if (evt.target.checked) {
											addArticle(e, item.title);
										} else {
											deleteArticle(
												item.stories?.filter((element: IList) => element !== e),
												item.title,
											);
										}
									}}
									{...label}
								/>
								<span>{item.title}</span>
							</ListItem>
						))}
						<ListItem
							style={{
								borderTop: '1.4px solid grey',
							}}>
							<Button
								style={{ fontSize: 14, textTransform: 'none' }}
								color='success'
								onClick={handleOpen}>
								Create new list
							</Button>
						</ListItem>
					</List>
				</Box>
			</Popover>
			<ListCreate e={e} open={open} setOpen={setOpen} />
		</div>
	);
}

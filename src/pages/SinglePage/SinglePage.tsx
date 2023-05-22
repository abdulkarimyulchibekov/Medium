import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Box, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SimpleSnackbar from '../../components/Snackbar/Snackbar';
import { SinglePageMain } from '../../components/SinglePageMain/SinglePageMain';
import { useDataStore } from '../../Data/DataStore';
import { IData } from '../../Data/Interfaces';
import { useSavedStore } from '../../Data/SavedStore';

export const SinglePage = () => {
	const { id } = useParams();
	const [open, setOpen] = React.useState(false);
	const [snackOpen, setSnackOpen] = React.useState(false);
	const data = useDataStore((state: any) => state.data);
	const datas = data.find((e: IData) => e.id === Number(id));

	const addSaved = useSavedStore((state: any) => state.addSaved);

	const handleAdd = (item: IData) => {
		addSaved(item);
		setSnackOpen(true);
	};

	const handleClick = () => {
		let url = document.location.href;

		navigator.clipboard.writeText(url).then(function () {
			setOpen(true);
		});
	};
	return (
		<div>
			{/* HEADER */}
			<Stack
				alignItems={'center'}
				style={{ padding: 16, borderBottom: '1.4px solid #aaa' }}
				direction={'row'}
				spacing={2}>
				<img
					width={32}
					height={32}
					src={`https://picsum.photos/id/${datas.id * 5}/72`}
					alt={datas.title}
					style={{ borderRadius: '50%' }}
				/>
				<span style={{ color: '#aaa' }}>
					Published by{' '}
					<span style={{ color: 'black' }}>
						{datas.name} with id {datas.id}
					</span>
				</span>
			</Stack>
			{/* SubHeader */}
			<Stack
				direction={'row'}
				justifyContent={'space-between'}
				style={{ marginTop: 30 }}
				alignItems={'center'}>
				<Stack
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}>
					<img
						src={`https://picsum.photos/id/${datas.id * 5}/72`}
						alt={datas.title}
						width={48}
						height={48}
						style={{ borderRadius: '50%', marginRight: 15 }}
					/>
					<Box>
						<p style={{ margin: 0, marginBottom: 5 }}>{datas.name}</p>
						<span style={{ color: '#777' }}>
							{datas.date} · {datas.read}
						</span>
					</Box>
				</Stack>
				<Stack
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}>
					<IconButton>
						<a
							style={{ textDecoration: 'none', color: 'gray' }}
							target={'_blank'}
							rel='noreferrer'
							href={'https://twitter.com'}>
							<TwitterIcon />
						</a>
					</IconButton>
					<IconButton>
						<a
							style={{ textDecoration: 'none', color: 'gray' }}
							target={'_blank'}
							rel='noreferrer'
							href={'https://facebook.com'}>
							<FacebookIcon />
						</a>
					</IconButton>
					<IconButton>
						<a
							style={{ textDecoration: 'none', color: 'gray' }}
							target={'_blank'}
							rel='noreferrer'
							href={'https://linkedin.com'}>
							<LinkedInIcon />
						</a>
					</IconButton>
					<IconButton onClick={handleClick} style={{ marginRight: 25 }}>
						<LinkIcon />
					</IconButton>
					<IconButton onClick={() => handleAdd(datas)}>
						<BookmarkAddIcon />
					</IconButton>
					<IconButton>
						<MoreHorizIcon />
					</IconButton>
				</Stack>
			</Stack>
			<SimpleSnackbar open={open} setOpen={setOpen} message={'Link Copied !'} />
			<SimpleSnackbar
				open={snackOpen}
				setOpen={setSnackOpen}
				message={'Saved !'}
			/>
			<SinglePageMain data={datas} />
		</div>
	);
};

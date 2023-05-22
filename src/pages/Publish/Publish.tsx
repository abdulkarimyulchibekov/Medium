import React, { useEffect, useRef, useState } from 'react';
import { Button, Typography, Stack, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import './publish.scss';
import { IData } from '../../Data/Interfaces';
import { useDataStore } from '../../Data/DataStore';
import { useMyStore } from '../../Data/MyStore';
import { useNavigate } from 'react-router-dom';

export const Publish = () => {
	const [num, setNum] = useState<number[]>([]);
	const [value, setValue] = useState<any>('');
	const [text, setText] = useState<string[]>([]);
	const localId: string | null = localStorage.getItem('id');
	const [id, setId] = useState(JSON.parse(localId ? localId : '') || 0);
	const inputRef = useRef<any>();
	const addData = useDataStore((state: any) => state.addData);
	const addMyStore = useMyStore((state: any) => state.addMyStore);
	const navigate = useNavigate();

	const handleSubmit = () => {
		const data: IData = {
			title: value,
			first_content: text,
			id: id,
			read: `${id > 10 ? id - 10 : id} min read`,
			topic: 'my stories',
			name: 'Abdulkarim Yulchibekov',
		};
		setId(id + 1);
		addData(data);
		addMyStore(data);
		navigate('/my-stories');
	};
	useEffect(() => {
		inputRef?.current?.focus();
	}, [num]);
	localStorage.setItem('id', JSON.stringify(id));
	console.log(num);
	return (
		<div style={{ width: 1000, paddingTop: 20 }}>
			<Stack
				direction='row'
				alignItems={'center'}
				style={{ marginBottom: 40 }}
				justifyContent={'space-between'}>
				<Typography variant='body2' component={'p'}>
					Draft in Abdulkarim Yulchibekov
				</Typography>
				<Stack alignItems={'center'} direction={'row'} spacing={2}>
					<Button
						onClick={() => handleSubmit()}
						sx={{ borderRadius: 16, fontSize: 12 }}
						variant='contained'
						color='success'
						disabled={text ? false : true}>
						Publish
					</Button>
					<IconButton>
						<MoreHorizIcon />
					</IconButton>
					<IconButton>
						<NotificationsNoneOutlinedIcon />
					</IconButton>
					<img
						width={30}
						height={30}
						src='https://picsum.photos/200/200'
						alt='ok'
						style={{
							borderRadius: '50%',
						}}
					/>
				</Stack>
			</Stack>
			<form
				id='form'
				onSubmit={(evt) => {
					evt.preventDefault();
				}}>
				<input
					className='title__input'
					onKeyUp={(evt: any) => {
						if (evt.code === 'Enter' && evt.target.value) {
							setNum([...num, 1]);
							setValue(evt.target.value);
						}
					}}
					type='text'
					style={{ display: 'block' }}
					ref={inputRef}
					placeholder='Title'
				/>
				{num.length ? (
					num.map((e, index) => {
						return (
							<input
								className='story__input'
								onKeyUp={(evt: any) => {
									if (evt.code === 'Enter' && evt.target.value) {
										setNum([...num, 1]);
										setText([...text, evt.target.value]);
									}
									if (evt.code === 'Backspace' && !evt.target.value.length) {
										console.log('yes');
										setNum((prop: any) => prop.splice(1, prop.length));
										inputRef?.current?.previousSibling?.focus();
									}
								}}
								style={{ display: 'block' }}
								type='text'
								key={index}
								ref={inputRef}
								placeholder='Tell your story...'
							/>
						);
					})
				) : (
					<></>
				)}
			</form>
		</div>
	);
};

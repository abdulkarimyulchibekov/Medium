import React, { useEffect, useRef, useState } from 'react';

export const Publish = () => {
	const [num, setNum] = useState<number[]>([]);
	const [value, setValue] = useState<any>('');
	const [text, setText] = useState<string[]>([]);
	const inputRef = useRef<any>();
	useEffect(() => {
		inputRef?.current?.focus();
	}, [num]);
	console.log(num);
	return (
		<div>
			<form
				id='form'
				onSubmit={(evt) => {
					evt.preventDefault();
				}}>
				<input
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
				{num.length &&
					num.map((e, index) => {
						return (
							<input
								onKeyUp={(evt: any) => {
									if (evt.code === 'Enter' && evt.target.value) {
										setNum([...num, 1]);
										setText([...text, evt.target.value]);
									}
									if (evt.code === 'Backspace' && !evt.target.value.length) {
										console.log('yes');
										setNum((prop: any) => prop.splice(1, prop.length));
									}
								}}
								style={{ display: 'block' }}
								type='text'
								key={index}
								ref={inputRef}
								placeholder='Tell your story...'
							/>
						);
					})}
			</form>
		</div>
	);
};

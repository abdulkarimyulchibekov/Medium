import React from 'react';
import { SavedItem } from '../../components/SavedItem/SavedItem';
import { IData } from '../../Data/Interfaces';
import { useSavedStore } from '../../Data/SavedStore';
import './save.scss';

export const Save = () => {
	const saved = useSavedStore((state: any) => state.saved);
	console.log(saved);
	return (
		<div>
			{saved.length ? (
				<>
					<p className='saved__error'>Your saved articles :)</p>
					<ul>
						{saved.map((e: IData) => (
							<SavedItem list={saved} e={e} />
						))}
					</ul>
				</>
			) : (
				<p className='saved__error'>You haven't got any saved Article </p>
			)}
		</div>
	);
};

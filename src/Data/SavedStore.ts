import create from 'zustand';
import { IData } from './Interfaces';

let SavedStore: any = (set: any) => ({
	saved: [],
	addSaved: (data: IData) =>
		set((state: any) => {
			if (state.saved.includes(data)) {
				return { saved: state.saved };
			}
			return { saved: [...state.saved, data] };
		}),
	deleteSaved: (arr: IData[]) => set(() => ({ saved: arr })),
});

export const useSavedStore = create(SavedStore);

import create from 'zustand';
import { IData } from './Interfaces';

let myStore: any = (set: any) => ({
	myStore: [],
	addMyStore: (data: IData) =>
		set((state: any) => ({ myStore: [...state.myStore, data] })),
	deleteMyStore: (arr: IData[]) => set(() => ({ myStore: arr })),
});

export const useMyStore = create(myStore);

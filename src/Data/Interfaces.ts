export interface IData {
	id: number;
	title: string;
	first_subtitle?: string;
	first_content: string[];
	second_subtitle?: string;
	second_content?: string[];
	image1?: string;
	image2?: string;
	name?: string;
	date?: string;
	read?: string;
	topic?: string;
	saved?: boolean;
}

export interface IList {
	title: string;
	stories?: IData[];
	id: number;
}

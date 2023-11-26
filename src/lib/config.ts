export const title = '';

export type ExperienceEntry = {
	title: string;
	subtitle: string;
	start: Date;
	description?: string;
	end?: Date;
};

export const workExperience: ExperienceEntry[] = [
	{
		title: 'Fullstack developer',
		subtitle: 'Crowe Peak',
		description:
			'I started out as a backend developer using Python and FastAPI to develop data-intensive webapps. Over time I took on more front-end responsibilities and transitioned to a fullstack position, with Typescript and SvelteKit.',
		start: new Date(2022, 8)
	},
	{
		title: 'Developer intern',
		subtitle: 'AI Talentum',
		description:
			'I was tasked with training and testing machine learning models for time series forecasting. During my training, I learned about TensorFlow/Keras modeling, as well as how the data is processed in a real-world machine learning project. Despite the pandemic making us work from home, we worked in a team. They guided me whenever I had questions and helped me keep learning.',
		start: new Date(2020, 5),
		end: new Date(2021, 2)
	}
];

export const studies: ExperienceEntry[] = [
	{
		title: 'Artificial Intelligence Bachelor',
		subtitle: 'Radboud University',
		description: 'A mixture of computer science, cognitive neuroscience and psychology.',
		start: new Date(2021, 8)
		// end: new Date(2025, 6)
	}
];

export const EMAIL_ADDRESS = 'info@claraa.io';

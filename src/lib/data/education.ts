import type { Education } from '../types';
import Assets from './assets';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Egypt',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2021, 9, 1), to: new Date(2025) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	
];

export const title = 'Education';

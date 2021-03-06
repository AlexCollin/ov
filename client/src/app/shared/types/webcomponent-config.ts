import { OvSettings } from './ov-settings';

export interface ISessionConfig {
	sessionName: string;
	user: string;
	tokens: string[];
	ovSettings: OvSettings;
}

export enum Theme {
	DARK = 'dark',
	LIGHT = 'light'
}

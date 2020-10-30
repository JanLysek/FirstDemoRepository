import * as React from 'react';
import { Component } from 'react';
import { MainComponent } from './MainComponent';

export class Home extends Component {
	static displayName = Home.name;

	render() {
		return <MainComponent />;
	}
}
import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import  styles from './App.module.css';
import {fetchData} from './api/index.js';

class App extends React.Component {

	state = {
		data : {},
	}
	async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

	render(){
		const {data} = this.state;
		console.log(data);
		return(
			<div className = {styles.container}>
			<Cards data = {data} />
			<Chart/>
			<CountryPicker/>
			</div>
		);
	}
}

export default App;

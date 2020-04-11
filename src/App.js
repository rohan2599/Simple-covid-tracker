import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import  styles from './App.module.css';
import {fetchData} from './api/index.js';
import image from './images/image.png';
import FavoriteIcon from '@material-ui/icons/Favorite';

class App extends React.Component {

	state = {
		data : {},
		country :''
	}
	async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async(country) => {
  	const data  = await fetchData(country);
  	this.setState({ data , country});

  }

  renderDet = () => {
  	return <div style ={{ fontSize : '12px'  , fontFamily : 'Open Sans'  , fontWeight : 600 , marginTop : '10px' }}>
  	 Made with <span style={{color : '#C51104'}}><i className="fa fa-heart"></i></span> By Rohan Dhoot
  	</div>
  }

	render(){
		const {data , country} = this.state;
		console.log(data);
		return(
			<div className = {styles.container}>
	            <img className={styles.image} src={image} alt="COVID-19" />
	            {this.renderDet()}
				<Cards data = {data} />
				<CountryPicker handleCountryChange = {this.handleCountryChange}/>
				<Chart data = {data} country ={country}/>
			</div>
		);
	}
}

export default App;

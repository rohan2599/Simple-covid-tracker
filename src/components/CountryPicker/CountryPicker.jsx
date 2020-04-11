import React  , {useState , useEffect } from 'react';
import { FormControl , NativeSelect } from '@material-ui/core';
import {fetchCountries} from '../../api/index.js';
import styles from './CountryPicker.module.css';

 const CountryPicker = ({handleCountryChange}) => {
 	const [fetchedCountries , setFetchedCountries] = useState([]);
 	useEffect(()=> {
 		const fetchApi = async() => {
 			setFetchedCountries(await fetchCountries() );
 		}

 		fetchApi();
 	},[setFetchedCountries]);

 	console.log(fetchedCountries);
 	return(
 		<FormControl className = {styles.formControl}>
 			<NativeSelect defaultValue ="" onChange ={(e) => handleCountryChange(e.target.value)}>
 				<option value = "">Global </option>
 				{fetchedCountries.map((item , i) => <option key = {i} value = {item.country} >{item.country}({item.code})</option>)}
 			</NativeSelect>
 		</FormControl>
 	);
};

export default CountryPicker;
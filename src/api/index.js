import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
	let modifiedUrl = url;
	if(country){
		modifiedUrl = `${url}/countries/${country}`
	}
  try {
  	const {data : { confirmed, recovered , deaths , lastUpdate}} = await axios.get(modifiedUrl);
  	return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
  	return error;
  }
};

export const fetchDailyData = async() => {
	try {
		const {data} = await axios.get(`${url}/daily`);
		const modifiedData = data.map((item) => ({
			confirmed : item.confirmed.total,
			deaths : item.deaths.total,
			date : item.reportDate,
		}));
		return modifiedData;
	} catch(error){

		return error;
	}
};

export const fetchCountries = async() => {
	try {
		const {data : {countries}} = await axios.get(`${url}/countries`);
		return countries.map((country) => ({ country : country.name, code :country.iso3}));
	} catch(error){
		return error;
	}
}
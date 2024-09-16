import axios from "axios";


const popFinder = async (countryName) => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/name/' + countryName);
        if (response.data && response.data[0]) {
            return response.data[0].population;
        }
        return 0; // Return 0 if no data available
    } catch (error) {
        console.error('There was an error fetching the data!', error);
        return 0; // Return 0 if there's an error
    }
};

export default{
    popFinder
}
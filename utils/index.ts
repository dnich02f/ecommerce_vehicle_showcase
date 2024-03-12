export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '722632611bmsh1d1a61aba3015ccp1812bejsn98d967698feb',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        { headers: headers }
    );

    const results = await response.json();

    return results;
}

import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        'X-Rapidapi-Key': 'fc8670013fmshe599a6aaa35fdcep1b6c23jsn893a6d544073',
        'X-Rapidapi-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };
    try {
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
            headers: headers,
        });
        if (!response.ok) {
            console.error('API request failed:', response.status, response.statusText);
            return;
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

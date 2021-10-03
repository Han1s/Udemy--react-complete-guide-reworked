import { useState, useEffect } from 'react';

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    fetch('https://react-http-6a7a1-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>
          Loading...
        </p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem 
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
};

export default AvailableMeals;
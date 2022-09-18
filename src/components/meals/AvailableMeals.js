import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";
import classes from "./AvailableMeals.module.css";

import { DUMMY_MEALS } from "./DummyMeals";

export const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => <MealItem  id={meal.id}  key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

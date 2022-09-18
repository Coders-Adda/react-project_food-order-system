import React from 'react'
import { AvailableMeals } from './AvailableMeals'
import MealsSummary from './MealsSummury'

export const Meals = () => {
  return (
    <div>
        <MealsSummary />
        <AvailableMeals />
    </div>
  )
}

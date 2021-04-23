import MealsSummary from './MealsSummary';
import MealsAvailable from './MealsAvailable';
import { Fragment } from 'react';

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary></MealsSummary>
            <MealsAvailable></MealsAvailable>
        </Fragment>
    )
}

export default Meals;
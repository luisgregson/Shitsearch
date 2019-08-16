import * as React from "react";
import RestaurantItem from "./RestaurantItem";
import { Restaurant } from "../utils/restaurants";

const Fragment = React.Fragment;

interface IRestaurantItemProps {
  restaurants: Restaurant[];
}

const Restaurants: React.FunctionComponent<IRestaurantItemProps> = ({
  restaurants
}) => (
  <Fragment>
    {restaurants.map(restaurant => (
      <RestaurantItem restaurant={restaurant} />
    ))}
  </Fragment>
);

export default Restaurants;

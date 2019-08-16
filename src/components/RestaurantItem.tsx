import * as React from "react";
import { Restaurant } from "../utils/restaurants";

const Fragment = React.Fragment;

interface IRestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem: React.FunctionComponent<IRestaurantItemProps> = ({
  restaurant
}) => (
  <li key={restaurant.id}>
    <h2>{restaurant.name}</h2>
    {restaurant.rating}{" "}
    <span role="img" aria-label="star">
      ⭐️
    </span>
    <br />
    {restaurant.dogFriendly && (
      <Fragment>
        <span role="img" aria-label="dog">
          🐶
        </span>{" "}
        friendly
      </Fragment>
    )}
  </li>
);

export default RestaurantItem;

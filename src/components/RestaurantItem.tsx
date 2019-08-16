import { IRestaurant } from "../utils/restaurants";
import * as React from "react";

interface RestaurantItemProps {
  restaurant: IRestaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({
  restaurant
}): JSX.Element => (
  <li>
    <h2>{restaurant.name}</h2>
    {restaurant.rating}{" "}
    <span role="img" aria-label="star">
      ⭐️
    </span>
    <br />
    {restaurant.dogFriendly && (
      <>
        <span role="img" aria-label="dog">
          🐶
        </span>{" "}
        friendly
      </>
    )}
  </li>
);
export default RestaurantItem;

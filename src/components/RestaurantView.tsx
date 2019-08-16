import * as React from "react";
import styled from "styled-components";

import { getRestaurants } from "../utils/fetcher";
import { Restaurant } from "../utils/restaurants";

interface IRestaurantFilter {
  id?: number;
  name?: string;
  dogFriendly?: boolean;
  veganFriendly?: boolean;
  rating?: number;
}

interface IRestaruantViewState {
  allRestaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
}

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export class RestaurantView extends React.Component {
  state: IRestaruantViewState = {
    allRestaurants: [],
    filteredRestaurants: []
  };

  search = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const restaurantName = e.target.value.toLowerCase();
    const filteredRestaurants = this.state.allRestaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(restaurantName)
    );
    this.setState({ filteredRestaurants });
    console.log(filteredRestaurants);
  };

  fetchRestaurants = async () => {
    const response = await getRestaurants();
    return response;
  };

  refresh = async () => {
    this.setState({
      filteredRestaurants: []
    });
  };

  async componentDidMount() {
    const allRestaurants = await this.fetchRestaurants();
    this.setState({
      allRestaurants
    });
  }

  render() {
    const { allRestaurants, filteredRestaurants } = this.state;
    const restaurantList = filteredRestaurants.length
      ? filteredRestaurants
      : allRestaurants;
    return (
      <>
        <label>
          Search Restaurant:
          <input onChange={this.search} />
        </label>
        <button onClick={this.refresh}>Clear</button>
        <Container>
          {restaurantList.map(restaurant => (
            <li key={restaurant.id}>
              <h2>{restaurant.name}</h2>
              {restaurant.rating}
              <span role="img" aria-label="star">
                ⭐️
              </span>
              <br />
              {restaurant.dogFriendly && (
                <>
                  <span role="img" aria-label="dog-friendly">
                    🐶
                  </span>
                  friendly
                </>
              )}
            </li>
          ))}
        </Container>
      </>
    );
  }
}

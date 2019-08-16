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
  restaurants: Restaurant[];
}

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export class RestaurantView extends React.Component {
  state: IRestaruantViewState = {
    restaurants: []
  };

  checkRestaurantId = (restaurantFilter: IRestaurantFilter): void => {
    const filteredRestaurants = this.state.restaurants.filter(
      data => data.id === restaurantFilter.id
    );
    if (filteredRestaurants.length >= 1) {
      this.setState({
        restaurants: [...filteredRestaurants]
      });
    }
  };

  filterRestaurants = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value, 10);
    this.checkRestaurantId({ id });
  };

  refresh = async () => {
    const originalData = await getRestaurants();
    this.setState({
      restaurants: originalData
    });
  };

  async componentWillMount() {
    this.setState({
      restaurants: await getRestaurants()
    });
  }

  render() {
    const { restaurants } = this.state;
    return (
      <>
        <label>
          Search by id:
          <input onChange={this.filterRestaurants} />
        </label>
        <button onClick={this.refresh}>Clear</button>
        <Container>
          {restaurants.map(row => (
            <li key={row.id}>
              <h2>{row.name}</h2>
              {row.rating}{" "}
              <span role="img" aria-label="star">
                ⭐️
              </span>
              <br />
              {row.dogFriendly && (
                <>
                  <span role="img" aria-label="dog">
                    🐶
                  </span>{" "}
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

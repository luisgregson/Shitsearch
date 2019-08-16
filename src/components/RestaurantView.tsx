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
    if (restaurantFilter.id === undefined) {
      return;
    }
    const filteredRestaurants = this.state.restaurants.filter(
      data => data.id === restaurantFilter.id
    );
    if (filteredRestaurants.length === 1) {
      this.setState({
        restaurants: [...filteredRestaurants]
      });
    }
  };

  searchBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value, 10);
    this.checkRestaurantId({ id });
  };

  fetchRestaurants = async () => {
    const response = await getRestaurants();
    return response;
  };

  refresh = async () => {
    const originalData = await this.fetchRestaurants();
    this.setState({
      restaurants: originalData
    });
  };

  async componentDidMount() {
    const data = await this.fetchRestaurants();
    this.setState({
      restaurants: data
    });
  }

  render() {
    return (
      <>
        <label>
          <input onChange={this.searchBox} />
          <button onClick={this.refresh}>Clear</button>
        </label>
        <Container>
          {this.state.restaurants.map(row => (
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

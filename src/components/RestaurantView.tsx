import * as React from "react";
import styled from "styled-components";

import { getRestaurants } from "../utils/fetcher";
import { IRestaurant } from "../utils/restaurants";

interface IRestaurantViewState {
  restaurants: IRestaurant[];
}

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const Icon = styled.span`
  margin: 7px;
`;
const Text = styled.p`
  margin: 0;
  padding: 0;
`;

export class Restaurant extends React.Component {
  state: IRestaurantViewState = {
    restaurants: []
  };

  findRestaurantById = (id: number): void => {
    if (id === undefined) {
      return;
    }
    const restaurant = this.state.restaurants.find(data => {
      return data.id === id;
    });
    if (restaurant) {
      this.setState({
        restaurants: [restaurant]
      });
    }
  };

  onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value, 10);
    this.findRestaurantById(id);
  };

  fetchRestaurants = async () => {
    this.setState({
      restaurants: await getRestaurants()
    });
  };

  async componentDidMount() {
    this.fetchRestaurants();
  }

  listItem = ({ id, name, rating, dogFriendly }: IRestaurant): JSX.Element => {
    return (
      <li key={id}>
        <h2>{name}</h2>
        <Text>
          {rating}
          <Icon role="img" aria-label="star">
            ⭐️
          </Icon>
        </Text>
        {dogFriendly && (
          <Text>
            <Icon role="img" aria-label="dog">
              🐶
            </Icon>
            friendly
          </Text>
        )}
      </li>
    );
  };

  render() {
    return (
      <>
        <label>
          Search by id:
          <input onChange={this.onSearchInputChange} />
        </label>
        <button onClick={this.fetchRestaurants}>Clear</button>
        <Container>{this.state.restaurants.map(this.listItem)}</Container>
      </>
    );
  }
}

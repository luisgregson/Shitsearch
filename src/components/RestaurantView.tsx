import * as React from "react";
import styled from "styled-components";

import { getRestaurants } from "../utils/fetcher";
import { IRestaurant } from "../utils/restaurants";
import RestaurantItem from "../components/RestaurantItem";
import SearchBox from "../components/SearchBox";

interface IRestaruantViewState {
  restaurants: IRestaurant[];
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

  componentDidMount = async (): Promise<void> => await this.refresh();

  checkRestaurantId = (id: number | undefined): void => {
    if (!id) {
      return;
    }
    const restaurants = this.state.restaurants.filter(data => data.id === id);
    this.setState({ restaurants });
  };

  searchBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const id = parseInt(e.target.value, 10);
    this.checkRestaurantId(id);
  };

  refresh = async (): Promise<void> => {
    try {
      const PRestaurantData = await getRestaurants();
      this.setState({
        restaurants: PRestaurantData
      });
    } catch (err) {
      console.log(err);
      // Or: throw new Error(err);
    }
  };

  render() {
    return (
      <>
        <SearchBox inputChange={this.searchBox} refresh={this.refresh} />
        <Container>
          {this.state.restaurants.map((row: IRestaurant) => (
            <RestaurantItem restaurant={row} key={row.id} />
          ))}
        </Container>
      </>
    );
  }
}

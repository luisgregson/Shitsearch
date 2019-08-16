import * as React from "react";

import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import { Container } from "./RestaurantView.css";
import { Restaurant } from "../utils/restaurants";

import { getRestaurants } from "../utils/fetcher";

const Fragment = React.Fragment;

export interface IRestaruantViewState {
  restaurants: Restaurant[];
}

export class RestaurantView extends React.Component<{}, IRestaruantViewState> {
  state = {
    restaurants: []
  };

  checkRestaurantId = (id: number): void => {
    const restaurants = this.state.restaurants.filter(data => data.id === id);
    if (restaurants.length) {
      this.setState({
        restaurants
      });
    }
  };

  search = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value) {
      const id = parseInt(e.target.value, 10);
      this.checkRestaurantId(id);
    } else {
      this.getData();
    }
  };

  getData = async (): Promise<void> => {
    const restaurants = await getRestaurants();
    this.setState({
      restaurants
    });
  };

  async componentDidMount(): Promise<void> {
    await this.getData();
  }

  render() {
    return (
      <Fragment>
        <Search onSearch={this.search} clearSearch={this.getData} />
        <Container>
          <Restaurants restaurants={this.state.restaurants} />
        </Container>
      </Fragment>
    );
  }
}

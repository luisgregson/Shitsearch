import * as React from "react";

import { RestaurantView } from "./RestaurantView";

export const App = () => (
  <div className="App">
    <h1>Welcome to Typescript shitsearch</h1>
    <p>
      The idea is see if you can improve the readability and maintainability of
      the code.
    </p>
    <p>
      Currently the code works fine, but there are some improvements that we can
      make.
    </p>
    <p>Fork this sandbox and make it better!</p>
    <RestaurantView />
  </div>
);

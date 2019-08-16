export type IRestaurant = {
  id: number;
  name: string;
  address: string;
  cuisine: string[];
  dogFriendly: boolean;
  veganOptions: boolean;
  rating: number;
};

export const restaurants = [
  {
    id: 1,
    name: "Mumtaz",
    address: "Chadwick Street, 1 & 2 Mackenzie House, Leeds LS10 1PJ",
    cuisine: ["Indian", "Asian", "Balti", "Pakistani"],
    dogFriendly: false,
    veganOptions: true,
    rating: 5
  },
  {
    id: 2,
    name: "Salami & Co",
    address: "10 Market Place, Otley, Leeds LS21 3AQ England",
    cuisine: ["Cafe", "British"],
    dogFriendly: true,
    veganOptions: true,
    rating: 5
  },
  {
    id: 3,
    name: "LS6 Cafe",
    address: "16A Headingley Lane, Leeds LS6 2AS England",
    cuisine: ["British", "Cafe", "International"],
    dogFriendly: true,
    veganOptions: true,
    rating: 4
  },
  {
    id: 4,
    name: "Gaucho",
    address: "21-22 Park Row, Leeds LS1 5JF England",
    cuisine: ["Steakhouse", "Argentinian"],
    dogFriendly: false,
    veganOptions: false,
    rating: 3
  },
  {
    id: 5,
    name: "Viet Guy",
    address: "159 Lower Briggate, Leeds LS1 6LY England",
    cuisine: ["Asian", "Vietnamese"],
    dogFriendly: false,
    veganOptions: true,
    rating: 4.5
  },
  {
    id: 6,
    name: "The Brunswick",
    address: "82 North Street, Leeds LS2 7PN England",
    cuisine: ["Bar", "British", "Pub"],
    dogFriendly: true,
    veganOptions: true,
    rating: 4
  }
] as Restaurant[];

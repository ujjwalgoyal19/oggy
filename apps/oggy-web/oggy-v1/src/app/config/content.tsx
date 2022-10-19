export const Home = {
  Hero: {
    Heading: 'The best discounts in your city.',
    SubHeading:
      'Find your favorite food and restaurant and leave all your worries about money with us.',
  },
  Chain: {
    Heading: 'Top chains in Jaipur',
  },
  Locality: {
    Heading: 'Localities in Jaipur',
  },
  HeroSectionChainsJaipur: [
    {
      name: 'Burger Farm',
      image: 'assets/images/burgerFarmL.webp',
    },
    {
      name: 'Baskin Robbins',
      image: 'assets/images/baskinRobinsL.webp',
    },
    {
      name: 'Cafe Coffee Day',
      image: 'assets/images/cafeCoffeDayL.webp',
    },
    {
      name: "Domino's Pizza",
      image: 'assets/images/dominosPizzaL.webp',
    },
    {
      name: 'Kebabs & Curries Company',
      image: 'assets/images/kebabAndCurriesL.webp',
    },
    {
      name: 'Love Over Coffee',
      image: 'assets/images/loveOverCoffeeL.webp',
    },
    {
      name: 'Subway',
      image: 'assets/images/subwayL.webp',
    },
  ],
  HeroSectionLocalitiesJaipur: [
    {
      name: 'Mansarovar',
      totalRestaurant: '1693',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/mansarovar',
      url: 'http://oggyapi.herokuapp.com/mapi/restaurants?type=locality',
    },
    {
      name: 'Vaishali Nagar',
      totalRestaurant: '1611',
      image:
        'https://cdn.oggy.co.in/jaipur/images/localities/vaishaliNagar.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Vidhyadhar Nagar',
      totalRestaurant: '1464',
      image:
        'https://cdn.oggy.co.in/jaipur/images/localities/vidhyadharNagar.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Malviya Nagar',
      totalRestaurant: '1371',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/malviyaNagar.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'C Scheme',
      totalRestaurant: '1334',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/cScheme.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Pratap Nagar',
      totalRestaurant: '1089',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/pratapNagar.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Raja Park',
      totalRestaurant: '883',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/rajaPark.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Tonk Road',
      totalRestaurant: '841',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/tonkRoad.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Sodala',
      totalRestaurant: '481',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/sodal.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Bani Park',
      totalRestaurant: '307',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/baniPark.jpeg',
      url: 'http://hello.com/',
    },
    {
      name: 'Pink City',
      totalRestaurant: '310',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/pinkCity.jpg',
      url: 'http://hello.com/',
    },

    {
      name: 'Gopalpura',
      totalRestaurant: '253',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/gopalpura.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Sindhi Camp',
      totalRestaurant: '292',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/sindhiCamp.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Sikar Road',
      totalRestaurant: '221',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/sikarRoad.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Amer Road',
      totalRestaurant: '203',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/amerRoad.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'MI Road',
      totalRestaurant: '194',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/miRoad.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Kukas',
      totalRestaurant: '82',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/kukas.jpg',
      url: 'http://hello.com/',
    },
    {
      name: 'Achrol',
      totalRestaurant: '3',
      image: 'https://cdn.oggy.co.in/jaipur/images/localities/achrol.jpg',
      url: 'http://hello.com/',
    },
  ],
};

export const SearchBarLocationPlaceholder = 'Location';
export const SearchBarRestaurantPlaceholder =
  'Search for restaurant, cuisine, and more!';

export const SortOptions = [
  {
    command: 'SORT_BY=alphabetic',
    text: 'Alphabetic',
  },
  {
    command: 'SORT_BY=zomato_delivery_rating',
    text: 'Rating: Zomato Delivery',
  },
  {
    command: 'SORT_BY=zomato_dining_rating',
    text: 'Rating: Zomato Dining',
  },
  {
    command: 'SORT_BY=swiggy_rating',
    text: 'Rating: Swiggy',
  },
  {
    command: 'SORT_BY=dineout_rating',
    text: 'Rating: Dineout',
  },
  {
    command: 'SORT_BY=eazydiner_rating',
    text: 'Rating: Eazydiner',
  },
];

export const MoreFilterOptions = [
  {
    command: 'isVeg=true',
    text: 'Vegetarian Restaurant',
  },
  {
    command: 'isDining=true',
    text: 'Dining',
  },
  {
    command: 'isDeliver=true',
    text: 'Delivery',
  },
  {
    command: 'isNightlife=true',
    text: 'Nightlife',
  },
];

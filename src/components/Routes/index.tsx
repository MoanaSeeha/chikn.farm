import IRoute from "./IRoute"

const Routes:IRoute[] = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/mint',
    title: 'Mint'
  },
  {
    title: 'Chikn',
    sub_route: [
      {
        path: 'roost',
        title: 'Roost'
      },
      {
        path: 'leaderboard',
        title: 'Leaderboard'
      }
    ]
  },
  {
    title: 'FarmLand',
    sub_route: [
      {
        path: 'roost',
        title: 'LP Farm'
      },
      {
        path: 'leaderboard',
        title: 'Tiles / Traits'
      }
    ]
  },
  {
    title: 'Wallet',
    sub_route: [
      {
        path: 'roost',
        title: 'Chikn'
      },
      {
        path: 'leaderboard',
        title: 'FarmLand'
      }
    ]
  },
  {
    title: 'Market',
    sub_route: [
      {
        path: 'roost',
        title: 'Chikn'
      },
      {
        path: 'leaderboard',
        title: 'FarmLand'
      }
    ]
  },
];

export default Routes;
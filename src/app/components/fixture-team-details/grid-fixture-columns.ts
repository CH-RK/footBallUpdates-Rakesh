export const fixtureGridColumns = [
  {
    headerName: '',
    field: 'teams.home.logo',
    width: 100,
    cellRenderer: (params: {
      data: { teams: { home: { logo: ImageData } } };
    }) =>
      `<img style="height: 25px; width: 25px" src=${params.data.teams.home.logo} />`,
  },
  { headerName: '', field: 'teams.home.name', width: 250 },
  { headerName: '', field: 'score.fulltime.home', width: 100 },
  { headerName: '', field: '', valueFormatter: () => `-`, width: 75 },
  { headerName: '', field: 'score.fulltime.away', width: 100 },
  {
    headerName: '',
    field: 'teams.away.logo',
    width: 100,
    cellRenderer: (params: {
      data: { teams: { away: { logo: ImageData } } };
    }) =>
      `<img style="height: 25px; width: 25px" src=${params.data.teams.away.logo} />`,
  },
  { headerName: '', field: 'teams.away.name', width: 250 },
];

import { LinkrenderComponent } from '../linkrender/linkrender.component';

export const gridColums = [
  { headerName: '', field: 'rank', width: 75 },
  {
    headerName: '',
    field: 'team.logo',
    width: 100,
    cellRenderer: (params: { data: { team: { logo: ImageData } } }) =>
      `<img style="height: 25px; width: 25px" src=${params.data.team.logo} />`,
  },
  { headerName: 'Name', cellRenderer: LinkrenderComponent },
  { headerName: 'Games', field: 'all.played', width: 100 },
  { headerName: 'W', field: 'all.win', width: 100 },
  { headerName: 'L', field: 'all.lose', width: 100 },
  { headerName: 'D', field: 'all.draw', width: 100 },
  { headerName: 'Goal Difference', field: 'goalsDiff', width: 150 },
  { headerName: 'Points', field: 'points', width: 100 }
];

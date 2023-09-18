export interface standingsData {
  rank: number;
  team: team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: all;
  home: home;
  away: away;
  update: string;
}

export interface responseObj {
  get: string;
  parameters: parameters[];
  errors: errors[];
  results: number;
  paging: paging[];
  response: LeagueData[];
}
export interface resObj {}

export interface LeagueData {
  league: leagueObj
}
export interface leagueObj {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: standingsData[];
} 
export interface errors {
  token: string;
}
export interface paging {
  current: number;
  total: number;
}
export interface parameters {
  league: string;
  season: string;
}
export interface team {
  id: number;
  name: string;
  logo: string;
}
export interface all {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
}
export interface home {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
}

export interface away {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
}

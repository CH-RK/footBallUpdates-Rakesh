export class StandingsData {
  rank!: number;
  team!: {
    id: number;
    name: string;
    logo: string;
  };
  points!: number;
  goalsDiff!: number;
  group!: string;
  form: string | undefined;
  status: string | undefined;
  description: string | undefined;
  all!: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  home:
    | {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      }
    | undefined;
  away:
    | {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      }
    | undefined;
  update: string | undefined;
}

export interface responseObj {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: {
    token: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: LeagueData[];
}

export interface LeagueData {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: StandingsData[];
  };
}

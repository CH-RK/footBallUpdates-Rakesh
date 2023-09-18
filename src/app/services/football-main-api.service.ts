import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FootballMainApiService {
  private API = 'https://v3.football.api-sports.io';
  private readonly currentYear: number = new Date().getFullYear(); // Get the current year
  private readonly leagueId: any = {
    england: 39,
    spain: 107,
    germany: 78,
    itlay: 71,
    france: 61,
  };
  public prevSelectedLeague = '';
  constructor(private http: HttpClient) {}

  getStandingsData(
    league: string,
    season: string = this.currentYear.toString()
  ) {
    this.prevSelectedLeague = league;
    return this.http
      .get(
        `${this.API}/standings?league=${this.leagueId[league]}&season=${season}`
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getTopListTeams(
    teamId: Number,
    season: string = this.currentYear.toString()
  ) {
    return this.http
      .get(`${this.API}/fixtures?team=${teamId}&season=${season}&last=10`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FootballMainApiService {
  private API = 'https://v3.football.api-sports.io';
  private apiKey = 'e0a692b30e2fcd4c5eb86e5acd620b1a';
  // private apiKey = '59c374a599ebc97a6f6b6ec5fa2dd68e';
  // private apiKey = '';
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
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io/fixtures',
      'x-rapidapi-key': this.apiKey,
    });
    return this.http
      .get(
        `${this.API}/standings?league=${this.leagueId[league]}&season=${season}`,
        { headers }
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
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io/fixtures',
      'x-rapidapi-key': this.apiKey,
    });

    return this.http
      .get(`${this.API}/fixtures?team=${teamId}&season=${season}&last=10`, {
        headers,
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}

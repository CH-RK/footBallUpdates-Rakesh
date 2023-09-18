import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  HttpClient,
  HttpResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { resObj, responseObj } from '../models/league';
import { responseObjFixtures } from '../models/fixturemodel';

@Injectable({
  providedIn: 'root',
})
export class FootballMainApiService {
  private API = 'https://v3.football.api-sports.io';
  private readonly currentYear: number = new Date().getFullYear(); // Get the current year
  private readonly leagueId: { [league: string]: number } = {
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
  ): Observable<responseObj> {
    this.prevSelectedLeague = league;
    return this.http.get<responseObj>(
      `${this.API}/standings?league=${this.leagueId[league]}&season=${season}`
    );
  }

  getTopListTeams(
    teamId: Number,
    season: string = this.currentYear.toString()
  ): Observable<responseObjFixtures> {
    return this.http.get<responseObjFixtures>(
      `${this.API}/fixtures?team=${teamId}&season=${season}&last=10`
    );
  }
}

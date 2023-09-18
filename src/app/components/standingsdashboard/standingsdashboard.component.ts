import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FootballMainApiService } from 'src/app/services/football-main-api.service';
import { tabData } from './standings-data';
import { gridColums } from './grid-colums';
import { ColDef } from 'ag-grid-community';
import {
  LeagueData,
  leagueObj,
  responseObj,
  standingsData,
} from 'src/app/models/league';

@Component({
  selector: 'app-standingsdashboard',
  templateUrl: './standingsdashboard.component.html',
  styleUrls: ['./standingsdashboard.component.css'],
})
export class StandingsdashboardComponent {
  background: ThemePalette = undefined;
  links = tabData;
  activeLink = this.links[0];
  public columnDefs: ColDef[] = gridColums;
  public rowData: standingsData[] = [];
  leagues: LeagueData[] = [];
  isVisible: boolean = false;
  allData: any = [];
  constructor(private footBallApi: FootballMainApiService) {}

  ngOnInit(): void {
    const leagueKey = this.footBallApi.prevSelectedLeague
      ? this.footBallApi.prevSelectedLeague
      : 'england';
    this.getStandings(leagueKey);
    this.links.forEach((element) => {
      console.log(element);
      if (element.apiDef == this.footBallApi.prevSelectedLeague) {
        this.activeLink = element;
      }
    });
  }

  getStandings(country: string) {
    this.footBallApi
      .getStandingsData(country)
      .subscribe((data: responseObj) => {
        if (data.response.length) {
          this.allData = data.response[0].league.standings;
          this.rowData = this.allData[0];
        }
        this.isVisible = this.rowData.length ? true : false;
      });
  }
}

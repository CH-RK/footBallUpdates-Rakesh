import { Component } from '@angular/core';
import { fixtureGridColumns } from './grid-fixture-columns';
import { FootballMainApiService } from 'src/app/services/football-main-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-fixture-team-details',
  templateUrl: './fixture-team-details.component.html',
  styleUrls: ['./fixture-team-details.component.css']
})
export class FixtureTeamDetailsComponent {
  public columnDefs: ColDef[] = fixtureGridColumns;
  public rowData = [];
  public teamId: number | undefined;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public footBallAPI: FootballMainApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamId = +params['teamId'];
      this.getTeamFixtures(this.teamId);
    });
  }
  getTeamFixtures(teamId: Number) {
    this.footBallAPI.getTopListTeams(teamId).subscribe((data: any) => {
      this.rowData = data.response;
      // this.country = data.response[0].league.id;
      console.log(data);
    });
  }
}

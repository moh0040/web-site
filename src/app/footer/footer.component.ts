import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public stackoverflowUrl: string = '#';
  public linkedinUrl: string = 'https://www.linkedin.com/in/saeed-sharifi-096404125/';
  public fiverrUrl:string = '#';
  public facebookUrl:string = '#';
  public twitterUrl:string = '#';
  public githubUrl:string = '#';
  public googleUrl:string = '#';
  constructor() { }

  ngOnInit() {
  }

}

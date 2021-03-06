import { Component, OnInit } from '@angular/core';
import { GithubServiveService} from "../github-servive.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any;
  repos: any;
  username: any;

  constructor(private githubService: GithubServiveService) { 
    this.githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }
  search() {
    this.githubService.updateUsername(this.username);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }

  ngOnInit(): void {
  }

}

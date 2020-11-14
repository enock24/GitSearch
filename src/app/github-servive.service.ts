import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubServiveService {
  private username = 'enock24';
  private client_id = '63dfe85bfb7e45c1bf7c';
  private client_secret = '5fc741695a48cb7584d1afb9649cfb8d243b8db6';

  constructor(private http: HttpClient) { 
    console.log("Github service started");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "/repos" +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}


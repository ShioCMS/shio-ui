import { Component, OnInit } from '@angular/core';
import { faHome, faCubes, faPlay, faCogs, faSlidersH, faBook, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faSlack, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  faHome = faHome;
  faCubes = faCubes;
  faPlay = faPlay;
  faCogs = faCogs;
  faSlidersH = faSlidersH;
  faBook = faBook;
  faSlack = faSlack;
  faGithub = faGithub;
  faPowerOff = faPowerOff;

  constructor() { }

  ngOnInit(): void {
  }

}

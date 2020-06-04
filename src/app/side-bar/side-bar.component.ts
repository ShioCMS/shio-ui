/*
 * Copyright (C) 2016-2020 the original author or authors. 
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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

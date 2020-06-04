import { Component } from '@angular/core';
import { faSitemap, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { Site, SiteData } from '../core/site/site.service';
@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent {
  faSitemap = faSitemap;
  faFileImport = faFileImport;

  sites: SiteData[];
  orderProp: string;

  constructor(site: Site) {
    site.query().subscribe(sites => {
      this.sites = sites;
    });
    this.orderProp = 'name';
  }

  getSites(): SiteData[] {
    return this.sites;
  }
}
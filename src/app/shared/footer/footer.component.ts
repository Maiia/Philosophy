import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ISocials } from '../../interfaces/i-socials';
import { AboutService } from '../../services/about.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  archivePeriods: any;
  archivePeriodsShown = [];

  socialsArr: Array<ISocials> = [];

  footerMessage: string;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private aboutService: AboutService,
  ) {
    this.gerBlogArchivesPeriod();

    this.getSocial();
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {

        const routeData = this.router.config.find(pathItem => pathItem.path === this.router.url.replace('/', '')) || null;

        if (routeData) {
          this.footerMessage = routeData.data.footer_message;
        }
      }
    });
  }

  getSocial() {
    this.aboutService.getAbout().subscribe (
      (data: any) => this.socialsArr = data['social'],
      error => console.log('error', error),
      () => console.log('success')
    );
  }

  gerBlogArchivesPeriod() {
    this.blogService.getBlog().subscribe(
      (data: any) => {
        const arr = data.map(item => {
          return `${new Date(item.date).getMonth()}.1.${new Date(item.date).getFullYear()}`;
        });
        this.archivePeriods = Array.from(new Set(arr).values());

        this.archivePeriodsShown.push(...this.archivePeriods);
        this.archivePeriodsShown.splice(6);
      },
      error => console.log('error', error),
      () => console.log('success blog')
    );
  }

  showAll(evt) {
    this.archivePeriodsShown = [];
    this.archivePeriodsShown.push(...this.archivePeriods);
    evt.currentTarget.style.display = 'none';
  }

}

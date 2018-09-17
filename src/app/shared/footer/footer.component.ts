import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AllService } from '../../services/all.service';
import { ISocials } from '../../interfaces/i-socials';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  archivePeriods: any;
  archivePeriodsShown = [];

  socialsArr: Array<ISocials> = [];

  constructor(
    private blogService: BlogService,
    private allService: AllService,
  ) {
    this.gerBlogArchivesPeriod();

    this.getSocial();
  }

  ngOnInit() {
  }

  getSocial() {
    this.allService.getData().subscribe (
      data => this.socialsArr = data['about'],
      error => console.log('error', error),
      () => console.log('success')
    );
  }

  gerBlogArchivesPeriod() {
    this.blogService.getBlog().subscribe(
      data => {
        const arr = data['blog'].map(item => {
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

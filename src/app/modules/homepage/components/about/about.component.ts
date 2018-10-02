import { Component, OnInit } from '@angular/core';
import { IAbout } from '../../../../interfaces/i-about';
import { AboutService } from '../../../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  about: IAbout;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.aboutService.getAbout().subscribe(
      (data: any) => {
        this.about = data;
      },
      error => console.log('error', error),
      () => console.log('success')
    );
  }

}

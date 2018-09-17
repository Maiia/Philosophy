import { Component, OnInit } from '@angular/core';
import { AllService } from '../../../../services/all.service';
import { IAbout } from '../../../../interfaces/i-about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  about: IAbout;

  constructor(private allService: AllService) {}

  ngOnInit() {
    this.allService.getData().subscribe(
      data => {
        this.about = data['about'];
      },
      error => console.log('error', error),
      () => console.log('success')
    );
  }

}

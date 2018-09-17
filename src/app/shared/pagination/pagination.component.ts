import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnChanges {

  @Input() itemsArr: Array<Object>;
  @Input() itemsLength: number;
  @Output() itemsArrPaginated = new EventEmitter();

  pagContent: Array<number>;
  pagesAmount: number;
  pageCurrent: number;
  hasPagination = true;

  itemsArrPaginatedLokal: Array<Object> = [{}];

  constructor() {
    this.pagContent = [];
    this.pageCurrent = 1;
  }

  ngOnChanges() {
    if (this.itemsArr && this.itemsArr.length && this.itemsLength && this.itemsArr.length > this.itemsLength) {
      this.emitItemsArrPaginated();
      this.createPagination();
      this.hasPagination = true;

    } else {
      this.itemsArrPaginated.emit(this.itemsArr);
      this.hasPagination = false;

    }
  }

  createPagination() {
    this.pagesAmount = Math.ceil(this.itemsArr.length / this.itemsLength);

    this.pagContent = [];
    for (let i = 1; i <= this.pagesAmount; i++) {
      this.pagContent.push(i);
    }
  }

  onPagClick(pagItem) {
    this.pageCurrent = pagItem.target.innerText;
    this.emitItemsArrPaginated();
  }

  onPrevClick() {
    if (this.pageCurrent > 1) {
      this.pageCurrent--;
      this.emitItemsArrPaginated();
    }
  }

  onNextClick() {
    if (this.pageCurrent < this.pagesAmount) {
      this.pageCurrent++;
      this.emitItemsArrPaginated();
    }
  }

  emitItemsArrPaginated() {
    this.itemsArrPaginatedLokal = [];
    Object.assign(this.itemsArrPaginatedLokal, this.itemsArr);
    this.itemsArrPaginatedLokal = this.itemsArrPaginatedLokal.splice((this.pageCurrent - 1) * this.itemsLength, this.itemsLength);
    this.itemsArrPaginated.emit(this.itemsArrPaginatedLokal);
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() search: string;
  constructor() { }

  ngOnInit() {
  }

  onClick(search: HTMLInputElement,) {
    console.log('search value: ', search.value);
  }

}

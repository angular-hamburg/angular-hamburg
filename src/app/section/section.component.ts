import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['../variables.css', './section.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SectionComponent implements OnInit {

  @Input() public title: string;
  @Input() public text?: string;
  @Input() public content: string;
  @Input() public contentClassName: string;

  constructor() { }

  ngOnInit() {
  }

}

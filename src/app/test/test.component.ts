import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input("data") public name;

  constructor() { }

  ngOnInit() {
  }
  onclick(v)
  {
    console.log(v);
  }
}

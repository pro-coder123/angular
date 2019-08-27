import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input("data") public name;
  @Output() public chevent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  fireevent()
  {
    this.chevent.emit("Event in test module");
  }

  onclick(v)
  {
    console.log(v);
  }
}

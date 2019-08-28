import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input("data") public name;
  @Output() public chevent = new EventEmitter;


  public data = [];

  constructor(private _s : ServiceService) { }

  ngOnInit() {
    this.data=this._s.getThings();
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

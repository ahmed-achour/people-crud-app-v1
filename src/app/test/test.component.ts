import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  name = "ahmed"
  imageUrl = "assets/images/logo.svg"
  ngOnInit(): void {
  }
  hello(myname: string){
    alert('hello '+ myname)
  }

}

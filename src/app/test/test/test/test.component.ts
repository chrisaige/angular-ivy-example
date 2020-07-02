import { Component, OnInit } from '@angular/core';
import {TestKeyDTO} from '../../../definitions/objects';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private key: TestKeyDTO;
  private keys: Array<TestKeyDTO>;


  constructor() { }

  ngOnInit(): void {
  }

}

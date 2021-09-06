import {Component, OnInit} from '@angular/core';
import {Reader} from "../reader";
import {ReaderService} from '../reader.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.scss']
})
export class ReadersComponent implements OnInit {

  readers: Reader[];

  constructor(
    private readerService: ReaderService,
    private location: Location
    ) {
  }

  ngOnInit(): void {
    this.readerService.getReaders()
      .subscribe(readers => this.readers = readers );
  }

  addReader(){                                              //addReader(): void {
    const newReader = {id:7, name: 'Rick Martin'};
    this.readerService.createReader(newReader)
      .subscribe(dataReader => console.log(dataReader) );
  }

  goBack(): void {
    this.location.back();
  }

}

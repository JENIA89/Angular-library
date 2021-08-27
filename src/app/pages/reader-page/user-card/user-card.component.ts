import {Component, OnInit} from '@angular/core';
import {Reader} from '../reader';
import {ReaderService} from "../reader.service";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  // readers: Reader[];
  reader: Reader;
  picture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNq-fhMeQRIAFfcfgPFaQDO8yTQ_SOW1-6raA_0HgiiKDJTV0TkDiojPT98h40g8T4FAk&usqp=CAU'

  constructor(
    private route: ActivatedRoute,
    private readerService:ReaderService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getReader();
    // this.deleteReader
  }

  getReader(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.readerService.getReader(id)
      .subscribe(reader => this.reader = reader);

    // this.readerService.getReaders()
    //   .subscribe(readers => this.readers = readers );
  }

  // deleteReader():void{
  //   //const id = +this.route.snapshot.paramMap.get('id')
  //   this.readerService.delete(id)
  //     .subscribe(()=>{
  //     this.readers = this.readers.filter(r=> r.id !== id)
  //     })
  // }
  goBack(): void {
    this.location.back();
  }
}

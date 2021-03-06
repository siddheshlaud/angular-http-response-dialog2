import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResponseData } from '../model/response-data';

@Component({
  selector: 'app-http-dialog',
  templateUrl: './http-dialog.component.html',
  styleUrls: ['./http-dialog.component.css']
})
export class HttpDialogComponent implements OnInit {

 constructor(
    public dialogRef: MatDialogRef<HttpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResponseData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    
  }

}
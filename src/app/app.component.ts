import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HttpDialogComponent } from './http-dialog/http-dialog.component';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  status: string;
  message: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(HttpDialogComponent, {
      width: '500px',
      data: {status: this.status, message: this.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

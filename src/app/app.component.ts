import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HttpDialogComponent } from './http-dialog/http-dialog.component';
import { ResponseData } from './model/response-data.model';
import { PostService } from './post.service';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  status: string;
  message: string;

  private responseSubscription: Subscription;

  constructor(public dialog: MatDialog, private postService: PostService) {}

  openDialog(responseData: ResponseData): void {
    const dialogRef = this.dialog.open(HttpDialogComponent, {
      width: '500px',
      data: {status: responseData.status, message: responseData.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  sendPost(): void {
    this.postService.postMessage(this.status, this.message);

    this.responseSubscription = this.postService.responseStatus.subscribe(
      responseData => {
        this.openDialog(responseData);
      }
    );
  }



}

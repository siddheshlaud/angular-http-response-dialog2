import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './model/post.model';
import { ResponseData } from './model/response-data.model';

@Injectable()
export class PostService {
  responseData: ResponseData;
  responseStatus: Subject<ResponseData> = new Subject<ResponseData>();

  constructor(private http: HttpClient) { }

  postMessage(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    
    this.http
      .post<{ name: string }>(
        "https://angular-recipe-61972.firebaseio.com/posts.json",
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData); 
          this.responseData = { status: responseData.status, message: responseData.statusText };
          //console.log(responseData.body);
          this.responseStatus.next(this.responseData);
        },
        error => {
          console.log(error);
          //this.responseStatus.next(error.message);
          this.responseData = { status: error.status, message: error.statusText };
          this.responseStatus.next(this.responseData);
        }
      );
  }


}
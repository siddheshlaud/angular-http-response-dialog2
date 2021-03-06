import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResponseData } from './model/response-data';

@Injectable()
export class PostService {
  errorStatus: Subject<ResponseData> = new Subject<ResponseData>();

  constructor(private http: HttpClient) { }

}
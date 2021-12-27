import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../transaction.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = "http://localhost:7777/api/transactions";

  constructor(private http: HttpClient) { }

  sendTransaction(): Observable<Transaction> | null {
    return null;
  }

}

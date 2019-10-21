import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenudataService {
  url: string = "https://dc2c12b1.ngrok.io/api/Settings/getDocumentType";
  delUrl: string =
    "https://dc2c12b1.ngrok.io/api/Settings/DeleteDocumentType?DocumentType=";
  addUrl: string =
    "https://dc2c12b1.ngrok.io/api/Settings/InsUpdateDocumentType";

  constructor(private _http: HttpClient) { }
  getAlldesignations() {
    return this._http.get(this.url);
  }
  getDeleteData(DesignationId) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.delUrl + DesignationId.id, { headers: head });
  }
  adduser(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.addUrl, body, { headers: head });
  }
  editdesignation(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.addUrl, body, { headers: head });
  }
}



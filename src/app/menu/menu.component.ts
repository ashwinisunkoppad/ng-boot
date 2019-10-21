import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "./menu";
import { MenudataService } from '../menudata.service';
import { ContextMenuComponent } from 'ngx-contextmenu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // name = 'Angular';
  // public items = [
  //     { name: 'John', otherProperty: 'Foo' },
  //     { name: 'Joe', otherProperty: 'Bar' }
  // ];
  @ViewChild  (ContextMenuComponent,  {static:true}) public basicMenu: ContextMenuComponent;

  showMessage(message: any) {
    console.log(message);
  }

  arr: User[] = [];
  salary: number;
  name: string;
  id: string;
  description: string;
  isactive: string;
  config: any;
  collection =  [] ;

  constructor( private _data: MenudataService,) {

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.collection.length
    };
  }

  ngOnInit() {
    this.getAlldesignations();
  }
  public getAlldesignations() {
    this._data.getAlldesignations().subscribe((data: User[]) => {
      this.arr = data;
    });
  }
  onUserSave(f) {
    this._data.adduser(f.value).subscribe((data: any) => {
      this._data.getAlldesignations().subscribe((data: User[]) => {
        this.arr = data;
      });
      alert("designation Addded ");
    });
    this.getAlldesignations();
  }

  editEmployee(editData) {
    this.id = editData.id;
    this.name = editData.name;

    this.description = editData.description;
    this.isactive = editData.isactive;
  }

  descUpdate(f1) {
    var req = {
      id: this.id,
      name: f1.value.name,
      Description: f1.value.description,
      isactive: f1.value.isactive
    };
    console.log(req);
    this._data.adduser(req).subscribe((data: any) => {
      this._data.getAlldesignations().subscribe((data: any[]) => {
        this.arr = data;
      });
      alert("record edited");
    });
  }

  onDelete(id: number) {
    console.log(id);
    this._data.getDeleteData(id).subscribe((data: User) => {
      this.ngOnInit();
      alert("deleted");
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }


}

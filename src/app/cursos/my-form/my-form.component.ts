import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from '../cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  urlSubscribe: Subscription;
  id = '';
  
  constructor(
    private CursosService: CursosService,
    private ActivatedRoute: ActivatedRoute,
    private Router: Router
  ) { }

  ngOnInit() {
    this.urlSubscribe = this.ActivatedRoute.params.subscribe((params: any) => {
      this.getItem(params['id']);
      
    })
  }

  newItem = {name: '', price: 0, category: ''}

  createItem(){
		this.CursosService.createItem(this.newItem);
		this.newItem = {name: '', price: 0, category: ''};
  }
  
  getItem(id){
    if(id){
      this.newItem = this.CursosService.myList.find(item => item.name === id);
    }else{
      this.newItem = {name: '', price: 0, category: ''};
    }
  }
}

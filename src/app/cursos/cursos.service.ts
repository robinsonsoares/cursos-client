import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  myList = [
		{
			name: 'Angular',
			price: 140,
			category: 'Front-End'
		},
		{
			name: 'Express',
			price: 180,
			category: 'Back-End'
		}
	]

	createItem(newItem){
		this.myList.push(newItem);
	}

	removeItem(item){
		var index = this.myList.indexOf(item);
		this.myList.splice(index, 1);
	}

}

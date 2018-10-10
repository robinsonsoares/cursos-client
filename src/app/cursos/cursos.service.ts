import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CursosService {

	constructor(
		private Http: Http
	) { }

	myList = []
	private api = 'http://localhost:3000/cursos/'

	findAll() {
		this.Http.get(this.api)
			.subscribe(response => {
				this.myList = response.json();				
			})
	}
	
	createItem(newItem) {
		this.Http.post(this.api, newItem)
			.subscribe(response => {
				this.myList.push(response.json())
			})		
	}

	removeItem(item) {
		this.Http.delete(`${this.api}${item._id}`)
			.subscribe(response => {
				if(response.json().message === 'success'){
					var index = this.myList.indexOf(item);
					this.myList.splice(index, 1);
				}
			})		
		

	}

}

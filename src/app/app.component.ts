import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newItem = {name: '', price: 0, category: ''}

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

	createItem(){
		this.myList.push(this.newItem);
		this.newItem = {name: '', price: 0, category: ''};
	}

	removeItem(item){
		var index = this.myList.indexOf(item);
		this.myList.splice(index, 1);
	}
}

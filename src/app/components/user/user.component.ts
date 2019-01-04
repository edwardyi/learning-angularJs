import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = "王花花";
  age:number;
  address:Address;
  hobbies:string[];
  isToggleEdit = false;
  posts:Post;

  constructor(private dataService:DataService) {

  }

  onClick(){
    this.name = this.toggleName()
    this.hobbies[0] = this.toggleName()
  }
  toggleName(){
    return (this.name == "王花花") ? "李銓但" : "王花花";
  }
  addHobby(val){
    this.hobbies.unshift(val);
    val = '';
  }
  toggleEdit(){
    this.isToggleEdit = !this.isToggleEdit;
  }
  ngOnInit() {
    this.age = 30;
    this.address = {
      street: '台灣',
      city: '台北',
      state: 'TW'
    }
    this.hobbies = ['李銓但','看電影']

    this.dataService.getPosts().subscribe(posts=>{
      // console.log(posts);
      this.posts = posts;
    });
  }

}

interface Address {
  street:string,
  city: string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
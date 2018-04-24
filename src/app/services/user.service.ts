import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from './user.model';

@Injectable()
export class UserService {

  userList: AngularFireList<any>;
  selectedUser: User = new User();
  constructor(private firebase: AngularFireDatabase, ) { }

  getData() {
    this.userList = this.firebase.list('users');
    return this.userList;
  }

  insertUser(user: User){
    this.userList.push({
      name: user.email,
      password: user.password,
      role: user.role
    });
  }

  updateUser(user: User){
    this.userList.update(user.$key, {
      name: user.email,
      password: user.password,
      role: user.role
    });
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }

}

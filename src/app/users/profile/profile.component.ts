import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  mainUser: User = {
    userId: 0,
    userEmail: '',
    userName: '',
    userPassword: '',
    userFirstName: '',
    userLastName: '',
    userAddress: '',
    userType: '',
    userRemoved: false
  }

  editUser: User ={
    userId: 0,
    userEmail: '',
    userName: '',
    userPassword: '',
    userFirstName: '',
    userLastName: '',
    userAddress: '',
    userType: '',
    userRemoved: false
  }

  errorMsg = "";
  

  constructor(private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  // getuserInfo() {
  //   this.userService.getUserInfo(Number(sessionStorage.getItem("userId"))).subscribe(
  //     (response) => {
  //       this.mainUser = response;
  //       this.editUser.userId = response.id;
  //       this.editUser.userEmail = response.email;
  //       this.editUser.userPassword = response.password;
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //       this.errorMsg = "ERROR GETTING USER INFOMATION!!!";
  //     }
  //   );
  // }

}

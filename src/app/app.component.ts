import { Component, OnInit } from '@angular/core';
import { SocketService } from './chat/shared/services/socket.service';
import { RestService } from './chat/shared/services/rest.service';
import { UsersOutParam } from './chat/shared/model/usersOutParam';

@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: Array<UsersOutParam>;

  constructor(
    private socketClient: SocketService,
    private restClient: RestService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  private initModel(): void {
  }

  getContacts(): void {
    //get Contacts list.
    this.contacts = new Array<UsersOutParam>();
    if (this.socketClient.isLogin) {
      this.restClient.getUsers().subscribe((result) => {
        console.log("User list length:" + result.data.length);
        let loginUser = this.socketClient.loginUserId;
        result.data.forEach((contact) => {
          if (loginUser != contact.id) {
            this.contacts.push(contact);
          }
        });
      });
    }
  }
}

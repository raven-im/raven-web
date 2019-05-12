import { Component, OnInit } from '@angular/core';
import { SocketService } from './chat/shared/services/socket.service';
import { RestService } from './chat/shared/services/rest.service';

@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: Array<string>;

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
    this.contacts = new Array<string>();
    if (this.socketClient.isLogin) {
      this.restClient.getUsers().subscribe((result) => {
        console.log("User list length:" + result.data.length);
        result.data.forEach((contact) => {
          this.contacts.push(contact.name);
        });
      });
    }
  }
}

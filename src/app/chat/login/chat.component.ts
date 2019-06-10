import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { User } from '../shared/model/user';
import { SocketService } from '../shared/services/socket.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { DialogUserType } from '../dialog-user/dialog-user-type';
import { ContactService } from '../shared/services/contact.service';
import { UsersOutParam } from '../shared/model/usersOutParam';
import { Constants } from '../shared/utils/contants';
@Component({
  selector: 'tcc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: User;
  messageContent: string;
  dialogRef: MatDialogRef<DialogUserComponent> | null;
  defaultDialogUserParams: any = {
    disableClose: true,
    data: {
      title: 'Welcome',
      dialogType: DialogUserType.LOGIN
    }
  };

  constructor(
    private contactService: ContactService,
    private socketService: SocketService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initModel();
    // Using timeout due to https://github.com/angular/angular/issues/14748
    setTimeout(() => {
      this.openUserPopup(this.defaultDialogUserParams);
    }, 0);
  }

  private initModel(): void {
    this.user = {

    };
  }

  private initIoConnection(): void {
    this.socketService.initSocket();
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }

  public onClickUserInfo() {
    let uid = localStorage.getItem('user');
    let userDetail: UsersOutParam = this.contactService.getUserDetail(uid);
    let portrait = Constants.DEFAULT_PORTRAIT;
    if (userDetail != null && userDetail.portrait.length > 0) {
      portrait = userDetail.portrait;
    }
    this.openUserPopup({
      data: {
        username: this.user.name,
        title: this.user.name == null ? 'Welcome' : 'Profile',
        name: userDetail == null ? '' : userDetail.name,
        dialogType: this.user.name == null ? DialogUserType.LOGIN : DialogUserType.LOGOUT,
        portrait: portrait,
      }
    });
  }

  private openUserPopup(params): void {
    this.dialogRef = this.dialog.open(DialogUserComponent, params);
    this.dialogRef.afterClosed().subscribe(paramsDialog => {
      if (!paramsDialog) {
        return;
      }

      this.user.name = paramsDialog.username;
      if (paramsDialog.dialogType === DialogUserType.LOGIN) {
        this.initIoConnection();
      } else if (paramsDialog.dialogType === DialogUserType.LOGOUT) {
      }
    });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }
    this.messageContent = null;
  }
}

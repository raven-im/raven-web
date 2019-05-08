import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { RestService } from '../shared/services/rest.service';
import { LoginParam } from '../shared/model/loginParam';
import { DialogUserType } from './dialog-user-type';

@Component({
  selector: 'tcc-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {
  usernameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  previousUsername: string;
  showError: boolean;
  errMsg: string;

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public params: any,
    public restClient: RestService) {
    this.previousUsername = params.username ? params.username : undefined;
    this.showError = false;
  }

  ngOnInit() {
  }

  public onLogin(): void {
    let loginParam = new LoginParam(this.params.username, this.params.password);
    this.restClient.login(loginParam)
      .subscribe((loginResult) => {
        console.log('login code:', loginResult.code);
        if (loginResult.code === 10000) {
          // 1. save the response data in localstorage.
          localStorage.setItem('app-key', loginResult.data.appKey);
          localStorage.setItem('user', loginResult.data.uid);
          localStorage.setItem('token', loginResult.data.token);
          // 2.  get Access node from IM server.
          this.restClient.getAccess(loginResult.data.appKey, loginResult.data.token)
            .subscribe((accessResult) => {
              console.log('access code:', accessResult.code);
              if (accessResult.code === 10000) {
                console.log('access node:', accessResult.data.ip, accessResult.data.port);
                localStorage.setItem('access-node-ip', accessResult.data.ip);
                localStorage.setItem('access-node-port',  "" + accessResult.data.port);
                //close dialog.
                this.dialogRef.close({
                  username: this.params.username,
                  password: this.params.password,
                  dialogType: this.params.dialogType,
                  previousUsername: this.previousUsername
                });
              } else {
                this.showErrorMsg(accessResult.code);
              }
            });
        } else {
          this.showErrorMsg(loginResult.code);
        }
      });
  }

  public onLogout(): void {
    //TODO  logout.
    localStorage.removeItem('app-key');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('access-node-ip');
    localStorage.removeItem('access-node-port');

    this.dialogRef.close({
      dialogType: DialogUserType.LOGIN
    });
  }

  private showErrorMsg(code: number): void {
    this.showError = true;
    this.errMsg = this.restClient.showErrorMsg(code);
  }

  private resetErrorMsg(): void {
    this.showError = false;
    this.errMsg = "";
  }
}

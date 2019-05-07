import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
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
    var param = new LoginParam(this.params.username, this.params.password);
    this.restClient.login(param)
      .subscribe((result) => {
        console.log(result.code);
        if (result.code === 10000) {
          this.dialogRef.close({
            username: this.params.username,
            password: this.params.password,
            dialogType: this.params.dialogType,
            previousUsername: this.previousUsername
          });
        } else {
          this.showErrorMsg(result.code);
        }
      });
  }

  public onLogout(): void {
    //TODO  logout.
    this.dialogRef.close({
      dialogType: DialogUserType.LOGIN
    });
  }

  private showErrorMsg(code: number): void {
    this.showError = true;
    switch(code) {
      case 10101:
        this.errMsg = "Invalid Password";
        break;
      case 10102:
        this.errMsg = "Invalid Username";
        break;
      case 10103:
        this.errMsg = "User not found";
        break;
      case 10104:
        this.errMsg = "Password not match";
        break;
      case 10105:
        this.errMsg = "User disabled";
        break;
      default:
        this.errMsg = "Server error.";
    }
  }

  private resetErrorMsg(): void {
    this.showError = false;
    this.errMsg = "";
  }
}

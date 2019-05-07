import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { RestService } from '../shared/services/rest.service';
import { LoginParam } from '../shared/model/loginParam';

@Component({
  selector: 'tcc-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {
  usernameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  previousUsername: string;

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public params: any,
    public restClient: RestService) {
    this.previousUsername = params.username ? params.username : undefined;
  }

  ngOnInit() {
  }

  public onLogin(): void {
    var param = new LoginParam(this.params.username, this.params.password);
    this.restClient.login(param)
      .subscribe((result) => {
        console.log(result.code);
        if (result.code === 10000) {
          
        }
        this.dialogRef.close({
          username: this.params.username,
          password: this.params.password,
          dialogType: this.params.dialogType,
          previousUsername: this.previousUsername
        });
      });
  }

  public onLogout(): void {
    this.dialogRef.close({
      previousUsername: this.previousUsername
    });
  }
}

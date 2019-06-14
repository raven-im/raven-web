import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { RestService } from '../shared/services/rest.service';
import { LoginParam } from '../shared/model/loginParam';
import { DialogUserType } from './dialog-user-type';
import { ContactService } from '../shared/services/contact.service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

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
  fileToUpload: File = null;

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public params: any,
    public restClient: RestService,
    private router: Router,
    private restService: RestService,
    public contactService: ContactService) {
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
                localStorage.setItem('access-node', accessResult.data.ip);
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
          //3 init contacts
          this.contactService.getUsers();
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
    localStorage.removeItem('access-node');
    // this.contactService.clear();

    //TODO clean conversation list.

    this.dialogRef.close({
      dialogType: DialogUserType.LOGIN
    });
    this.router.navigateByUrl('/chat');
  }

  showErrorMsg(code: number): void {
    this.showError = true;
    this.errMsg = this.restClient.showErrorMsg(code);
  }

  resetErrorMsg(): void {
    this.showError = false;
    this.errMsg = "";
  }

  portraitClick():void {
    let fileUpload = document.getElementById('file_upload');
    fileUpload.click();
  }

  handleFileInput(files: FileList) {
    console.log("update portrait");
    this.fileToUpload = files.item(0);
    let uid = localStorage.getItem('user');
    this.restService.updatePortrait(this.fileToUpload, uid).subscribe(result => {
      console.log('upload result:', result.code);
      console.log('upload result:', result.data.url);
      this.params.portrait = result.data.url;
      this.contactService.setPortrait(uid, result.data.url);
      this.fileToUpload = null;
    }, error => {

    });
}
}

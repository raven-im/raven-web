import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.css']
})
export class ImgViewerComponent implements OnInit {

  imgUrl: string;

  constructor(
    public dialogRef: MatDialogRef<ImgViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public params: any
    ) {
      this.imgUrl = params.url;
    }

  ngOnInit() {
  }
}

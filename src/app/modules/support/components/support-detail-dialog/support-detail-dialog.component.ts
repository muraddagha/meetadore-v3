import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-support-detail-dialog',
  templateUrl: './support-detail-dialog.component.html',
  styleUrls: ['./support-detail-dialog.component.scss'],
})
export class SupportDetailDialogComponent implements OnInit {
  public dialogData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<SupportDetailDialogComponent>
  ) {
    this.dialogData = data.faq;
  }

  ngOnInit(): void {
    console.log(this.dialogData);
  }
}

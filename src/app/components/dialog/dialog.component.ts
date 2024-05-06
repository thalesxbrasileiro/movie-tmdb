import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  trailerUrl: SafeResourceUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>,
    private sanitizer: DomSanitizer
  ) {
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + data.trailerKey);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
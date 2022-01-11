import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMaterialModel } from '../../models/material.model';
import { SupportApiService } from '../../services/support-api.service';
import { SupportDetailService } from '../../services/support-detail.service';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

@Component({
  selector: 'app-support-materials',
  templateUrl: './support-materials.component.html',
  styleUrls: ['./support-materials.component.scss'],
})
export class SupportMaterialsComponent implements OnInit {
  public materials: IMaterialModel[] = [];
  public videoType: string = '100066113';
  public loader: boolean = true;
  constructor(
    private supportApiService: SupportApiService,
    private dialog: MatDialog,
    private supportDetailService: SupportDetailService
  ) {}

  ngOnInit(): void {
    this.getMaterials();
    this.supportDetailService.setNull();
  }

  public showModal($event: any, fileId: any) {
    $event.preventDefault();
    this.dialog.open(VideoDialogComponent, {
      panelClass: 'video-dialog',
      data: { fileId },
      maxHeight: '95vh',
    });
  }
  public getMaterials($event?: any) {
    if (
      $event != null &&
      $event.target.value.length > 2 &&
      $event.keyCode == 13
    ) {
      this.supportApiService
        .getTrainingMaterialListByCommon($event.target.value.toString())
        .subscribe(
          (res) => {
            this.loader = true;
            this.materials = res;
          },
          (err) => {},
          () => {
            this.loader = false;
          }
        );
    }
    if ($event != null && $event.target.value.length == 0) {
      this.supportApiService.getTrainingMaterialListByCommon().subscribe(
        (res) => {
          this.loader = true;
          this.materials = res;
        },
        (err) => {},
        () => {
          this.loader = false;
        }
      );
    }
    if ($event == null) {
      this.supportApiService.getTrainingMaterialListByCommon().subscribe(
        (res) => {
          this.loader = true;
          this.materials = res;
        },
        (err) => {},
        () => {
          this.loader = false;
        }
      );
    }
  }
}

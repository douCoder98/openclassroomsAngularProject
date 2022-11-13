import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService, private router: Router){}

  buttonText!: string;

  @Input() faceSnap!: FaceSnap;

  ngOnInit() {
    this.buttonText = "Oh Snap!"
  }

  onSnap():void {
    if(this.buttonText === "Oh Snap!"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, unsnap!"
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = "Oh Snap!"
    }
  }

  onView():void {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}

import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {

  facesnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Minou',
      description: 'Mon meilleur ami',
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
      createdAt: new Date(),
      snaps: 0,
      location: 'Dakar',
    },
    {
      id: 2,
      title: 'My car',
      description: 'A nice and speed car',
      createdAt: new Date(),
      snaps: 150,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/01/28/16/03/range-rover-2015653_1280.jpg',
      location: 'Mbour',
    },
    {
      id: 3,
      title: 'My house',
      description: 'A nice house',
      createdAt: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.facesnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error("FaceSnap not found");
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}

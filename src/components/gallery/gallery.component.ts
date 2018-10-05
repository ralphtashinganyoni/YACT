import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  step: number;

  constructor() { }
  @Input() datasource;
  selectedImage;

  ngOnInit() {
  }
  setSelectedImage(image) {
    this.selectedImage = image;
  }

  next(max) {
    if (this.step === max) {
      this.step = 1;
      return;
    }
    this.step++;
  }
  prev(max) {
    if (this.step === 1) {
      this.step = max;
      return;
    }
    this.step--;
  }
  set(value) {
    this.step = value;
  }


}


import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss',
})
export class ImgComponent {
  @Input() img: string = "valor init";
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "assets/images/default.png"
  
  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    this.loaded.emit(this.img)
  }
}

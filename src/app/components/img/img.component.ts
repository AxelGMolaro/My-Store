import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss',
})
export class ImgComponent implements OnInit , OnDestroy, OnChanges{
  img: string | undefined = ''
  @Input()  
   set changeImage(newImage : string) {
   this.img = newImage
   console.log("Hey cambio la imagen")
  }
  // @Input() img: string = "valor init";
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "assets/images/default.png"
  counter = 0;
  counterFn: number | undefined;

  private cd = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.counterFn = window.setInterval(() => {
      this.counter = this.counter + 1;
      console.log("Run counter")
      this.cd.detectChanges()
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log("NgOnDestroy")
    window.clearInterval(this.counterFn)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['changeImage']){
      console.log("Se actualizo el valor de img: " + this.img)
    }
  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    this.loaded.emit(this.img)
  }
}

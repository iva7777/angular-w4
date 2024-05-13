import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent {
  @Input()
  color!:string;

  @Input()
  isHorizontal!:boolean;

  @Input()
  additional:string = '';

  isDisabled:boolean = false;
  crossing:string = '';

  ngOnChanges(){
    if (this.color === 'red') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  processCrossing() {
    if (this.color === 'yellow') {
      alert("Пресичаш неправилно!");
    }
  }
}

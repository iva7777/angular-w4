import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit, OnDestroy{
  title = 'traffic-light-simulation';

  private mainInterval: any;
  verticalColor:string = 'green';
  horizontalColor: string = 'red';
  isAccident:boolean = false;

  ngOnInit(): void {
    this.startLightsInterval();
  }

  clearLightsInterval(){
    clearInterval(this.mainInterval);
  }

  startLightsInterval(){
    if (!this.isAccident) {
      this.mainInterval = setInterval(() => {
        let newVerticalColor = 
          this.verticalColor === 'red' ? 'green' : 'red';
          let newHorizontalColor = 
          this.horizontalColor === 'red' ? 'green' : 'red';

          this.changeToYellow(newVerticalColor, newHorizontalColor);
      }, 5000);
    }
  }

  changeToYellow(newVerticalColor:string, newHorizontalColor:string){
    this.verticalColor = 'yellow';
    this.horizontalColor = 'yellow';
    this.clearLightsInterval();

    setTimeout(() => {
      this.verticalColor = newVerticalColor;
      this.horizontalColor = newHorizontalColor;
      this.startLightsInterval();
    }, 2000);
  }

  processAccident(){
    if (!this.isAccident) {
      this.isAccident = true;
      this.clearLightsInterval();

      const toggleYellow = () => {
        if (this.horizontalColor === 'yellow' && this.verticalColor === 'yellow') {
          this.horizontalColor = 'off';
          this.verticalColor = 'off'
        } else {
          this.horizontalColor = 'yellow';
          this.verticalColor = 'yellow';
        }
      };

      let blinkInterval = setInterval(toggleYellow, 500);

      setTimeout(() => {
        clearInterval(blinkInterval);
        this.isAccident = false;
        this.resetLights();
        this.startLightsInterval();
      },10000);
    }
  }
  

  resetLights(){
    this.verticalColor = 'red';
    this.horizontalColor = 'green';
  }

  ngOnDestroy(): void {
    this.clearLightsInterval();
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Emulation } from '@campuscard/hce-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  logString: string[] = [];
  lastDigitIsThree: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    let actualThis = this; // <3 javascript
    Emulation.addListener('onNewData', (data => {
      actualThis.logString.push((data as any).value);
      console.log((data as any).value);
      actualThis.cdRef.detectChanges();
    }));
  }
  
  clearLog(): void {
    this.logString = [];
  }

  changeData(): void {
    console.log("Changing app data");
    
    if (this.lastDigitIsThree) {
      Emulation.changeAppData({lastDigit: 6});
    } else {
      Emulation.changeAppData({lastDigit: 3});
    }

    this.lastDigitIsThree = !this.lastDigitIsThree;
  }
}

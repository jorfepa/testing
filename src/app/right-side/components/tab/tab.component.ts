import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  details = true;
  creators = false;
  owners = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab: string) {
    switch (tab) {
      case 'creators':
          this.details = false; 
          this.creators = true;
          this.owners = false;
        break;

        case 'owners':
          this.details = false; 
          this.creators = false;
          this.owners = true;
        break;
    
      default:
        this.details = true; 
          this.creators = false;
          this.owners = false;
        break;
    }
  }

}

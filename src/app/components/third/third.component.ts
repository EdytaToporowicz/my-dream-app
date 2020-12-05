import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  myName: string = 'Edyta'; /*w typescirpt dwukropek, rodzaj zmiennej i przypisanie*/
  myAge: number = 18;
  myImageUrl: string = 'https://images.pexels.com/photos/2769838/pexels-photo-2769838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  btnText: string = 'Show';


  names: string[] = [
    'Adrian',
    'Andrzej',
    'Edyta',
    'Karol'
  ]
  isVisible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    //alert('Działa');
    //dodawanie do listy:
    this.names.push(this.myName);
  }

  onShowText() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.btnText = 'Hide';
    }
    else {
      this.btnText = 'Show';
    }
  }



}

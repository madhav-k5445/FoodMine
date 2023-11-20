import { Component,OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(){}
  ngOnInit(){

    const obs=interval(1000);
    const sub1 = obs.subscribe(bro =>{
      console.log("1st subscriber"+bro);
    })

    setTimeout(() => {
      const sub2=obs.subscribe(bro =>[
        console.log("2nd subscriber"+bro)
      ]);
      sub1.unsubscribe();
      setTimeout(()=>{
        sub2.unsubscribe();

      },5000)
    }, 3000);
  

  }
}

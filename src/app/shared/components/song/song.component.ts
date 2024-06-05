import { CommonModule } from '@angular/common';
import { Component, OnInit ,Input} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,],
})
export class SongComponent  implements OnInit {
  @Input() song: any;
  constructor() { }

  ngOnInit() {}

}

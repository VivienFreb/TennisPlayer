import { Component, OnInit } from '@angular/core';
import {TennisPlayer} from '../Model/tennis-player';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {

  public player: TennisPlayer = {
    playerName: 'Sampras',
    playerSurname: 'Pete',
    playerCls: 1
};

  playerForm = new FormGroup({
    firstName: new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
    this.player.playerCls = 3;
  }

}

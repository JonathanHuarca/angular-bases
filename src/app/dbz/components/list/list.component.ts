import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
//Esto le dise que mi ListComponent puede recibir
  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]
}

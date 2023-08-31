import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
//Esto le dise que mi ListComponent puede recibir
  @Input()
  public characterList: Character[] = [];

  // onDelete = Index value : number

  onDeleteCharacter(index:string):void{
    // Todo Emitir el ID del personaje
    this.onDelete.emit(index);
  }
}

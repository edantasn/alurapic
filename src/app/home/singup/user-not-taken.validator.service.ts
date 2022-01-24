import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable() //sem provideIn porque só é usado em signup component
export class UserNotTakenValidatorService {

  constructor(private signUpService: SignUpService) {}

  //returna um observable
  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        //switch pra não executar junto com o pipe anterior, para um pra iniciar o outro
        .pipe(switchMap(userName => {
          return this.signUpService.checkUserNameTaken(userName);
        }))
        //por o pipe do switchMap retornar null ou false: converte em obj js
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null ))
        .pipe(first()); //na primeira ocorrência, finaliza
    }
  }
}

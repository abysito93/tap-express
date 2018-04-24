import { Injectable } from '@angular/core';
import * as firebaseui from 'firebaseui';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseuiService {
  public firebaseUiInstance: firebaseui.auth.AuthUI;

  constructor(angularFireAuth: AngularFireAuth) {

    if (!(<any>window).firebaseUiInstance){
      (<any>window).firebaseUiInstance = new firebaseui.auth.AuthUI(angularFireAuth.auth);
    }
    this.firebaseUiInstance = (<any>window).firebaseUiInstance as firebaseui.auth.AuthUI;
   }

}

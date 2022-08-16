// import { Directive, HostListener } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth'
// import * as firebase from 'firebase/app'
// import { GoogleAuthProvider } from 'firebase/auth'

// @Directive({
//   selector: '[appGoogleSignin]'
// })
// export class GoogleSigninDirective {

//   constructor(private afAuth: AngularFireAuth) { }

//   @HostListener('click')
//   onclick() {
//     this.afAuth.signInWithPopup(new GoogleAuthProvider())
//   }
// }


import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
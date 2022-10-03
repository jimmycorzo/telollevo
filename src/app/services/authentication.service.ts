import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithCredential, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { UtilService } from './util.service';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import {  Route } from '@angular/router';

export class AuthInfo {
  constructor(public $uid: string) { }

  isLoggedIn() {
    return !!this.$uid;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static UNKNOWN_USER = new AuthInfo(null);
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthenticationService.UNKNOWN_USER);
  public current_user: any;
  constructor(
    public fireAuth: Auth,
    public fireStore: Firestore,
    public util: UtilService,
  ) {

    this.fireAuth.onAuthStateChanged(user => {
      if (user) {
        // console.log('Firebase User - ' + user);
        this.current_user = user;
      }
    });

    // this.fireAuth.authState.pipe(take(1)).subscribe(user => {
    //   if (user) {
    //     this.authInfo$.next(new AuthInfo(user.uid));
    //   }
    // });
  }

  public forgotPassword(email: string) {
    sendPasswordResetEmail(this.fireAuth, email).then(() => {
      this.util.presentToast('Correo electrónico enviado', true, 'bottom', 2100);
    }).catch(err => this.util.presentToast(`${err}`, true, 'bottom', 2100));

  }

  public createAccount(email: string, password: string): Promise<any> {
    return new Promise<any>((resolved, rejected) => {
      createUserWithEmailAndPassword(this.fireAuth, email, password)
        .then(async userCredential => {
          const user = userCredential.user;
          if (user) {
            this.authInfo$.next(new AuthInfo(user.uid));
            const docRef = await addDoc(collection(this.fireStore, "users"), {
              id: user.uid,
              username: user.displayName,
              email: user.email
            });
            console.log("Document written with ID: ", docRef.id);
            resolved(user);
          }
        })
        .catch(err => {
          this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
          // eslint-disable-next-line prefer-promise-reject-errors
          rejected(`falla en la creación ${err}`);
        });
    });
  }

  public login(email: string, password: string): Promise<any> {
    return new Promise<any>((resolved, rejected) => {
      signInWithEmailAndPassword(this.fireAuth, email, password)
        .then(res => {
          if (res.user) {
            this.authInfo$.next(new AuthInfo(res.user.uid));
            resolved(res.user);
          }
        })
        .catch((err) => {
          this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
          // eslint-disable-next-line prefer-promise-reject-errors
          rejected(`falla en la creación ${err}`);
        }).then(el => this.util.closeLoading());
    });

    // return new Promise<any>((resolved, rejected) => {
    //   signInWithEmailAndPassword(this.fireAuth, email, password)
    //     .then(res => {
    //       if (res.user) {
    //         this.authInfo$.next(new AuthInfo(res.user.uid));
    //         resolved(res.user);
    //       }
    //     })
    //     .catch(err => {

    //       this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
    //       // eslint-disable-next-line prefer-promise-reject-errors
    //       rejected(`falla en la creación ${err}`);
    //     });
    // });
  }

  public logout(): Promise<void> {
    this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
    return this.fireAuth.signOut();
  }
  // Sign out
  public signout(): Promise<void>{
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.util.navigate('login');
    });
  }
  public checkAuth() {
    return new Promise((resolve) => {
      this.fireAuth.onAuthStateChanged(user => {
        resolve(user);
      });
    });
  }

}

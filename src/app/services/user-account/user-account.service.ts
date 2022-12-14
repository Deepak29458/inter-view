import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore,AngularFirestoreDocument,} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private http: HttpClient,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth,
    public router: Router,
    private snackBar: MatSnackBar,
    ) { }

    // Sign in with email/password
    signIn(email: string, password: string) {
      return this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.SetUserData(result.user);
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              this.snackBar.open('Login Successful', '', {
                duration: 2000,
                verticalPosition: "top", // Allowed values are  'top' | 'bottom'
                horizontalPosition: "center" ,// Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
                panelClass: ["sucess-message"]
                });
              this.router.navigate(['dashboard']);
            }
          });
        })
        .catch((error) => {
          this.snackBar.open('Invalid Login Credentials', '', {
            duration: 2000,
            verticalPosition: "top", // Allowed values are  'top' | 'bottom'
            horizontalPosition: "center" ,// Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
            panelClass: ["error-message"]
          });
      });
    }

    SetUserData(user: any) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(
        `users/${user.uid}`
      );
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
      return userRef.set(userData, {
        merge: true,
      });
    }

    // Sign out
    signOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      });
    }
    
    // Sign up with email/password
    signUp(email: string, password: string) {
      return this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.SetUserData(result.user);
          this.snackBar.open('Register Successful', '', {
            duration: 2000,
            verticalPosition: "top", // Allowed values are  'top' | 'bottom'
            horizontalPosition: "center" ,// Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
            panelClass: ["sucess-message"]
            });
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          this.snackBar.open('Please Enter Valid Data', '', {
            duration: 2000,
            verticalPosition: "top", // Allowed values are  'top' | 'bottom'
            horizontalPosition: "center" ,// Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
            panelClass: ["error-message"]
          });
        });
    }

}

import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[FormsModule,HttpClientModule]
})
export class LoginComponent {

  

   loginObjeto: Login;
errorMessage: string | null ;


constructor(private http: HttpClient,private router: Router){
   this.loginObjeto=new Login();
  this.errorMessage = null;
 }
 

 onLogin() {
  
  this.http.post<any>("https://inclubtest.com:2053/api/token", this.loginObjeto).subscribe(
    (res: any) => {
     console.log(res);
    if (res.access_Token) { 
       this.router.navigate(['/home']);
      } else {
         return
    }
   },
  (error) => {
     console.error("Error en la solicitud:", error);
     alert("Credenciales Erroneas")
      this.errorMessage = "Error en la solicitud, por favor intenta nuevamente";
   }
 );
 }
 }


export class Login{
  username:string
   password:string
  constructor(){
    this.username="";
   this.password="";
   }
 }

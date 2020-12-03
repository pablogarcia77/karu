import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public error: boolean = false;
  public bloqueado: boolean = false;

  constructor(
    public _usuarioService: UsuarioService,
    private router: Router
  ) { 
    this.usuario = new Usuario(null,'','','','');
  }

  ngOnInit(): void {
    // this._usuarioService.
  }

  onSubmit(){
    this._usuarioService.getUsuario(this.usuario).subscribe(
      response => {
        if(response[0].habilitado == 1){
          this.error = false;
          this.bloqueado = false;
          this.usuario = response;          
          localStorage.setItem('currentUser',JSON.stringify(this.usuario));
          this.router.navigate(['/panel/' + response[0].id_usuario]);
        }else{
          this.bloqueado = true;
        }       
      },
      error => {
        this.bloqueado = false;
        this.error = true;
      }
    )
        
  }

}

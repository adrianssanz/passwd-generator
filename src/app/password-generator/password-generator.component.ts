import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule], // Lo agregas aquí
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  longitudPasswd: number = 20;
  numeros: boolean = true;
  mayusculas: boolean = false;
  minusculas: boolean = false;
  simbolos: boolean = false;
  passwdGenerada: string = '';
  copiar: boolean = true;

  //Valida si los checkboxes estan todos desmarcados y marca numeros por defecto
  verificarCheckboxes(): void{
    if (!this.mayusculas && !this.minusculas && !this.numeros && !this.simbolos) {
      this.numeros = true; 
    }
  }

  generarPasswd(): void{
    let caracteres = '';
    
    //Valida que checkbox esta seleccionado y lo añade a la contraseña
    if (this.numeros){
      caracteres += '0123456789';
    }
    if (this.mayusculas){
      caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.minusculas){
      caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (this.simbolos){
      caracteres += '!@#$%^&*()!@#$%^&*()_+[]{}|;:,.<>?';
    }

    let password = '';
    for (let i = 0; i < this.longitudPasswd; i++) {
      password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    this.passwdGenerada = password
    this.copiar = false
  }

  copiarPasswd() {
    const input = document.createElement('input');
    input.value = this.passwdGenerada;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Contraseña copiada al portapapeles!');
  }
}

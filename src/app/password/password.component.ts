import { Component, OnInit } from '@angular/core';
import { FormArray , FormGroup, FormControl , FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  //FormGroup = this.fb.group
  //Crea un conjunto de elementos que se deben cumplir para poder validar
  //si no estan validos todos los elemntos del grupo => Valid?=INVALID
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    //FormArray = this.fb.array
    //Permite agregar dinamicamente Abstract controls en form de arreglo
    //sirve para campos multivaluados
    //NOTE:
    //Instead of a form control instance for each alias,
    //you can compose another form group instance with additional fields.
    //The process of defining a control for each item is the same.
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });


  ngOnInit(): void {
  }
  //Metodo de envio de boton submit
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  //cambiar los valores de las entradas 
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  //permite levantar o instanciar los forms
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  //Agregado dinamico de FormControls en FormArray
  //Creando un arreglo de elementos
  addAlias() {
  this.aliases.push(this.fb.control(''));
}

}

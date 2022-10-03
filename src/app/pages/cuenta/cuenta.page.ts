import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CountryPhone } from 'app/models/country-phone.model';
import { CuentaModel } from './cuenta.model';
import { Router } from '@angular/router';
import { FirebaseService } from 'app/services/firebase.service';
import { TiposModel } from 'app/models/tipos.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { UtilService } from 'app/services/util.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  validationsForm: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  countries: Array<CountryPhone>;

  validations = {
    'tipo': [
      { type: 'required', message: 'Por favor seleccione el tipo de documento.' }
    ],
    'nombre': [
      { type: 'required', message: 'Por favor digite su nombre o razón social.' }
    ],
    'numero': [
      { type: 'required', message: 'Por favor digite el número de identificación.' }
    ],
    'direccion': [
      { type: 'required', message: 'Por favor digite la dirección de facturación.' }
    ],
    'correo': [
      { type: 'required', message: 'Por favor digite el correo electrónico de facturación.' },
      { type: 'pattern', message: 'Coloque un correo válido.' }
    ],
    'telefono': [
      { type: 'required', message: 'Por favor digite el número de teléfono de facturación.' },
      { type: 'invalidCountryPhone', message: 'El teléfono es incorrecto para el país seleccionado.' }
    ],
    'terms': [
      { type: 'pattern', message: 'Debe aceptar los términos y condiciones.' }
    ]
  };
  tipos: TiposModel[];
  datos: CuentaModel;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private authService: AuthenticationService,
    public util: UtilService,
  ) { }

  ngOnInit(): void {
    this.validationsForm = new FormGroup({
      'id': new FormControl('', Validators.nullValidator),
      'uid': new FormControl('', Validators.nullValidator),
      'tipo': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'numero': new FormControl('', Validators.required),
      'direccion': new FormControl('', Validators.required),
      'pais': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
      'terms': new FormControl(true, Validators.pattern('true')),
      'correo': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });

    this.firebaseService.getTipos()
      .subscribe(result => {
        this.tipos = result as unknown as TiposModel[];
      });

    this.countries = [
      new CountryPhone('co', 'Colombia'),
    ];

    this.firebaseService.getDato().subscribe(result => {
      this.datos = result[0];
      if (this.datos) {
        this.validationsForm.controls["id"].setValue(this.datos.id);
        this.validationsForm.controls["uid"].setValue(this.datos.uid);
        this.validationsForm.controls["tipo"].setValue(this.datos.tipo);
        this.validationsForm.controls["nombre"].setValue(this.datos.nombre);
        this.validationsForm.controls["numero"].setValue(this.datos.numero);
        this.validationsForm.controls["direccion"].setValue(this.datos.direccion);
        this.validationsForm.controls["correo"].setValue(this.datos.correo);
        this.validationsForm.controls["telefono"].setValue(this.datos.telefono);
        this.validationsForm.controls["pais"].setValue(this.datos.pais);
      }
    });

  }

  onSubmit(values) {
    this.firebaseService.createDato(values);
    this.util.navigate('tabs/directorios', false);
  }

  signOut() {
    this.authService.signout();
  }

}

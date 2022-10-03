import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DatosModel } from 'app/models/datos.model';
import { FirebaseService } from 'app/services/firebase.service';
import { WompiService } from 'app/services/wompi.service';
import { FinancialInstitutionModel } from 'app/models/wompi_types';
import { filter } from 'rxjs/operators';
import { TiposModel } from '../../models/tipos.model';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./styles/datos.page.scss'],
})
export class DatosPage implements OnInit {
  // @Input() pedido: string;
  @Input() pago: string;
  validationsForm: FormGroup;

  validations = {
    'tipo': [
      { type: 'required', message: 'Por favor seleccione el tipo de documento.' }
    ],
    'institucion': [
      { type: 'required', message: 'Por favor seleccione una institución financiera.' }
    ],
    'persona': [
      { type: 'required', message: 'Por favor seleccione el tipo de persona.' }
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
      { type: 'invalidCountryPhone', message: 'El número de teléfono es incorrecto.' }
    ],
    'nequi': [
      { type: 'required', message: 'Por favor digite el número de teléfono asociado a cuenta de NEQUI.' },
      { type: 'invalidCountryPhone', message: 'El número de teléfono es incorrecto.' }
    ],
    'tarjeta': [
      { type: 'required', message: 'Por favor digite el número de tarjeta de débito o crédito.' },
    ],
    'mes': [
      { type: 'required', message: 'Por favor digite el mes de expiración.' },
    ],
    'cvc': [
      { type: 'required', message: 'digite el número de 3 ó 4 dígitos que encuentra al respaldo de la tarjeta.' },
      { type: 'pattern', message: 'máximo 4 dígitos' },
    ],
    'terms': [
      { type: 'pattern', message: 'Debe aceptar los términos y condiciones.' }
    ]
  };

  tipos: TiposModel;
  personas: any[];
  instituciones: any[];
  datos: DatosModel;
  urlTerminos: string;
  token: string;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private modalController: ModalController,
    public wompiService: WompiService
  ) { }

  async ngOnInit() {
    this.personas = [
      { id: '0', persona: 'Persona Natural' },
      { id: '1', persona: 'Persona Jurídica' },
    ];
    this.firebaseService.getDato().subscribe(result => {
      this.datos = result[0];
      if (this.datos) {
        this.validationsForm.controls["id"].setValue(this.datos.id);
        this.validationsForm.controls["uid"].setValue(this.datos.uid);
        this.validationsForm.controls["nombre"].setValue(this.datos.nombre);
        this.validationsForm.controls["correo"].setValue(this.datos.correo);
        this.validationsForm.controls["telefono"].setValue(this.datos.telefono);
        this.validationsForm.controls["nequi"].setValue("");
        this.validationsForm.controls["tipo"].setValue(this.datos.tipo);
        this.validationsForm.controls["numero"].setValue(this.datos.numero);
        this.validationsForm.controls["persona"].setValue(0);
        this.validationsForm.controls["institucion"].setValue("");
      }
    });

    this.firebaseService.getTipos()
      .subscribe(result => {
        this.tipos = result;
      });

    if (this.pago == '2') { // Nequi
      this.validationsForm = new FormGroup({
        'id': new FormControl('', Validators.nullValidator),
        'uid': new FormControl('', Validators.nullValidator),
        'nombre': new FormControl('', Validators.required),
        'telefono': new FormControl('', Validators.required),
        'nequi': new FormControl('', Validators.required),
        'terms': new FormControl(false, Validators.pattern('true')),
        'correo': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
      });
    }
    else if (this.pago == '3') { // PSE
      this.validationsForm = new FormGroup({
        'id': new FormControl('', Validators.nullValidator),
        'uid': new FormControl('', Validators.nullValidator),
        'tipo': new FormControl('', Validators.required),
        'institucion': new FormControl('', Validators.required),
        'nombre': new FormControl('', Validators.required),
        'numero': new FormControl('', Validators.required),
        'persona': new FormControl(0, Validators.required),
        'telefono': new FormControl('', Validators.required),
        'terms': new FormControl(false, Validators.pattern('true')),
        'correo': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
      });
      this.instituciones = await this.wompiService.pse_financial_institutions() as Array<FinancialInstitutionModel>;
      this.instituciones = this.instituciones.filter(item =>
        item.financial_institution_code != '0');
    }
    else if (this.pago == '4') { // TC ó TD
      this.validationsForm = new FormGroup({
        'id': new FormControl('', Validators.nullValidator),
        'uid': new FormControl('', Validators.nullValidator),
        'nombre': new FormControl('', Validators.required),
        'telefono': new FormControl('', Validators.required),
        'tarjeta': new FormControl('', Validators.required),
        'mes': new FormControl('', Validators.required),
        'cvc': new FormControl('', Validators.required),
        'cuotas': new FormControl(1, Validators.required),
        'terms': new FormControl(false, Validators.pattern('true')),
        'correo': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
      });
    }
    const aceptacion = await this.wompiService.get_merchant() as unknown;
    this.urlTerminos = aceptacion['permalink'];
    this.token = aceptacion['acceptance_token'];

    // console.log('URL Terminos', urlTerminos);

  }

  onSubmit(values) {
    if (this.pago == '2') { // Nequi
      var data = JSON.stringify({
        "email": values.correo,
        "name": values.nombre,
        "phone": values.telefono,
        "nequi": values.nequi,
        "cancel": false,
        "token": this.token,
        "pago": this.pago,
        "reference": "Pago por medio de la App -Te Lo Llevo-",
        "type": "NEQUI"
      });
      this.modalController.dismiss(data);
    }
    else
      if (this.pago == '3') { // PSE
        var data = JSON.stringify({
          "email": values.correo,
          "name": values.nombre,
          "phone": values.telefono,
          "user_type": values.persona,
          "user_legal_id_type": values.tipo,
          "user_legal_id": values.numero,
          "financial_institution_code": values.institucion,
          "cancel": false,
          "token": this.token,
          "pago": this.pago,
          "reference": "Pago por medio de la App -Te Lo Llevo-",
          "type": "PSE"
        });
        this.modalController.dismiss(data);
      }
      else
        if (this.pago == '4') { // TC/TD
          var data = JSON.stringify({
            "email": values.correo,
            "name": values.nombre,
            "phone": values.telefono,
            "number": values.tarjeta.replaceAll(' ', ''),
            "cvc": values.cvc.toString(),
            "exp_month": values.mes.substring(5, 7),
            "exp_year": values.mes.substring(2, 4),
            "card_holder": values.nombre,
            "cancel": false,
            "token": this.token,
            "installments": values.cuotas,
            "pago": this.pago,
            "reference": "Pago por medio de la App -Te Lo Llevo-",
            "type": "CARD"
          });
          this.modalController.dismiss(data);
        }
  }

  dismiss(): void {
    var data = JSON.stringify({
      "cancel": true
    });
    this.modalController.dismiss(data);
  }

}

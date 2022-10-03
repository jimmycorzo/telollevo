import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FinancialInstitutionModel } from 'app/models/wompi_types';

@Injectable({
  providedIn: 'root'
})
export class WompiService implements OnInit {

  constructor(
    private http: HttpClient,
  ) {
  }

  async ngOnInit() {
  }

  async get_transaction(transacion_id) {
    var keys = await JSON.parse(localStorage.getItem('keys'));
    const privateKey = keys.key;
    const publicKey = keys.key_pub;
    let httpOptionsPublic = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: publicKey,
      })
    };

    // this.http.get("https://production.wompi.co/v1/pse/financial_institutions", httpOptionsPublic)
    //   .subscribe(data => {
    //     console.log((data['data'] as Array<FinancialInstitutionModel>));
    //   }, error => {
    //     console.log(error);
    //   });

  }

  async get_merchant() {
    var keys = await JSON.parse(localStorage.getItem('keys'));
    const privateKey = keys.key;
    const publicKey = keys.key_pub;
    const httpOptionsNone = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    };

    const url = "https://production.wompi.co/v1/merchants/" + publicKey.toString().replace('Bearer ', '');
    return new Promise((resolve, reject) => {
      this.http.get(url, httpOptionsNone)
        .subscribe((data: any) => {
          return resolve(data['data']['presigned_acceptance']);
        });
    });
  }

  async get_token_card(numero, cvc, mes, ano, nombre) {
    var keys = await JSON.parse(localStorage.getItem('keys'));
    const privateKey = keys.key;
    const publicKey = keys.key_pub;
    let httpOptionsPublic = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: publicKey,
      })
    };

    var data = JSON.stringify({
      "number": numero,
      "cvc": cvc,
      "exp_month": mes,
      "exp_year": ano,
      "card_holder": nombre
    });
    const url = "https://production.wompi.co/v1/tokens/cards";

    return new Promise((resolve, reject) => {
      this.http.post(url, data, httpOptionsPublic)
        .subscribe((data: any) => {
          return resolve(data['data']);
        }, error => {
          return resolve(error);
        });
    });

  }

  async get_token_nequi(telefono) {
    var keys = await JSON.parse(localStorage.getItem('keys'));
    const privateKey = keys.key;
    const publicKey = keys.key_pub;
    let httpOptionsPublic = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: publicKey,
      })
    };
    var data = JSON.stringify({
      "phone_number": telefono
    });
    const url = "https://production.wompi.co/v1/tokens/nequi";

    return new Promise((resolve, reject) => {
      this.http.post(url, data, httpOptionsPublic)
        .subscribe((data: any) => {
          return resolve(data['data']);
        }, error => {
          return resolve(error);
        });
    });

  }

  async pse_financial_institutions() {
    var keys = await JSON.parse(localStorage.getItem('keys'));
    const privateKey = keys.key;
    const publicKey = keys.key_pub;
    let httpOptionsPublic = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: publicKey,
      })
    };

    return new Promise((resolve, reject) => {
      this.http.get("https://production.wompi.co/v1/pse/financial_institutions", httpOptionsPublic)
        .subscribe(data => {
          return resolve(data['data'] as Array<FinancialInstitutionModel>);
        }, error => {
          console.log(error);
        });
    });

  }

  async transactions(postData) {
    var keys = await JSON.parse(localStorage.getItem('keys'));
    const privateKey = keys.key;
    const publicKey = keys.key_pub;
    let httpOptionsPublic = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: publicKey,
      })
    };

    return new Promise((resolve, reject) => {
      this.http.post("https://production.wompi.co/v1/transactions", postData, httpOptionsPublic)
        .subscribe(data => {
          return resolve(data['data']);
        }, error => {
          console.log(error);
        });
    });

  }

  async transactions_get(transactionId) {
    let httpOptionsNone = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    };

    return new Promise((resolve, reject) => {
      this.http.get("https://production.wompi.co/v1/transactions/" + transactionId, httpOptionsNone)
        .subscribe(data => {
          return resolve(data['data']);
        }, error => {
          console.log(error);
        });
    });

  }

}

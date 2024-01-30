import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './clientes/cliente';
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) { 

  }

  salvar (cliente : Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/users', cliente);

  }

  getCliente() : Cliente {
    let cliente: Cliente = new Cliente();
    cliente.name = 'alex';
    cliente.email = 'mail@mail.com';
    cliente.password = 'alex132';
    cliente.phone = '34324343';
    return cliente;

  }
}

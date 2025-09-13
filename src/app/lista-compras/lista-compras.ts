import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  novoItem: string = '';
  lista: ItemLista[] = [];
  

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.novoItem;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);

    
    this.novoItem = '';

    console.table(this.lista);
  }

  riscarProduto(itemLista: ItemLista){
      itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}

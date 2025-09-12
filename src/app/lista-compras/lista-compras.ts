import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  novoItem: string = '';
  itens: { id: number, nome: string, comprado: boolean }[] = [
    { id: 1, nome: 'Arroz', comprado: false },
    { id: 2, nome: 'Macarrão', comprado: false }
  ];

  adicionarItem() {
    if (this.novoItem.trim()) {
      const novoId = this.itens.length > 0 ? Math.max(...this.itens.map(item => item.id)) + 1 : 1;
      console.log(this.novoItem);
      this.itens.push({
        id: novoId,
        nome: this.novoItem.trim(),
        comprado: false
      });
      this.novoItem = '';
    }
  }
}

import React from 'react';
import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>13/12/2022</td>
            <td>Masculino</td>
            <td>Relógios</td>
            <td>Uberlândia</td>
            <td>Débito</td>
            <td>R$ 526,99</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>13/12/2022</td>
            <td>Masculino</td>
            <td>Relógios</td>
            <td>Uberlândia</td>
            <td>Débito</td>
            <td>R$ 526,99</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>13/12/2022</td>
            <td>Masculino</td>
            <td>Relógios</td>
            <td>Uberlândia</td>
            <td>Débito</td>
            <td>R$ 526,99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;

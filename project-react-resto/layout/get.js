import { link } from "./link.js";

export function get() {
    link.get('/pelanggan').then(res => {
        console.log(res);
        let tampil = `<table class="table table-bordered">
            <tr>
                <th>ID</th>    
                <th>Pelanggan</th>    
                <th>Alamat</th>
                <th>Telepon</th>
                    
            </tr>`;
        res.data.forEach(element => {
            tampil += `<tr>
                <td>${element.idpelanggan}</td>    
                <td>${element.pelanggan}</td>    
                <td>${element.alamat}</td>    
                <td>${element.telp}</td>    
            </tr>`;
        });
        tampil += `</table>`;
        document.querySelector('#out').innerHTML = tampil;
    });
}
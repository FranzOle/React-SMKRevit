import { link } from "./link.js";

export function ubah() {
    let id = 4;
    let data = {
        pelanggan : 'Raja Suki',
        alamat : 'Suki Kingdom',
        telp : '23232123'
    }

    // console.log("Ambatufakinnat");
    link.put("pelanggan/" + id, data).then(res=>{
        console.log(res)
        let tampil = `<h1>${res.data.pesan}</h1>`

        document.querySelector('#out').innerHTML = tampil;
    });
}
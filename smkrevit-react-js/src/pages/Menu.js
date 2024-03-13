import { useState } from "react";
import Table from "./Table";

function Menu() {
    const [menus, setMenu] = useState([
        {
            idmenu: 1, 
            idkategori: 1, 
            menu: "Ayam Bakar", 
            gambar: "img/nasiayam.jpg", 
            harga: "20.000",
            tipe: "Benar Makanan"
        },
        {
            idmenu: 2, 
            idkategori: 1, 
            menu: "Nasi Padang", 
            gambar: "img/nasipadang.png", 
            harga: "10.000",
            tipe: "Benar Makanan"
        }, 
        {
            idmenu: 3, 
            idkategori: 1, 
            menu: "Pisang Raja", 
            gambar: "img/pisangraja.png", 
            harga: "14.000",
            tipe: "Bukan Makanan"
        },
        {
            idmenu: 4, 
            idkategori: 2, 
            menu: "Jus Jeruk", 
            gambar: "img/esjeruk.jpg", 
            harga: "8.000",
            tipe: "Bukan Makanan"
        },
        {
            idmenu: 5, 
            idkategori: 2, 
            menu: "Es Teh", 
            gambar: "img/esteh.png", 
            harga: "4.000",
            tipe: "Bukan Makanan"
        },
        {
            idmenu: 6, 
            idkategori: 2, 
            menu: "Apel", 
            gambar: "img/apelmanalagi.jpg", 
            harga: "5.000",
            tipe: "Bukan Makanan"
        }
    ])

    return (
      <div className="App">
         <Table menu={menus.filter((data) => data.tipe == "Bukan Makanan")} />
         <Table menu={menus.filter((data) => data.tipe == "Benar Makanan")} />
      </div>
    );
  }
  
  export default Menu;
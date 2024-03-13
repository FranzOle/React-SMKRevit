import { useState } from "react";
import Table from "./Table";

function Menu() {
    const [menus, setMenu] = useState([
        {
            idmenu: 1, 
            idkategori: 1, 
            menu: "Ayam Bakar", 
            gambar: "img/nasiayam.jpg", 
            harga: "20.000"
        },
        {
            idmenu: 2, 
            idkategori: 1, 
            menu: "Nasi Padang", 
            gambar: "img/nasipadang.png", 
            harga: "10.000"
        }, 
        {
            idmenu: 3, 
            idkategori: 1, 
            menu: "Pisang Raja", 
            gambar: "img/pisangraja.png", 
            harga: "14.000"
        },
        {
            idmenu: 4, 
            idkategori: 2, 
            menu: "Jus Jeruk", 
            gambar: "img/esjeruk.jpg", 
            harga: "8.000"
        },
        {
            idmenu: 5, 
            idkategori: 2, 
            menu: "Es Teh", 
            gambar: "img/esteh.png", 
            harga: "4.000"
        },
        {
            idmenu: 6, 
            idkategori: 2, 
            menu: "Apel", 
            gambar: "img/apelmanalagi.jpg", 
            harga: "5.000"
        }
    ])

    return (
      <div className="App">
         <Table menu={menus} />
      </div>
    );
  }
  
  export default Menu;
import { useState } from "react";

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
        <p>Menu</p>
        <div>
        <table className="table border">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Menu</th>
                            <th>Gambar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map((data) => (
                            <tr key={data.idmenu}>
                                <td>{data.idmenu}</td>
                                <td>{data.menu}</td>
                                <td>{data.harga}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
      </div>
    );
  }
  
  export default Menu;
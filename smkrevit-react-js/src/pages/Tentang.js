import { useState } from "react";

function Tentang() {
  const [count, setCount] = useState(0);
  function Tambah() {
      setCount(count+1)
  }

  function Kurang() {
      if (count > 0) {
        setCount(count-1)
      }
  }
    return (
      <div className="App">
        <h1>Tentang Kami</h1>
        <p>Kami adalah channel pembelajaran Pemrograman</p>
        <button type="button" onClick={Tambah} className="btn btn-primary" >Tambah</button>
        <button type="button" onClick={Kurang} className="btn btn-success" >Kurang</button>
        <p>Counter : <span>{count}</span></p>
     </div>
    );
  }
  
  export default Tentang;
  
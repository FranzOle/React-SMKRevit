function ListSiswa(props) {
  const siswa = props.nama.map((item, i) => 
      <li key={i}>{item}</li>
    );
    return (
      <div className="App">
        <h1>{props.judul}</h1>
        <p>Halo <span>{props.nama[1]}</span></p>
        <br />
        <ul>
          {siswa}
        </ul>
      </div>
    );
  }
  
  export default ListSiswa;
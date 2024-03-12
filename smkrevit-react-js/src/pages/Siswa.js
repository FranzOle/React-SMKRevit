import ListSiswa from "./ListSiswa";

function Siswa() {
  const judul = "Daftar Siswa SMKN@";
  const nama = ["Moreno", "Nando", "Lionel"];
    return (
      <div className="App">
        <h1>Siswa Pages</h1>
        <ListSiswa judul={judul} nama={nama} />
      </div>
    );
  }
  
  export default Siswa;
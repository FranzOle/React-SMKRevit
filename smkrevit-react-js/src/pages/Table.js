function Table(props) {
    return (
        <div className="App">
        <p>Menu</p>
        <div>
        <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Menu</th>
                            <th>Gambar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.menu.map((data) => (
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

export default Table;
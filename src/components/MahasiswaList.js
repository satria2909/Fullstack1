// ProductList.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MahasiswaList = () => {
    const [mahasiswa, setMahasiswa] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/mahasiswa');
        const data = await response.json();
        setMahasiswa(data);
    };

    const deleteMahasiswa = async (id) => {
        await fetch(`http://localhost:8080/mahasiswa/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetchData();
    };

    return (
        <div>
            <Link to="/add" className="button is-primary mt-5">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Prodi</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map((mhs, index) => (
                        <tr key={mhs.id}>
                            <td>{index + 1}</td>
                            <td>{mhs.nim}</td>
                            <td>{mhs.nama}</td>
                            <td>{mhs.prodi}</td>
                            <td>
                                <Link to={`/edit/${mhs.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteMahasiswa(mhs.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MahasiswaList;
// EditMahasiswa.js
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditMahasiswa = () => {
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const [prodi, setProdi] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getMahasiswaById();
    }, []);

    const getMahasiswaById = async () => {
        const response = await fetch(`http://localhost:8080/mahasiswa/${id}`);
        const data = await response.json();
        setNim(data.nim);
        setNama(data.nama);
        setProdi(data.prodi);
    };

    const updateMahasiswa = async (e) => {
        e.preventDefault();
        const mahasiswa = { nim, nama, prodi };
        await fetch(`http://localhost:8080/mahasiswa/${id}`, {
            method: "PUT",
            body: JSON.stringify(mahasiswa),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/");
    };

    return (
        <div>
            <form onSubmit={updateMahasiswa}>
                <div className="field">
                    <label className="label">NIM</label>
                    <div className="control">
                        <input className="input" value={nim} onChange={(e) => setNim(e.target.value)}
                            type="text" placeholder="NIM" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                        <input className="input" value={nama} onChange={(e) => setNama(e.target.value)}
                            type="text" placeholder="Nama" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Prodi</label>
                    <div className="control">
                        <input className="input" value={prodi} onChange={(e) => setProdi(e.target.value)}
                            type="text" placeholder="Prodi" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-primary">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditMahasiswa;
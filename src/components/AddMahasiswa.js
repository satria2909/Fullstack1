// AddMahasiswa.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMahasiswa = () => {
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const [prodi, setProdi] = useState('');
    const navigate = useNavigate();

    const saveMahasiswa = async (e) => {
        e.preventDefault();
        const mahasiswa = { nim, nama, prodi };
        await fetch('http://localhost:8080/mahasiswa', {
            method: "POST",
            body: JSON.stringify(mahasiswa),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/");
    };

    return (
        <div>
            <form onSubmit={saveMahasiswa}>
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
                        <button className="button is-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddMahasiswa;
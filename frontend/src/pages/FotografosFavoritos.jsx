import { useState, useEffect } from 'react';
import axios from 'axios';
import ListarFotografos from '../components/ListaFotografos';
import Actualizaciones from '../components/Actualizaciones';


export default function FotografosFavoritos() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [photographers, setPhotographers] = useState([]);
    const [updates, setUpdates] = useState([]);
    const [userId] = useState(parseInt(user.id)); 

    useEffect(() => {
        const fetchData = async () => {
        const photographersRes = await axios.get('http://localhost:4500/usuarios');
        const photographersData = photographersRes.data.filter(user => user.tipo === 'fotografo');
        setPhotographers(photographersData);
        
        const updatesRes = await axios.get('http://localhost:4500/updates');
        const userFollowedPhotographers = photographersData.filter(p => p.followers.includes(userId)).map(p => p.id);
        console.log(userFollowedPhotographers)

        const userFollowedPhotographersSet = new Set(userFollowedPhotographers.map(id => id.toString()));
        const filteredUpdates = updatesRes.data.filter(update => userFollowedPhotographersSet.has(update.userId.toString()));
        setUpdates(filteredUpdates);

        console.log(filteredUpdates)
        };
        fetchData();
    }, [userId]);

    const handleFollow = async (photographerId) => {
        const photographer = photographers.find(p => p.id === photographerId);
        if (photographer.followers.includes(userId)) {
        photographer.followers = photographer.followers.filter(id => id !== userId);
        } else {
        photographer.followers.push(userId);
        }
        await axios.put(`http://localhost:4500/usuarios/${photographerId}`, photographer);
        setPhotographers([...photographers]);
    };

    return (
        <div className="container">
        <h1 className="mt-5 text-center">Mis Fotógrafos Favoritos</h1>
        <hr />
        <ListarFotografos photographers={photographers} handleFollow={handleFollow} userId={userId} />
        <h1>Actualizaciones</h1>
        <Actualizaciones updates={updates} />
        </div>
    );
}

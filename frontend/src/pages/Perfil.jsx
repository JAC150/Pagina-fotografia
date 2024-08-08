import { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/estilos-perfil.css';
import { Helmet } from 'react-helmet';

export default function Perfil() {
    const [userData, setUserData] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(userData)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user)

        axios.get(`http://localhost:4500/usuarios/${user.id}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los datos del usuario:', error);
            });
    }, []);

    const handleSubscriptionToggle = () => {
        if (!userData) return;

        const updatedUserData = {
            ...userData,
            suscrito: !userData.suscrito
        };

        axios.put(`http://localhost:4500/usuarios/${userData.id}`, updatedUserData)
            .then(response => {
                setUserData(response.data);

                let miObjeto = JSON.parse(localStorage.getItem('user'));
                miObjeto.suscrito = userData.suscrito;
                localStorage.setItem('user', JSON.stringify(miObjeto));
            })
            .catch(error => {
                console.error('Hubo un error al actualizar los datos del usuario:', error);
            });
    };

    const handlePremiumToggle = () => {
        if (!userData) return;

        const updatedUserData = {
            ...userData,
            premium: !userData.premium
        };

        axios.put(`http://localhost:4500/usuarios/${userData.id}`, updatedUserData)
            .then(response => {
                setUserData(response.data);

                let miObjeto = JSON.parse(localStorage.getItem('user'));
                miObjeto.premium = userData.premium;
                localStorage.setItem('user', JSON.stringify(miObjeto));
            })
            .catch(error => {
                console.error('Hubo un error al actualizar los datos del usuario:', error);
            });
    };

    const handleBoletinToggle = () => {
        if (!userData) return;

        const updatedUserData = {
            ...userData,
            boletines: !userData.boletines
        };

        axios.put(`http://localhost:4500/usuarios/${userData.id}`, updatedUserData)
            .then(response => {
                setUserData(response.data);

                let miObjeto = JSON.parse(localStorage.getItem('user'));
                miObjeto.boletines = userData.boletines;
                localStorage.setItem('user', JSON.stringify(miObjeto));
            })
            .catch(error => {
                console.error('Hubo un error al actualizar los datos del usuario:', error);
            });
    };

    return(
        <>
        <Helmet>
          <title>Perfil | Página de Fotos</title>
        </Helmet>
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="../public/images/OIP.jpeg" alt=""/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {user.name}
                                    </h5>
                                    <h6>
                                        {user.tipo}
                                    </h6>
                                    
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Información</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <a href="">Notificaciones</a><br/>
                            <input type="button" className="profile-edit-btn" name="btnAddMore" 
                            value={user.suscrito == true ? 'Desactivar -' : 'Activar +'}
                            onClick={handleSubscriptionToggle}/>
                            <br/>
                            <br/>
                            <a href="">Suscripción</a><br/>
                            <input type="button" className="profile-edit-btn" name="btnAddMore" 
                            value={user.premium == true ? 'Desuscribir -' : 'Suscribir +'}
                            onClick={handlePremiumToggle}/>
                            <br />
                            <br />
                            <a href="">Boletines</a><br/>
                            <input type="button" className="profile-edit-btn" name="btnAddMore" 
                            value={user.boletines == true ? 'Desuscribir -' : 'Suscribir +'}
                            onClick={handleBoletinToggle}/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nombre</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Teléfono</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        
                            </div>
                           
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </>
    )
}
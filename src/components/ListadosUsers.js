import React, { useEffect, useState, useCallback } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeRoleUser from './ChangeRoleUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import CardEstilo from './CardEstilo'; // Importamos el componente base
import "./ListadosUsers.css";
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #0a57ca7f;
    color:white;
  }
  &.destacado {
    background-color: orange;
  }

  /* @media (min-width: 768px) {
    margin: 5em;
  }
  @media (max-width: 500px) {
    margin: 10em;
  } */
`;

const CardTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1em;
  width: 100%;
`;

const CardDescription = styled.div`
  margin: 0 0 10px 0;
  font-size: 1em;
  color: #000;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: #0056b3;
  }
  &.descargar {
    background-color: red;
  }
`;

const CardImg = styled.img`
  max-width: 100px;
`;

function ListadosUsers({ url, isGridView }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [q, setQ] = useState("");
  const [searchParam] = useState(["nombre", "email", "delegacion"]);
  const [refresh, setRefresh] = useState(false); // Estado para rastrear actualizaciones

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.users);
        setIsLoaded(true);
        setMessage(data.message);
      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }
    };
    fetchUser();
  }, [url, refresh]);

  const handleUserUpdated = () => {
    setRefresh(!refresh); // Cambia el estado de refresh para desencadenar useEffect
  };

  const search = (items) => {
    return items.filter((item) => {
      return searchParam.some((param) => {
        return (
          item[param]
            .toString()
            .toLowerCase()
            .includes(q.toLowerCase())
        );
      });
    });
  };

  const handleSearchChange = useCallback(debounce((e) => {
    setQ(e.target.value);
  }, 300), []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando lista...</div>;
  } else {

    return (
      <div className="containerlist" style={{ minHeight: '70vh', margin: '2em' }}>
        <div className='wrapper'>
          <div className="search-wrapper">
            <label htmlFor="search-form" style={{ marginBottom: '1em' }}>
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Buscar por nombre, email o delegacion..."
                onChange={handleSearchChange}
                style={{ width: '400px', height: '40px', fontSize: '16px', padding: '10px',
                }}
              />
            </label>
          </div>

          <div className={isGridView ? "card-grido" : "card-listo"} >
            {search(users).map((user) => (
              <>
              <CardContainer key={user.id}>
                <CardTitle>{user.nombre}</CardTitle>
                <CardDescription>
                  <img src={`https://erika.tandempatrimonionacional.eu/gatsbyqr/images/users/${user.image_url}`} alt={user.nombre} style={{width:'100px'}}/>
                  <>
                    <div className='descripcion'>
                      <span className="small text-uppercase text-muted">{user.role}</span>
                      <p className='id'><strong>Id usuario:</strong> {user.id}</p>
                      <p className='email'><strong>Email:</strong> {user.email}</p>
                      <p className='dele'><strong>Delegación:</strong> {user.delegacion}</p>
                      
                      <div className="social">
                        <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                          <UpdateUser
                            className="social-link"
                            initialEmail={user.email}
                            initialNombre={user.nombre}
                            initialDepartamento={user.departamento}
                            onUserUpdated={handleUserUpdated}
                          />
                        </li>
                        <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                          <ChangeRoleUser
                            className="social-link"
                            initialEmail={user.email}
                            onRoleChanged={handleUserUpdated}
                          />
                        </li>
                        <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                          <DeleteUser 
                            className="social-link"
                            onDeleteUser={handleUserUpdated}
                          />
                        </li>
                      </div>
                    </div>
                  </>
                </CardDescription>
              </CardContainer>
              
              {/* <CardEstilo
                key={user.id}
                url={`https://erika.tandempatrimonionacional.eu/gatsbyqr/${user.image_url}`}
                titulo={user.nombre}
                descripcion={
                  <>
                    <div className='descripcion'>
                      <span className="small text-uppercase text-muted">{user.role}</span>
                      <p className='id'><strong>Id usuario:</strong> {user.id}</p>
                      <p className='email'><strong>Email:</strong> {user.email}</p>
                      <p className='dele'><strong>Delegación:</strong> {user.delegacion}</p>
                      
                      <div className="social">
                        <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                          <UpdateUser
                            className="social-link"
                            initialEmail={user.email}
                            initialNombre={user.nombre}
                            initialDepartamento={user.departamento}
                            onUserUpdated={handleUserUpdated}
                          />
                        </li>
                        <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                          <ChangeRoleUser
                            className="social-link"
                            initialEmail={user.email}
                            onRoleChanged={handleUserUpdated}
                          />
                        </li>
                        <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                          <DeleteUser 
                            className="social-link"
                            onDeleteUser={handleUserUpdated}
                          />
                        </li>
                      </div>
                    </div>
                  </>
                }
              /> */}
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ListadosUsers.propTypes = {
  url: PropTypes.string.isRequired,
  isGridView: PropTypes.bool
};

export default ListadosUsers
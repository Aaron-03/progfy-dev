import React from 'react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserAuthContext from '../../../contexts/authenticate/UserAuthContext';
import { Link } from 'react-router-dom';


const ContentHeaderAdmin = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 8rem;
    text-align: center;
    color: white;

    h2 {
        font-size: 30pt;
    }

    p {
        font-size: 16pt;
    }
`;


const DashboardHeaderAdmin = () => {

    const { customer, getUserAuthenticated } = useContext(UserAuthContext);


    useEffect(() => {

        getUserAuthenticated();

    }, []);

    return (
        <ContentHeaderAdmin className="bg-info">
                <div>
                    <h2>Panel de control</h2>
                    <p>Bienvenido: {customer ? customer.names + ' ' + customer.lastnames : ''}</p>
                </div>
                <Link
                    style={{width: '12rem', height: '2.5rem'}}
                    className="btn btn-dark p-2 text-decoration-none text-white"
                    to="/dashboard"
                >IR AL DASHBOARD</Link>
        </ContentHeaderAdmin>
    );
}
 
export default DashboardHeaderAdmin;
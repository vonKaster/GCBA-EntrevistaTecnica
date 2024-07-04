import React, { useState } from 'react';
import { Input, Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from './logo.jpg'

const AddressInput: React.FC = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState<string>('');

    const handleSearch = () => {
        if (address.trim() === '') {
            notification.error({
                message: 'Error',
                description: 'La dirección no puede estar vacía.',
            });
            return; 
        }

        if (!/[a-zA-Z]/.test(address)) {
            notification.error({
                message: 'Error',
                description: 'La dirección debe contener al menos una letra.',
            });
            return;
        }

        if (/[^a-zA-Z0-9\s]/.test(address)) {
            notification.error({
                message: 'Error',
                description: 'La dirección no puede contener símbolos.',
            });
            return;
        }

        const encodedAddress = encodeURIComponent(address.trim());
        navigate(`/resultado?direccion=${encodedAddress}`);
    };

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '15%'}}>
            <img style={{width: '150px'}} src={logo} alt='BA Logo' />
            </div>
        <div style={{ width: '300px', margin: '20px auto', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
            <div>
                <Input 
                    placeholder="Ingrese una dirección" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)}
                    onClick={handleSearch}
                />
            </div>
            <Button 
                type="primary" 
                style={{ marginTop: '10px', marginLeft: 'auto', marginRight: 'auto'}} 
                onClick={handleSearch}
            >
                Buscar
            </Button>
        </div>
        </div>
    );
};

export default AddressInput;

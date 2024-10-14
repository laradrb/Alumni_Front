import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardListCoder from '../cardListCoder/CardListCoder';
import { TittleCoder, GeneralContainerCoder } from '../cardListCoder/StyledCardListCoder';
import Filters from '../filters/Filters';

const ViewListCoder = () => {
    // Estado para coders, loading, skills seleccionadas y errores
    const [coders, setCoders] = useState([]); // Inicializa como array vacío
    const [loading, setLoading] = useState(true); // Cambia a true para mostrar loading inicialmente
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [error, setError] = useState(null);

    // Función para obtener los datos iniciales de los coders
    useEffect(() => {
        const fetchCoders = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/api/coders/');
                setCoders(Array.isArray(response.data) ? response.data : []); // Verifica si es un array
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false); // Termina la carga
            }
        };
        fetchCoders();
    }, []);

    // Función para manejar los cambios en los filtros
    const handleFilterChange = (skills) => {
        setSelectedSkills(skills); // Actualiza las habilidades seleccionadas
    };

    // Comprueba si `coders` es un array antes de mapear
    const filteredCoders = selectedSkills.length > 0
        ? coders.filter(coder => selectedSkills.some(skill => coder.skills.includes(skill)))
        : coders;

    if (loading) {
        return <p>Cargando datos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <TittleCoder>Coders</TittleCoder>
            <GeneralContainerCoder>
                <Filters onFilterChange={handleFilterChange} />
                {filteredCoders.map(coder => (
                    <CardListCoder
                        key={coder.id}
                        name={coder.name}
                        location={coder.location}
                        image={coder.image}
                    />
                ))}
            </GeneralContainerCoder>
        </>
    );
};

export default ViewListCoder;

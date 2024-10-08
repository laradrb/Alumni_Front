import React, { useState, useEffect } from 'react';
import CardListCoder from '../cardListCoder/CardListCoder';
import { TittleCoder, GeneralContainerCoder, SidebarFilter, FilterTitle, FilterList, FilterItem } from '../cardListCoder/StyledCardListCoder';

const ViewListCoder = () => {
    // Simulación de datos que vendrían del backend
    const fakeCoders = [
        {
            id: 1,
            name: 'John Doe',
            location: 'Madrid, Spain',
            gender: 'Male',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Jane Smith',
            location: 'Barcelona, Spain',
            gender: 'Female',
            image: 'https://via.placeholder.com/150'
        },
        // Agrega más datos simulados si es necesario
    ];

    const [coders, setCoders] = useState(fakeCoders); // Usar los datos simulados por ahora
    const [loading, setLoading] = useState(false); // No necesitamos cargar nada en la simulación
    const [error, setError] = useState(null);

    /*
    // Descomentar esta parte cuando el backend esté listo
    useEffect(() => {
        const fetchCoder = async () => {
            try {
                const response = await axios.get('/api/coders/');
                setCoders(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };
        fetchCoder();
    }, []);
    */

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
                <SidebarFilter>
                    <FilterTitle>Filtros</FilterTitle>
                    <FilterList>
                        <FilterItem>Front-End:</FilterItem>
                        <FilterItem>Back-End:</FilterItem>
                        <FilterItem>Experiencia:</FilterItem>
                        <FilterItem>Disponibilidad:</FilterItem>
                        <FilterItem>Idiomas:</FilterItem>
                        <FilterItem>Género:</FilterItem>
                    </FilterList>
                </SidebarFilter>

                {coders.map(coder => (
                    <CardListCoder
                        key={coder.id}
                        name={coder.name}
                        location={coder.location}
                        gender={coder.gender}
                        image={coder.image}
                    />
                ))}
            </GeneralContainerCoder>
        </>
    );
};

export default ViewListCoder;

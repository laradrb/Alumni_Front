import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardListCoder from '../cardListCoder/CardListCoder';
import { TittleCoder,GeneralContainerCoder,SidebarFilter,FilterTitle,FilterList,FilterItem, } from '../cardListCoder/StyledCardListCoder';



const ViewListCoder = () => {
    const [coders, setCoders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <hp>Cargando datos...</hp>;
    } if (error) {
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
        <FilterItem>Experiencia:</FilterItem>
        <FilterItem>Idiomas:</FilterItem>
        <FilterItem>Genero:</FilterItem>
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
)
}

export default ViewListCoder;

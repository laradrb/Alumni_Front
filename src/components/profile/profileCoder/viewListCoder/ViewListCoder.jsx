import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardListCoder from '../cardListCoder/CardListCoder';
import { TittleCoder, GeneralContainerCoder } from '../cardListCoder/StyledCardListCoder';
import Filters from '../filters/Filters';

const ViewListCoder = () => {
    const [coders, setCoders] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoders = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/api/coders/');
                setCoders(Array.isArray(response.data) ? response.data : []); 
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false); 
            }
        };
        fetchCoders();
    }, []);

    const handleFilterChange = (skills) => {
        setSelectedSkills(skills); 
    };

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

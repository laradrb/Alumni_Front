import React from 'react';
import CompanyCard from './CompanyCard';
import { HeaderText, GeneralCompaniesContainer } from './styledMainCompaniesList';

const MainCompaniesList = () => {
    const companies = [
        {
            name: "Nombre de la empresa 1",
            description: "Descripción de la empresa...",
            logoUrl: "https://via.placeholder.com/167x184"
        },
        {
            name: "Nombre de la empresa 2",
            description: "Descripción de la empresa...",
            logoUrl: "https://via.placeholder.com/167x184"
        },
        {
            name: "Nombre de la empresa 3",
            description: "Descripción de la empresa...",
            logoUrl: "https://via.placeholder.com/167x184"
        }
    ];

    return (
        <>
            <HeaderText>Empresas</HeaderText>
            <GeneralCompaniesContainer>
                {companies.map((company, index) => (
                    <CompanyCard 
                        key={index}
                        name={company.name}
                        description={company.description}
                        logoUrl={company.logoUrl}
                    />
                ))}
            </GeneralCompaniesContainer>
        </>
    );
};

export default MainCompaniesList;


//LÓGICA PARA EL BACKEND
// import React, { useEffect, useState } from 'react';

// const MainCompaniesList = () => {
//     
//     const [companies, setCompanies] = useState([]); 

//     
//     const fetchCompanies = async () => {
//         try {
//             
//             const response = await fetch('https://api/companies');
//             const data = await response.json(); 
//             setCompanies(data);
//         } catch (error) {
//             
//             console.error('Error fetching companies:', error);
//         }
//     };
//     
//     useEffect(() => {
//         fetchCompanies(); 
//         
//         const intervalId = setInterval(fetchCompanies, 5000); // 5000 ms = 5 segundos
//         
//         return () => clearInterval(intervalId); 
//     }, []); 

//     return (
//         <>
//             <HeaderText>Empresas</HeaderText> 
//             <GeneralCompaniesContainer>
//                 {companies.map((company) => (
//                     <CompanyCard 
//                         key={company.id} 
//                         name={company.name}
//                         description={company.description} 
//                         logoUrl={company.logoUrl}
//                     />
//                 ))}
//             </GeneralCompaniesContainer>
//         </>
//     );
// };

// export default MainCompaniesList;
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

//Ant design
const CustomDiv = styled.div`
    padding : 16px;
    background-color: lightblue;
`;

//kalau ada {} berarti props ({...})
//kalau tidak ada berarti parameter ()
function CompanyProfile({companyData}) {
    const [data, setData] = useState("");

    useEffect(() => {
        setData("Nissi Bintaro Campus")
    }, []);

    return (
        <CustomDiv>
            {/* Contoh penulisan inline CSS */}
            <p
                style={{fontSize: "12px", color : "red", fontWeight: "bold"}}
            >Company Profile</p>
            <h1>Company Name : {companyData.name}</h1>
            <h2>Company Address : {companyData.address}</h2>
           
            <button onClick={() => setData("PT Indodev Niaga Internet")}>
                Add Company Name
            </button>

            {data}
        </CustomDiv>
    )
}

export default CompanyProfile
import { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";


export const CentersPage = () => {
    const [centers, setCenters] = useState(null)

    useEffect(
        () => {
            const getCenters = async () => {
                const response = await fetch('http://localhost:4000/api/centers');
                const data = await response.json();
                setCenters(data.data);
            }
            getCenters();
        }, []
    )

    return (
        <>
        <h2>Pobočky</h2>
        {centers === null ? "Načítám data" : <>{centers.map((center) => ( 
            <div key={center.id}>
            <nav className="centers">
                <Link to={`/pobocky/${center.id}`}>{center.name}</Link>
            </nav>
            <Outlet />
            <br></br>
            </div>
             ))}</>}
        </>
    )}
    


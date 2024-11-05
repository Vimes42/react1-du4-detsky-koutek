import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CenterDetail = () => {
    const [center, setCenter] = useState({});
    const { id } = useParams(); 

    useEffect(
        () => {
            const getCenter = async () => {
                const response = await fetch(`http://localhost:4000/api/centers/${id}`);
                const json = await response.json();
                setCenter(json.data);
            }
            getCenter();
        }, []
    )

    return (
        <div>
            <h2>{center.name}</h2>
            <p><strong>Adresa:</strong> {center.address}</p>
            <p><strong>Kapacita:</strong> {center.capacity} dětí</p>
            <p><strong>Info:</strong> {center.info}</p>
            <h3>Otevírací doba</h3>
            {center.open ? (
                Object.entries(center.open).map(([day, time]) => (
                    <div key={day}>
                        <strong>{day}:</strong> {time || 'Zavřeno'}
                    </div>
                ))
            ) : (
                <p>Otevírací doba není k dispozici.</p>
            )}
        </div>
    );
};

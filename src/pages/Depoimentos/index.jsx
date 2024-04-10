import './Depoimentos.style.css';
import { useEffect } from 'react';
import React from 'react';

export function Depoimentos() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <h1>Depoimentos</h1>
        </>
    );
}
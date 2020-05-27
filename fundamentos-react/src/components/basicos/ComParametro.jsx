import React from 'react'

export default (props) => {
    // props é somente leitura! (não pode ser motificado)
    // ex: props.titulo = "Outro Título" => error!

    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
            <p>{Array(10).fill(0)}</p> 
        </>
    );
};
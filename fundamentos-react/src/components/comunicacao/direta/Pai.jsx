import React from 'react'
import Filho from './Filho'

export default (props) =>
    <div>
        <Filho {...props}> <strong> Arnaldo </strong> </Filho>
        <Filho sobrenome={props.sobrenome}>Almada</Filho>
        <Filho sobrenome="Alcântara">Hermanoteu</Filho>
    </div>
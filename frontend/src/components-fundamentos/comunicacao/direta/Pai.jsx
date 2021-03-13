import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}><strong>Vanderlei</strong></Filho>
        <Filho sobrenome="Alamino"><strong>Luciene</strong></Filho>
    </div>
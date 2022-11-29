import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerPage, TitlePage } from "../../styles-template";

const Sobre = () => {
    return (
        <ContainerPage>
            <TitlePage>
                <div>
                    <h1>Sobre</h1>
                    <Link to="/">retornar a página inicial</Link>
                </div>
            </TitlePage>
        </ContainerPage>
    );
}

export default Sobre;   
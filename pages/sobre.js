import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h1>Sobre </h1>
            
            <Link  href="/tempo">
                <a>Acessar página tempo</a>
            </Link>
        </div>
    )
}


// Como a pagina está utilizando o node é só exportar o componente que cria a pagina
export default Sobre
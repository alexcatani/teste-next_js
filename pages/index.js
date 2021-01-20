import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home </h1>
            
            <Link  href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
        </div>
    )
}


// Como a pagina está utilizando o node é só exportar o componente que cria a pagina
export default Home
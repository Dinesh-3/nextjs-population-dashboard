import Link from 'next/link';

const Header = ()=> (
    <div>
        <h1> World Population Dashboard </h1>
        <ul>
            <li><Link href="/"><a>Population</a></Link></li>
            <li><Link href="/density"><a>Density</a></Link></li>
            <li><Link href="/land-area"><a>Land Area</a></Link></li>
        </ul>
    </div>
)

export default Header;
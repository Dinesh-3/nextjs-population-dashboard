import Link from 'next/link';
/*
* App Header
*/
const Header = ()=> (
    <div class="header">
        <h1 class="header-title"> World Population Dashboard </h1>
        <ul>
            <li><Link href="/"><a>Population</a></Link></li>
            <li><Link href="/density"><a>Density</a></Link></li>
            <li><Link href="/land-area"><a>Land Area</a></Link></li>
        </ul>
    </div>
)

export default Header;
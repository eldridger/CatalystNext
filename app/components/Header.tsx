import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href='/'>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href='/about'>
            <a style={linkStyle}>About</a>
        </Link>
        <Link href='/cast'>
            <a style={linkStyle}>Cast</a>
        </Link>
        <Link href='/login'>
            <a style={linkStyle}>Login</a>
        </Link>
        <Link href='/register'>
            <a style={linkStyle}>Register</a>
        </Link>
    </div>
)

export default Header
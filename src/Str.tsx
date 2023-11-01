import { Link } from 'react-router-dom';
const Str = () => {
    return (
        <nav className="my-link">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        </nav>
    )
}

export {Str}
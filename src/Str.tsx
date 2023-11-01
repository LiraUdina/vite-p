import { Link } from 'react-router-dom';
const Str = () => {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/More">More</Link>
      </nav>
    )
}

export {Str}
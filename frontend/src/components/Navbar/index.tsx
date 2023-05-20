import { APP_TITLE } from 'helpers/constants';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <strong>{APP_TITLE}</strong>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#" role="button">
                        Button
                    </a>
                </li>
            </ul>
        </nav>
    );
}

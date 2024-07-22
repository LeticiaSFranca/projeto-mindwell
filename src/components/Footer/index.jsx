import './Footer.style.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                Copyright &copy; {currentYear}{' '}
                <a href="https://spacefordevelopment.vercel.app/" target="_blank">
                    Space For Development
                </a>{' '}
                <br />
                Projeto de uma Unidade Curricular da Faculdade
            </p>
        </footer>
    );
}

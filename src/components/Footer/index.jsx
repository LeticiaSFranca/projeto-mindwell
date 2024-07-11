import './Footer.style.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                Copyright &copy; {currentYear}{' '}
                <a href="https://gfcodes.vercel.app/" target="_blank">
                    GF Codes
                </a>{' '}
                <br />
                Projeto de uma Unidade Curricular da Faculdade
            </p>
        </footer>
    );
}

import './Footer.style.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                Copyright &copy; {currentYear}{' '}
                <a href="https://gf-company.vercel.app/" target="_blank">
                    GF Company
                </a>{' '}
                <br />
                Projeto de uma Unidade Curricular da Faculdade
            </p>
        </footer>
    );
}

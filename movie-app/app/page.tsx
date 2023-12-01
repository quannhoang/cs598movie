import Navigation from '../components/Navigation'
import Button from '../components/Button'
import Header from '../components/Header'
import GenresPanel from '../components/GenresPanel'
import ResultsPanel from '../components/ResultsPanel'

export default function Page() {
    return (
        <>
            <body>
                <Header />
                <br />
                <Navigation />
                <br />
                <GenresPanel />
                <br />
                <ResultsPanel />
            </body>
        </>
    )
}


import Navigation from '../components/Navigation'
import Header from '../components/Header'
import GenresPanel from '../components/GenresPanel'
import ResultsPanel from '../components/ResultsPanel'

export default function Page() {
    return (
        <>
            <div id='main'>
                <Header />
                <br />
                <Navigation selected='genres'/>
                <br />
                <GenresPanel key='genres'/>
                <br />
                <ResultsPanel loading={true} ids={[]} movies={[]} />
            </div>
        </>
    )
}


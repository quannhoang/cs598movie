import Navigation from '../../components/Navigation'
import Button from '../../components/Button'
import Header from '../../components/Header'
import PreferencesPanel from '../../components/PreferencesPanel'
import ResultsPanel from '../../components/ResultsPanel'

export default function Page() {
    return (
        <>
            <div id='main'>
                <Header />
                <br />
                <Navigation selected='preferences' />
                <br />
                <PreferencesPanel key='preferences'/>
                <br />
                <ResultsPanel />
            </div>
        </>
    )
}


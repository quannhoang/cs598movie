import Button from '../components/Button'
import Header from '../components/Header'

export default function Page() {
    return (
        <>
            <body>
                <Header />
                <br />
                <Button text="Recommender by Genre" />
                <Button text="Recommender by Rating" />
            </body>
        </>
    )
}


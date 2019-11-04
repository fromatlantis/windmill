import React from 'react'
import logo from './logo.svg'
import './Home.css'
import BaseLayout from '../../layouts/BaseLayout'
import { PlaceHolder } from '../../components/PlaceHolder'
const Home: React.FC = () => {
    return (
        <BaseLayout>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <PlaceHolder />
            </div>
        </BaseLayout>
    )
}

export default Home

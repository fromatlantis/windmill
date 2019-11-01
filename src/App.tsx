import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home'
const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default App

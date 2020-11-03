import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from './routes';

function App() {

    return (
        <Router>
            <div>
                <Menu />
                {routes.map((route, index) => {
                    return <Route 
                        key={index} 
                        path={route.path} 
                        exact={route.exact} 
                        component={route.main} 
                    />;
                })}
            </div>
        </Router>
    );
}

export default App;

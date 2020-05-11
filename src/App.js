import React from 'react';
import { 
  Switch, 
  BrowserRouter as Router
} from 'react-router-dom';
import { Header, Footer } from 'components/layout';
import Routes from './routes';
import 'antd/dist/antd.css';
import 'public/vendors/fontawesome/css/all.css';
import 'public/vendors/fontawesome/js/all.min.js';
import 'public/main.scss';

class App extends React.Component {
  render() {
    const { pathname = '' } = window.location;

    return  pathname !== '/login' ? <Router>
                                      <React.Fragment>
                                        <Header />
                                        <main className='main'>
                                          <Switch>
                                            <Routes/>
                                          </Switch>
                                        </main>
                                        <Footer />
                                      </React.Fragment>
            </Router> : <Router>
                          <Switch>
                            <Routes/>
                        </Switch>
    </Router>
  }
}
export default App;
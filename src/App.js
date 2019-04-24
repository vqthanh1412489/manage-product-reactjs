import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import ButtonAddProduct from './components/ButtonAddProduct/ButtonAddProduct'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import routes from './routes';

class App extends React.Component {
    render() {
        return (
           <BrowserRouter>
                <div>
                <div className="container">
                    <Menu />
                    <ButtonAddProduct />
                    <div className="row">
                        {this.showContentMenus(routes)}
                    </div>
                </div>
            </div>
           </BrowserRouter>
        );
    }

    showContentMenus = router => {
        var result = null;
        if (routes.length > 0){
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            });
        }
        return <Switch>{result}</Switch>;
    }
}



export default App;

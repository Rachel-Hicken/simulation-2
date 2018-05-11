import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';


export default (
    <div>
        <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/wizard' component={Wizard}/>
        </Switch>
    </div>
)

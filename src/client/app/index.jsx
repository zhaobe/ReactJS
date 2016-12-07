import React from 'react';
import {render} from 'react-dom';
import NewComponent from './NewComponent.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello from React!
                <button>This is a Button</button>
                </p>
                <NewComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));

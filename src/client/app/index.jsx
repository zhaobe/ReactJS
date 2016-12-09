import React from 'react';
import {render} from 'react-dom';
import NewComponent from './NewComponent.jsx';
import MyComponent from './MyComponent.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello World React!</p>
                <button>This is a Button</button>
                <br/>
                <p>Putting curly braces inside tags will evalute the element as javascript.</p>
                <p>As seen here, we print out the number {1+2} instead of 1 + 2.</p>
                <br/>
                <p>You may also access the Javascript variables in the JSX environment</p>
                <p>Don't forget the curly braces when passing it into the render method.</p>
                <br/>
                <p></p>
                <NewComponent />
                <MyComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));

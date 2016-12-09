import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                name: {user.name}
            </div>
        );
    }
}
var user = { name: 'Bob'};
export default MyComponent;

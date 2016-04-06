// Lesson 4

import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    render() {
        let text = this.props.bakar;
        return <h1>{text}</h1>
    }
}

App.propTypes = {
    bakar: React.PropTypes.string,
    chuttiya: React.PropTypes.number.isRequired
}

App.defaultProps = {
    bakar: 'behenchod',
    chuttiya: 10
}

ReactDOM.render(
    <App bakar="learning react" />,
    document.getElementById('app')
);
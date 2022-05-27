import React from 'react'
import {useHistory} from "react-router-dom"


import Center from '../../tools/Center';

class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        showClickText: false
    }
}
componentDidMount() {
    setTimeout(()=> {
        this.setState({showClickText:true})},5000);
}
render(){
    const {history} = this.props;
    const enterStyle = {
        color: "#000",
        marginTop:2,
        fontFamily:'raleway',
        textAlign:'center',
        fontWeight:300,
        fontSize:12,
        textTransform:'uppercase',
        letterSpacing:2
    };

    if (!this.state.showClickText) {
        enterStyle.display = 'none';
    }
    return(
            <Center key="image" onClick={() => history.push('/intro')} style={{
                width: '100vw',
                height: '100vh',
                background: '#970EF6',
                position: 'absolute',
                top: 0,
                left: 0,
                cursor: 'pointer'}}>
                <div>
                <h1 style={{color: '#eee', marginBottom: 2, fontFamily: 'raleway', textAlign: 'center', fontWeight: 300, fontSize: 36, textTransform: 'uppercase', letterSpacing: 2}}>Photograph</h1>
                <h2 style={{color: '#eee', marginTop: 2, fontFamily: 'raleway', textAlign: 'center', fontWeight: 300, fontSize: 21.5, textTransform: 'uppercase', letterSpacing: 2}}>Filip Lulek</h2>
                <h4 style={enterStyle}>Click to Enter</h4>
                </div>
            </Center>
    )
}
}

export default Home
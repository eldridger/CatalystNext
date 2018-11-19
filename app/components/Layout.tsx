import React from 'react'
import Header from './Header'

const layoutStyle = {
    margin: 40,
    padding: 20,
    border: '1px solid #DDD'
}

type MyProps = {
    loginRequired?: boolean
}
type MyState = {
    isSignedIn: boolean
}

export default class Layout extends React.Component<MyProps, MyState> {
    
    public static defaultProps: Partial<MyProps> ={
        loginRequired: false
    }

    componentDidMount () {
        this.setState({
            isSignedIn: localStorage.getItem('user') ? true : false
        })
    }

    constructor (props) {
        super(props)
        this.state = {
            isSignedIn: false
        }
    }

    checkSignedIn () {
        if (!this.state.isSignedIn && this.props.loginRequired) {
            return (
                <div>
                    YOU ARE NOT SIGNED IN
                </div>
            )
        }

        return <div>{this.props.children}</div>
    }

    render () {
        return (
            <div style={layoutStyle}>
                <h1>CATALYST</h1>
                <Header />
                {this.checkSignedIn()}
            </div>
        )
    }
}
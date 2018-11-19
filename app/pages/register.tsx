import Layout from '../components/Layout'
import React from 'react'

type FormState = {
    name?:string,
    birthday?:string,
    age?:string,
    email?:string
}
class Form extends React.Component<{}, FormState> {
    readonly state = {
        name:  '',
        birthday: null,
        age: null,
        email: null
    }

    handleChange(prop:string, value:string) {
        this.setState({ [prop]: value })
        console.log(this.state)
    }

    render () {
        return (<div>
            <ul>
                {Object.keys(this.state).map((name, i) => (
                    <li key={i}>
                        <input
                            type='text'
                            value={name}
                            onChange={(event) => this.handleChange(name, event.target.value)}
                        />
                    </li>
                ))}
            </ul>
            <button>Submit</button>
        </div>)
    }
}

export default () => (
    <Layout>
        <h1>New User</h1>
        <Form />
    </Layout>
)
import React, { Component } from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import { removePost } from '../redux/actions';
import Single from './Single'

class Main extends Component {
    constructor() {
        super()
    }



    render() {

        // console.log(this.props)
        return (
            <div>
                {/* <h1><Link to="/">Photowall</Link></h1> */}
                <h1><Link to="/">Might Right</Link></h1>
                <Route exact path="/" render={() => (
                    <div>
                        <PhotoWall {...this.props} />
                    </div>
                )} />

                {/* if one component use this */}
                {/* <Route path="/AddPhoto" component={AddPhoto} /> */}

{/* notice curly braces around history. history is part of object/params */}
                <Route path="/AddPhoto" render={({ history }) => (
                    <AddPhoto {...this.props} />
                )} />

                <Route path="/single/:id" render={(params) => (
                    <Single {...this.props} {...params}/> //order matters
                )} />

            </div>
        )
    }
}

export default Main
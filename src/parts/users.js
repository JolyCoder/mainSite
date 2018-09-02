import React, { Component } from 'react'
import { connect } from 'react-redux'
import Usercard from './Usercard'
import HeaderM from './head'
import { css } from 'aphrodite'
import styles from '../styles/styles'


class Users extends Component{
    render(){
        return(
            <div className={css(styles.usersDiv)}>
                <HeaderM />
                <div>
                    {this.props.users.map(
                        (item, index) => 
                            <div className={css(styles.user)}>
                                <Usercard author={item.toString()} />
                            </div>
                    )}
                    </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        users: state.usersList
    })
)(Users)


import React, { Component } from 'react'
import { Card, List, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Usercard extends Component{
    render(){
        return(
            <Card>
                <Image src='https://picsum.photos/650/?random' />
                <Card.Content>
                    <Card.Header>{this.props.users[this.props.author.toString()].name}</Card.Header>
                    <Card.Meta>{this.props.author}</Card.Meta>
                    <Card.Description>
                        <List>
                            <List.Item icon='users' content='Semantic UI' />
                            <List.Item icon='marker' content={this.props.users[this.props.author.toString()].target} />
                            <List.Item icon='mail' content={<a href={'mailto:' + this.props.users[this.props.author.toString()].email}>{this.props.users[this.props.author.toString()].email}</a>} />
                            <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default connect(
    state => ({
        news: state.news,
        users: state.users
    })
)(Usercard);
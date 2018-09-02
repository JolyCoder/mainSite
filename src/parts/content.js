import React, { Component } from 'react'
import { Button, Item, Modal, Header, Label, Popup, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { css } from 'aphrodite'
import styles from '../styles/styles'
import Usercard from './Usercard'
import HeaderM from './head'

class Content extends Component {
    render(){
        return(
            <div>
                <HeaderM />
                <div className={css(styles.itemDiv)}>
                    <Item.Group>
                        <Grid columns={2} centered divided>
                        {this.props.news.map(
                                (item, index) =>
                                <Grid.Column>
                                    <Item className={css(styles.item)}>
                                        <Item.Image size='tiny' src={item.logo}  className={css(styles.log)}/>
                                        <Item.Content>
                                            <Item.Header as='h2' className={css(styles.mrg)}>{item.title}</Item.Header>
                                            <Item.Meta className={css(styles.mrg)}>
                                                <div>
                                                    <Popup position='right center' trigger={
                                                        <Label as='a' color='blue'>
                                                            {item.author}
                                                        </Label>                                                        
                                                    }><Usercard author={item.author} /></Popup>
                                                </div>
                                            </Item.Meta>
                                            <Item.Description className={css(styles.mrg)}>
                                                {item.descrip}
                                            </Item.Description>
                                            <Item.Extra className={css(styles.mrg)}>
                                                <Modal dimmer='blurring' trigger={<Button>Показать больше</Button>}>
                                                    <Modal.Header>Запись</Modal.Header>
                                                    <div className={css(styles.card)}>
                                                        <Usercard author={item.author}/>
                                                    </div>
                                                    <Modal.Content text>
                                                        <Header><h2>{item.title}</h2></Header>
                                                        <Modal.Description>
                                                            <p>{item.text}</p>
                                                        </Modal.Description>
                                                    </Modal.Content>
                                                </Modal>
                                            </Item.Extra>
                                        </Item.Content>
                                    </Item>
                                    </Grid.Column>
                            )}
                            </Grid>
                    </Item.Group>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        news: state.news,
        users: state.users
    })
)(Content);
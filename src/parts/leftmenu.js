import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import styles from '../styles/styles'
import logo from "../logo.svg"

class Leftmenu extends Component{
    render(){
        return(
            <Menu className={css(styles.scrollMenuLeft)} vertical floated='right' fixed='right'>
               <Link to='/'><Menu.Item name="logo"><img src={logo} alt=" "/></Menu.Item></Link>
			   <Link to='/'><Menu.Item name="Главная" onClick={this.handleItemClick} className={css(styles.Menu)}>Главная</Menu.Item></Link>
			   <Link to='/news'><Menu.Item name="Новости" onClick={this.handleItemClick} className={css(styles.Menu)}>Новости</Menu.Item></Link>
			   <Link to='/ourteam'><Menu.Item name="Наша команда" onClick={this.handleItemClick} className={css(styles.Menu)}>Наша команда</Menu.Item></Link>
			   <Link to='/news'><Menu.Item name="Портфолио" onClick={this.handleItemClick} className={css(styles.Menu)}>Портфолио</Menu.Item></Link>
		   </Menu>
        );
    }
}

export default Leftmenu;
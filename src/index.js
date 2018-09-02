import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router'
import history from './parts/history'
import Content from './parts/content';
import Users from './parts/users';

const initState = {
    news: [
        {
            title: "Lorem Ipsum",
            descrip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            logo: "https://picsum.photos/200/?random",
            author: "jolycoder"
        },
        {
            title: "Lorem Ipsum",
            descrip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            logo: "https://picsum.photos/200/?random",
            author: "german"
        },
        {
            title: "Lorem Ipsum",
            descrip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            logo: "https://picsum.photos/200/?random",
            author: "andrew"
        },
        {
            title: "Lorem Ipsum",
            descrip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            logo: "https://picsum.photos/200/?random",
            author: "jolycoder"
        },
        {
            title: "Lorem Ipsum",
            descrip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            logo: "https://picsum.photos/200/?random",
            author: "german"
        },
        {
            title: "Lorem Ipsum",
            descrip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            logo: "https://picsum.photos/200/?random",
            author: "andrew"
        },
        {
            title: "Lorem Ipsum",
            descrip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            logo: "https://picsum.photos/200/?random",
            author: "jolycoder"
        },
        {
            title: "Lorem Ipsum",
            descrip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            logo: "https://picsum.photos/200/?random",
            author: "german"
        },

    ],
    users:  {
        'jolycoder': {
            name: 'Ilya Tvaliashvili',
            img: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
            email: 'itvaliaschvilI@icloud.com',
            target: 'Vladikavkaz'
        },
        'german': {
            name: 'German Fidarov',
            img: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
            email: 'ger.fid@mail.ru',
            target: 'Vladikavkaz'
        },
        'andrew': {
            name: 'Andrew Tvaliashvili',
            img: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
            email: 'tvanda@yandex.ru',
            target: 'Vladikavkaz'
        }, 
        'zinira': {
            name: 'Zinira Mindzaeva',
            img: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
            email: 'zinira@yandex.ru',
            target: 'Vladikavkaz'
        }, 
    },
    usersList: [
        'jolycoder','andrew','german','zinira'
    ]
}

function reducer(state = initState, action){
    if(action.type === 'ADD_NEWS') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}




const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/news" component={Content} />
                <Route path="/ourteam" component={Users} />
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

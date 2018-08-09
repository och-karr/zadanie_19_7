//wyświetlenie pojedynczego komentarza znajdującego się w komponencie z listą komentarzy

import React from 'react';
import { createStore } from 'redux';
import reducer from './reducer.js';
import {thumbUpComment} from './actions.js';

const store = createStore(reducer);
const Comment = ({text, votes}) => 
    <li>{text} 
        <span>votes: {votes}</span>
        <button className={'button'} id={'thumbUp'} onClick={(id) => store.dispatch(thumbUpComment(id))}>Thumb up</button>
        <button className={'button'} id={'thumbDown'}>Thumb down</button>
    </li>; //niech renderuja ise buttony i reaguja na klik --> store dispatch

export default Comment;
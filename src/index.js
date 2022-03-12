import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BriefcaseSVG from './UI/Main/svg/BriefcaseSVG';
import ChatBubblesSVG from './UI/Main/svg/ChatBubblesSVG';
import EyeSVG from './UI/Main/svg/EyeSVG';
import MagnifierSVG from './UI/Main/svg/MagnifierSVG';
import state from './redux/state';
import {addPost} from './redux/state'
import { rerenderApp } from './render';

rerenderApp()

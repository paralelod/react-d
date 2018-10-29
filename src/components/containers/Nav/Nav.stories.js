import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {  withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { MemoryRouter } from 'react-router';
import createMemoryHistory from 'history/createMemoryHistory';

import Nav from './Nav';
import  {active} from './Nav.module.scss';

const history = createMemoryHistory()

history.push = action('history.push')
history.replace = action('history.replace')
history.go = action('history.go')
history.goBack = action('history.goBack')
history.goForward = action('history.goForward')

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
  .add('default', () => {
    return <Nav class={active}/>;
  })
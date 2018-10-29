import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {  withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Button from './Button';


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Button content={text('Label', 'Hello Storybook')} />;
  })
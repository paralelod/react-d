import { configure } from '@storybook/react';
import '../src/index.scss';
import { btn } from '../src/components/blocks/Button.module.scss';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
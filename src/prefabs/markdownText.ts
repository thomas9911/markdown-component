import * as React from 'react';
import {
  component,
  prefab,
  variable,
  Icon,
  font,
  buttongroup,
  color,
  ThemeColor,
} from '@betty-blocks/component-sdk';
import { showOn } from '../utils';

const attributes = {
  category: 'CONTENT',
  icon: Icon.TextInputIcon,
};

const defaultPlaceholder = `This is some markdown

${'```'}javascript
console.log("Hello world!")
${'```'}

with a quote:

> This is a quote

Here is a link to [Betty Blocks docs](https://docs.bettyblocks.com/).

`

const options = {
  content: variable('Content', { value: [defaultPlaceholder] }),
  align: buttongroup(
    'Align',
    [
      ['Left', 'left'],
      ['Center', 'center'],
      ['Right', 'right'],
    ],
    { value: 'left' },
  ),
  padding: buttongroup(
    'Padding',
    [
      ['None', 'none'],
      ['Dense', 'dense'],
      ['Normal', 'normal'],
    ],
    { value: 'normal' },
  ),
  color: color('Text color', {
    value: ThemeColor.BLACK,
    ...showOn('styles'),
  }),
};

export default prefab('Markdown Rich Text', attributes, undefined, [
  component('MarkdownText', { options }, []),
]);

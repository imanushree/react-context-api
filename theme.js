import theme from 'mdx-deck/themes';
import { future } from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';
import prismJS from 'react-syntax-highlighter/languages/prism/js';

export default {
  // extends the default theme
  ...theme,
  ...future,
  // add a custom font
  font: 'Laila, Roboto, sans-serif',
  // custom colors
  colors: {
    text: '#fff',
    background: 'black',
    link: '#da0'
  },
  prism: {
    style: okaidia,
    languages: {
      js: prismJS
    }
  }
};

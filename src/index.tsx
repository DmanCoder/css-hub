import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import theme from './styled/themes/themes';
import { store } from './redux/store';
import { CssReset } from './styled/main';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { gsap } from './gsap';

import i18next from './i18next';

const appInitTL = gsap.timeline({});
appInitTL
  .set('body', {
    css: {
      visibility: 'visible',
    },
  })
  .to(window, {
    scrollTo: { y: 0, x: 0 },
  });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <ThemeProvider theme={theme.dark}>
        <CssReset />
        <App />
      </ThemeProvider>
    </Provider>
  </I18nextProvider>,
);

reportWebVitals();

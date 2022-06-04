import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import styled from 'styled-components';
import { ReadonlyState, rootReducer } from '../../store';

import GlobalStyles from '../../styles/Global.style';
import Wrapper from './Wrapper/Wrapper';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

const logger = createLogger({
    collapsed: true,
    level: 'info',
  });
  
  export const configureStore = (): Store<ReadonlyState> => {
    const store = createStore(
      rootReducer(),
      compose(applyMiddleware(thunk, logger)),
    );
    return store;
  };

const App = (): JSX.Element => (
    <Router>
        <Provider store={configureStore()}>
            <Container>
                <GlobalStyles />
                <Wrapper />
            </Container>
        </Provider>
    </Router>
);

export default App;
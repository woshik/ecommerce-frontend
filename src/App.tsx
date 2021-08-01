import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './BaseRouter';

const App: FC = () => (
  <Suspense fallback="">
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  </Suspense>
);

export default App;

import React, { lazy, Suspense } from 'react';
// We're using dynamic imports, hence commenting out below static import
// import CarDetails from './components/CarDetails';

const CarDetails = lazy(() => import('./components/CarDetails'));

function App() {
  return (
    <>
      <div className='App'>
        <Suspense fallback={<h2>Still loading ...</h2>}>
          <CarDetails />
        </Suspense>
      </div>
    </>
  );
}

export default App;

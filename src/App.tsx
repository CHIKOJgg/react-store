import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/navigation';
import { Theme } from '@radix-ui/themes';
function App() {
  return (
    <>
      <Theme accentColor="gray" grayColor="sand" radius="large" scaling="95%">
        {' '}
        <Navigation />
      </Theme>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

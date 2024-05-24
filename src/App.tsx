import Main from './pages/main';
import { LocationProvider } from './context/locationContext';

export default function App() {
  return (
    <LocationProvider>
      <Main />
    </LocationProvider>
  );
}

import Main from './src/pages/main';
import { LocationProvider } from './src/context/locationContext';

export default function App() {
  return (
    <LocationProvider>
      <Main />
    </LocationProvider>
  );
}

import AppRouter from './routes/app-router';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}

export default App;

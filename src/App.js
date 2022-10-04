
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import TermPage from './components/TermPage';
import FormPage from './components/FormPage';
import { useDbData } from './utilities/firebase';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppMain/>
  </QueryClientProvider>
)

const AppMain = () => {
  const [schedule, error] = useDbData('/data');

  if(schedule === undefined) return <h1>Loading Data</h1>;
  if(error) return <h1>Error Loading Data</h1>;

  return <> 
    <Banner title={schedule.title}></Banner>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TermPage courses={schedule.courses}></TermPage>}/>
        <Route path='/courses/:id' element={<FormPage courses={schedule.courses}></FormPage>}></Route>
      </Routes>
    </BrowserRouter>
    </>;
}
  

export default App;

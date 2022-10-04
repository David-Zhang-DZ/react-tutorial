
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import TermPage from './components/TermPage';
import FormPage from './components/FormPage';
import { useDbData } from './utilities/firebase';
import { useProfile } from './utilities/profile';
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
  const [profile, profileLoading, profileError] = useProfile();

  if(schedule === undefined) return <h1>Loading Data</h1>;
  if(error) return <h1>Error Loading Data</h1>;

  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  return <> 
    <Banner title={schedule.title}></Banner>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TermPage courses={schedule.courses} profile={profile}></TermPage>}/>
        <Route path='/courses/:id' element={<FormPage courses={schedule.courses}></FormPage>}></Route>
      </Routes>
    </BrowserRouter>
    </>;
}
  

export default App;

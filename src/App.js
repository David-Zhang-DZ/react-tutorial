
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import { useJsonQuery } from './utilities/fetch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppMain/>
  </QueryClientProvider>
)

const AppMain = () => {
  const [schedule, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if(isLoading) return <h1>Loading Data</h1>;
  if(error) return <h1>Error Loading Data</h1>;

  return <> 
    <Banner title={schedule.title}></Banner>
    <CourseList courses={schedule.courses}></CourseList>
    </>;
}
  

export default App;

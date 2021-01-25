import './App.css';
import TimeLine from './principalApp/components/timeLine'
import Grid from './principalApp/components/systemGrid'
import LinkLogo from './principalApp/components/LinkLogo'
import Clock from './principalApp/components/clock'



function App() {
  return (
    <div className="root">
    <Grid timeline = {<TimeLine/>} 
          link={<LinkLogo/>} 
          clock={<Clock/>}
    />
    </div>
  );
}

export default App;

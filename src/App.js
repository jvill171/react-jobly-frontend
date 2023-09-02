import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import JoblyApi from "./helpers/api"
import RouteList from './components/RouteList/RouteList';
// import { useState } from 'react';


function App() {

  // const [jobs, setJobs] = useState([])
  // const [companies, setCompanies] = useState([])
  // const [companyJobs, setCompanyJobs] = useState([])

  const callAPI = async () =>{
    console.log(await JoblyApi.getCompany("boyd-evans"))
    // console.log(await JoblyApi.getAllCompanies())
    // console.log(await JoblyApi.getAllJobs())
  }

  callAPI();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import JoblyApi from "./helpers/api"
import RouteList from './components/RouteList/RouteList';
import { useEffect, useState } from 'react';
// import { useState } from 'react';


function App() {

  const [jobs, setJobs] = useState([])
  const [companies, setCompanies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [companyJobs, setCompanyJobs] = useState([])

  const callAPI = async () =>{
    // To be used with CompanyJobs component
    // console.log(`getCompany`, await JoblyApi.getCompany("boyd-evans"))
    // To be used with SearchList => Companies => CompanyCard
    // console.log(`getAllCompanies`, await JoblyApi.getAllCompanies())
    // To be used with SearchList => JobCard
    // console.log(`getAllJobs`, await JoblyApi.getAllJobs())
  }

  callAPI();

  useEffect(()=>{
    // Get all companies
    async function getCompanyList(){
      try{
        let res = await JoblyApi.getAllCompanies();
        setCompanies(res)
      }catch(err){
        console.error(err)
      }
    }
    // Get all jobs
    async function getJobList(){
      try{
        let res = await JoblyApi.getAllJobs();
        setJobs(res)
      }catch(err){
        console.error(err)
      }
    }

    getCompanyList();
    getJobList();
    setIsLoading(false)
  },[])


  return (
    <div className="App">
        {isLoading ? <h1>LOADING...</h1> :
        <BrowserRouter>
          <NavBar />
          <RouteList allCompanies={companies} allJobs={jobs} />
        </BrowserRouter>
        }
    </div>
  );
}

export default App;

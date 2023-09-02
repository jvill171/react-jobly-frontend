import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Home/Home"
import SearchList from "../SearchList/SearchList"
import ItemList from "../ItemList/ItemList"
import Profile from "../Profile/Profile"
import AuthForm from "../AuthForm/AuthForm"
import JobCard from "../JobCard/JobCard";
import CompanyCard from "../CompanyCard/CompanyCard";
import CompanyJobs from "../CompanyJobs/CompanyJobs";

const RouteList = ({ allCompanies, allJobs }) =>{
    return(
        <Routes>
          <Route
            path="/"
            element={ <Home /> }
          />
          
          <Route
            path="/jobs"
            element={
              <SearchList
                ComponentType={ JobCard }
                listData={ allJobs }
                searchType={"title"}
              />}
          />
          
          <Route
            path="/companies"
            element={
              <SearchList
                ComponentType={ CompanyCard }
                listData={ allCompanies }
                searchType={"name"}
              />}
          />
          
          <Route
            path="/companies/:handle"
            element={<CompanyJobs />}
          />
          
          <Route
            path="/profile"
            element={<Profile />}
          />
          
          <Route
            path="/login"
            element={<AuthForm />}
          />
          
          <Route
            path="/signup"
            element={<AuthForm />}
          />
        </Routes>
    )
}

export default RouteList;
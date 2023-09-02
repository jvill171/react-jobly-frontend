import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Home/Home"
import SearchList from "../SearchList/SearchList"
import ItemList from "../ItemList/ItemList"
import Profile from "../Profile/Profile"
import AuthForm from "../AuthForm/AuthForm"

const RouteList = () =>{
    return(
        <Routes>

          <Route
            path="/"
            element={ <Home /> }
          />
          
          <Route
            path="/jobs"
            element={<SearchList />}
          />
          
          <Route
            path="/companies"
            element={<SearchList />}
          />
          
          <Route
            path="/companies/:handle"
            element={<ItemList />}
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
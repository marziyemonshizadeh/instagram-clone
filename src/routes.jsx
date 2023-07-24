import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyApp = lazy(()=> import ('./Pages/welcomePage/App.jsx'))
const LazyLogin = lazy(()=> import ('../src/Pages/login/logIn.jsx'))
const LazySignup = lazy(()=> import ('../src/Pages/signup/signup.jsx'))
const LazyMain = lazy(()=> import ('./Pages/homepage/homePage.jsx'))
const LazyStore = lazy(()=> import ('./Pages/store/store.jsx'))
const LazyCreate = lazy(()=> import ('./Pages/createPg/create.jsx'))
const LazyAboutMe = lazy(()=> import ('./Pages/aboutme/aboutMe'))
const LazyHome = lazy(()=> import ('./components/showPost/showPosts'))

export default function routes() {
  return (
    <BrowserRouter>
       <Routes>
            <Route path="/" element={
                <Suspense fallback='loading...'>
                    <LazyApp/>                                      
                </Suspense>
                } />
            <Route path="/login" element={
                <Suspense fallback='loading login page...'>
                    <LazyLogin/>                                      
                </Suspense>
            } />
            <Route path="/signup" element={
                <Suspense fallback='loading signup page...'>
                    <LazySignup/>                                      
                </Suspense>
            } />
            {/* main page nested link*/}
            <Route path="/main" element={ <Suspense fallback='loading main page...'>
                                                    <LazyMain/>
                                            </Suspense>} >
                <Route index element={<Suspense fallback='loading about me page...'>
                                                    <LazyHome/>                                      
                                                </Suspense>}/>
                <Route path='aboutme' element={<Suspense fallback='loading about me page...'>
                                                    <LazyAboutMe/>                                      
                                                </Suspense>}/>
                <Route path='store' element={<Suspense fallback='loading store page...'>
                                                    <LazyStore/>                                      
                                                </Suspense>}/>
                <Route path='create' element={<Suspense fallback='loading create post page...'>
                                                    <LazyCreate/>                                      
                                                </Suspense>}/>

            </Route>
        </Routes>
    </BrowserRouter>
    
  )
}

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../pages/App';
import "../index.scss";
import CrmDashboard from '../container/crm/dashboard/crmdashboard';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <BrowserRouter>
      <React.Suspense>
        <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
        <Route index element={<CrmDashboard />} />
            <Route  path={`${import.meta.env.BASE_URL}crm/crmdashboard`} element={<CrmDashboard />} />
            </Route>
         

        </Routes>
      </React.Suspense >
    </BrowserRouter>
  </Fragment>
);

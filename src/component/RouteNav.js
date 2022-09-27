import React from 'react'
import ApplyForm from "./component/ApplyForm";
import HeadEvent from "./component/HeadEvent";

import { BrowserRouter as Router,Route } from 'react-router-dom'

export default function () {
  return (
    <div>
<Router>
  <Route path="/" element={<ApplyForm alertType={ShowAlert} textColor={textColor} />}>
    
  </Route>
  <Route path="/About" element={<HeadEvent />}>
  </Route>
</Router>
    </div>
  )
}

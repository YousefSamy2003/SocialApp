import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from './Routing/Approuting';


export default function App() {

  return (
    <> <RouterProvider router={router} /> </>
  );
}

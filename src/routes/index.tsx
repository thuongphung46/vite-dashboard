import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../component/pages/error";
import { HomePage } from "../component/pages/home";
import { ConversionDataPage } from "../component/pages/conversion_data";
import { LoanDetailPage } from "../component/pages/loan_details";
import { SurplusPage } from "../component/pages/surplus";
import RootLayout from "../component/templates/root_layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/conversion_data",
        element: <ConversionDataPage />,
      },
      {
        path: "/loan_details",
        element: <LoanDetailPage />,
      },
      {
        path: "/surplus",
        element: <SurplusPage />,
      },
    ],
  },
]);

export { router };

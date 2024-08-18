import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, IconButton, Box } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SidebarTab from "./pages/global/SidebarTab";
import Customer from "./pages/customer";
import Login from "./pages/login";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            {/* Routes cho các trang công cộng */}
            <Route path="/login" element={<Login />} />

            {/* Routes cho các trang yêu cầu đăng nhập */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <div className="app">
                    <SidebarTab />
                    <main className="content">
                      <Topbar />
                      <Dashboard />
                    </main>
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/customer"
              element={
                isAuthenticated ? (
                  <div className="app">
                    <SidebarTab />
                    <main className="content">
                      <Topbar />
                      <Customer />
                    </main>
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            {/* Thêm các route khác ở đây */}
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

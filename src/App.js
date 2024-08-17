import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, IconButton, Box } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SidebarTab from "./pages/global/SidebarTab";
import Customer from "./pages/customer";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            <SidebarTab />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customer" element={<Customer />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

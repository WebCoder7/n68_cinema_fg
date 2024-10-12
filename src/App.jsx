import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth";
import Home from "./pages/Home";
import SmsPage from "./pages/Sms";
import ProfilePage from "./pages/Profile";
import SeansPage from "./pages/seans";
import DetailPage from "./pages/Detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Bileti from "./pages/Bileti";
import { Provider, } from "react-redux"; 
import store from "./redux/Store";
import SearchPage from "./pages/Search";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-[1360px] w-full mx-auto">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/login/sms" element={<SmsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/seans" element={<SeansPage />} />
              <Route path="/:id" element={<DetailPage />} />
              <Route path="/bilet" element={<Bileti />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </Provider>
  );
}

export default App;

import Navbar from "./components/ui/Navbar";
import SearchResults from "./components/search/SearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdvancedSearch from "./components/search/AdvancedSearch";
import CardDetailPage from "./components/card-details/CardDetailPage";
import MyCollection from "./components/collection/CollectionList";
import MyCollection2 from "./components/collection/CollectionCards";
import Login from "./components/accounts/Login";
import SignUp from "./components/accounts/SignUp";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/home/HomePage";
import DecksList from "./components/decks/DecksList";
import DeckDetail from "./components/decks/DeckDetail";
import NotFoundPage from "./components/NotFound/NotFound";
import GameBoard from "./components/mini-game/GameBoard";
import "./App.css";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <div className="page-container">
      <div className="content-wrap mb-3">
        <BrowserRouter basename={basename}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="advanced-search" element={<AdvancedSearch />}></Route>
            <Route path="card/:multiverse_id" element={<CardDetailPage />} />
            <Route path="edit_collection" element={<MyCollection />}></Route>
            <Route path="collection" element={<MyCollection2 />}></Route>
            <Route path="decks" element={<DecksList />}></Route>
            <Route path="deck/:deck_id" element={<DeckDetail />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="game" element={<GameBoard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

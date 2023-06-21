import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.jsx";
import { Nfound } from "./routes/nfound/nfound";
import { UserProfile } from "./routes/profile/profile.route";
import React from "react";
import { Cartcontainer } from "./components/cartcontainer/cartcontainer.component";
import { Home } from "./routes/home/home.route";
import { SellerCentral } from "./routes/uploadproduct/starting/product.route";
import { AddTodo } from "./routes/test/test";
import { UploadForm } from "./routes/uploadproduct/form/form";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/sellercentral" element={<SellerCentral />} />
        <Route path="/sellercentral/upload" element={<UploadForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<Cartcontainer />} />
        <Route path="/notfound" element={<Nfound />} />
        <Route path="/test" element={<AddTodo />} />
        <Route path="*" element={<Nfound />} />
      </Route>
    </Routes>
  );
}

export default App;

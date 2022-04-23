import "./App.css";
import React from "react";
import ContentIndex from "./modules/content";
import Website from "./modules/website";
import NftCollectionsPage from "./modules/website/pages/NftCollections";
import WebsiteLayout from "./layouts/WebsiteLayout";
import NftCollections from "./modules/nft-collections";
import CMSLayout from "./layouts/CMSLayout";
import Error from "./modules/error";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route path="" element={<Website/>}/>
        <Route path="nft-collections" element={<NftCollectionsPage/>}/>
      </Route>
      <Route
        path="cms"
        element={
          // <div className="m-4">
          //   <h1 className="text-3xl text-center font-bold">
          //     Sinto Shinu Content Manager
          //   </h1>
          <CMSLayout />
          // <ContentIndex />
          // </div>
        }
      >
        <Route path="website" element={<ContentIndex />} />
        <Route path="nft-collections" element={<NftCollections />} />
        {/* redirect to website menu if called /cms */}
        <Route path="" element={<Navigate to="website" replace />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

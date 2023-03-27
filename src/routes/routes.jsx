import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Users from "@/pages/Users";
import Posts from "@/pages/Posts";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import CommentList from "@/pages/CommentList";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuarios" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/sobre" element={<About />} />
      <Route exact path="/contato" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/comment" element={<CommentList />} />
    </Routes>
  );
};

export default MyRoutes;

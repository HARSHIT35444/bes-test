import Image from "next/image";
import { Navbar } from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Slider from "./components/Slider";
import CgProduct from "./components/CgProductRow";

import CromptonProduct from "./components/CromptonProductRow";

export default function Home() {
  return (
    <>
      <Slider />
      <CgProduct />
      
      <CromptonProduct />

    </>
  );
}

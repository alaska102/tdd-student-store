import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./PurchaseGrid.css";

export default function PurchaseGrid() {
  return (    
    <div className="nav"> <Navbar />
        <div className="purchase-grid">
        </div>
    </div>
  );
}
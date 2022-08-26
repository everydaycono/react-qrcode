import './App.css'
import { DatePicker, Input, Menu, Select } from "antd"
import { Header } from 'antd/lib/layout/layout'
import Navbar from './components/Navbar'
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';

import QRCode from "react-qr-code";


function App() {

  const [isSelf, setIsSelf] = useState(false);
  const [value, setValue] = useState("");
  const [size, setSize] = useState("200");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }
  const handleSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.currentTarget.value);
  }
  return (
    <div className="App">
      <Navbar />

      <main  >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} >
          <div >
            <h1>QR CODE Generator</h1>
            <p>QR codes allow smartphone users to acces your websites wimply and quickqly</p>

            <div>
              <input onChange={handleChange} type="text" />
              {isSelf && <Input placeholder="Basic usage" />}
            </div>
            <select onChange={handleSize}>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
            </select>
            <button>Generate a Qrcode</button>
          </div>
          <img style={{ width: "300px" }} src="https://images.prismic.io/bizzonwebsite/db7a23ba-4a87-4aa5-a9dd-364f02c7fe22_Digital+Ordering+Tips-01.png?auto=compress,format" alt="qr-code" />
        </div>

        {value !== "" &&
          <QRCode size={Number(size)} value={value} />
        }
      </main>
    </div>
  )
}

export default App

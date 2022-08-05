import React, { useState, useEffect } from "react";

import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart";
import Userdata from "./components/FetchAPI";
//import { UserData } from "./Data";

function FetchAPI2() {
  //Get Method
  const apiGet = () => {
    fetch("https://c2abs039.caspio.com/rest/v2/tables/Url_Table/records", {
      method: "GET",
      headers: {
        Authorization:
          "bearer GaJNAgb9fvPv89Wyg3gV3nwBy5T8V7_g1_WrAL0-_nI3JJ2N3gJ6nDgHOYvAP34jra94j8vw6DcIhaycMf9eUG0v8QceDk0o1t-mJjfLgu6r3o--8mbmK-9CRdiQxyx_SVjOtbegUGxsYSXommRJRz2kWytCVkKz9FeCB_zO88_aLTltd5iabVJ0yx4B7IQyvPu4Hj8QChKqpOgJJOluJD20pMxbGetaXxjtyKAuuOx8snpDty0zae2UyGqsVp8nilgsO7uAWIVdOeAkb-ua6GiaElNWBGzHZzK8wqfGNu6G1r3_ubJJhWH0HACP4SFgsu0JHQF86wnLpGr_eOMEGID40Hov9lE5qWabzk6srMTSVGfMgga73dwJSznsDqkj"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  };

  return (
    <div>
      {/* My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br /> */}
    </div>
  );
}

function App2() {
  // const items = FetchAPI.FetchAPI();
  // console.log(items);
  const UserData = Userdata;
  console.log(UserData);
  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map(data => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      {/* <div>
        <FetchAPI />
      </div> */}
      <div style={{ width: 400 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 400 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 400 }}>
        <PieChart chartData={userData} />
      </div>
      <div style={{ width: 400 }}>
        <DoughnutChart chartData={userData} />
      </div>
    </div>
  );
}

export default App2;
// export default FetchAPI;
//export default App;

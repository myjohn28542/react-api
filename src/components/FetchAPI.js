import React from "react";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Userdata = () => {
  //Get Method
  //const apiGet = () => {
  const [counter, setCounter] = useState(0);

  const data = () => {
    fetch(
      "https://c2abs039.caspio.com/rest/v2/tables/hc_tbl_CheckResult/records?q.limit=1000",
      {
        method: "GET",
        headers: {
          Authorization:
            "bearer A_5Ulr1qon9_17WWWdme-QU51BHskqCHUafsyrl6I9i9V3FY52JNE1S50c3de3fMsBZAlgE88p4ZIGFtqzo_V6NMM70I25rX4N0_YZD5R9DTR8nzu12vmsOiAjRqifqIbfpoiVgcwOqAQVMDU0lNd9pXSLf3wcPvdpfnSY-9O1nCszTvbLEf8iobWLb_qLLK4Ky0fT_qTDCFc6ubkUyu2utS4_DGBxDGqG4984u5rIfP8-zS4CK9zL0K1No75Lwcq47dZSt-HGEBVv1q8m_MdjL2-n2F3hZOkMOMboPBglU5AoOnhLPRI4TFN5f2twZ7yySbsHzQhjxVC6aD7TGZJ_dZMtfTaLFQLys7UZYfwxOgWtquq8rpP3XglYNT6M91"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        console.log(json.Result[100]);
        let count = 0;
        let count2 = 0;
        let count3 = 0;
        json.Result.forEach(i => {
          //console.log(i.CheckPointN);  stage: "1"

          if (
            i.GradeCheckResult == "(01) พอใจมาก" &&
            (i.padname_user_recID == "VMTJQ9AS" ||
              i.padname_user_recID == "CWUO0AUR")
          ) {
            count++;
          }

          if (
            i.GradeCheckResult == "(02) พอใจปานกลาง" &&
            (i.padname_user_recID == "VMTJQ9AS" ||
              i.padname_user_recID == "CWUO0AUR")
          ) {
            count2++;
          }

          if (
            i.GradeCheckResult == "(03) ไม่พอใจ" &&
            (i.padname_user_recID == "VMTJQ9AS" ||
              i.padname_user_recID == "CWUO0AUR")
          ) {
            count3++;
          }
        });

        console.log(count);
        console.log(count2);
        console.log(count3);
        setCounter(count);
      });
  };

  useEffect(
    () => {
      console.log("Do something after counter has changed", counter);
    },
    [counter]
  );
  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 99999,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];
  return UserData;
  //};

  // return (
  //   <div>
  //     My API <br />
  //     <button onClick={apiGet}>Fetch API</button>
  //     <br />
  //   </div>
  // );
};

export default Userdata;

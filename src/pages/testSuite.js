import React, { useState, useEffect } from "react";
import TableOne from "../components/tables/tableone";


// const data = [
//     {
//         id: "1",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "2",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "3",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "4",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "5",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "6",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "7",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "8",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "9",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "10",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "11",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "12",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "13",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "14",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },
//     {
//         id: "15",
//         test_suite_name: "Test_Suite_0015",
//         scenario: "10",
//         steps: "30",
//         pass: "7",
//         fail: "3",
//     },

// ];
// const columns = [

//     {
//         dataField: "id",
//         text: "ID",
//     },
//     {
//         dataField: "test_suite_name",
//         text: "Test Suite Name",
//     },
//     {
//         dataField: "scenario",
//         text: "Scenarios",
//     },
//     {
//         dataField: "steps",
//         text: "Steps",
//     },
//     {
//         dataField: "pass",
//         text: "Pass",
//     },
//     {
//         dataField: "fail",
//         text: "Fail",
//     },

// ];


const data = [
  {
    id: "1",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "2",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "3",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "4",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "5",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "6",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "7",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "8",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "9",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "10",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "11",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "12",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "13",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "14",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },
  {
    id: "15",
    organization_name: "Testing One",
    city: "Chennai",
    state: "Tamilnadu",
    website: "www.testone.com",
  },

];
const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "email",
    text: "Email ID",
  },
  {
    dataField: "first_name",
    text: "First Name",
  },
  {
    dataField: "last_name",
    text: "Last Name",
  },

  // {
  //     dataField: "website",
  //     text: "Website URL",
  // },

];
export default function Test(props) {

  const [inactive, setInactive] = useState(false);
  const [datas, setdatas] = useState([]);


  const getMethod = async (data) => {

    // console.log("token", id);

    // console.log("ApiGt fetch before", data);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=1`, {
        method: "GET",
        headers: {

          "Content-type": "application/json",
        },
      });

      return response.json();
    } catch (err) {


      console.log("status ", err);
      return err;
    }
  };

  const getFaqList = async () => {
    let tableList = await getMethod(data);
    setdatas(tableList.data);
  };

  useEffect(() => {
    getFaqList()

  }, [])

  return (
    <>
      <div className="right-content">

        <div className="dashboard-head">
          <h2>Test Suite</h2>
          <p>The sample text</p>
        </div>

        <div className="boxes">
          <div className="box-one">
            <div className="box-head">
              <div><b>Total Test Suite</b></div>
            </div>
            <h1 className="box-no">110</h1>
          </div>

          <div className="box-one">
            <div className="box-head">
              <div><b>Total Scenarios</b></div>
            </div>
            <h1 className="box-no">1101</h1>
          </div>
          <div className="box-one">
            <div className="box-head">
              <div><b>Total Steps</b></div>
            </div>
            <h1 className="box-no">110101</h1>
          </div>
        </div>





        <div className="table-one">
          <div className="table-head">
            <h2>Test Suite</h2>
            <TableOne data={datas} offset={10} columns={columns} />
          </div>
        </div>
      </div>



    </>
  );
}
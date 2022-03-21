import React, { useState, useEffect } from "react";
import { GrOrganization } from 'react-icons/gr';
import { HiUsers } from 'react-icons/hi';
import ProjectChart from "../components/charts/projectChart";
import TableOne from "../components/tables/tableone";
import HorBarchat from "../components/charts/horizontalBar"

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



export default function Dashboard(props) {
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
          <h2>Dashboard</h2>
          <p>The sample text</p>
        </div>

        <div className="boxes">
          <div className="box-one">
            <div className="box-head">
              <div><b>Total Organization</b></div>
              <div><GrOrganization /></div>
            </div>
            <h1 className="box-no">110</h1>
            <div className="box-per">
              <button>-3%</button>
            </div>
          </div>

          <div className="box-one">
            <div className="box-head">
              <div><b>Total User</b></div>
              <div><HiUsers /></div>
            </div>
            <h1 className="box-no">110101</h1>
            <div className="box-per2">
              <button>+26%</button>
            </div>
          </div>
        </div>

        <div className="dashboard_chart">
          <div className="project-chart-box">
            <ProjectChart />
          </div>
          <div className="project-chart-box">
            <HorBarchat />
          </div>
        </div>
        

        <div className="table-one">
          <div className="table-head">
            <h2>Organization Details</h2>
            <TableOne data={datas} offset={10} columns={columns} />
          </div>
        </div>
      </div>


    </>
  );
}

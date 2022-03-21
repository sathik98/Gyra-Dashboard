import React, { useState, useEffect } from "react";
import TableOne from "../components/tables/tableone"


const data = [
  {
    id: "1",
    project_name: "MVP",
    created_by: "AK",

  },
];


const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "project_name",
    text: "Project Name",
  },
  {
    dataField: "created_by",
    text: "Created By",
  },
];

export default function Project(props) {

  const [inactive2, setInactive2] = useState(false);
  const [datas2, setdatas2] = useState([]);


  const getMethod2 = async (data) => {

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

  const getFaqList2 = async () => {
    let tableList = await getMethod2(data);
    setdatas2(tableList.data);
  };

  useEffect(() => {
    getFaqList2()

  }, [])

  return (
    <>

      <div className="right-content">

        <div className="dashboard-head">
          <h2>Project</h2>
          <p>The sample text</p>
        </div>

        <div className="boxes">
          <div className="box-one">
            <div className="box-head">
              <div><b>Total Project</b></div>
            </div>
            <h1 className="box-no">1101</h1>
          </div>

          <div className="box-one">
            <div className="box-head">
              <div><b>Storage</b></div>
            </div>
            <h1 className="box-no">1 Tera bytes</h1>
          </div>
        </div>

        <div className="table-one">
          <div className="table-head">
            <h2>Project Details</h2>
            <TableOne data={data} offset={10} columns={columns} />
          </div>
        </div>
      </div>


    </>
  );
}
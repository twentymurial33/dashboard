import React, { useEffect } from "react";
import Api from "@aws-amplify/api-rest";

useEffect(()=>{
    async function Dashboards(){
        const userData= await Api.get('dashboardapi','/dashboards');//api name and endpoint
        return userData.data.Items
    }
    fetchDashboards().then(()=>{

    })
},[]


function Data() {
  return <div></div>;
}

export default Data;

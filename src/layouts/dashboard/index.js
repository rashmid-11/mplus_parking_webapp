/* eslint-disable no-unused-vars */
/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import React, { useEffect, useState } from "react";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";
import { FaCarSide } from "react-icons/fa6";

import Card from 'react-bootstrap/Card';
import { Line } from 'react-chartjs-2';
// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import Tabsales from "layouts/sales/components/tabsale";
import Tabsnew from "layouts/receipt/components/tab";
import Tabreports from "layouts/reports/compnents/tabreports";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaPenAlt } from "react-icons/fa";
import borders from "assets/theme/base/borders";

import {   FaSignInAlt, FaSignOutAlt, FaCarAlt } from "react-icons/fa";

import { Box } from "@mui/material";
import axios from "axios";




function Default() {
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Car',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Bike',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,99,132,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [30, 45, 55, 45, 65, 50, 35]
      }
    ]
  };

const [inVehicleCount, setInVehicleCount] = useState(0);
const [outVehicleCount, setOutVehicleCount] = useState(0);
const [saleVehicleCount, setSaleVehicleCount] = useState(0);
const [stockVehicleCount, setStockVehicleCount] = useState(0);



  useEffect(() => {
    const fetchInVehicleCount = async () => {
      try {
        const imei = sessionStorage.getItem('IMEI');
        const emailID = sessionStorage.getItem('Email');
        const password = sessionStorage.getItem('Password');
        const token = sessionStorage.getItem('Token');
        const siteId = sessionStorage.getItem('SiteId');

        const response = await axios.post('/newapi/AppServerCall/getInVehicleCount', {
          imei,
          emailID,
          password,
          token,
          siteId
        });

        console.log('InVehicleCount API response:', response.data);

        // Assuming 'Data' contains the count
        if (response.data?.Data) {
          setInVehicleCount(response.data.Data); // Update the state with the count value
        }
      } catch (error) {
        console.error('Error fetching InVehicleCount:', error);
      }
    };

    fetchInVehicleCount();
  }, []);

  useEffect(() => {
    const fetchOutVehicleCount = async () => {
      try {
        const imei = sessionStorage.getItem('IMEI');
        const emailID = sessionStorage.getItem('Email');
        const password = sessionStorage.getItem('Password');
        const token = sessionStorage.getItem('Token');
        const siteId = sessionStorage.getItem('SiteId');

        const response = await axios.post('/newapi/AppServerCall/getOutVehicleCount', {
          imei,
          emailID,
          password,
          token,
          siteId
        });

        console.log('InVehicleCount API response:', response.data);

        // Assuming 'Data' contains the count
        if (response.data?.Data) {
          setOutVehicleCount(response.data.Data); // Update the state with the count value
        }
      } catch (error) {
        console.error('Error fetching InVehicleCount:', error);
      }
    };

    fetchOutVehicleCount();
  }, []);

  useEffect(() => {
    const fetchSaleVehicleCount = async () => {
      try {
        const imei = sessionStorage.getItem('IMEI');
        const emailID = sessionStorage.getItem('Email');
        const password = sessionStorage.getItem('Password');
        const token = sessionStorage.getItem('Token');
        const siteId = sessionStorage.getItem('SiteId');

        const response = await axios.post('/newapi/AppServerCall/getTotalSale', {
          imei,
          emailID,
          password,
          token,
          siteId
        });

        console.log('InVehicleCount API response:', response.data);

        // Assuming 'Data' contains the count
        if (response.data?.Data) {
          setSaleVehicleCount(response.data.Data); // Update the state with the count value
        }
      } catch (error) {
        console.error('Error fetching InVehicleCount:', error);
      }
    };

    fetchSaleVehicleCount();
  }, []);

  useEffect(() => {
    const fetchStockVehicleCount = async () => {
      try {
        const imei = sessionStorage.getItem('IMEI');
        const emailID = sessionStorage.getItem('Email');
        const password = sessionStorage.getItem('Password');
        const token = sessionStorage.getItem('Token');
        const siteId = sessionStorage.getItem('SiteId');

        const response = await axios.post('/newapi/AppServerCall/getStockVehicleCount', {
          imei,
          emailID,
          password,
          token,
          siteId
        });

        console.log('InVehicleCount API response:', response.data);

        // Assuming 'Data' contains the count
        if (response.data?.Data) {
          setStockVehicleCount(response.data.Data); // Update the state with the count value
        }
      } catch (error) {
        console.error('Error fetching InVehicleCount:', error);
      }
    };

    fetchStockVehicleCount();
  }, []);



  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
      <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Stock Vehicle"
             
              count={ stockVehicleCount}
             
              icon={{
                color: "info",
                component: (
                  <Box
                    sx={{
                      backgroundColor: "#17a2b8",
                      borderRadius: "50%",
                      height: "70px",
                      width: "70px",
                      padding: "10px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight:'10px',
                      marginTop:'10px'
                    }}
                  >
                    {/* Stack multiple car icons */}
                    <FaCarAlt size={20} style={{ marginRight: "-5px" }} />
                    <FaCarAlt size={24} style={{ marginRight: "-5px" }} />
                    <FaCarAlt size={32} />
                  </Box>
                ),
          
           }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="In Vehicle"
              count={inVehicleCount}

              icon={{
                color: "success",
                component: (
                  <Box
                    sx={{
                      backgroundColor: "green",
                      borderRadius: "50%",
                      padding: "10px", // Reduced padding to allow more room for icons
                      height: "70px",  // Increased height
                      width: "70px",   // Increased width
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                        marginRight:'10px',
                      marginTop:'10px'
                    }}
                  >
                    <FaCarSide size={30} />    {/* Increased icon size */}
                    <FaSignInAlt size={30} style={{ marginLeft: "4px" }} />  {/* Increased icon size */}
                  </Box>
                ),
           }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Out Vehicle"
            
              count={outVehicleCount}

              icon={{
                color: "error",
                component: (
                  <Box
                    sx={{
                      backgroundColor: "red",
                      borderRadius: "50%",
                      padding: "10px",
                      height: "70px",
                      width: "70px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                        marginRight:'10px',
                      marginTop:'10px'
                    }}
                  >
                    <FaCarSide size={30} />
                    <FaSignOutAlt size={30} style={{ marginLeft: "4px" }} />
                  </Box>
                ),
          
          }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="sales"
              
              count={saleVehicleCount}
              icon={{
                color: "warning",
                component: (
                  <Box
                    sx={{
                      backgroundColor: "#ffc107",
                      borderRadius: "50%",
                      padding: "10px",
              
                      height: "70px",
                      width: "70px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                        marginRight:'10px',
                      marginTop:'10px'
                      
                    }}
                  >
                    <i  className="ni ni-cart" />
                  </Box>
                ),
         }}
            />
          </Grid>
          
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
              <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden",border:'none'}}>
          <ArgonBox m={2}>
              <ArgonBox display="flex" alignItems="center">
                <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                  <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                </ArgonBox>
                <ArgonTypography variant="button"  fontWeight="medium">
                  4% more{" "}
                  <ArgonTypography variant="button" fontWeight="regular">
                    in 2022
                  </ArgonTypography>
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox mt={4}>
                <div>
                  <Line
                    data={lineChartData}
                    options={{
                      scales: {
                        yAxes: [{
                          ticks: {
                            beginAtZero: true
                          }
                        }]
                      }
                    }}
                  />
                </div>
              </ArgonBox>
            </ArgonBox>
            </Card>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} >
        <Tabsnew></Tabsnew>
          </Grid>
          <Grid item xs={12} md={12}>
          <Tabsales></Tabsales>
          </Grid>
          <Grid item xs={12} md={12}>
       <Tabreports></Tabreports>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;

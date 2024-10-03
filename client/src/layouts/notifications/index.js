/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (type, received, needed, hospital, emergency) => (
    <MDTypography variant="body2" color="white">
      {received} units of {type} blood received from {hospital}. Currently, {needed} units of blood
      are needed for the {hospital} hospital.{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        {emergency ? `Urgent: ${type} blood needed for emergency!` : "Click to learn more."}
      </MDTypography>
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Blood Bank Notification"
      content="Donation of 10 units has been successfully processed!"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Blood Bank Alert"
      content="New donor registration successful!"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Blood Bank Alert"
      content="Low stock of O+ blood type. Immediate action required!"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Blood Bank Error"
      content="Error processing donation. Please check the donor information."
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        {/* Moved Notifications to the upper section */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">Notifications</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Blood bank notifications can inform you of critical updates.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
                      Donation Success
                    </MDButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      New Donor
                    </MDButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
                      Low Stock Alert
                    </MDButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
                      Emergency
                    </MDButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>

        {/* Modified Blood Bank Alerts Content */}
        <Grid container spacing={3} justifyContent="center" mt={4}>
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Blood Bank Alerts</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                <MDAlert color="primary" dismissible>
                  {alertContent("A+", 5, 10, "City Hospital", false)}
                </MDAlert>
                <MDAlert color="secondary" dismissible>
                  {alertContent("B-", 7, 4, "Community Health Center", true)}
                </MDAlert>
                <MDAlert color="success" dismissible>
                  {alertContent("O+", 8, 12, "General Hospital", false)}
                </MDAlert>
                <MDAlert color="error" dismissible>
                  {alertContent("AB-", 2, 6, "Metropolitan Clinic", true)}
                </MDAlert>
                <MDAlert color="warning" dismissible>
                  {alertContent("O-", 1, 5, "Emergency Care Unit", true)}
                </MDAlert>
                <MDAlert color="info" dismissible>
                  {alertContent("AB+", 3, 7, "Health Plus Clinic", false)}
                </MDAlert>
                <MDAlert color="light" dismissible>
                  {alertContent("A-", 4, 9, "Regional Blood Center", true)}
                </MDAlert>
                <MDAlert color="dark" dismissible>
                  {alertContent("B+", 9, 11, "Medical Care Center", false)}
                </MDAlert>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;

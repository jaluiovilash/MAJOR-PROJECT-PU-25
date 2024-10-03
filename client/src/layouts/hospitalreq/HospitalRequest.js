// HospitalRequest.js

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data (table data you want to create)
import data from "layouts/dashboard/components/Projects/data";

// Images (existing images)
import hospital1 from "assets/images/home-decor-1.jpg";
import hospital2 from "assets/images/home-decor-2.jpg";
import hospital3 from "assets/images/home-decor-3.jpg";

function HospitalRequest() {
  const { columns, rows } = data();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Section Header */}
        <MDBox mb={4}>
          <MDTypography variant="h4" fontWeight="medium" color="primary">
            Hospital Blood Requests
          </MDTypography>
        </MDBox>

        {/* Request Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <MDBox p={2}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    City Hospital
                  </MDTypography>
                  <Icon>local_hospital</Icon>
                </MDBox>
                <MDBox mt={2}>
                  <img src={hospital1} alt="City Hospital" style={{ width: "100%" }} />
                </MDBox>
                <MDBox mt={2}>
                  <MDTypography variant="body2" color="text">
                    Request: 50 Units of O+ blood required for emergency surgeries.
                  </MDTypography>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <MDBox p={2}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    National Health Clinic
                  </MDTypography>
                  <Icon>local_hospital</Icon>
                </MDBox>
                <MDBox mt={2}>
                  <img src={hospital2} alt="National Health Clinic" style={{ width: "100%" }} />
                </MDBox>
                <MDBox mt={2}>
                  <MDTypography variant="body2" color="text">
                    Request: 30 Units of AB- for upcoming medical camp.
                  </MDTypography>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <MDBox p={2}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    Central General Hospital
                  </MDTypography>
                  <Icon>local_hospital</Icon>
                </MDBox>
                <MDBox mt={2}>
                  <img src={hospital3} alt="Central General Hospital" style={{ width: "100%" }} />
                </MDBox>
                <MDBox mt={2}>
                  <MDTypography variant="body2" color="text">
                    Request: 80 Units of A+ for ongoing treatments.
                  </MDTypography>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>

        {/* Table for Request Details */}
        <MDBox mt={4}>
          <Card>
            <MDBox p={3}>
              <MDTypography variant="h6" fontWeight="medium" gutterBottom>
                Blood Request Details
              </MDTypography>
            </MDBox>
            <MDBox>
              <DataTable
                table={{ columns, rows }}
                showTotalEntries={false}
                isSorted={false}
                noEndBorder
                entriesPerPage={false}
              />
            </MDBox>
          </Card>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default HospitalRequest;

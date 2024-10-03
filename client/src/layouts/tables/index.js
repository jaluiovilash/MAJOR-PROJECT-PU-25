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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data for blood bank
const bloodBankTableData = () => {
  return {
    columns: [
      { Header: "Donor Name", accessor: "author", width: "45%", align: "left" },
      { Header: "Blood Type", accessor: "bloodType", align: "left" },
      { Header: "Last Donation Date", accessor: "lastDonation", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: "Rajesh Kumar",
        bloodType: "O+",
        lastDonation: "01/01/2024",
        status: "Active",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Anita Sharma",
        bloodType: "A-",
        lastDonation: "15/02/2024",
        status: "Inactive",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Deepak Verma",
        bloodType: "B+",
        lastDonation: "20/01/2024",
        status: "Active",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Meera Patel",
        bloodType: "AB+",
        lastDonation: "10/03/2024",
        status: "Active",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Amit Singh",
        bloodType: "O-",
        lastDonation: "25/03/2024",
        status: "Active",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Priya Joshi",
        bloodType: "A+",
        lastDonation: "12/02/2024",
        status: "Inactive",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Suresh Gupta",
        bloodType: "B-",
        lastDonation: "05/01/2024",
        status: "Active",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Ravi Iyer",
        bloodType: "AB-",
        lastDonation: "18/04/2024",
        status: "Active",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Sita Menon",
        bloodType: "O+",
        lastDonation: "30/03/2024",
        status: "Inactive",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        author: "Vikram Rao",
        bloodType: "A-",
        lastDonation: "22/02/2024",
        status: "Active",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      // Add more rows as needed
    ],
  };
};

// Data for hospitals/customers
const hospitalTableData = () => {
  return {
    columns: [
      { Header: "Hospital Name", accessor: "name", width: "40%", align: "left" },
      { Header: "Location", accessor: "location", align: "left" },
      { Header: "Contact Number", accessor: "contact", align: "center" },
      { Header: "Blood Type Requested", accessor: "bloodTypeRequested", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: "Apollo Hospital",
        location: "Delhi",
        contact: "+91 11 2331 2345",
        bloodTypeRequested: "O+",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "Fortis Hospital",
        location: "Mumbai",
        contact: "+91 22 2493 3333",
        bloodTypeRequested: "A-",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "Max Healthcare",
        location: "Bengaluru",
        contact: "+91 80 2658 2658",
        bloodTypeRequested: "B+",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "Manipal Hospital",
        location: "Chennai",
        contact: "+91 44 4299 1111",
        bloodTypeRequested: "AB+",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "Narayana Health",
        location: "Kolkata",
        contact: "+91 33 2361 2222",
        bloodTypeRequested: "O-",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "Lilavati Hospital",
        location: "Mumbai",
        contact: "+91 22 2640 0500",
        bloodTypeRequested: "A+",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "PGIMER",
        location: "Chandigarh",
        contact: "+91 172 274 7585",
        bloodTypeRequested: "B-",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "Christian Medical College",
        location: "Vellore",
        contact: "+91 416 228 1000",
        bloodTypeRequested: "AB-",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "Apollo Gleneagles",
        location: "Kolkata",
        contact: "+91 33 2320 5555",
        bloodTypeRequested: "O+",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      {
        name: "Sankara Nethralaya",
        location: "Chennai",
        contact: "+91 44 2821 4674",
        bloodTypeRequested: "A-",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Details
          </MDTypography>
        ),
      },
      // Add more rows as needed
    ],
  };
};

function Tables() {
  const { columns, rows } = bloodBankTableData(); // Using blood bank data for the first table
  const { columns: pColumns, rows: pRows } = hospitalTableData(); // Using hospital data for the second table

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Blood Bank Donors
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns: columns,
                    rows: rows,
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Hospitals/Customers
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns: pColumns,
                    rows: pRows,
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;

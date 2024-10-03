/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 ==========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt={name}
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const User = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Donor Name", accessor: "donorName", width: "45%", align: "left" },
      { Header: "Blood Type", accessor: "bloodType", width: "10%", align: "left" },
      { Header: "Last Donation", accessor: "lastDonation", align: "center" },
      { Header: "Donation Count", accessor: "donationCount", align: "center" },
    ],

    rows: [
      {
        donorName: <User image={team1} name="Apollo Hospital" />,
        bloodType: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            A+
          </MDTypography>
        ),
        lastDonation: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            22 DEC 2023
          </MDTypography>
        ),
        donationCount: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
      },
      {
        donorName: <User image={team2} name="Sir Sayajirao General Hospital" />,
        bloodType: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            B+
          </MDTypography>
        ),
        lastDonation: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20 DEC 2023
          </MDTypography>
        ),
        donationCount: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
      },
      {
        donorName: <User image={team3} name="Baps Shastriji Maharaj Hospital" />,
        bloodType: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            O-
          </MDTypography>
        ),
        lastDonation: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            18 DEC 2023
          </MDTypography>
        ),
        donationCount: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
      },
      {
        donorName: <User image={team4} name="Sterling Hospital" />,
        bloodType: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            AB+
          </MDTypography>
        ),
        lastDonation: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            15 DEC 2023
          </MDTypography>
        ),
        donationCount: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
      },
      {
        donorName: <User image={team1} name="Rhythm Heart Institute Hospital" />,
        bloodType: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            A-
          </MDTypography>
        ),
        lastDonation: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            10 DEC 2023
          </MDTypography>
        ),
        donationCount: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
      },
      {
        donorName: <User image={team2} name="Bankers Heart Superspeciality Hospital" />,
        bloodType: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            O+
          </MDTypography>
        ),
        lastDonation: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            05 DEC 2023
          </MDTypography>
        ),
        donationCount: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
      },
    ],
  };
}

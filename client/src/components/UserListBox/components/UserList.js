import {
  Avatar,
  Box,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const TableHeads = ({ children, padding, display,justifyContent }) => (
  <Stack
    direction={"row"}
    gap={1}
    padding={padding}
    display={display}
    alignItems="center"
    justifyContent={justifyContent}
  >
    {children}
  </Stack>
);

function UserList({
  even,
  UserName,
  Email,
  Role,
  DateOfLastLogin,
  TimeofLastLogin,
}) {
  const [Active] = useState(true);
  return (
    <Box
      p={"10px 20px"}
      sx={{
        backgroundColor: even ? "#f9fafb" : "",
        borderTop: even ? "1px solid #DADADA" : "none",
        borderBottom: even ? "1px solid #DADADA" : "",
      }}
    >
      <Grid container>
        <Grid  item lg={6.5} md={6} sm={6} xs={6}>
          <Stack direction={"row"} gap={1}>
            <input type="checkbox" />
            <TableHeads>
              <Avatar
                sx={{
                  height: { lg: "35px", md: "35px", sm: "35px", xs: "20px" },
                  width: { lg: "35px", md: "35px", sm: "35px", xs: "20px" },
                }}
              />
              <Stack>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: {
                      lg: "15px",
                      md: "15px",
                      sm: "15px",
                      xs: "11px",
                    },
                  }}
                >
                  {UserName}
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: { lg: "10px", md: "10px", sm: "10px", xs: "9px" },
                  }}
                >
                  {Email}
                </Typography>
              </Stack>
            </TableHeads>
          </Stack>
        </Grid>

        <Grid item lg={1.5} md={1.5} sm={2} xs={2} display="flex" justifyContent={"left"}>
          <TableHeads>
            <Chip
              label={Active ? "Active" : "Invited"}
              icon={
                <FiberManualRecordIcon
                  color={Active ? "#75A88A" : ""}
                  sx={{ height: "10px", width: "10px" }}
                />
              }
              sx={{
                height: "fit-content",
                padding: "5px 2px",
                fontWeight: 600,
                backgroundColor: Active ? "#effcf4" : "#e7eaef",
                color: Active ? "#75A88A" : "#747b88",
                display: { lg: "block", sm: "block", md: "block", xs: "none" },
              }}    
            />

            <FiberManualRecordIcon
              sx={{
                height: "10px",
                width: "10px",
                color: Active ? "#75A88A" : "#747b88",
                display: { lg: "none", md: "none", sm: "none", xs: "block" },
              }}
            />
          </TableHeads>
        </Grid>

        <Grid item lg={1} md={1.5} sm={2} xs={2} display="flex" justifyContent={"left"} >
          <TableHeads>
            <Typography
              sx={{
                color: "gray",
                fontSize: { lg: "15px", md: "15px", sm: "15px", xs: "8.5px" },
              }}
            >
              {Role}
            </Typography>
          </TableHeads>
        </Grid>

        <Grid item lg={2} md={2} sm={2} xs={2} display="flex" justifyContent={"center"}>
          <TableHeads>
            <Stack>
              <Typography
                sx={{
                  fontWeight: 550,
                  fontSize: { lg: "15px", md: "15px", sm: "15px", xs: "9.5px" },
                }}
              >
                {DateOfLastLogin}
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: { lg: "15px", md: "15px", sm: "15px", xs: "9px" },
                }}
              >
                {TimeofLastLogin}
              </Typography>
            </Stack>
          </TableHeads>
        </Grid>
        <Grid item lg={1} md={1} sm={0} xs={0}  >
          <TableHeads
            name={""}
            display={{md:"flex",sm:"none",xs:"none"}}
            justifyContent="center"
          >
            <IconButton>
              <DeleteOutlineRoundedIcon />
            </IconButton>
            <IconButton>
              <ModeEditOutlinedIcon />
            </IconButton>
          </TableHeads>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserList;

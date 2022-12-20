import React from "react";
import TelegramQRCode from "../../assets/TelegramQR.png";
import { CONTACT_TOOLTIP_TITLE } from "../../constants/Constants";
import { Tooltip } from "@mui/material";
import IconButton from "../utils/IconButton";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const SupportMe = () => {
  return (
    <Tooltip
      title={
        <div>
          <span style={{ whiteSpace: "pre-line", fontSize:"12px"}}>
            {CONTACT_TOOLTIP_TITLE}
          </span>
          <img
            className="support-me-image"
            src={TelegramQRCode}
            alt="TelegramQRCode"
          />
        </div>
      }
      placement="top-start"
    >
      <IconButton color="inherit">
        <VolunteerActivismIcon className="support-me"></VolunteerActivismIcon>
      </IconButton>
    </Tooltip>
  );
};

export default SupportMe;

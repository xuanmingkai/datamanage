import React from "react";
import { Link } from "react-router-dom";
import { ButtonBase } from "@mui/material";

import config from "../../../config";
import Logo from "../../../ui-component/Logo";

const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to={config.defaultPath}>
    <Logo />
  </ButtonBase>
);

export default LogoSection;

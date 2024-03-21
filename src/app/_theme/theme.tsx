"use client";

import { createTheme } from "@mui/material/styles";
import NextLink from "next/link";
import { forwardRef } from "react";

const LinkBehavior = forwardRef(function LinkBehavior(props, ref) {
  return <NextLink ref={ref} {...props} />;
});
export const theme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

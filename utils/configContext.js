// utils/configContext.js
"use client";
import { createContext } from "react";
import templateConfig from "./config";

export const ConfigContext = createContext(templateConfig);
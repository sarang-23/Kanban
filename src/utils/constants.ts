import { TbAlertSquareFilled } from "react-icons/tb";
import {
  PiCellSignalFullBold,
  PiCellSignalLowBold,
  PiCellSignalMediumBold,
} from "react-icons/pi";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

export const GROUP_BY = {
  STATUS: "status",
  USER: "userId",
  PRIORITY: "priority",
};

export const SORT_BY = {
  PRIORITY: "priority",
  TITLE: "title",
};

export const PRIORITY_MAPPING: any = {
  "0": { title: "No Priority", icon: "" },
  "1": { title: "Low", icon: PiCellSignalLowBold({}) },
  "2": { title: "Medium", icon: PiCellSignalMediumBold({}) },
  "3": { title: "High", icon: PiCellSignalFullBold({}) },
  "4": { title: "Urgent", icon: TbAlertSquareFilled({ color: "#FC7842" }) },
};

export const STATUS_MAPPING: any = {
  Todo: { icon: FaRegCircle({}) },
  In_progress: { icon: FaCircleHalfStroke({ color: "#F1CA4E" }) },
  Backlog: { icon: MdOutlinePendingActions({}) },
  Done: { icon: FaCheckCircle({ color: "#5966D1" }) },
  Canceled: { icon: RxCrossCircled({}) },
};

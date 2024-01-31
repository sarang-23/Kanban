import { useContext } from "react";
import { AppStateContext } from "../context/AppContext";
import { GROUP_BY, PRIORITY_MAPPING, STATUS_MAPPING } from "../utils/constants";
import { getUser } from "../utils/helpers";
import Avatar from "../components/Avatar/Avatar";

const useColumnDetails = (val: string) => {
  const { users, groupBy } = useContext(AppStateContext);

  let title = "";
  let icon;
  switch (groupBy) {
    case GROUP_BY.USER:
      title = getUser(users!, val).name;
      icon = <Avatar userId={val} />;
      break;
    case GROUP_BY.STATUS:
      title = val;
      icon = STATUS_MAPPING[val.replace(" ", "_")]?.icon;
      break;
    case GROUP_BY.PRIORITY:
      title = PRIORITY_MAPPING[val].title;
      icon = PRIORITY_MAPPING[val].icon;
      break;
  }
  return { title, icon };
};

export default useColumnDetails;

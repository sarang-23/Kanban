import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ACTIONS,
  AppDispatchContext,
  AppStateContext,
} from "../../context/AppContext";
import "./Avatar.scss";
import { getRandomHex, getUser } from "../../utils/helpers";

type AvatarProps = {
  userId: string;
};

const Avatar: React.FC<AvatarProps> = ({ userId }) => {
  const { users, userProfileColor } = useContext(AppStateContext);

  const currentUser = getUser(users!, userId);
  const dispatch = useContext(AppDispatchContext);

  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (userProfileColor.hasOwnProperty(currentUser!.id) && currentUser) {
      setBackgroundColor(userProfileColor[currentUser?.id]);
    } else {
      const bg = getRandomHex();
      dispatch({
        type: ACTIONS.SET_USER_PROFILE_COLOR,
        payload: { [currentUser!.id]: bg },
      });
      setBackgroundColor(bg);
    }
  }, [currentUser, dispatch, userProfileColor]);

  const getInitials = (name: string) => {
    const words = name.split(" ");
    return words
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <div className="avatar-container">
      <div
        className={`avatar ${currentUser?.available ? "online" : "offline"}`}
        style={{ backgroundColor }}
      >
        {getInitials(currentUser!.name)}
        <div
          className={`status-dot ${currentUser?.available ? "green" : "grey"}`}
        ></div>
      </div>
    </div>
  );
};

export default Avatar;

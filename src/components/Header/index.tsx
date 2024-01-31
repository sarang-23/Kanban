import React, { useContext, useState } from "react";
import "./Header.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { GoMultiSelect } from "react-icons/go";
import {
  ACTIONS,
  AppDispatchContext,
  AppStateContext,
} from "../../context/AppContext";
import { GROUP_BY, SORT_BY } from "../../utils/constants";

const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useContext(AppDispatchContext);
  const { groupBy, sortBy } = useContext(AppStateContext);

  return (
    <div className="kanban-header">
      <div className="control" onClick={() => setShow((p) => !p)}>
        <GoMultiSelect />
        <span>Display</span>
        {show ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </div>
      {show && (
        <div className="options-container">
          <div className="display-option">
            <span>Grouping</span>
            <select
              value={groupBy}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.UPDATE_GROUP_BY,
                  payload: e.target.value,
                });
                setShow((p) => !p);
              }}
            >
              <option value={GROUP_BY.STATUS}>Status</option>
              <option value={GROUP_BY.USER}>User</option>
              <option value={GROUP_BY.PRIORITY}>Priority</option>
            </select>
          </div>

          <div className="display-option">
            <span>Ordering</span>
            <select
              value={sortBy}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.UPDATE_SORT_BY,
                  payload: e.target.value,
                });
                setShow((p) => !p);
              }}
            >
              <option value={SORT_BY.PRIORITY}>Priority</option>
              <option value={SORT_BY.TITLE}>Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

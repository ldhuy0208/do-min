import React from "react";
import ButtonHoldPress from "./ButtonHoldPress";
import "./Cell.scss";

export default function Cell(props) {
  const {
    isLose,
    isWin,
    cell: { isOpen, isMine, totalMine, isFlag },
  } = props;
  return (
    <ButtonHoldPress
      eventHandler={props.toggleFlagHandler}
      onClick={isLose || isWin ? () => {} : props.openCellHandler}
    >
      <div className={"cell" + (isOpen ? " open" : "")}>
        {totalMine}
        {!isOpen && isFlag && <i className="fas fa-flag-checkered"></i>}
        {isLose && isMine && <i className="fas fa-bomb"></i>}
      </div>
    </ButtonHoldPress>
  );
}

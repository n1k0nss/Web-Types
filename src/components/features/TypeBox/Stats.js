import React from "react";
import { Box } from "@mui/system";
import { Tooltip } from "@mui/material";
import { CHAR_TOOLTIP_TITLE } from "../../../constants/Constants";

const Stats = ({
  status,
  wpm,
  countDown,
  countDownConstant,
  statsCharCount,
  rawKeyStrokes,
}) => {
  return (
    <>
      <h3>{countDown} с </h3>
      <Box display="flex" flexDirection="row">
        <h3>WPM: {Math.round(wpm)}</h3>
        {status === "finished" && (
          <h4>Точність: {Math.round(statsCharCount[0])} %</h4>
        )}
        {status === "finished" && (
          <Tooltip
            title={
              <span style={{ whiteSpace: "pre-line" }}>
                {CHAR_TOOLTIP_TITLE}
              </span>
            }
          >
            <h4>
              Символи:{" "}
              <span className="correct-char-stats">{statsCharCount[1]}</span>/
              <span className="incorrect-char-stats">{statsCharCount[2]}</span>/
              <span className="missing-char-stats">{statsCharCount[3]}</span>/
              <span className="correct-char-stats">{statsCharCount[4]}</span>/
              <span className="incorrect-char-stats">{statsCharCount[5]}</span>
            </h4>
          </Tooltip>
        )}
        {status === "finished" && (
          <h4>
            KPM: {Math.round((rawKeyStrokes / countDownConstant) * 60.0)}
          </h4>
        )}
      </Box>
    </>
  );
};

export default Stats;

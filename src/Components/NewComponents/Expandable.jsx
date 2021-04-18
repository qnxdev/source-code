import React, { useState } from "react";
import {
  THEME_COLOUR_1,
  THEME_COLOUR_2,
  THEME_COLOUR_3,
} from "../../constants";
import "./styles/Expandable.css";

export default function Expandable({ data, children }) {
  const [expanded, setExpand] = useState(-1);
  return (
    <div className="Expandable">
      <br />
      <div className="HeadingThree">
        <h3>IQAC Minutes</h3>
      </div>
      {data.map((item, index) => (
        <div className="ExpandItem">
          <div
            className="ExpandHead"
            onClick={() => setExpand(expanded == index ? -1 : index)}
          >
            <h4>{item.year}</h4>
            <p>{expanded == index ? "-" : "+"}</p>
          </div>
          {expanded == index && (
            <div className="ExpandBody">
              {item.events.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Event</th>
                      <th>Action Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.events.map((e) => (
                      <tr>
                        <td>{e.date}</td>
                        <td>
                          <a href={e.minutes} target="_blank">
                            Download
                          </a>
                        </td>
                        <td>
                          <a href={e.action} target="_blank">
                            Download
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {/* <div className="ExpandBodyAR">
                <p>IQAC Annual Report {item.year}</p>
                <a href={item.annualReport} target="_blank">
                  Download
                </a>
              </div> */}
            </div>
          )}
        </div>
      ))}
      <br />
      <br />
      <br />
      <style jsx>{`
        .ExpandHead,
        .ExpandBody td a {
          background-color: ${THEME_COLOUR_1};
          color: ${THEME_COLOUR_2};
        }
        .ExpandItem,
        .ExpandItem th {
          background-color: ${THEME_COLOUR_3};
        }
        .ExpandItem th {
          color: ${THEME_COLOUR_1};
        }
        .ExpandBody thead {
          border-radius: 10px !important;
          border-bottom: 1px solid ${THEME_COLOUR_1} !important;
        }
      `}</style>
    </div>
  );
}

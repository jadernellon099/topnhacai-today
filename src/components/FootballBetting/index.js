import React from "react";
import Content from "../Content";

function FootballBetting(props) {
  return (
    <>
      <div className="bxss bxndmain bxgttips pad0">
        <div className="bxinner">
          <div id="bo-loc-du-doan" className="marg_0030">
            <div className="bxinner">
              <div className="bo_loc">
                <div className="app-loadicon text-center" style={{display: "none"}}>
                  <span className="loadicon active"></span>
                </div>
                <div
                  id="app_tool_filter"
                  className="app_fiter_soikeo app-init"
                >
                  <div className="ng-scope">
                    <div className="container apt ng-scope">
                      <div className="main-functional">
                        <div className="main-fiter-soikeo">
                          <table className="table_lsdd tbsoikeo">
                            <tbody>
                              <tr>
                                <th>Thời gian</th>
                                <th>Giải</th>
                                <th className="align_center">Trận đấu</th>
                                <th></th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content />

    </>
  );
}

export default FootballBetting;

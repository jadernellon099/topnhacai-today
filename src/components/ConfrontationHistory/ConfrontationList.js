import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ConfrontationList(props) {
  return (
    <>
      <div className="bxssvb lsdd_today">
        <div className="bxinner">
          <div className="bxbo_tt">
            <div className="bxinner">
              <h2>{props.title}</h2>
              <div className="bxpad20 bxbo_tt_inner">
                <div className="table_lsdd">
                  <table>
                    <thead>
                      <tr>
                        <th>Thời gian</th>
                        <th className="txt_center">Trận đấu</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span>29/06</span> <span>00:00</span>
                        </td>
                        <td className="td_dau">
                          <Link href="">
                            <div className="bxitemdau">
                              <div className="bxdoi doi1">
                                <p>Grorud 2</p>{" "}
                                <span>
                                  <Image
                                    alt=""
                                    width={30}
                                    height={30}
                                    data-lazyloaded="1"
                                    src="https://api.vaobo.com/logo_teams/no-logo.gif"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                  />
                                </span>
                              </div>
                              <div className="vs">
                                <span>vs</span>
                              </div>
                              <div className="bxdoi doi2">
                                <span>
                                  <Image
                                    alt=""
                                    width={30}
                                    height={30}
                                    data-lazyloaded="1"
                                    src="https://api.vaobo.com/logo_teams/no-logo.gif"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                  />
                                </span>
                                <p>Skeid 2</p>
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className="txt_right">
                          <Link href="">
                            <a>
                              Xem đối đầu
                              <FontAwesomeIcon
                                icon={["fas", "fa-chevron-right"]}
                                style={{ marginLeft: "5px" }}
                              />
                            </a>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>29/06</span> <span>00:00</span>
                        </td>
                        <td className="td_dau">
                          <Link href="">
                            <div className="bxitemdau">
                              <div className="bxdoi doi1">
                                <p>Halmstads BK</p>{" "}
                                <span>
                                  <Image
                                    alt=""
                                    width={30}
                                    height={30}
                                    data-lazyloaded="1"
                                    src="https://api.vaobo.com/logo_teams/halmstads-bk.png"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                  />
                                </span>
                              </div>
                              <div className="vs">
                                <span>vs</span>
                              </div>
                              <div className="bxdoi doi2">
                                <span>
                                  <Image
                                    alt=""
                                    width={30}
                                    height={30}
                                    data-lazyloaded="1"
                                    src="https://api.vaobo.com/logo_teams/trelleborgs-ff.png"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                  />
                                </span>
                                <p>Trelleborgs FF</p>
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className="txt_right">
                          <Link href="">
                            <a>
                              Xem đối đầu
                              <FontAwesomeIcon
                                icon={["fas", "fa-chevron-right"]}
                                style={{ marginLeft: "5px" }}
                              />
                            </a>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>29/06</span> <span>05:15</span>
                        </td>
                        <td className="td_dau">
                          <Link href="">
                            <div className="bxitemdau">
                              <div className="bxdoi doi1">
                                <p>Emelec</p>{" "}
                                <span>
                                  <Image
                                    alt=""
                                    width={30}
                                    height={30}
                                    data-lazyloaded="1"
                                    src="https://api.vaobo.com/logo_teams/emelec.png"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                  />
                                </span>
                              </div>
                              <div className="vs">
                                <span>vs</span>
                              </div>
                              <div className="bxdoi doi2">
                                <span>
                                  <Image
                                    alt=""
                                    width={30}
                                    height={30}
                                    data-lazyloaded="1"
                                    src="https://api.vaobo.com/logo_teams/atletico-mg.png"
                                    data-ll-status="loaded"
                                    className="entered litespeed-loaded"
                                  />
                                </span>
                                <p>Atletico MG</p>
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className="txt_right">
                          <Link href="">
                            <a>
                              Xem đối đầu
                              <FontAwesomeIcon
                                icon={["fas", "fa-chevron-right"]}
                                style={{ marginLeft: "5px" }}
                              />
                            </a>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfrontationList;

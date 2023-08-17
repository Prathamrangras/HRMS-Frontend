import React, { useEffect, useCallback } from "react";
import { useClientContext } from "../../../context/ClientContext";
import { useFetchClient } from "../../../hooks/useFetchClient";
import { useFetchDesignation } from "../../../hooks/useFetchDesignation";
import { useFetchDepartment } from "../../../hooks/useFetchDepartment";
import { useAuthContext } from "../../../context/AuthContext";
import "../../../style/style.css";
import ClientHead  from "../../../components/Allclientcomponents/clientHead";
import  ClientCard  from "../../../components/Allclientcomponents/clientCard";
import { usePopupContext } from "../../../context/PopupContext";
import ClientsPopup from "../../../components/Popups/Client";

const Client = () => {
  const { error, getClient } = useFetchClient();
  const { getDesignations } = useFetchDesignation();
  const { getDepartment } = useFetchDepartment();
  const { Client, loading } = useClientContext();
  const { user } = useAuthContext();
  const { isPopup } = usePopupContext();

  const getCli = useCallback(async () => {
    await getClient(user._id);
  }, []);

  const getDesig = useCallback(async () => {
    await getDesignations();
  }, []);

  const getDept = useCallback(async () => {
    await getDepartment();
  }, []);

  useEffect(() => {
    getCli();
    getDesig();
    getDept();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="mytask-layout" className="theme-indigo">
        <div className="body d-flex py-lg-3 py-md-2">
          <div className="container-xxl">
            {isPopup && (
              <>
                <div className="fade modal-backdrop show"></div>
                <div
                  role="dialog"
                  aria-modal="true"
                  className="fade modal show"
                  tabindex="-1"
                  style={{ paddingLeft: "17px", display: "block" }}
                >
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <ClientsPopup />
                  </div>
                </div>
              </>
            )}
            <ClientHead />
            <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
              {Client.map((e, i) => (
                <ClientCard {...e} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
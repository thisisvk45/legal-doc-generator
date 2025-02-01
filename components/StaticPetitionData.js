import React, { useState } from "react";

// First static petition data
export const StaticPetitionData1 = () => {
  const [firNumber, setFirNumber] = useState("");
  const [firDate, setFirDate] = useState("");
  const [psLocation, setPsLocation] = useState("");

  return (
    <div>
      <div id="petition-header">
        <p>
          First Petition under Section 482 of B.N.S.S., 2023 with a prayer for
          grant of anticipatory bail to the petitioner in a case registered,
          vide FIR No.{" "}
          <input
            type="text"
            name="firNumber"
            value={firNumber}
            onChange={(e) => setFirNumber(e.target.value)}
            placeholder="Enter FIR No."
          />{" "}
          dated{" "}
          <input
            type="date"
            name="firDate"
            value={firDate}
            onChange={(e) => setFirDate(e.target.value)}
          />{" "}
          under Section 408 of IPC registered at
          <input
            type="text"
            name="psLocation"
            value={psLocation}
            onChange={(e) => setPsLocation(e.target.value)}
            placeholder="Enter PS Location"
          />
          .
        </p>
      </div>

      <div id="petition-with">
        <p style={{ textAlign: "center", fontWeight: "bold" }}>WITH</p>
        <p>
          A further prayer for grant of ad-interim anticipatory bail to the
          petitioner during the pendency of the present Petition before this
          Hon’ble Court.
        </p>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>AND</p>
        <p>
          For grant of any other relief to which the petitioner is entitled to
          in the facts and circumstances of the case.
        </p>
      </div>

      <div id="petition-showeth">
        <h3>Respectfully Showeth:</h3>
        <ol>
          <li>
            That the petitioner is an innocent person and has been falsely
            implicated in the above said case. Hence the petitioner is entitled
            to invoke the inherent powers of this Hon’ble Court under Section
            482 of the B.N.S.S., 2023.
          </li>
          <li>
            That FIR No.{" "}
            <input
              type="text"
              name="firNumber"
              value={firNumber}
              onChange={(e) => setFirNumber(e.target.value)}
            />{" "}
            dated{" "}
            <input
              type="date"
              name="firDate"
              value={firDate}
              onChange={(e) => setFirDate(e.target.value)}
            />{" "}
            registered under Section 408 of IPC in{" "}
            <input
              type="text"
              name="psLocation"
              value={psLocation}
              onChange={(e) => setPsLocation(e.target.value)}
            />
            , when translated into English reads as under:
          </li>
        </ol>
        <p>“(COMPLETE FIR TRANSLATION INTO ENGLISH)”</p>
      </div>

      <div id="petition-facts">
        <ol start="3">
          <li>
            That the petitioner is a respectable person of the Society and owns
            movable and immovable property. There is no apprehension of the
            petitioner misusing the concession of bail. The petitioner
            undertakes to abide by all the terms and conditions to be imposed by
            this Hon’ble Court and is ready to cooperate with the investigation
            as all the record of the Society is already with the Investigating
            Authorities.
          </li>
          <li>
            That no other FIR is registered against the petitioner except the
            above mentioned FIR.
          </li>
        </ol>
      </div>

      <div id="petition-summary">
        <p>
          That no recovery or discovery is to be effected from the petitioner
          and as such the custodial interrogation of the petitioner is totally
          uncalled for.
        </p>
      </div>

      <div id="petition-prayer">
        <h3>Prayer:</h3>
        <p>
          It is, therefore, respectfully prayed that the present petition may
          kindly be allowed and the petitioner may kindly be granted the
          concession of anticipatory bail in FIR No.{" "}
          <input
            type="text"
            name="firNumber"
            value={firNumber}
            onChange={(e) => setFirNumber(e.target.value)}
          />{" "}
          dated{" "}
          <input
            type="date"
            name="firDate"
            value={firDate}
            onChange={(e) => setFirDate(e.target.value)}
          />{" "}
          under Section 408 of IPC registered at{" "}
          <input
            type="text"
            name="psLocation"
            value={psLocation}
            onChange={(e) => setPsLocation(e.target.value)}
          />
          in the interest of justice, equity, and fair play.
        </p>
      </div>

      <div id="petition-note">
        <p>Note:</p>
        <ul>
          <li>1. Affidavit is enclosed.</li>
          <li>2. Power of attorney is enclosed.</li>
        </ul>
      </div>
    </div>
  );
};

// Second static petition data
export const StaticPetitionData2 = () => {
  return (
    <div>
      <p>
        I, the above-named deponent do hereby solemnly affirm and declare as
        under:
      </p>
      <ol>
        <li>
          That the accompanying Crl. Misc. Application is being filed in this
          Hon’ble Court. The application has been drafted under the instructions
          of the deponent, who is the petitioner in the above said Criminal
          Misc. Application.
        </li>
        <li>
          That the contents of this petition have been read over to the deponent
          and the deponent has understood the same to be correct and the
          contentions of the application are true and correct.
        </li>
        <li>
          That no other FIR is registered against the petitioner except the
          above-mentioned FIR.
        </li>
        <li>
          That the petitioner is not declared as proclaimed offender in this
          case nor has he been declared as proclaimed offender in any other
          case.
        </li>
        <li>
          That the petitioner has not filed any such or similar petition for
          grant of anticipatory bail either in this Hon’ble Court or in the
          Hon’ble Supreme Court of India. No such or similar petition for grant
          of anticipatory bail is pending before the learned Sessions Judge,
          Mohali.
        </li>
      </ol>
    </div>
  );
};

// Third static data
export const StaticPetitionData3 = () => {
  return (
    <div>
      <p>
        Verified that the contents of the above affidavit of mine from para
        nos.1 to 5 are true and correct to my knowledge. No part of it is false
        and nothing has been kept concealed therefrom.
      </p>
    </div>
  );
};


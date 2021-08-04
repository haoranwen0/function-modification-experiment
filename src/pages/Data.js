import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";

import DataTable from "../components/DataTable";

import "../css/Data.css";

function Data() {
  const [subjectInformations, setSubjectInformations] = useState([]);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("subjectInformations"))) {
      setSubjectInformations(
        JSON.parse(sessionStorage.getItem("subjectInformations"))
      );
    } else {
      var today = new Date();
      API.get("functionModificationAPI", "/subject-informations").then(
        (res) => {
          var data = res.data;
          // console.log(data);
          var subjectsArrCompleted = [];
          setSubjectInformations(data);
          API.get("functionModificationAPI", "/survey").then((res) => {
            const surveys = res.data;
            // console.log(surveys);
            for (let i in surveys) {
              const survey = surveys[i];
              const surveyEmail = survey.email;
              for (let j in data) {
                var subjectInfo = data[j];
                const subjectEmail = subjectInfo.email;
                if (subjectEmail === surveyEmail) {
                  subjectInfo["survey"] = survey;
                  subjectsArrCompleted.push(subjectInfo);
                }
              }
            }
            for (let i in subjectsArrCompleted) {
              const subject = subjectsArrCompleted[i];
              const submissionTime = new Date(subject.survey.submissionTime);
              // console.log(submissionTime);
              const timeElapsed = Math.round(today - submissionTime) / 60000;
              subject["submitted"] = timeElapsed;
            }
            subjectsArrCompleted.sort((a, b) => {
              return a.submitted - b.submitted;
            });
            setSubjectInformations(subjectsArrCompleted);
            sessionStorage.setItem(
              "subjectInformations",
              JSON.stringify(subjectsArrCompleted)
            );
          });
        }
      );
    }
  }, []);

  return (
    <div className="main-container">
      <main className="main-content data">
        <h1>Data</h1>
        <DataTable subjects={subjectInformations} />
      </main>
    </div>
  );
}

export default Data;

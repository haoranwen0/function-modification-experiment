import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import Loader from "react-js-loader";

import DataTable from "../components/DataTable";

import "../css/Data.css";

function Data() {
  const [subjectInformations, setSubjectInformations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("subjectInformations"))) {
      setSubjectInformations(
        JSON.parse(sessionStorage.getItem("subjectInformations"))
      );
      setLoading((prev) => !prev);
    } else {
      var today = new Date();
      API.get("functionModificationAPI", "/subject-informations").then(
        (res) => {
          var data = res.data;
          // console.log(data);
          var subjectsArrCompleted = [];
          API.get("functionModificationAPI", "/function-submissions", {
            queryStringParameters: {
              operation: "scanAll",
            },
          }).then((res) => {
            const functionSubmissions = res.data;
            for (let i in functionSubmissions) {
              const functionSubmission = functionSubmissions[i];
              const functionSubmissionEmail = functionSubmission.email;
              for (let j in data) {
                const subjectInfo = data[j];
                const subjectInfoEmail = subjectInfo.email;
                if (functionSubmissionEmail === subjectInfoEmail) {
                  subjectInfo["functionSubmissions"] =
                    functionSubmission.functionSubmissions.length;
                  subjectsArrCompleted.push(subjectInfo);
                }
              }
            }
            API.get("functionModificationAPI", "/survey").then((res) => {
              const surveys = res.data;
              for (let i in surveys) {
                const survey = surveys[i];
                const surveyEmail = survey.email;
                for (let j in subjectsArrCompleted) {
                  var subjectInfo = subjectsArrCompleted[j];
                  const subjectEmail = subjectInfo.email;
                  if (subjectEmail === surveyEmail) {
                    subjectInfo["survey"] = survey;
                  }
                }
              }
              for (let i in subjectsArrCompleted) {
                const subject = subjectsArrCompleted[i];
                const submissionTime = new Date(subject.registrationTime);
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
              setLoading((prev) => !prev);
            });
          });
        }
      );
    }
  }, []);

  return (
    <div className="main-container">
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 96px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ marginRight: "12px" }}>Loading</h3>
          <Loader type="bubble-scale" bgColor={"#26abff"} size={15} />
        </div>
      ) : (
        <main className="main-content data">
          <h1>Data</h1>
          <DataTable subjects={subjectInformations} />
        </main>
      )}
    </div>
  );
}

export default Data;

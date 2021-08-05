import React from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";

function DataTable(props) {
  const history = useHistory();

  const { subjects } = props;

  console.log(subjects);

  const onSelect = (email) => {
    document.body.style.cursor = "wait";
    var subject = {};
    for (let i in subjects) {
      var subjectEmail = subjects[i].email;
      if (email === subjectEmail) {
        subject = subjects[i];
        break;
      }
    }
    API.get("functionModificationAPI", "/function-submissions", {
      queryStringParameters: {
        operation: "scanSingle",
        email: email,
      },
    }).then((res) => {
      document.body.style.cursor = "default";
      const functionSubmission = res.data;
      subject["functionSubmission"] = functionSubmission;
      sessionStorage.setItem("subject", JSON.stringify(subject));
      history.push({
        pathname: `/data/subject/${email}`,
      });
    });
  };

  return (
    <div className="table">
      <div className="body black">
        <div className="cell">
          <span>Email</span>
        </div>
        <div className="cell">Sona ID</div>
        <div className="cell">Pilot Test #</div>
        <div className="cell">Completion Status</div>
        <div className="cell">Submitted</div>
      </div>
      {subjects.map((subject, index) => (
        <div
          className={index % 2 === 0 ? "body select" : "body select lightgray"}
          key={index}
          onClick={() => onSelect(subject.email)}
        >
          <div className="cell">{subject.email}</div>
          <div className="cell">{subject.sonaid}</div>
          <div className="cell">{subject.pilotTest}</div>
          <div className="cell">
            {subject.survey !== undefined
              ? "Full Submission"
              : subject.functionSubmissions + " problem(s)"}
          </div>
          <div className="cell">
            {subject.submitted >= 1440 ? (
              <>{Math.round(subject.submitted / 1440)} days ago</>
            ) : subject.submitted >= 60 ? (
              <>{Math.round(subject.submitted / 60)} hours ago</>
            ) : (
              <>{Math.round(subject.submitted)} mins ago</>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataTable;

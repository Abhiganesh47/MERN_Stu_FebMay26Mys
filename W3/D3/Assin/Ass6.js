// JSON Audit on a Single Report

function auditReport(reportJSON) {
    const report = JSON.parse(reportJSON);
    let okCount = 0;
    let failCount = 0;
    for (let module in report.modules){
        if (report.modules[module] ==="Ok"){
            okCount++;
        }
        else if (report.modules[module] === "Fail"){
            failCount++;
            break;
        }
    }
    const summary = {
        app: report.app,
        status: report.status,
        okCount: okCount,
        failCount: failCount
    };
     return {
        summaryObject: summary,
        summaryJSON: JSON.stringify(summary)
    };
}
const reportJSON = `{
  "app": "Portal",
  "status": "Ok",
  "modules": {
    "auth": "Ok",
    "payment": "Ok",
    "results": "Fail",
    "profile": "Ok"
  }
}`;
console.log(auditReport(reportJSON));
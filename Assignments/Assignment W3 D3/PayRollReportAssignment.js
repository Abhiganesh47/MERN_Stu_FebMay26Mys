// 2
// Payroll Cleanup and Net Pay Report
let payroll = [
  { name: "Abhi", basePay: 30000, bonus: 2000, taxRate: 0.1 },
  { name: "Ravi", basePay: 25000, bonus: 1500, taxRate: 0.08 },
  { name: "Dhanu", basePay: -5000, bonus: 1000, taxRate: 0.1 }, 
  { name: "Rakshit", basePay: 28000, bonus: -200, taxRate: 0.12 }, 
  { name: "Anu", basePay: 32000, bonus: 2500, taxRate: 1.2 }    
];

let validRecords = payroll.filter(emp =>
  emp.basePay > 0 &&
  emp.bonus >= 0 &&
  emp.taxRate >= 0 &&
  emp.taxRate <= 1
);

let netPayReport = validRecords.map(emp => {
  let gross = emp.basePay + emp.bonus;
  let netPay = gross - (gross * emp.taxRate);

  return {
    name: emp.name,
    netPay: netPay
  };
});

let totalNetPayout = netPayReport.reduce((total, emp) => {return total + emp.netPay;}, 0);

console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);
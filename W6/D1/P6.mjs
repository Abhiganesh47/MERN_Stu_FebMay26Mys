// Import ES Modules

import createInvoiceLable,{calculateTotal,taxRate} from "./P5.mjs"

const subTotal = 4000;
const total = calculateTotal(subTotal);
const label = createInvoiceLable("INV-2026-001");

console.log("Invoice label: ",label);
console.log("Tax rate: ",taxRate);
console.log("Final total : ",total);
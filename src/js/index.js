"use strict";

import { getSalesCoffee } from "./requirements";

const processSalesCoffee = () => {

    getSalesCoffee()
        .then(salesData => {

            if (salesData.success) {

                const container = document.getElementById("table-body");
                container.innerHTML = "";
                const ventas = salesData.body.getElementsByTagName("row");
                let conteo = 0;
                for(let venta of ventas) {

                    let row = `
                    <tr>
                    <td class="border px-4 py-2">[NAME]</td>
                    <td class="border px-4 py-2">[CASH_TYPE]</td>
                    <td class="border px-4 py-2">[DATE]</td>
                    <td class="border px-4 py-2">[TIME]</td>
                    <td class="border px-4 py-2">[MONEY]</td>
                </tr>`;

                    row = row.replace("[NAME]", venta.getElementsByTagName("coffee_name")[0].textContent);
                    row = row.replace("[CASH_TYPE]", venta.getElementsByTagName("cash_type")[0].textContent);
                    row = row.replace("[DATE]", venta.getElementsByTagName("Date")[0].textContent);
                    row = row.replace("[TIME]", venta.getElementsByTagName("Time")[0].textContent);
                    row = row.replace("[MONEY]", venta.getElementsByTagName("money")[0].textContent);

                    container.innerHTML += row;
                    conteo++;
                    if(conteo >= 20) break;
                };

            }
        }).catch(error => {
            console.error("Error fetching sales coffee data:", error);
        });

};

(() => {
    processSalesCoffee();
})();


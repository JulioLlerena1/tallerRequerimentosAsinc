"use strict";

const getSalesCoffee = async () => {

    try {
        const response = await fetch("https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml");
        if(!response.ok) {
            throw new Error("Failed to fetch sales coffee data");
        };

        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");

        return {

            success: true,
            body: xmlDoc

        };
        
    } catch (error) {
        return {
            success: false,
            body: error.message
        };
    };

};

export { getSalesCoffee };
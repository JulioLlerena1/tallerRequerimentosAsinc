"use strict";

const getSalesCoffee = async () => {

    try {
        const response = await fetch("https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching sales coffee data:", error);
        return [];
    }

};
function calcularTotal() {
    let ramenCerdo = parseInt(document.getElementById("ramenCerdo").value) || 0;
    let ramenPollo = parseInt(document.getElementById("ramenPollo").value) || 0;
    let ramenVeg = parseInt(document.getElementById("ramenVeg").value) || 0;
    let gyozasNormal = parseInt(document.getElementById("gyozasNormal").value) || 0;
    let gyozasCamaron = parseInt(document.getElementById("gyozasCamaron").value) || 0;
    let extraNormal = parseInt(document.getElementById("extraNormal").value) || 0;
    let extraCamaron = parseInt(document.getElementById("extraCamaron").value) || 0;
    let combo1 = parseInt(document.getElementById("combo1").value) || 0;
    let combo2 = parseInt(document.getElementById("combo2").value) || 0;

    let total = (ramenCerdo * 36000) +
                (ramenPollo * 36000) +
                (ramenVeg * 36000) +
                (gyozasNormal * 20000) +
                (gyozasCamaron * 25000) +
                (extraNormal * 4000) +
                (extraCamaron * 5000) +
                (combo1 * 120000) +
                (combo2 * 130000);

    document.getElementById("total").innerText = total;
}

function registrarPedido() {
    let total = document.getElementById("total").innerText;

    fetch("http://localhost:3000/ventas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ total: total })
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
    });
}


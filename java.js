// 1. Estructura de escenarios (Campos, Valores por defecto y Tablas de Casos de Estudio)
const escenarios = {
    alimentos: {
        titulo: "Simulador de Precios de Alimentos (Canasta Familiar)",
        campos: [
            { id: "nombreElemento", label: "Selecciona o escribe el Producto:", type: "text", value: "Arroz" },
            { id: "precioAnterior", label: "Precio Anterior Promedio (Bs)", type: "number", value: 8 },
            { id: "precioActual", label: "Precio Actual Promedio (Bs)", type: "number", value: 11 },
            { id: "cantidadMensual", label: "Cantidad Consumida al Mes (Uds)", type: "number", value: 10 }
        ],
        casoEstudio: `
            <p class="mb-3">Modela el incremento de precios en productos básicos y calcula la fuga presupuestaria mensual.</p>
            <div class="tabla-responsiva">
                <table>
                    <thead>
                        <tr><th>Variable</th><th>Valor Guía</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Producto</td><td>Arroz</td></tr>
                        <tr><td>Precio Anterior</td><td>8 Bs</td></tr>
                        <tr><td>Precio Actual</td><td>11 Bs</td></tr>
                        <tr><td>Cantidad Mensual</td><td>10 u</td></tr>
                    </tbody>
                </table>
            </div>`
    },
    carburantes: {
        titulo: "Simulador de Abastecimiento de Carburantes",
        campos: [
            { id: "nombreElemento", label: "Selecciona el tipo de Carburante:", type: "select", options: ["Gasolina Especial", "Diésel Oíl", "Gas Natural Vehicular (GNV)"] },
            { id: "reservaInicial", label: "Reserva Inicial de Carburante (Litros)", type: "number", value: 10000 },
            { id: "consumoDiario", label: "Consumo Diario Estimado (Litros)", type: "number", value: 1200 },
            { id: "reabastecimiento", label: "Reabastecimiento Diario (Litros)", type: "number", value: 300 },
            { id: "nivelCritico", label: "Nivel Crítico de Reserva (Litros)", type: "number", value: 2000 }
        ],
        casoEstudio: `
            <p class="mb-3">Simula cuántos días tardará una estación de servicio en entrar en un estado de desabastecimiento crítico.</p>
            <div class="tabla-responsiva">
                <table>
                    <thead>
                        <tr><th>Variable</th><th>Valor Guía</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Reserva Inicial</td><td>10,000 L</td></tr>
                        <tr><td>Consumo Diario</td><td>1,200 L</td></tr>
                        <tr><td>Reabastecimiento</td><td>300 L</td></tr>
                        <tr><td>Nivel Crítico</td><td>2,000 L</td></tr>
                    </tbody>
                </table>
            </div>`
    },
    transporte: {
        titulo: "Simulador de Costo de Transporte por Desvíos",
        campos: [
            { id: "nombreElemento", label: "Identificador del Tramo / Ruta afectada:", type: "text", value: "Ruta Interdepartamental Central" },
            { id: "distanciaNormal", label: "Distancia de Ruta Normal (Km)", type: "number", value: 10 },
            { id: "distanciaDesvio", label: "Distancia con Desvío / Bloqueo (Km)", type: "number", value: 16 },
            { id: "costoKm", label: "Costo de Operación por Kilómetro (Bs)", type: "number", value: 2 },
            { id: "viajesSemana", label: "Número de Viajes por Semana", type: "number", value: 5 }
        ],
        casoEstudio: `
            <p class="mb-3">Analiza el impacto financiero semanal que sufren los transportistas debido a bloqueos o rutas alternas.</p>
            <div class="tabla-responsiva">
                <table>
                    <thead>
                        <tr><th>Variable</th><th>Valor Guía</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Ruta Normal</td><td>10 Km</td></tr>
                        <tr><td>Ruta Desvío</td><td>16 Km</td></tr>
                        <tr><td>Costo por Km</td><td>2 Bs</td></tr>
                        <tr><td>Viajes / Semana</td><td>5</td></tr>
                    </tbody>
                </table>
            </div>`
    },
    compras: {
        titulo: "Simulador de Compras Familiares",
        campos: [
            { id: "nombreElemento", label: "Producto / Detalle Principal:", type: "text", value: "Canasta Familiar" },
            { id: "presupuesto", label: "Presupuesto Disponible (Bs)", type: "number", value: 500 },
            { id: "totalCompra", label: "Costo Total de la Compra (Bs)", type: "number", value: 580 }
        ],
        casoEstudio: `
            <p class="mb-3">Evalúa si los ingresos destinados a las adquisiciones del hogar logran cubrir la liquidación en caja.</p>
            <div class="tabla-responsiva">
                <table>
                    <thead>
                        <tr><th>Variable</th><th>Valor Guía</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Presupuesto</td><td>500 Bs</td></tr>
                        <tr><td>Compra Total</td><td>580 Bs</td></tr>
                    </tbody>
                </table>
            </div>`
    },
    escasez: {
        titulo: "Simulador de Rumor de Escasez",
        campos: [
            { id: "nombreElemento", label: "Producto Analizado:", type: "text", value: "Aceite" },
            { id: "demandaNormal", label: "Demanda Normal (Uds/Día)", type: "number", value: 100 },
            { id: "aumentoRumor", label: "Aumento por Rumor (%)", type: "number", value: 40 },
            { id: "stockDisponible", label: "Stock Disponible en Tienda (Uds)", type: "number", value: 120 }
        ],
        casoEstudio: `
            <p class="mb-3">Determina cómo la especulación y las compras de pánico aceleran el quiebre de inventario.</p>
            <div class="tabla-responsiva">
                <table>
                    <thead>
                        <tr><th>Variable</th><th>Valor Guía</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Demanda Normal</td><td>100 u</td></tr>
                        <tr><td>Aumento Rumor</td><td>40 %</td></tr>
                        <tr><td>Stock Bodega</td><td>120 u</td></tr>
                    </tbody>
                </table>
            </div>`
    },
    poder: {
        titulo: "Simulador de Pérdida del Poder Adquisitivo",
        campos: [
            { id: "nombreElemento", label: "Familia Analizada:", type: "text", value: "Familia Promedio" },
            { id: "ingresoMensual", label: "Ingresos Mensuales Fijos (Bs)", type: "number", value: 5000 },
            { id: "gastoAnterior", label: "Gasto Anterior por la misma Canasta (Bs)", type: "number", value: 2500 },
            { id: "gastoActual", label: "Gasto Actual por la misma Canasta (Bs)", type: "number", value: 3500 }
        ],
        casoEstudio: `
            <p class="mb-3">Mide el encarecimiento de la vida calculando la reducción del excedente o ahorro familiar.</p>
            <div class="tabla-responsiva">
                <table>
                    <thead>
                        <tr><th>Variable</th><th>Valor Guía</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Ingreso Familiar</td><td>5000 Bs</td></tr>
                        <tr><td>Gasto Indexado Antes</td><td>2500 Bs</td></tr>
                        <tr><td>Gasto Indexado Ahora</td><td>3500 Bs</td></tr>
                    </tbody>
                </table>
            </div>`
    }
};

// 2. Elementos de la interfaz (DOM)
const selectorEscenario = document.getElementById("selectorEscenario");
const tituloEscenario = document.getElementById("tituloEscenario");
const camposDinamicos = document.getElementById("camposDinamicos");
const guiaCasosEstudio = document.getElementById("guiaCasosEstudio");
const alertaValidacion = document.getElementById("alertaValidacion");
const cardResultados = document.getElementById("cardResultados");
const headerResultados = document.getElementById("headerResultados");
const contenedorMetricas = document.getElementById("contenedorMetricas");
const detalleResultados = document.getElementById("detalleResultados");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

// 3. Inyección Dinámica del Formulario y Casos de Estudio
function cargarEscenario(idEscenario) {
    const esc = escenarios[idEscenario];
    tituloEscenario.textContent = esc.titulo;
    guiaCasosEstudio.innerHTML = esc.casoEstudio;
    camposDinamicos.innerHTML = "";
    cardResultados.classList.add("oculto");
    alertaValidacion.classList.add("oculto");

    esc.campos.forEach((campo, index) => {
        const div = document.createElement("div");
        
        // Fila completa para el identificador del producto/tramo/familia
        if (index === 0) {
            div.className = "col-completa";
        }

        if (campo.type === "select") {
            let opcionesHtml = campo.options.map(opt => `<option value="${opt}">${opt}</option>`).join("");
            div.innerHTML = `
                <label for="${campo.id}" class="etiqueta-bloque">${campo.label}</label>
                <select class="selector-estilizado" id="${campo.id}">${opcionesHtml}</select>
            `;
        } else if (campo.type === "text") {
            div.innerHTML = `
                <label for="${campo.id}" class="etiqueta-bloque">${campo.label}</label>
                <input type="text" class="input-control" id="${campo.id}" value="${campo.value}">
            `;
        } else {
            div.innerHTML = `
                <label for="${campo.id}" class="etiqueta-bloque">${campo.label}</label>
                <input type="number" class="input-control" id="${campo.id}" value="${campo.value}" step="any">
            `;
        }
        camposDinamicos.appendChild(div);
    });
}

// 4. Lógica de Procesamiento Matemático y Despliegue de Estados Dinámicos
function calcularResultados() {
    alertaValidacion.classList.add("oculto");
    const scenarioActivo = selectorEscenario.value;
    const inputs = camposDinamicos.querySelectorAll("input, select");
    let valid = true;
    let datos = {};

    // Validación estricta en tiempo de ejecución
    inputs.forEach(input => {
        if (input.type === "number") {
            const val = parseFloat(input.value);
            // Validar que sea un número válido y que no sea negativo (permitimos 0 si corresponde, pero según el enunciado > 0)
            if (isNaN(val) || val < 0) {
                valid = false;
                input.style.borderColor = "var(--color-peligro)";
            } else {
                input.style.borderColor = "#ced4da";
                datos[input.id] = val;
            }
        } else {
            if (input.value.trim() === "") {
                valid = false;
                input.style.borderColor = "var(--color-peligro)";
            } else {
                input.style.borderColor = "#ced4da";
                datos[input.id] = input.value;
            }
        }
    });

    if (!valid) {
        alertaValidacion.classList.remove("oculto");
        cardResultados.classList.add("oculto");
        return;
    }

    // Limpieza de renderizados anteriores
    cardResultados.classList.remove("oculto");
    contenedorMetricas.innerHTML = "";
    detalleResultados.innerHTML = "";

    const nombreSeleccionado = datos["nombreElemento"];

    // --- ALIMENTOS ---
    if (scenarioActivo === "alimentos") {
        const gastoAnterior = datos.precioAnterior * datos.cantidadMensual;
        const gastoActual = datos.precioActual * datos.cantidadMensual;
        const diferencia = gastoActual - gastoAnterior;
        const porcentajeAumento = ((datos.precioActual - datos.precioAnterior) / datos.precioAnterior) * 100;

        if (porcentajeAumento > 30) {
            cambiarEstiloResultado("bg-critico", `CRÍTICO: Inflación Severa en ${nombreSeleccionado}`);
        } else if (porcentajeAumento > 10) {
            cambiarEstiloResultado("bg-alerta", `ADVERTENCIA: Inflación Moderada en ${nombreSeleccionado}`);
        } else {
            cambiarEstiloResultado("bg-stable", `ESTABLE: Fluctuación controlada de ${nombreSeleccionado}`);
        }

        renderizarMetrica("Gasto Anterior", `${gastoAnterior.toFixed(2)} Bs`);
        renderizarMetrica("Gasto Actual", `${gastoActual.toFixed(2)} Bs`);
        renderizarMetrica("Impacto Mensual", `+${diferencia.toFixed(2)} Bs`);

        detalleResultados.innerHTML = `
            <div class="tabla-responsiva">
                <table>
                    <thead>
                        <tr><th>Producto</th><th>Variación Porcentual</th><th>Pérdida Directa</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>${nombreSeleccionado}</strong></td><td style="color:var(--color-peligro); font-weight:bold;">${porcentajeAumento.toFixed(1)}%</td><td>${diferencia.toFixed(2)} Bs</td></tr>
                    </tbody>
                </table>
            </div>`;
    }

    // --- CARBURANTES ---
    else if (scenarioActivo === "carburantes") {
        const consumoNetoDiario = datos.consumoDiario - datos.reabastecimiento;
        
        if (consumoNetoDiario <= 0) {
            cambiarEstiloResultado("bg-stable", `ESTABLE: Reserva de ${nombreSeleccionado} Sostenible`);
            renderizarMetrica("Balance", "Superávit");
            renderizarMetrica("Agotamiento", "Nunca");
            detalleResultados.innerHTML = `<p class="mt-3 text-center">El flujo de reabastecimiento diario equilibra o supera la demanda del mercado.</p>`;
            return;
        }

        const diasHastaCritico = (datos.reservaInicial - datos.nivelCritico) / consumoNetoDiario;
        const diasTotales = datos.reservaInicial / consumoNetoDiario;

        if (diasHastaCritico <= 3) {
            cambiarEstiloResultado("bg-critico", `CRÍTICO: Colapso logístico inminente de ${nombreSeleccionado}`);
        } else if (diasHastaCritico <= 7) {
            cambiarEstiloResultado("bg-alerta", `ADVERTENCIA: Almacenamiento en descenso acelerado`);
        } else {
            cambiarEstiloResultado("bg-stable", `ESTABLE: Operación normal de distribución`);
        }

        renderizarMetrica("Carburante", nombreSeleccionado);
        renderizarMetrica("Días p/ Margen Crítico", `${Math.max(0, diasHastaCritico).toFixed(1)} Días`);
        renderizarMetrica("Cierre Total", `${diasTotales.toFixed(1)} Días`);
    }

    // --- TRANSPORTE ---
    else if (scenarioActivo === "transporte") {
        const costoNormalSemana = datos.distanciaNormal * datos.costoKm * datos.viajesSemana;
        const costoDesvioSemana = datos.distanciaDesvio * datos.costoKm * datos.viajesSemana;
        const gastoAdicionalSemana = costoDesvioSemana - costoNormalSemana;

        if (gastoAdicionalSemana > 50) {
            cambiarEstiloResultado("bg-critico", `CRÍTICO: Impacto Operativo Alto por desvíos`);
        } else {
            cambiarEstiloResultado("bg-alerta", `MODERADO: Encarecimiento logístico activo`);
        }

        renderizarMetrica("Costo Base / Sem", `${costoNormalSemana.toFixed(2)} Bs`);
        renderizarMetrica("Costo Desvío / Sem", `${costoDesvioSemana.toFixed(2)} Bs`);
        renderizarMetrica("Sobrecosto Semanal", `${gastoAdicionalSemana.toFixed(2)} Bs`);
        
        detalleResultados.innerHTML = `
            <p class="mt-3 text-center">La reconfiguración del tramo <strong>"${nombreSeleccionado}"</strong> incrementa los gastos fijos del flete de transporte.</p>`;
    }

    // --- COMPRAS ---
    else if (scenarioActivo === "compras") {
        const saldo = datos.presupuesto - datos.totalCompra;

        if (saldo < 0) {
            cambiarEstiloResultado("bg-critico", "CRÍTICO: Déficit Presupuestario en Liquidación");
        } else {
            cambiarEstiloResultado("bg-stable", "ESTABLE: Fondos con cobertura garantizada");
        }

        renderizarMetrica("Fondo Disponible", `${datos.presupuesto.toFixed(2)} Bs`);
        renderizarMetrica("Liquidación total", `${datos.totalCompra.toFixed(2)} Bs`);
        renderizarMetrica("Balance Neto", `${saldo.toFixed(2)} Bs`);

        detalleResultados.innerHTML = `
            <div class="tabla-responsiva">
                <table>
                    <thead>
                        <tr><th>Concepto</th><th>Monto Requerido</th><th>Estado</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>${nombreSeleccionado}</td><td>${datos.totalCompra.toFixed(2)} Bs</td><td style="font-weight:bold; color:${saldo >= 0 ? 'var(--color-exito)' : 'var(--color-peligro)'}">${saldo >= 0 ? 'Cubierto' : 'Inalcanzable'}</td></tr>
                    </tbody>
                </table>
            </div>`;
    }

    // --- ESCASEZ ---
    else if (scenarioActivo === "escasez") {
        const nuevaDemanda = datos.demandaNormal + (datos.demandaNormal * datos.aumentoRumor / 100);
        const stockRestante = datos.stockDisponible - nuevaDemanda;

        if (stockRestante < 0) {
            cambiarEstiloResultado("bg-critico", `CRÍTICO: Quiebre de Stock de ${nombreSeleccionado}`);
        } else {
            cambiarEstiloResultado("bg-stable", `ESTABLE: Inventario con holgura transitoria`);
        }

        renderizarMetrica("Demanda Inflada", `${nuevaDemanda.toFixed(0)} u`);
        renderizarMetrica("Stock Bodega", `${datos.stockDisponible} u`);
        renderizarMetrica("Diferencia Física", `${stockRestante.toFixed(0)} u`);

        detalleResultados.innerHTML = `
            <p class="mt-3 text-center">El pánico provocado por la especulación generó una sobre-demanda del <strong>${datos.aumentoRumor}%</strong> sobre el flujo tradicional de la plaza.</p>`;
    }

    // --- PODER ADQUISITIVO ---
    else if (scenarioActivo === "poder") {
        const perdida = datos.gastoActual - datos.gastoAnterior;
        const porcentajePerdida = (perdida / datos.gastoAnterior) * 100;
        const saldoAntes = datos.ingresoMensual - datos.gastoAnterior;
        const saldoActual = datos.ingresoMensual - datos.gastoActual;

        if (porcentajePerdida > 30) {
            cambiarEstiloResultado("bg-critico", `CRÍTICO: Contracción severa del ahorro de la ${nombreSeleccionado}`);
        } else {
            cambiarEstiloResultado("bg-alerta", `ADVERTENCIA: Reducción del margen de liquidez familiar`);
        }

        renderizarMetrica("Capacidad Ahorro Antes", `${saldoAntes.toFixed(2)} Bs`);
        renderizarMetrica("Capacidad Ahorro Actual", `${saldoActual.toFixed(2)} Bs`);
        renderizarMetrica("Encarecimiento Indexado", `${porcentajePerdida.toFixed(1)} %`);
    }
}

function cambiarEstiloResultado(claseColor, texto) {
    headerResultados.className = `tarjeta-cabecera text-blanco ${claseColor}`;
    headerResultados.textContent = texto;
}

function renderizarMetrica(titulo, valor) {
    const div = document.createElement("div");
    div.className = "metrica-item";
    div.innerHTML = `<div class="metrica-titulo">${titulo}</div><div class="metrica-valor">${valor}</div>`;
    contenedorMetricas.appendChild(div);
}

// Restablecer los inputs a sus valores predeterminados de fábrica para no romper la UX
function limpiarFormulario() {
    const scenarioActivo = selectorEscenario.value;
    cargarEscenario(scenarioActivo); // Recargar el escenario limpia errores y devuelve los marcadores guía
}

// 5. Event Listeners (Controladores de eventos de la App)
selectorEscenario.addEventListener("change", (e) => cargarEscenario(e.target.value));
btnCalcular.addEventListener("click", calcularResultados);
btnLimpiar.addEventListener("click", limpiarFormulario);

// Inicialización de la aplicación al cargar la ventana
document.addEventListener("DOMContentLoaded", () => {
    cargarEscenario("alimentos");
});
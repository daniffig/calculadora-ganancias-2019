function calcular() {
  var a = $("#sueldoBruto").val(),
    e = $("input[name='conyuge']:checked").val(),
    t = $("input[name='jubilado']:checked").val(),
    l = $("input[name='patagonico']:checked").val(),
    o = $("#alquiler").val(),
    n = 12 * o * .4 > TOPE_ALQUILER ? TOPE_ALQUILER : 12 * o * .4,
    c = $("#hipotecario").val(),
    s = 12 * c > TOPE_HIPOTECARIO ? TOPE_HIPOTECARIO : 12 * c,
    u = document.getElementById("hijos"),
    i = u.options[u.selectedIndex].value,
    E = 0 == t ? .17 * a > TOPE_APORTES ? a - TOPE_APORTES : .83 * a : .06 * a > TOPE_APORTES ? a - TOPE_APORTES : .94 * a,
    O = 13 * E,
    p = (MINIMO_NO_IMPONIBLE + ADICIONAL_4TA_CATEGORIA) * (1.22 * l + (1 - l));
  mniTotal = (p + CONYUGE * e + HIJO * i + n + s) * (1 - t) + t * (TOPE_JUBILADO + n + s), montoImponibleAplicable = 0, mniTotal < O && (montoImponibleAplicable = O - mniTotal);
  var I = calcularImpuesto(montoImponibleAplicable);
  impuestoAnual = I.value.toFixed(2), $("#impuestoAnual").text("$" + impuestoAnual);
  var r = (impuestoAnual / 12).toFixed(2);
  $("#impuestoMensual").text("$" + r);
  var A = r / a * 100;
  $("#alicuota").text(A.toFixed(2) + "%");
  var T = 0 == A ? 0 : 100 * porcentajesEscalas[I.escala];
  $("#alicuotaMarginal").text(T.toFixed(2) + "%");
  var m = E - r;
  $("#sueldoEnMano").text("$" + Math.round(m) + ".00")
}

function calcularImpuesto(a) {
  for (var e = 0, t = {}, l = 0; a > topesEscalas[e];) {
    var o = 0 == e ? topesEscalas[e] : topesEscalas[e] - topesEscalas[e - 1];
    l += o * porcentajesEscalas[e], e++
  }
  return o = 0 == e ? a : a - topesEscalas[e - 1], l += o * porcentajesEscalas[e], t.value = l, t.escala = e, t
}
$(document).ready(function () {
  $("#calcular").on("click", function () {
    calcular()
  }), $(document).keypress(function (a) {
    13 == a.keyCode && (a.preventDefault(), calcular())
  }), $("input[name='jubilado']").click(function () {
    $("input[name='conyuge']").attr({
      disabled: 1 == $(this).val()
    }), $("input[name='patagonico']").attr({
      disabled: 1 == $(this).val()
    })
  })
});
// var topesEscalas = [25800, 51600, 77400, 103200, 154800, 206400, 309600, 412800, 99999999],
var topesEscalas = [33041, 66081, 99120, 132160, 198240, 264319, 396479, 528638, 99999999],
  porcentajesEscalas = [.05, .09, .12, .15, .19, .23, .27, .31, .35],
  // MINIMO_NO_IMPONIBLE = 66917.91,
  MINIMO_NO_IMPONIBLE = 85848.99,
  // ADICIONAL_4TA_CATEGORIA = 321205.968,
  ADICIONAL_4TA_CATEGORIA = 321205.968,
  // CONYUGE = 62385.2,
  CONYUGE = 80033.97,
  // HIJO = 31461.09,
  HIJO = 40361.43,
  // Falta actualizar los topes
  TOPE_APORTES = 13926.16,
  TOPE_JUBILADO = 407592,
  TOPE_ALQUILER = 51967,
  TOPE_HIPOTECARIO = 2e4;
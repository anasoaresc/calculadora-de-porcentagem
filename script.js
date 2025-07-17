document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', calcular);
})

function calcular(event) {
    const btnId = event.target.id;

    switch (btnId) {
        case 'btn1':
            var num1 = Number(document.getElementById('nbr1').value);
            var num2 = Number(document.getElementById('nbr2').value);
            var calculo1 = num2 * (num1 / 100);

            document.getElementById('res1').value = calculo1.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        break

        case 'btn2':
            var num3 = Number(document.getElementById('nbr3').value);
            var num4 = Number(document.getElementById('nbr4').value);
            var calculo2 = (num3 / num4) * 100;

            document.getElementById('res2').value = calculo2.toFixed(6) + '%';
        break
        
        case 'btn3':
            var num5 = Number(document.getElementById('nbr5').value);
            var num6 = Number(document.getElementById('nbr6').value);
            var calculo3 = ((num6 - num5) / num5) * 100;

            document.getElementById('res3').value = calculo3.toFixed(6) + '%';
        break
        
        case 'btn4':
            var num7 = Number(document.getElementById('nbr7').value);
            var num8 = Number(document.getElementById('nbr8').value);
            var calculo4 = ((num7 - num8) / num7) * 100;

            document.getElementById('res4').value = calculo4.toFixed(6) + '%';
        break

        case 'btn5':
            var num9 = Number(document.getElementById('nbr9').value);
            var num10 = Number(document.getElementById('nbr10').value);
            var calculo5 = (num9 / num10) * 100;

            document.getElementById('res5').value = calculo5.toFixed(6) + '%';
        break

        case 'btn6':
            var num11 = Number(document.getElementById('nbr11').value);
            var num12 = Number(document.getElementById('nbr12').value);
            var calculo6 = ((num12 / 100) + 1) * num11;

            document.getElementById('res6').value = calculo6.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        break

        case 'btn7':
            var num13 = Number(document.getElementById('nbr13').value);
            var num14 = Number(document.getElementById('nbr14').value);
            var calculo7 = (1 - (num14 / 100)) * num13;

            document.getElementById('res7').value = calculo7.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        break

        case 'btn8':
            var num15 = Number(document.getElementById('nbr15').value);
            var num16 = Number(document.getElementById('nbr16').value);
            var calculo8 = num16 / (1 + (num15 / 100));

            document.getElementById('res8').value = calculo8.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        break

        case 'btn9':
            var num17 = Number(document.getElementById('nbr17').value);
            var num18 = Number(document.getElementById('nbr18').value);
            var calculo9 = num18 / (1 - (num17 / 100));

            document.getElementById('res9').value = calculo9.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        break
    } 
}
document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById("color-picker");
    const minhaImagem = document.querySelector(".minha-imagem"); // Selecionando a imagem pela classe corrigida

    if (colorPicker && minhaImagem) {
        colorPicker.addEventListener("input", updateColor, false);
        colorPicker.addEventListener("change", updateColor, false);
    } else {
        console.error("Elemento #color-picker ou .minha-imagem não encontrado no documento.");
    }

    function updateColor(event) {
        document.querySelectorAll("p").forEach((p) => {
            p.style.color = event.target.value;
        });

        minhaImagem.style.filter = `hue-rotate(${valueToHue(event.target.value)}deg)`;
    }

    // Função para converter o valor do input color para um ângulo de rotação de matiz
    function valueToHue(colorValue) {
        // Aqui você pode implementar a lógica para converter o valor da cor em graus de rotação de matiz
        // Exemplo simplificado:
        return parseInt(colorValue.substr(1, 2), 16) * 3.6; // Conversão simples de parte do valor hexadecimal para graus
    }
});

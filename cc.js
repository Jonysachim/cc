// Função para criar e abrir o popup com iframe
function openBlurPopup() {
    // Verifica se o popup já existe
    if (!document.getElementById('popup')) {
        // Cria o elemento do popup
        var popup = document.createElement('div');
        popup.id = 'popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.width = '400px';
        popup.style.height = '300px';
        popup.style.backgroundColor = '#fff';
        popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        popup.style.borderRadius = '8px';
        popup.style.overflow = 'hidden';
        popup.style.zIndex = '1000'; // Para garantir que o popup apareça na frente de outros elementos

        // Cria o botão de fechar
        var closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '5px';
        closeBtn.style.right = '10px';
        closeBtn.style.background = '#ff5b5b';
        closeBtn.style.color = 'white';
        closeBtn.style.border = 'none';
        closeBtn.style.padding = '5px 10px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.borderRadius = '50%';
        closeBtn.onclick = function () {
            document.body.removeChild(popup); // Remove o popup ao clicar no botão de fechar
        };

        // Cria o iframe
        var iframe = document.createElement('iframe');
        iframe.src = 'https://blur.io';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';

        // Adiciona o botão de fechar e o iframe ao popup
        popup.appendChild(closeBtn);
        popup.appendChild(iframe);

        // Adiciona o popup ao corpo do documento
        document.body.appendChild(popup);
    }
}

// Exemplo de como injetar a função em um botão
// Substitua 'seuBotao' pelo id do botão que você deseja associar ao popup
document.getElementById('seuBotao').addEventListener('click', openBlurPopup);

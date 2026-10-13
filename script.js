// NÚMERO DO WHATSAPP DA ASSISTÊNCIA TÉCNICA
// Quando fechar o cliente real, mude apenas este número abaixo (DDI + DDD + NÚMERO)
const NUMERO_WHATSAPP = "5564999999999"; 

/**
 * Função que abre o WhatsApp com a mensagem formatada.
 * É chamada pelos botões de contato no HTML.
 */
function abrirWhatsApp(mensagem) {
    // Codifica a mensagem para o formato de URL (transforma espaços em %20, etc)
    const textoCodificado = encodeURIComponent(mensagem);
    
    // Cria o link final
    const link = `https://wa.me/${NUMERO_WHATSAPP}?text=${textoCodificado}`;
    
    // Abre em uma nova aba
    window.open(link, '_blank');
}

// Inicializa a biblioteca de ícones Lucide (que usamos no HTML)
// Isso pega todas as tags <i data-lucide="..."> e transforma nos desenhos dos ícones
lucide.createIcons();

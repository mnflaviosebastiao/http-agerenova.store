const CONFIG_GESTOR = {
    checkoutLinks: {
        opcao1: 'https://checkout.payt.com.br/5b8e9841e87fb8fc590434f5d933c92c?split=12&src=Flavio_PV_antiga',
        opcao2: 'https://checkout.payt.com.br/ee26fc66b1369c7625333bedafbfcaf6?split=12&src=flavio_PV_antiga',
        opcao3: 'https://checkout.payt.com.br/d542599794c1cf067d90638b5d3911f3?split=12&src=flavio_PV_antiga',
        opcao4: 'https://checkout.payt.com.br/697e382cfd25b07a3e62275d3ee132b3?split=12&src=flavio_PV_antiga'
    }
};


// Atualizar os links de checkout quando o DOM estiver pronto
window.addEventListener('DOMContentLoaded', () => {
    const checkoutLinks = document.querySelectorAll('.checkoutLink');
    
    checkoutLinks.forEach(link => {
        const key = link.getAttribute('data-link-key');
        if (CONFIG_GESTOR.checkoutLinks[key]) {
            link.href = CONFIG_GESTOR.checkoutLinks[key];
        }
    });
});



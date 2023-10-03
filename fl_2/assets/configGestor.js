const CONFIG_GESTOR = {
    checkoutLinks: {
        opcao1: 'https://checkout.payt.com.br/36920c7628b5bc6824378f3411bbfa34?src=Flavio_PV_antiga',
        opcao2: 'https://checkout.payt.com.br/df01683a169bdcc3853ab5bd852a9832?src=flavio_PV_antiga',
        opcao3: 'https://checkout.payt.com.br/90d89eccfe88456d58a2872a9350f6a9?src=flavio_PV_antiga',
        opcao4: 'https://checkout.payt.com.br/94546c6c568fd629ae0799b223921ca9?src=flavio_PV_antiga'
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



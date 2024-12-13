function assinar(plano) {
    if (plano === 'anual') {
        alert("Você escolheu o plano anual. Você será redirecionado para o pagamento.");
        // Redireciona para a página de pagamento do plano anual
        window.location.href = "anual.html";
    } else if (plano === 'mensal') {
        alert("Você escolheu o plano mensal. Você será redirecionado para o pagamento.");
        // Redireciona para a página de pagamento do plano mensal
        window.location.href = "mensal.html";
    }
}

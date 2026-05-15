const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
            }
        });
    });

    const elementos = document.querySelectorAll('.historiaa, .membros,');
    elementos.forEach((el) => observador.observe(el));
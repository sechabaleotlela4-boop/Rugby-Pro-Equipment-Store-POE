document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const enquiryForm = document.getElementById("enquiryForm");

    function validateForm(form, formName) {
        if (form) {
            form.addEventListener("submit", function(event) {
                const name = form.querySelector("#name").value;
                const email = form.querySelector("#email").value;
                const message = form.querySelector("#message").value;
                
                if (name === "" || email === "" || message === "") {
                    alert("Please fill in all required fields before submitting.");
                    event.preventDefault(); 
                } else if (!email.includes("@") || !email.includes(".")) {
                    alert("Please enter a valid email address.");
                    event.preventDefault();
                } else {
                    alert("Thank you, " + name + "! Your " + formName + " has been sent successfully.");
                }
            });
        }
    }
    
    validateForm(contactForm, "message");
    validateForm(enquiryForm, "enquiry");

    const modalHTML = `
        <div id="lightboxModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:1000; justify-content:center; align-items:center; cursor:pointer;">
            <span id="closeLightbox" style="position:absolute; top:20px; right:40px; color:white; font-size:50px; cursor:pointer;">&times;</span>
            <img id="lightboxImg" style="max-width:85%; max-height:85%; border:4px solid #d4af37; border-radius: 8px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const productImages = document.querySelectorAll('.product-image');
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('closeLightbox');

    if (productImages.length > 0) {
        productImages.forEach(img => {
            img.style.cursor = "pointer"; 
            img.addEventListener('click', function(event) {
                event.preventDefault(); 
                modal.style.display = "flex";
                modalImg.src = this.src;
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });

        modal.addEventListener('click', function(event) {
            if (event.target === modal || event.target === closeBtn) {
                modal.style.display = "none";
            }
        });
    }

    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    }
});
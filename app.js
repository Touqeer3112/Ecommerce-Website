const icons = document.querySelectorAll('.cart-btn'); 
icons.forEach(function(icon) {
    icon.addEventListener('click', function () {
       
        const productCard = icon.closest('.box');
        
       
        const productName = productCard.querySelector('.content h3').textContent; 
        const productPrice = productCard.querySelector('.price').textContent;
        const productImage = productCard.querySelector('img').src;
        
       
        const product = {
            name: productName, 
            price: productPrice, 
            image: productImage
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || []; 
        
        cart.push(product);

      
        localStorage.setItem('cart', JSON.stringify(cart)); 
        alert(`${productName} has been added to your cart!`);

        const profileLink = document.createElement('a');
        profileLink.href = 'profile.html';  
        profileLink.textContent = 'Go to My Profile';
        profileLink.style.display = 'block';
        profileLink.style.marginTop = '10px';
        profileLink.style.color = '#000';
        profileLink.style.textDecoration = 'none';

       
        document.body.appendChild(profileLink);

      
        // window.location.href = 'profile.html';
    });
});






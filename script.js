function showPrice(productName, price) {
    const popup = document.querySelector('.price-popup');
    const overlay = document.querySelector('.overlay');
    
    // Check if popup exists, if not create it
    if (!popup) {
        const newPopup = document.createElement('div');
        newPopup.className = 'price-popup';
        newPopup.innerHTML = `
            <h2>${productName}</h2>
            <p>Price per Kilogram</p>
            <div class="price">${price}</div>
            <button class="close-btn" onclick="closePrice()">Close</button>
        `;
        document.body.appendChild(newPopup);
        
        const newOverlay = document.createElement('div');
        newOverlay.className = 'overlay';
        newOverlay.onclick = closePrice;
        document.body.appendChild(newOverlay);
        
        newPopup.classList.add('show');
        newOverlay.classList.add('show');
    } else {
        popup.innerHTML = `
            <h2>${productName}</h2>
            <p>Price per Kilogram</p>
            <div class="price">${price}</div>
            <button class="close-btn" onclick="closePrice()">Close</button>
        `;
        popup.classList.add('show');
        overlay.classList.add('show');
    }
}

function closePrice() {
    const popup = document.querySelector('.price-popup');
    const overlay = document.querySelector('.overlay');
    
    if (popup) {
        popup.classList.remove('show');
    }
    if (overlay) {
        overlay.classList.remove('show');
    }
}

// Close popup when pressing Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePrice();
    }
});

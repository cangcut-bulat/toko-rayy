
let youtubePlayer;
let isYouTubeApiReady = false;
function onYouTubeIframeAPIReady() { isYouTubeApiReady = true; }
(function() { const tag = document.createElement('script'); tag.src = "https://www.youtube.com/iframe_api"; const firstScriptTag = document.getElementsByTagName('script')[0]; firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); })();

const WA_ADMIN_NUMBER = "601173686870";
const WA_SELLER_NUMBER = "60175887357";
const CREATOR_USERNAME = "RAYY SETTING 7 - RS7";
const SOSMED_LINK = "https://chat.whatsapp.com/BojXBO64zsbI4entCNSbNO";
const TESTIMONI_LINK = "https://chat.whatsapp.com/Bq4CwsN1N3e9DNyQzOnWze";
const SALURAN_WA_LINK = "https://whatsapp.com/channel/0029VbAVfx15vKAA3VX6hf2u";

// --- Elemen DOM ---
const welcomeScreen = document.getElementById('welcomeScreen');
const mainContainer = document.getElementById('mainContainer');
const offcanvasMenu = document.getElementById('offcanvasMenu');
const overlay = document.getElementById('overlay');
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const openCartBtn = document.getElementById('openCart');
const cartCountSpan = document.getElementById('cartCount');
const currentDateTimeSpan = document.getElementById('currentDateTime');
const serviceGrid = document.getElementById('serviceGrid');
const productListDiv = document.getElementById('productList');
const productDetailViewDiv = document.getElementById('productDetailView');
const serviceDetailPageTitle = document.getElementById('serviceDetailPageTitle');
const detailProductName = document.getElementById('detailProductName');
const detailProductDescriptionContent = document.getElementById('detailProductDescriptionContent');
const detailProductPrice = document.getElementById('detailProductPrice');
const detailProductActions = document.getElementById('detailProductActions');
const cartItemsList = document.getElementById('cartItems');
const cartTotalSpan = document.getElementById('cartTotal');
const checkoutButton = document.getElementById('checkoutButton');
const backArrows = document.querySelectorAll('.back-arrow');
const cartEmptyMessage = document.getElementById('cartEmptyMessage');
const bannerCarousel = document.getElementById('bannerCarousel');
const bannerPagination = document.getElementById('bannerPagination');
const visitorCountDisplay = document.getElementById('visitorCountDisplay');
const visitorCountSpan = visitorCountDisplay ? visitorCountDisplay.querySelector('.count') : null;
const countdownTimerDiv = document.getElementById('countdownTimer');
let countdownInterval = null;
const stockImageSliderContainer = document.getElementById('stockImageSliderContainer');
const stockImageSlider = document.getElementById('stockImageSlider');
const sliderPrevBtn = document.getElementById('sliderPrevBtn');
const sliderNextBtn = document.getElementById('sliderNextBtn');
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxActions = document.getElementById('lightboxActions');
const lightboxSelectBtn = document.getElementById('lightboxSelectBtn');
let currentStockImageIndex = 0;
let totalStockImages = 0;
const aboutUsModal = document.getElementById('aboutUsModal');
const openAboutUsModalBtn = document.getElementById('openAboutUsModal');
const closeAboutUsModalBtn = document.getElementById('closeAboutUsModal');
const genericScriptMenuModal = document.getElementById('genericScriptMenuModal');
const closeGenericScriptMenuModalBtn = document.getElementById('closeGenericScriptMenuModal');
const genericScriptMenuTitle = document.getElementById('genericScriptMenuTitle');
const genericScriptMenuContent = document.getElementById('genericScriptMenuContent');
const chatAiModal = document.getElementById('chatAiModal');
const openChatAiModalBtn = document.getElementById('openChatAiModal');
const closeChatAiModalBtn = document.getElementById('closeChatAiModal');
const chatAiMessagesPage = document.getElementById('chatAiMessagesPage');
const chatAiInputPage = document.getElementById('chatAiInputPage');
const sendChatAiBtnPage = document.getElementById('sendChatAiBtnPage');
const chatAiLoadingPage = document.getElementById('chatAiLoadingPage');
const multifunctionFab = document.getElementById('multifunctionFab');
const themeSwitchBtn = document.getElementById('themeSwitchBtn');
const openMusicPopupBtn = document.getElementById('openMusicPopupBtn');
const linktreeBtn = document.getElementById('linktreeBtn');
const muteAudioBtn = document.getElementById('muteAudioBtn');
let isFabFirstClick = true;
const musicPlayerOverlay = document.getElementById('musicPlayerOverlay');
const musicPlayerPopup = document.getElementById('musicPlayerPopup');
const closeMusicPlayer = document.getElementById('closeMusicPlayer');
const mediaLinkInput = document.getElementById('mediaLinkInput');
const loadMediaBtn = document.getElementById('loadMediaBtn');
const mediaPlayerContainer = document.getElementById('mediaPlayerContainer');
const backgroundAudio = document.getElementById('background-audio');
let toastTimeout;
let customMusicMuted = false;
let bannerInterval;

const promoBottomSheet = document.getElementById('promoBottomSheet');
const promoOverlay = document.getElementById('promoOverlay');
const closePromoSheetBtn = document.getElementById('closePromoSheetBtn');
const showProductPromoPopupBtn = document.getElementById('showProductPromoPopupBtn');
const showCartPromoPopupBtn = document.getElementById('showCartPromoPopupBtn');
const promoInput = document.getElementById('promoInput');
const promoApplyBtn = document.getElementById('promoApplyBtn');
const promoFeedback = document.getElementById('promoFeedback');
const cartPromoContainer = document.getElementById('cartPromoContainer');

const customAlertModal = document.getElementById('customAlertModal');
const alertTitle = document.getElementById('alertTitle');
const alertMessage = document.getElementById('alertMessage');
const alertCloseBtn = document.getElementById('alertCloseBtn');

// MODIFIKASI: Tambah elemen untuk modal konfirmasi promo
const promoConfirmModal = document.getElementById('promoConfirmModal');
const promoConfirmTitle = document.getElementById('promoConfirmTitle');
const promoConfirmMessage = document.getElementById('promoConfirmMessage');
const promoConfirmOkBtn = document.getElementById('promoConfirmOkBtn');
const promoConfirmCancelBtn = document.getElementById('promoConfirmCancelBtn');

let promoContext = '';
let currentProductOnDetailPage = null;
let productPagePromo = null;
let cartPagePromo = null;
let products = {};
let siteSettings = {};
let cart = JSON.parse(localStorage.getItem('rikishop_cart_v2')) || [];
let currentPage = 'home-page';
let currentLightboxTarget = null; 
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-rikishop';
let isHandlingPopState = false;

function showCustomAlert(title, message) {
    if (!customAlertModal) return;
    alertTitle.textContent = title;
    alertMessage.innerHTML = message;
    customAlertModal.style.display = 'flex';
}

function closeCustomAlert() {
    if (!customAlertModal) return;
    customAlertModal.style.display = 'none';
}

// MODIFIKASI: Fungsi baru untuk menampilkan modal konfirmasi
function showPromoConfirm(title, message) {
    return new Promise((resolve) => {
        if (!promoConfirmModal) {
            resolve(false); // Jika elemen tidak ada, anggap batal
            return;
        }
        promoConfirmTitle.textContent = title;
        promoConfirmMessage.innerHTML = message;
        promoConfirmModal.style.display = 'flex';

        promoConfirmOkBtn.onclick = () => {
            promoConfirmModal.style.display = 'none';
            resolve(true);
        };
        promoConfirmCancelBtn.onclick = () => {
            promoConfirmModal.style.display = 'none';
            resolve(false);
        };
    });
}

function closeAllPopups() {
    if (genericScriptMenuModal) genericScriptMenuModal.style.display = 'none';
    if (aboutUsModal) aboutUsModal.style.display = 'none';
    if (chatAiModal) chatAiModal.style.display = 'none';
}

async function validatePromoCode(code, context = {}) {
    try {
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'promoValidate',
                data: { code: code, context: context }
            })
        });

        if (!response.ok) {
            let errorMessage;
            try {
                const errorResult = await response.json();
                errorMessage = errorResult.message || `Terjadi kesalahan di server (Status: ${response.status}).`;
            } catch (e) {
                errorMessage = `Server tidak merespon dengan benar. Silakan coba lagi nanti (Status: ${response.status}).`;
            }
            throw new Error(errorMessage);
        }

        return await response.json();

    } catch (error) {
        console.error("Promo API Error:", error);
        if (error.message) {
            throw error;
        } else {
            throw new Error("Gagal menghubungi server. Periksa koneksi internet Anda.");
        }
    }
}

// ... (sisa fungsi sampai showPage tetap sama) ...
async function setupFirebaseVisitorCounter() {
    if (!visitorCountSpan) return;
    visitorCountSpan.textContent = '-';
    if (!window.firebaseServices) {
        console.warn("Layanan Firebase tidak tersedia.");
        visitorCountSpan.textContent = 'R/Y';
        return;
    }
    const { auth, db, doc, runTransaction, onSnapshot, signInAnonymously, signInWithCustomToken, initialAuthToken } = window.firebaseServices;
    try {
        if (!auth.currentUser) {
            if (initialAuthToken) { await signInWithCustomToken(auth, initialAuthToken); }
            else { await signInAnonymously(auth); }
        }
        const visitorDocRef = doc(db, "artifacts", appId, "public/data/site_stats/visitors");
        onSnapshot(visitorDocRef, (doc) => {
            const oldCount = visitorCountSpan.textContent;
            let newCountText = '0';
            if (doc.exists() && typeof doc.data().count === 'number' && !isNaN(doc.data().count)) {
                newCountText = doc.data().count.toString();
            }
            visitorCountSpan.textContent = newCountText;
            if (oldCount !== '-' && oldCount !== newCountText) {
                visitorCountDisplay.classList.add('updated');
                setTimeout(() => visitorCountDisplay.classList.remove('updated'), 500);
            }
        });
        await runTransaction(db, async (transaction) => {
            const visitorDoc = await transaction.get(visitorDocRef);
            let currentCount = 0;
            if (visitorDoc.exists() && typeof visitorDoc.data().count === 'number') {
                currentCount = visitorDoc.data().count;
            }
            const newCount = currentCount + 1;
            transaction.set(visitorDocRef, { count: newCount }, { merge: true });
        });
    } catch (error) {
        console.error("Error pada Firebase Visitor Counter:", error);
        visitorCountSpan.textContent = 'Error';
    }
}

function showPage(pageId) {
    closeAllPopups();

    document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;
    mainContainer.scrollTop = 0;

    if (!isHandlingPopState) {
        history.pushState({ page: pageId }, '', `#${pageId.replace('-page', '')}`);
    }
}

function formatRupiah(number) {
    // 'ms-MY' adalah kode untuk Malaysia, dan 'MYR' adalah kode untuk Ringgit
    return new Intl.NumberFormat('ms-MY', { style: 'currency', currency: 'MYR' }).format(number);
}

function getPhoneNumberForProduct(product, serviceType) {
    if (product && product.nomorWA) return product.nomorWA;
    if (siteSettings.categoryPhoneNumbers && siteSettings.categoryPhoneNumbers[serviceType]) return siteSettings.categoryPhoneNumbers[serviceType];
    if (siteSettings.globalPhoneNumber) return siteSettings.globalPhoneNumber;
    return WA_ADMIN_NUMBER;
}

function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    if (currentDateTimeSpan) {
        currentDateTimeSpan.innerHTML = `<span class="date">${formattedDate}</span><br><span class="time">${formattedTime}</span>`;
    }
}

function showToastNotification(message, iconClass = 'fa-check-circle') {
    const toast = document.getElementById('toast-notification');
    if (toastTimeout) clearTimeout(toastTimeout);
    toast.innerHTML = `<i class="fas ${iconClass}"></i> ${message}`;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

function setupBannerCarousel() {
    const bannerItems = bannerCarousel.querySelectorAll(".banner-item");
    if (bannerItems.length === 0) return;
    bannerPagination.innerHTML = '';
    bannerItems.forEach((_, i) => {
        let dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        bannerPagination.appendChild(dot);
    });
    let currentBannerIndex = 0;
    function goToSlide(index) {
        currentBannerIndex = index;
        bannerCarousel.style.transform = `translateX(-${index * 100}%)`;
        const dots = bannerPagination.querySelectorAll("span");
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }
    function nextBanner() {
        let nextIndex = (currentBannerIndex + 1) % bannerItems.length;
        goToSlide(nextIndex);
    }
    if (bannerInterval) clearInterval(bannerInterval);
    bannerInterval = setInterval(nextBanner, 4000);
}

function renderServiceGrid() {
    serviceGrid.innerHTML = '';
    const categoryMetadata = siteSettings.categoryMetadata || {};
    const fallbackIcons = {
        'ANDROID': 'image/panelff.jpg',
        'XiT AIMLOCK ANDROID': 'image/panelff.jpg',
        'EZ HEAD ANDROID': 'image/panelff.jpg',
        'AIM HEAD ANDROID': 'image/panelff.jpg',
        'iNJECTOR ANDROID': 'image/panelff.jpg'
    };
    for (const categoryName in products) {
        const placeholderUrl = 'https://via.placeholder.com/45/EFEFEF/AFAFAF?text=ICON';
        const iconUrl = categoryMetadata[categoryName]?.icon || fallbackIcons[categoryName] || placeholderUrl;
        const item = document.createElement('a');
        item.href = '#';
        item.className = 'service-item';
        item.dataset.service = categoryName;
        item.innerHTML = `<img src="${iconUrl}" alt="${categoryName} Icon"><span>${categoryName}</span>`;
        item.addEventListener('click', (e) => {
            e.preventDefault();
            loadServiceProducts(categoryName);
            showPage('service-detail-page');
        });
        serviceGrid.appendChild(item);
    }
}

function loadServiceProducts(serviceType) {
    serviceDetailPageTitle.textContent = serviceType;
    productListDiv.innerHTML = '';
    productDetailViewDiv.style.display = 'none';
    const productData = products[serviceType] || [];
    if (productData.length > 0) {
        productData.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            let isNew = product.createdAt && (Date.now() - new Date(product.createdAt).getTime() < 86400000);
            
            let priceToDisplay = product.harga;
            let originalPriceToDisplay = product.hargaAsli;

            const isDiscountExpired = originalPriceToDisplay && product.discountEndDate && new Date(product.discountEndDate) < new Date();
            if (isDiscountExpired) {
                priceToDisplay = originalPriceToDisplay;
            }

            let priceDisplay = `<span class="product-price-list">${formatRupiah(priceToDisplay)}</span>`;
            if (originalPriceToDisplay && originalPriceToDisplay > priceToDisplay && !isDiscountExpired) { 
                priceDisplay = `<span class="original-price"><del>${formatRupiah(originalPriceToDisplay)}</del></span> <span class="discounted-price">${formatRupiah(priceToDisplay)}</span>`; 
            }

            productItem.innerHTML = `<div><span class="product-name">${product.nama} ${isNew ? '<span class="new-badge">NEW</span>' : ''}</span><p class="product-short-desc">${product.deskripsiPanjang ? product.deskripsiPanjang.split('||')[0].trim() + '...' : ''}</p>${priceDisplay}</div><i class="fas fa-chevron-right"></i>`;
            productItem.addEventListener('click', () => showProductDetail(product, serviceType));
            productListDiv.appendChild(productItem);
        });
        productListDiv.style.display = 'block';
    } else {
        productListDiv.innerHTML = '<p style="text-align: center; color: var(--light-text-color); padding: 20px;">Produk akan segera hadir.</p>';
    }
}

function showProductDetail(product, serviceType) {
    productListDiv.style.display = 'none';
    productDetailViewDiv.style.display = 'block';
    currentProductOnDetailPage = product;
    productPagePromo = null;
    promoInput.value = '';
    promoFeedback.textContent = '';
    promoFeedback.className = '';
    detailProductName.textContent = product.nama;
    detailProductActions.innerHTML = ''; 
    
    updateProductPriceDisplay();
    
    detailProductDescriptionContent.innerHTML = product.deskripsiPanjang ? product.deskripsiPanjang.replace(/\|\|/g, '<br>') : 'Tidak ada deskripsi.';

    const existingMenuBtn = document.querySelector('.check-menu-btn');
    if (existingMenuBtn) {
        existingMenuBtn.remove();
    }
    
    if (serviceType === 'Script' && product.menuContent) {
        const checkMenuBtn = document.createElement('button');
        checkMenuBtn.className = 'check-menu-btn';
        checkMenuBtn.innerHTML = '<i class="fas fa-list-alt"></i> Cek Menu';
        checkMenuBtn.addEventListener('click', () => {
            genericScriptMenuTitle.textContent = `Menu Script: ${product.nama}`;
            genericScriptMenuContent.innerHTML = product.menuContent.replace(/\n/g, '<br>');
            genericScriptMenuModal.style.display = 'flex';
        });
        detailProductDescriptionContent.insertAdjacentElement('afterend', checkMenuBtn);
    }
    
    if ((serviceType === 'Stock Akun' || serviceType === 'Logo') && product.images && product.images.length > 0) {
        stockImageSliderContainer.style.display = 'block';
        stockImageSlider.innerHTML = '';
        product.images.forEach((imgUrl, index) => {
            const slideWrapper = document.createElement('div');
            slideWrapper.className = 'image-slide-wrapper';
            slideWrapper.dataset.imageUrl = imgUrl; 
            
            let slideContent = '';

            if (serviceType === 'Stock Akun') {
                slideContent = `<div class="image-slide" style="background-image: url('${imgUrl}');"></div><span class="image-number-badge">${index + 1}</span>`;
                slideWrapper.addEventListener('click', () => openLightbox(imgUrl)); 
            } 
            else if (serviceType === 'Logo') {
                slideWrapper.classList.add('logo-selectable');
                slideContent = `
                    <div class="image-slide" style="background-image: url('${imgUrl}');"></div>
                    <div class="logo-overlay"></div>
                    <i class="fas fa-check-circle logo-checkmark"></i>
                `;
                slideWrapper.addEventListener('click', () => openLightbox(imgUrl, slideWrapper));
            }

            slideWrapper.innerHTML = slideContent;
            stockImageSlider.appendChild(slideWrapper);
        });
        totalStockImages = product.images.length;
        currentStockImageIndex = 0;
        updateSliderPosition();
    } else {
        stockImageSliderContainer.style.display = 'none';
    }

    if (!isHandlingPopState) {
        history.pushState({ page: 'product-detail' }, '', `#product/${product.id}`);
    }
}


function updateProductPriceDisplay() {
    if (!currentProductOnDetailPage) return;
    let product = currentProductOnDetailPage;
    let priceHtml = '';
    let finalPriceForActions = 0;
    
    const basePrice = product.hargaAsli || product.harga;
    const discountPrice = product.harga;

    if (countdownInterval) clearInterval(countdownInterval);
    countdownTimerDiv.style.display = 'none';

    const isDiscountActive = basePrice > discountPrice && product.discountEndDate && new Date(product.discountEndDate) > new Date();

    if (isDiscountActive) {
        priceHtml = `<span class="original-price"><del>${formatRupiah(basePrice)}</del></span> <span class="discounted-price">${formatRupiah(discountPrice)}</span>`;
        finalPriceForActions = discountPrice;
        
        const endDate = new Date(product.discountEndDate).getTime();
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = endDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                updateProductPriceDisplay();
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            const countdownDisplay = document.getElementById('countdown-display');
            countdownDisplay.innerHTML = `<span>${days}h</span> <span>${hours}j</span> <span>${minutes}m</span> <span>${seconds}d</span>`;
            countdownTimerDiv.style.display = 'block';
        };
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    } else {
        priceHtml = formatRupiah(basePrice);
        finalPriceForActions = basePrice;
    }
    
    if (productPagePromo) {
        const priceToDiscount = basePrice; 
        const promoDiscountAmount = priceToDiscount * (productPagePromo.percentage / 100);
        finalPriceForActions = priceToDiscount - promoDiscountAmount;
        priceHtml = `<span class="original-price" style="text-decoration: line-through;"><del>${formatRupiah(basePrice)}</del></span> <span class="discounted-price">${formatRupiah(finalPriceForActions)}</span>`;
    }

    detailProductPrice.innerHTML = priceHtml;
    generateProductActionButtons(finalPriceForActions);
}

function generateProductActionButtons(currentPrice) {
    let product = currentProductOnDetailPage;
    let serviceType = findCategoryOfProduct(product.id);
    
    detailProductActions.innerHTML = ''; 

    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart';
    addToCartBtn.textContent = 'Tambah ke Keranjang';
    Object.assign(addToCartBtn.dataset, {
        productId: product.id,
        productName: product.nama,
        productPrice: currentPrice,
        serviceType: serviceType
    });
    addToCartBtn.addEventListener('click', (e) => {
        const itemData = {
            id: parseInt(e.target.dataset.productId),
            name: e.target.dataset.productName,
            price: parseFloat(e.target.dataset.productPrice),
            serviceType: e.target.dataset.serviceType,
            originalPrice: product.hargaAsli || product.harga
        };
        addToCart(itemData);
    });
    detailProductActions.appendChild(addToCartBtn);

    const buyNowLink = document.createElement('a');
    buyNowLink.className = 'buy-now';
    buyNowLink.textContent = 'Beli Sekarang';
    buyNowLink.href = "#";
    buyNowLink.addEventListener('click', (e) => {
        e.preventDefault();
        let waMessage;
        const targetPhoneNumber = getPhoneNumberForProduct(product, serviceType);
        const formattedPrice = formatRupiah(currentPrice); // Ini akan otomatis menjadi RM jika Anda sudah mengikuti panduan saya sebelumnya
        let additionalInfo = '';

        if (serviceType === 'Logo') {
            const selectedImages = document.querySelectorAll('#stockImageSlider .image-slide-wrapper.selected');
            if (selectedImages.length === 0) {
                showToastNotification('Sila pilih sekurang-kurangnya satu reka bentuk logo.', 'fa-exclamation-circle');
                return;
            }
            let imagesText = '';
            selectedImages.forEach((imgWrapper, index) => {
                imagesText += `\n${index + 1}. ${imgWrapper.dataset.imageUrl}`;
            });
            additionalInfo = `🖼️  *Reka Bentuk Dipilih:*${imagesText}\n`;
        }
        
        waMessage = `aslm hi, saya ingin membuat pesanan berikut:

══════════
🛍️  *MAKLUMAT PESANAN*
══════════

🏷️  *Kategori:*
${serviceType}

📦  *Produk:*
${product.nama}
${additionalInfo}
💰  *Harga:*
${formattedPrice}

harap dapat respon secepat mungkin.`;

        window.open(`https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(waMessage)}`, "_blank");
    });
    detailProductActions.appendChild(buyNowLink);
}

function updateSliderPosition() {
    if (stockImageSlider) stockImageSlider.style.transform = `translateX(-${currentStockImageIndex * 100}%)`;
}
function showNextImage() {
    currentStockImageIndex = (currentStockImageIndex + 1) % totalStockImages;
    updateSliderPosition();
}
function showPrevImage() {
    currentStockImageIndex = (currentStockImageIndex - 1 + totalStockImages) % totalStockImages;
    updateSliderPosition();
}

function openLightbox(imageUrl, targetElement = null) {
    lightboxImage.src = imageUrl;
    imageLightbox.style.display = 'flex';
    currentLightboxTarget = targetElement; 

    if (targetElement) {
        lightboxActions.style.display = 'block';
    } else {
        lightboxActions.style.display = 'none';
    }
}

function closeLightbox() {
    imageLightbox.style.display = 'none';
    currentLightboxTarget = null; 
}

function addToCart(itemData) {
    const existingItem = cart.find(item => item.id === itemData.id);
    const nonStackable = ['Stock Akun', 'Logo'];
    if (nonStackable.includes(itemData.serviceType)) {
        if (existingItem) {
            showToastNotification(`Produk tipe ini hanya bisa dibeli 1 kali.`, 'fa-exclamation-circle');
            return;
        }
        cart.push({ ...itemData, quantity: 1 });
    } else {
        if (existingItem) {
            existingItem.quantity++;
            existingItem.price = itemData.price;
            existingItem.originalPrice = itemData.originalPrice;
        } else {
            cart.push({ ...itemData, quantity: 1 });
        }
    }
    localStorage.setItem('rikishop_cart_v2', JSON.stringify(cart));
    updateCartCount();
    showToastNotification(`<b>${itemData.name}</b> ditambahkan ke keranjang.`);
}

function renderCart() {
    cartItemsList.innerHTML = '';
    cartPagePromo = null;
    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'block';
        cartPromoContainer.style.display = 'none';
        document.querySelector('.cart-summary').style.display = 'none';
        checkoutButton.style.display = 'none';
    } else {
        cartEmptyMessage.style.display = 'none';
        cartPromoContainer.style.display = 'block';
        document.querySelector('.cart-summary').style.display = 'flex';
        checkoutButton.style.display = 'block';
        cart.forEach(item => {
            const cartItemCard = document.createElement('div');
            cartItemCard.className = 'cart-item-card';
            let itemActionsHTML = (['Stock Akun', 'Logo'].includes(item.serviceType)) 
                ? `<div class="item-actions"><span class="stock-info">Hanya 1 Stok</span><button type="button" class="remove-item-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i> Hapus</button></div>` 
                : `<div class="item-actions"><div class="quantity-controls"><button type="button" class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button><span class="item-quantity">${item.quantity}</span><button type="button" class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button></div><button type="button" class="remove-item-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i> Hapus</button></div>`;
            cartItemCard.innerHTML = `<div class="item-image"><i class="fas fa-box-open"></i></div><div class="item-details"><div class="item-name">${item.name}</div><div class="item-price">${formatRupiah(item.price)}</div></div>${itemActionsHTML}`;
            cartItemsList.appendChild(cartItemCard);
        });
    }
    updateCartTotal();
}

function updateCartTotal() {
    let originalSubtotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
    
    if (cartPagePromo) {
        let discountedTotal = 0;
        let nonDiscountedTotal = 0;
        const allowed = cartPagePromo.allowedCategories;

        if (allowed && allowed.length > 0) {
            cart.forEach(item => {
                const itemCategory = findCategoryOfProduct(item.id);
                if (allowed.includes(itemCategory)) {
                    discountedTotal += item.originalPrice * item.quantity;
                } else {
                    nonDiscountedTotal += item.price * item.quantity;
                }
            });
            const discountAmount = discountedTotal * (cartPagePromo.percentage / 100);
            const finalTotal = (discountedTotal - discountAmount) + nonDiscountedTotal;
             cartTotalSpan.innerHTML = `<span class="original-total">${formatRupiah(originalSubtotal)}</span><span class="final-total">${formatRupiah(finalTotal)}</span>`;
        } else {
            const discountAmount = originalSubtotal * (cartPagePromo.percentage / 100);
            const finalTotal = originalSubtotal - discountAmount;
            cartTotalSpan.innerHTML = `<span class="original-total">${formatRupiah(originalSubtotal)}</span><span class="final-total">${formatRupiah(finalTotal)}</span>`;
        }
    } else {
        let currentTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalSpan.innerHTML = formatRupiah(currentTotal);
    }
}

function increaseQuantity(productId) {
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity++;
        localStorage.setItem('rikishop_cart_v2', JSON.stringify(cart));
        renderCart();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity--;
        if (item.quantity <= 0) removeFromCart(productId);
        else {
            localStorage.setItem('rikishop_cart_v2', JSON.stringify(cart));
            renderCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('rikishop_cart_v2', JSON.stringify(cart));
    renderCart();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = count;
    cartCountSpan.style.display = count > 0 ? 'flex' : 'none';
}

function findCategoryOfProduct(productId) {
    for (const category in products) {
        if (products[category].some(p => p.id === productId)) {
            return category;
        }
    }
    return null;
}

function getAiResponse(input) {
    const lowerInput = input.toLowerCase();
    const responses = {
        // Sedia ada, tiada perubahan
        'assalamualaikum': "Wa'alaikumsalam warahmatullahi wabarakatuh. Ada apa yang boleh saya bantu?",
        'halo': "Hai! Ada apa-apa yang boleh saya bantu berkenaan perkhidmatan di RAYY SETTING 7 - RS7?",
        
        // Diperbaiki untuk bunyi lebih semula jadi
        'terima kasih': "Sama-sama! Jika Tuan ada soalan lain, jangan ragu-ragu untuk bertanya lagi ya.",
        
        // Kata kunci ditukar dari Bahasa Indonesia ke Bahasa Malaysia
        'siapa awak': `Nama saya <b>Rayy AI</b>, pembantu maya yang sedia membantu anda di sini.`,
        'siapa yang buat': `Saya dibangunkan oleh <b>${CREATOR_USERNAME}</b> untuk membantu para pelanggan.`,
        'ini kedai apa': `<b>RAYY SETTING 7 - RS7</b> ialah platform penyedia perkhidmatan digital yang paling komprehensif.`,
        
        // Respons diperbaiki sedikit
        'aman': `Sudah tentu! Keselamatan dan kepercayaan pelanggan adalah keutamaan utama kami.`,
        'feedback': `Pasti, Tuan boleh melihat maklum balas pelanggan kami di sini: <a href="${TESTIMONI_LINK}" target="_blank">${TESTIMONI_LINK}</a>`,
        
        // Sedia ada, tiada perubahan
        'produk': `Kami menyediakan pelbagai perkhidmatan seperti: <b>${Object.keys(products).join(', ')}</b>.`,
        
        // Respons diperbaiki
        'harga': `Untuk maklumat harga yang terkini, sila lihat pada kategori produk di laman utama kami.`,
        
        // Kata kunci & Respons ditukar/diperbaiki
        'macam mana nak hubungi': `Tuan boleh menghubungi admin melalui WhatsApp di <a href="https://wa.me/${WA_ADMIN_NUMBER}" target="_blank">${WA_ADMIN_NUMBER}</a>.`,
        'saluran': `Jom sertai Saluran WhatsApp kami di: <a href="${SALURAN_WA_LINK}" target="_blank">Sertai Saluran WA</a>.`
    };

    for (const key in responses) {
        if (lowerInput.includes(key)) return responses[key];
    }
    
    // Mesej fallback juga ditukar ke Bahasa Malaysia yang lebih baik
    return `Maaf, saya kurang faham. Boleh cuba tanya soalan lain? Contohnya tentang: Produk, Harga, atau cara Hubungi Admin.`;
}


async function handleSendChatMessagePage() {
    const userInput = chatAiInputPage.value.trim();
    if (userInput === '') return;
    appendMessageToChatPage(userInput, 'user-message');
    chatAiInputPage.value = '';
    chatAiLoadingPage.style.display = 'flex';
    setTimeout(() => {
        const response = getAiResponse(userInput);
        appendMessageToChatPage(response, 'ai-message');
        chatAiLoadingPage.style.display = 'none';
    }, 800 + Math.random() * 400);
}

function appendMessageToChatPage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    chatAiMessagesPage.appendChild(messageDiv);
    chatAiMessagesPage.scrollTop = chatAiMessagesPage.scrollHeight;
}

function playBackgroundMusic() {
    if (backgroundAudio.src && !backgroundAudio.muted && backgroundAudio.paused) {
        backgroundAudio.play().catch(e => console.log("Autoplay dicegah oleh browser."));
    }
}

function createYouTubePlayer(videoId) {
    const checkApiReady = setInterval(() => {
        if (isYouTubeApiReady) {
            clearInterval(checkApiReady);
            if (youtubePlayer) youtubePlayer.destroy();
            mediaPlayerContainer.innerHTML = '<div id="youtube-player-embed"></div>';
            youtubePlayer = new YT.Player('youtube-player-embed', {
                videoId: videoId,
                playerVars: { 'autoplay': 1, 'controls': 0, 'rel': 0, 'showinfo': 0, 'iv_load_policy': 3 },
                events: { 'onReady': (e) => e.target.playVideo(), 'onStateChange': (e) => { if (e.data === 1) { document.getElementById('musicPlayerPopup').classList.remove('active'); document.getElementById('musicPlayerOverlay').classList.remove('active'); } } }
            });
        }
    }, 100);
}

function openPromoPopup(context) {
    promoContext = context;
    promoInput.value = '';
    promoFeedback.textContent = '';
    promoFeedback.className = '';
    promoOverlay.classList.add('active');
    promoBottomSheet.classList.add('active');
}

function closePromoPopup() {
    promoOverlay.classList.remove('active');
    promoBottomSheet.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', initializeApp);
if (showProductPromoPopupBtn) showProductPromoPopupBtn.addEventListener('click', () => openPromoPopup('product'));
if (showCartPromoPopupBtn) showCartPromoPopupBtn.addEventListener('click', () => openPromoPopup('cart'));
if (closePromoSheetBtn) closePromoSheetBtn.addEventListener('click', closePromoPopup);
if (promoOverlay) promoOverlay.addEventListener('click', closePromoPopup);

// MODIFIKASI: Alur penerapan promo ditulis ulang sepenuhnya
if (promoApplyBtn) {
    promoApplyBtn.addEventListener('click', async () => {
        const code = promoInput.value.trim();
        if (!code) {
            promoFeedback.textContent = 'Masukkan kode.';
            promoFeedback.className = 'error';
            return;
        }

        let context = {};
        if (promoContext === 'product') {
            const category = findCategoryOfProduct(currentProductOnDetailPage.id);
            context = {
                type: 'product',
                category: category,
                productId: currentProductOnDetailPage.id // Kirim ID produk
            };
        } else if (promoContext === 'cart') {
            const categoriesInCart = [...new Set(cart.map(item => findCategoryOfProduct(item.id)))];
            context = {
                type: 'cart',
                categories: categoriesInCart
            };
        }

        try {
            // Langkah 1: Validasi kode
            const result = await validatePromoCode(code, context);
            
            closePromoPopup();

            // Langkah 2: Cek apakah butuh konfirmasi (untuk kode 1x pakai)
            if (result.maxUses === 1) {
                const isConfirmed = await showPromoConfirm(
                    'Konfirmasi Penggunaan Kode',
                    'Kode ini hanya untuk 1x penerapan dan tidak bisa digunakan lagi setelah ini. Lanjutkan?'
                );
                if (!isConfirmed) {
                    return; // Jika pengguna membatalkan, proses berhenti
                }
            }

            // Langkah 3: Jika valid (dan dikonfirmasi jika perlu), catat pemakaiannya di server
            await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'promoUse', data: { code: code } })
            });

            // Langkah 4: Terapkan promo di tampilan & beri notifikasi
            if (promoContext === 'product') {
                productPagePromo = result;
                updateProductPriceDisplay();
            } else if (promoContext === 'cart') {
                cartPagePromo = result;
                updateCartTotal();
            }

            // Langkah 5: Beri notifikasi sesuai sisa kuota
            const remaining = result.maxUses - (result.uses + 1);
            if (result.maxUses > 1) {
                if (remaining > 0) {
                    showToastNotification(`Promo berhasil! Kode tersisa ${remaining}x lagi.`);
                } else {
                    showToastNotification('Promo berhasil! Ini adalah penggunaan terakhir untuk kode ini.');
                }
            } else {
                showToastNotification(result.message);
            }

        } catch (error) {
            closePromoPopup();
            showCustomAlert('Gagal Menggunakan Kode', error.message);
            
            if (promoContext === 'product') {
                productPagePromo = null;
                updateProductPriceDisplay();
            } else if (promoContext === 'cart') {
                cartPagePromo = null;
                updateCartTotal();
            }
        }
    });
}

if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) return;
        
        let itemsText = '';
        cart.forEach((item, index) => {
            const category = findCategoryOfProduct(item.id) || 'Lain-lain';
            const formattedPrice = formatRupiah(item.price);
            itemsText += `*${index + 1}. ${item.name}*\n`;
            itemsText += `   - Kategori: ${category}\n`;
            itemsText += `   - Harga: ${formattedPrice} x ${item.quantity}\n\n`;
        });

        let subtotalFromOriginal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
        let promoText = '';
        let finalTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (cartPagePromo) {
            const discountAmount = subtotalFromOriginal * (cartPagePromo.percentage / 100);
            finalTotal = subtotalFromOriginal - discountAmount;
            promoText = `🎟️  *Diskaun (${cartPagePromo.code.toUpperCase()}):* -${formatRupiah(discountAmount)}\n`;
        }
        
        const message = `aslm hi, saya ingin membuat pesanan berikut:

══════════
🛒  *SENARAI PESANAN*
══════════

${itemsText}--------------------------------

💵  *Subtotal:* ${formatRupiah(subtotalFromOriginal)}
${promoText}💰  *Jumlah Keseluruhan:* *${formatRupiah(finalTotal)}*

harap dapat respon secepat mungkin.`;

        const checkoutNumber = siteSettings.globalPhoneNumber || WA_ADMIN_NUMBER;
        window.open(`https.wa.me/${checkoutNumber}?text=${encodeURIComponent(message)}`, '_blank');
    });
}
if (openCartBtn) openCartBtn.addEventListener('click', () => { showPage('cart-page'); renderCart(); });
backArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        history.back();
    });
});
if (sliderNextBtn) sliderNextBtn.addEventListener('click', showNextImage);
if (sliderPrevBtn) sliderPrevBtn.addEventListener('click', showPrevImage);
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (imageLightbox) imageLightbox.addEventListener('click', (e) => {
    if (e.target === imageLightbox) closeLightbox();
});
if (lightboxSelectBtn) {
    lightboxSelectBtn.addEventListener('click', () => {
        if (currentLightboxTarget) {
            currentLightboxTarget.classList.toggle('selected');
            closeLightbox();
        }
    });
}
if (alertCloseBtn) alertCloseBtn.addEventListener('click', closeCustomAlert);
if (customAlertModal) customAlertModal.addEventListener('click', (e) => {
    if (e.target === customAlertModal) {
        closeCustomAlert();
    }
});
if (promoConfirmModal) promoConfirmModal.addEventListener('click', (e) => {
    if(e.target === promoConfirmModal) {
        promoConfirmCancelBtn.click();
    }
});


if (openMenuBtn) openMenuBtn.addEventListener('click', () => { offcanvasMenu.classList.add('active'); overlay.classList.add('active'); });
if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => { offcanvasMenu.classList.remove('active'); overlay.classList.remove('active'); });
if (overlay) overlay.addEventListener('click', () => { offcanvasMenu.classList.remove('active'); overlay.classList.remove('active'); });
document.querySelectorAll('#offcanvasMenu a').forEach(link => { const pageTarget = link.dataset.page; if (pageTarget) { link.addEventListener('click', (e) => { e.preventDefault(); showPage(pageTarget); offcanvasMenu.classList.remove('active'); overlay.classList.remove('active'); }); } });
if (openAboutUsModalBtn) openAboutUsModalBtn.addEventListener('click', (e) => { e.preventDefault(); aboutUsModal.style.display = 'flex'; offcanvasMenu.classList.remove('active'); overlay.classList.remove('active'); });
if (closeAboutUsModalBtn) closeAboutUsModalBtn.addEventListener('click', () => aboutUsModal.style.display = 'none');
if (closeGenericScriptMenuModalBtn) closeGenericScriptMenuModalBtn.addEventListener('click', () => genericScriptMenuModal.style.display = 'none'); 
if (openChatAiModalBtn) openChatAiModalBtn.addEventListener('click', (e) => { e.preventDefault(); chatAiModal.style.display = 'flex'; offcanvasMenu.classList.remove('active'); overlay.classList.remove('active'); });
if (closeChatAiModalBtn) closeChatAiModalBtn.addEventListener('click', () => chatAiModal.style.display = 'none');
if (sendChatAiBtnPage) sendChatAiBtnPage.addEventListener('click', handleSendChatMessagePage);
if (chatAiInputPage) chatAiInputPage.addEventListener('keypress', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendChatMessagePage(); } });
if (multifunctionFab) multifunctionFab.addEventListener('click', (e) => { if (e.target.classList.contains('main-fab-icon')) { multifunctionFab.classList.toggle('active'); if (isFabFirstClick) { playBackgroundMusic(); isFabFirstClick = false; } } });
if (themeSwitchBtn) themeSwitchBtn.addEventListener('click', (e) => { e.stopPropagation(); document.body.classList.toggle('dark-mode'); const icon = themeSwitchBtn.querySelector('i'); icon.className = document.body.classList.contains('dark-mode') ? 'fas fa-moon' : 'fas fa-sun'; });
if (linktreeBtn) linktreeBtn.addEventListener('click', (e) => { e.stopPropagation(); window.open(SOSMED_LINK, '_blank'); });
if (muteAudioBtn) muteAudioBtn.addEventListener('click', (e) => { e.stopPropagation(); const icon = muteAudioBtn.querySelector('i'); if (youtubePlayer && typeof youtubePlayer.isMuted === 'function') { if (youtubePlayer.isMuted()) { youtubePlayer.unMute(); customMusicMuted = false; icon.className = 'fas fa-volume-up'; showToastNotification("Suara diaktifkan", "fa-volume-up"); } else { youtubePlayer.mute(); customMusicMuted = true; icon.className = 'fas fa-volume-mute'; showToastNotification("Suara dimatikan", "fa-volume-mute"); } } else { backgroundAudio.muted = !backgroundAudio.muted; icon.className = backgroundAudio.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up'; } });
if (openMusicPopupBtn) openMusicPopupBtn.addEventListener('click', (e) => { e.stopPropagation(); musicPlayerPopup.classList.add('active'); musicPlayerOverlay.classList.add('active'); });
if (closeMusicPlayer) closeMusicPlayer.addEventListener('click', () => { musicPlayerPopup.classList.remove('active'); musicPlayerOverlay.classList.remove('active'); });
if (musicPlayerOverlay) musicPlayerOverlay.addEventListener('click', () => { musicPlayerPopup.classList.remove('active'); musicPlayerOverlay.classList.remove('active'); });
if (loadMediaBtn) loadMediaBtn.addEventListener('click', () => { const mediaLink = mediaLinkInput.value.trim(); if (!mediaLink) return showToastNotification("Silakan masukkan link.", "fa-exclamation-circle"); backgroundAudio.pause(); backgroundAudio.src = ''; if (youtubePlayer && typeof youtubePlayer.destroy === 'function') youtubePlayer.destroy(); mediaPlayerContainer.innerHTML = ''; customMusicMuted = false; try { let videoId = null; if (mediaLink.includes('youtu.be') || mediaLink.includes('youtube.com')) { const url = new URL(mediaLink); videoId = url.hostname === 'youtu.be' ? url.pathname.substring(1) : url.searchParams.get('v'); } if (videoId) { createYouTubePlayer(videoId); showToastNotification("Memuat video...", "fa-play-circle"); muteAudioBtn.querySelector('i').className = 'fas fa-volume-up'; } else { showToastNotification("Link YouTube tidak valid.", "fa-times-circle"); } } catch (error) { showToastNotification("Format link tidak dikenal.", "fa-times-circle"); } });

async function initializeApp() {
    mainContainer.style.display = 'none';
    try {
        const ts = new Date().getTime();
        const [productsResponse, settingsResponse] = await Promise.all([
            fetch(`data/isi_json/products.json?v=${ts}`),
            fetch(`data/isi_json/settings.json?v=${ts}`)
        ]);
        if (!productsResponse.ok) throw new Error(`Gagal memuat produk`);
        products = await productsResponse.json();
        if (settingsResponse.ok) siteSettings = await settingsResponse.json();
        else console.warn("Gagal memuat settings.json, menggunakan fallback.");
        renderServiceGrid();
    } catch (error) {
        console.error("Gagal memuat data awal:", error);
        document.querySelector('.main-content').innerHTML = `<p style="text-align:center; color:red;">Gagal memuat data. Muat ulang halaman.</p>`;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
    updateCartCount();
    welcomeScreen.style.display = 'flex';
    let progress = 0;
    let progressBar = document.getElementById("progressBar");
    let progressText = document.getElementById("progress-text");
    let interval = setInterval(() => {
        progress += 5;
        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                welcomeScreen.classList.add("fade-out");
                welcomeScreen.addEventListener('transitionend', () => {
                    welcomeScreen.style.display = "none";
                    mainContainer.style.display = "flex";
                    history.replaceState({ page: 'home-page' }, '', '#home');
                    showPage('home-page');
                    setupBannerCarousel();
                }, { once: true });
            }, 400);
        }
    }, 80);
}
document.addEventListener('firebaseReady', () => {
    setupFirebaseVisitorCounter();
});
document.addEventListener('firebaseFailed', () => {
    if(visitorCountDisplay) visitorCountDisplay.querySelector('.count').textContent = 'R/Y';
});

window.addEventListener('popstate', function(event) {
    isHandlingPopState = true;
    
    closeAllPopups();

    if (productDetailViewDiv.style.display === 'block') {
        productDetailViewDiv.style.display = 'none';
        productListDiv.style.display = 'block';
        currentPage = 'service-detail-page'; 
    } 
    else if (currentPage !== 'home-page') {
        showPage('home-page');
    } 
    
    setTimeout(() => { isHandlingPopState = false; }, 100);
});
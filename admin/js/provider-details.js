// الحصول على معرف مقدم الخدمة من URL
const urlParams = new URLSearchParams(window.location.search);
const providerId = urlParams.get('id');

// بيانات تجريبية لمقدم الخدمة
const providerData = {
    id: providerId,
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "0501234567",
    idNumber: "1234567890",
    status: "active",
    rating: 4.8,
    totalServices: 25,
    totalClients: 18,
    registrationDate: "15/01/2024",
    documents: [
        {
            type: "هوية وطنية",
            url: "../images/documents/id.jpg",
            uploadDate: "10/01/2024"
        },
        {
            type: "شهادة البكالوريوس",
            url: "../images/documents/certificate1.jpg",
            uploadDate: "12/01/2024"
        },
        {
            type: "شهادة الخبرة",
            url: "../images/documents/certificate2.jpg",
            uploadDate: "13/01/2024"
        }
    ],
    services: [
        {
            id: 1,
            title: "تصميم داخلي",
            description: "تصميم داخلي احترافي للمنازل والمكاتب",
            price: "500 ريال",
            duration: "3 أيام",
            rating: 4.9,
            totalOrders: 15
        },
        {
            id: 2,
            title: "تنسيق حدائق",
            description: "تصميم وتنسيق الحدائق المنزلية",
            price: "800 ريال",
            duration: "5 أيام",
            rating: 4.7,
            totalOrders: 10
        }
    ],
    reviews: [
        {
            id: 1,
            reviewerName: "محمد علي",
            reviewerAvatar: "../images/users/user1.jpg",
            rating: 5,
            content: "خدمة ممتازة وتصميم رائع",
            date: "20/01/2024"
        },
        {
            id: 2,
            reviewerName: "سارة أحمد",
            reviewerAvatar: "../images/users/user2.jpg",
            rating: 4,
            content: "عمل احترافي واهتمام بالتفاصيل",
            date: "18/01/2024"
        }
    ],
    activity: [
        {
            id: 1,
            type: "service_added",
            description: "تم إضافة خدمة جديدة: تصميم داخلي",
            date: "15/01/2024"
        },
        {
            id: 2,
            type: "review_received",
            description: "تم استلام تقييم جديد من محمد علي",
            date: "20/01/2024"
        }
    ]
};

// تحديث معلومات مقدم الخدمة
function updateProviderInfo() {
    document.getElementById('providerName').textContent = providerData.name;
    document.getElementById('providerEmail').textContent = providerData.email;
    document.getElementById('providerPhone').textContent = providerData.phone;
    document.getElementById('providerId').textContent = providerData.idNumber;
    document.getElementById('providerRating').textContent = providerData.rating;
    document.getElementById('totalServices').textContent = providerData.totalServices;
    document.getElementById('totalClients').textContent = providerData.totalClients;
    document.getElementById('registrationDate').textContent = providerData.registrationDate;

    // تحديث حالة مقدم الخدمة
    const statusBadge = document.getElementById('providerStatus');
    statusBadge.textContent = providerData.status === 'active' ? 'نشط' : 'محظور';
    statusBadge.className = `status-badge ${providerData.status}`;

    // تحديث أزرار الحظر/فك الحظر
    const suspendBtn = document.getElementById('suspendProviderBtn');
    const unsuspendBtn = document.getElementById('unsuspendProviderBtn');
    if (providerData.status === 'active') {
        suspendBtn.style.display = 'block';
        unsuspendBtn.style.display = 'none';
    } else {
        suspendBtn.style.display = 'none';
        unsuspendBtn.style.display = 'block';
    }
}

// عرض الوثائق
function renderDocuments() {
    const documentsGrid = document.getElementById('documentsGrid');
    documentsGrid.innerHTML = '';

    providerData.documents.forEach(doc => {
        const docCard = document.createElement('div');
        docCard.className = 'document-card';
        docCard.innerHTML = `
            <img src="${doc.url}" alt="${doc.type}" onclick="showDocument('${doc.url}', '${doc.type}')">
            <h4>${doc.type}</h4>
            <p><i class="fas fa-calendar"></i> تاريخ الرفع: ${doc.uploadDate}</p>
        `;
        documentsGrid.appendChild(docCard);
    });
}

// عرض الخدمات
function renderServices() {
    const servicesList = document.getElementById('servicesList');
    servicesList.innerHTML = '';

    providerData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-header">
                <h3 class="service-title">${service.title}</h3>
                <span class="service-price">${service.price}</span>
            </div>
            <p class="service-description">${service.description}</p>
            <div class="service-meta">
                <span><i class="fas fa-clock"></i> ${service.duration}</span>
                <span><i class="fas fa-star"></i> ${service.rating}</span>
                <span><i class="fas fa-shopping-cart"></i> ${service.totalOrders} طلب</span>
            </div>
        `;
        servicesList.appendChild(serviceCard);
    });
}

// عرض التقييمات
function renderReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = '';

    providerData.reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="review-header">
                <div class="reviewer-info">
                    <img src="${review.reviewerAvatar}" alt="${review.reviewerName}" class="reviewer-avatar">
                    <span class="reviewer-name">${review.reviewerName}</span>
                </div>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">
                ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
                ${Array(5 - review.rating).fill('<i class="far fa-star"></i>').join('')}
            </div>
            <p class="review-content">${review.content}</p>
        `;
        reviewsList.appendChild(reviewCard);
    });
}

// عرض سجل النشاط
function renderActivity() {
    const activityTimeline = document.getElementById('activityTimeline');
    activityTimeline.innerHTML = '';

    providerData.activity.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-content">
                <p>${activity.description}</p>
                <span class="activity-date">${activity.date}</span>
            </div>
        `;
        activityTimeline.appendChild(activityItem);
    });
}

// عرض الوثيقة في نافذة منبثقة
function showDocument(url, title) {
    const modal = document.createElement('div');
    modal.className = 'document-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <img src="${url}" alt="${title}">
        </div>
    `;
    document.body.appendChild(modal);

    // إغلاق النافذة عند النقر خارج الصورة
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// تبديل التبويبات
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // إزالة الفئة النشطة من جميع التبويبات
            tabs.forEach(t => t.classList.remove('active'));
            // إضافة الفئة النشطة للتبويب المحدد
            tab.classList.add('active');

            // إخفاء جميع المحتويات
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // عرض المحتوى المحدد
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// حظر مقدم الخدمة
function handleProviderSuspend() {
    if (confirm('هل أنت متأكد من حظر هذا مقدم الخدمة؟')) {
        providerData.status = 'suspended';
        updateProviderInfo();
        // هنا يمكن إضافة كود لإرسال طلب إلى الخادم لتحديث حالة مقدم الخدمة
    }
}

// فك حظر مقدم الخدمة
function handleProviderUnsuspend() {
    if (confirm('هل أنت متأكد من فك حظر هذا مقدم الخدمة؟')) {
        providerData.status = 'active';
        updateProviderInfo();
        // هنا يمكن إضافة كود لإرسال طلب إلى الخادم لتحديث حالة مقدم الخدمة
    }
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateProviderInfo();
    renderDocuments();
    renderServices();
    renderReviews();
    renderActivity();
    initTabs();
}); 
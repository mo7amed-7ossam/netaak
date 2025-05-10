// تهيئة المتغيرات
let currentPage = 1;
const itemsPerPage = 10;
let activeProviders = [];
let pendingProviders = [];
let deletedProviders = [];

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحميل البيانات
    loadAllProviders();
    
    // إعداد مستمعي الأحداث
    setupEventListeners();
});

// تحميل جميع البيانات
function loadAllProviders() {
    // هنا سيتم إضافة كود لتحميل البيانات من API
    // مؤقتاً نستخدم بيانات تجريبية
    activeProviders = [
        {
            id: 1,
            name: 'أحمد محمد',
            email: 'ahmed@example.com',
            phone: '0501234567',
            idNumber: '1234567890',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '15/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '15/01/2024'
                },
                {
                    type: 'شهادة الخبرة',
                    url: '../images/documents/experience.jpg',
                    uploadDate: '15/01/2024'
                }
            ],
            mainSpecialization: 'تنظيف',
            subSpecialization: 'تنظيف المنازل',
            region: 'الرياض',
            rating: 4.8,
            status: 'active',
            registrationDate: '15/01/2024',
            requestsCount: 45,
            reportsCount: 2,
            requests: [
                {
                    id: 1,
                    date: '20/01/2024',
                    status: 'completed',
                    customerName: 'محمد علي',
                    service: 'تنظيف منزل'
                },
                {
                    id: 2,
                    date: '22/01/2024',
                    status: 'in-progress',
                    customerName: 'سارة أحمد',
                    service: 'تنظيف شقة'
                }
            ],
            reports: [
                {
                    id: 1,
                    date: '21/01/2024',
                    type: 'تأخير',
                    status: 'resolved',
                    description: 'تأخر في الوصول'
                },
                {
                    id: 2,
                    date: '23/01/2024',
                    type: 'جودة الخدمة',
                    status: 'pending',
                    description: 'عدم اكتمال التنظيف'
                }
            ]
        },
        {
            id: 2,
            name: 'سارة عبدالله',
            email: 'sara@example.com',
            phone: '0559876543',
            idNumber: '9876543210',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '10/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '10/01/2024'
                },
                {
                    type: 'شهادة الخبرة',
                    url: '../images/documents/experience.jpg',
                    uploadDate: '10/01/2024'
                }
            ],
            mainSpecialization: 'طبخ',
            subSpecialization: 'طبخ منزلي',
            region: 'جدة',
            rating: 4.9,
            status: 'active',
            registrationDate: '10/01/2024',
            requestsCount: 78,
            reportsCount: 1,
            requests: [
                {
                    id: 3,
                    date: '15/01/2024',
                    status: 'completed',
                    customerName: 'عبدالله محمد',
                    service: 'تحضير وجبة عشاء'
                },
                {
                    id: 4,
                    date: '18/01/2024',
                    status: 'completed',
                    customerName: 'نورة السعيد',
                    service: 'تحضير وجبة غداء'
                }
            ],
            reports: [
                {
                    id: 3,
                    date: '16/01/2024',
                    type: 'جودة الطعام',
                    status: 'resolved',
                    description: 'عدم اكتمال الوجبة'
                }
            ]
        },
        {
            id: 3,
            name: 'خالد العمري',
            email: 'khaled@example.com',
            phone: '0567891234',
            idNumber: '4567891230',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '20/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '20/01/2024'
                }
            ],
            mainSpecialization: 'صيانة',
            subSpecialization: 'صيانة التكييف',
            region: 'الدمام',
            rating: 4.7,
            status: 'active',
            registrationDate: '20/01/2024',
            requestsCount: 32,
            reportsCount: 0,
            requests: [
                {
                    id: 5,
                    date: '25/01/2024',
                    status: 'in-progress',
                    customerName: 'عمر السالم',
                    service: 'صيانة مكيف'
                },
                {
                    id: 6,
                    date: '26/01/2024',
                    status: 'scheduled',
                    customerName: 'فاطمة القحطاني',
                    service: 'صيانة مكيف'
                }
            ],
            reports: []
        }
    ];

    pendingProviders = [
        {
            id: 4,
            name: 'محمد علي',
            email: 'mohamed@example.com',
            phone: '0551234567',
            idNumber: '0987654321',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '20/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '20/01/2024'
                },
                {
                    type: 'شهادة الخبرة',
                    url: '../images/documents/experience.jpg',
                    uploadDate: '20/01/2024'
                },
                {
                    type: 'شهادة التدريب',
                    url: '../images/documents/training.jpg',
                    uploadDate: '20/01/2024'
                }
            ],
            mainSpecialization: 'صيانة',
            subSpecialization: 'صيانة التكييف',
            region: 'جدة',
            requestDate: '20/01/2024'
        },
        {
            id: 5,
            name: 'فاطمة السعيد',
            email: 'fatima@example.com',
            phone: '0543219876',
            idNumber: '1122334455',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '22/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '22/01/2024'
                }
            ],
            mainSpecialization: 'تنظيف',
            subSpecialization: 'تنظيف المكاتب',
            region: 'الرياض',
            requestDate: '22/01/2024'
        },
        {
            id: 6,
            name: 'عبدالرحمن الغامدي',
            email: 'abdulrahman@example.com',
            phone: '0534567890',
            idNumber: '6677889900',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '25/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '25/01/2024'
                },
                {
                    type: 'شهادة الخبرة',
                    url: '../images/documents/experience.jpg',
                    uploadDate: '25/01/2024'
                }
            ],
            mainSpecialization: 'كهرباء',
            subSpecialization: 'صيانة كهربائية',
            region: 'مكة المكرمة',
            requestDate: '25/01/2024'
        }
    ];

    deletedProviders = [
        {
            id: 7,
            name: 'سارة أحمد',
            email: 'sara@example.com',
            phone: '0561234567',
            idNumber: '1122334455',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '10/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '10/01/2024'
                }
            ],
            mainSpecialization: 'طبخ',
            subSpecialization: 'طبخ منزلي',
            region: 'الدمام',
            deleteDate: '10/01/2024',
            deleteReason: 'طلب الحذف من المستخدم'
        },
        {
            id: 8,
            name: 'عمر السالم',
            email: 'omar@example.com',
            phone: '0578901234',
            idNumber: '9988776655',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '05/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '05/01/2024'
                }
            ],
            mainSpecialization: 'سباكة',
            subSpecialization: 'صيانة السباكة',
            region: 'المدينة المنورة',
            deleteDate: '05/01/2024',
            deleteReason: 'حظر من الإدارة'
        },
        {
            id: 9,
            name: 'نورة القحطاني',
            email: 'noura@example.com',
            phone: '0587654321',
            idNumber: '5544332211',
            documents: [
                {
                    type: 'الهوية',
                    url: '../images/documents/id.jpg',
                    uploadDate: '01/01/2024'
                },
                {
                    type: 'الشهادة المهنية',
                    url: '../images/documents/certificate.jpg',
                    uploadDate: '01/01/2024'
                }
            ],
            mainSpecialization: 'حدائق',
            subSpecialization: 'تصميم الحدائق',
            region: 'الخبر',
            deleteDate: '01/01/2024',
            deleteReason: 'عدم تجديد الوثائق'
        }
    ];
    
    renderAllProviders();
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // التبويبات
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', handleTabChange);
    });

    // البحث
    const searchInput = document.querySelector('.header-search input');
    searchInput.addEventListener('input', handleSearch);
    
    // الفلاتر
    const filters = document.querySelectorAll('.filter-group select');
    filters.forEach(filter => {
        filter.addEventListener('change', handleFilter);
    });
    
    // الترقيم
    const paginationButtons = document.querySelectorAll('.pagination button');
    paginationButtons.forEach(button => {
        button.addEventListener('click', handlePagination);
    });
}

// معالجة تغيير التبويب
function handleTabChange(event) {
    const tab = event.target.closest('.tab');
    if (!tab) return;

    // إزالة الفئة النشطة من جميع التبويبات
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    // تفعيل التبويب المحدد
    tab.classList.add('active');
    const tabId = tab.dataset.tab;
    document.getElementById(tabId).classList.add('active');

    // إعادة تعيين الصفحة الحالية
    currentPage = 1;
    renderAllProviders();
}

// عرض جميع الجداول
function renderAllProviders() {
    renderActiveProviders();
    renderPendingProviders();
    renderDeletedProviders();
    updatePagination();
}

// عرض مقدمي الخدمات النشطين
function renderActiveProviders(filteredProviders = activeProviders) {
    const tbody = document.getElementById('activeProvidersTable');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredProviders.slice(startIndex, endIndex);
    
    tbody.innerHTML = paginatedData.map(provider => `
        <tr data-id="${provider.id}">
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="../images/provider-avatar.jpg" alt="Provider" style="width: 40px; height: 40px; border-radius: 50%;">
                    <div>
                        <div style="font-weight: 600;">${provider.name}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="id-number">${provider.idNumber}</span>
            </td>
            <td>${provider.phone}</td>
            <td>${provider.email}</td>
            <td>${provider.mainSpecialization}</td>
            <td>${provider.subSpecialization}</td>
            <td>${provider.region}</td>
            <td>
                <div class="documents-list">
                    ${provider.documents.map(doc => `
                        <span class="document-badge" onclick="showDocument('${doc.url}', '${doc.type}')">
                            <i class="fas fa-file-alt"></i>
                            ${doc.type}
                        </span>
                    `).join('')}
                </div>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 5px;">
                    <i class="fas fa-star" style="color: #ffc107;"></i>
                    <span>${provider.rating}</span>
                </div>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 5px;">
                    <i class="fas fa-tasks" style="color: #2196f3;"></i>
                    <span>${provider.requestsCount}</span>
                </div>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 5px;">
                    <i class="fas fa-flag" style="color: ${provider.reportsCount > 0 ? '#f44336' : '#4caf50'};"></i>
                    <span>${provider.reportsCount}</span>
                </div>
            </td>
            <td>
                <span class="provider-status status-${provider.status}">
                    ${getStatusText(provider.status)}
                </span>
            </td>
            <td>${provider.registrationDate}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon text-success" title="عرض التفاصيل" onclick="showProviderDetails(${provider.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon text-warning" title="تعديل" onclick="editProvider(${provider.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon text-danger" title="حظر" onclick="suspendProvider(${provider.id})">
                        <i class="fas fa-ban"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// عرض طلبات التأكيد
function renderPendingProviders() {
    const tbody = document.getElementById('pendingProvidersTable');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = pendingProviders.slice(startIndex, endIndex);
    
    tbody.innerHTML = paginatedData.map(provider => `
        <tr data-id="${provider.id}">
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="../images/provider-avatar.jpg" alt="Provider" style="width: 40px; height: 40px; border-radius: 50%;">
                    <div>
                        <div style="font-weight: 600;">${provider.name}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="id-number">${provider.idNumber}</span>
            </td>
            <td>${provider.phone}</td>
            <td>${provider.email}</td>
            <td>${provider.mainSpecialization}</td>
            <td>${provider.subSpecialization}</td>
            <td>${provider.region}</td>
            <td>
                <div class="documents-list">
                    ${provider.documents.map(doc => `
                        <span class="document-badge" onclick="showDocument('${doc.url}', '${doc.type}')">
                            <i class="fas fa-file-alt"></i>
                            ${doc.type}
                        </span>
                    `).join('')}
                </div>
            </td>
            <td>${provider.requestDate}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon text-success" title="عرض الوثائق" onclick="viewDocuments(${provider.id})">
                        <i class="fas fa-file-alt"></i>
                    </button>
                    <button class="btn-icon text-success" title="قبول" onclick="approveProvider(${provider.id})">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-icon text-danger" title="رفض" onclick="rejectProvider(${provider.id})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// عرض الحسابات المحذورة
function renderDeletedProviders() {
    const tbody = document.getElementById('deletedProvidersTable');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = deletedProviders.slice(startIndex, endIndex);
    
    tbody.innerHTML = paginatedData.map(provider => `
        <tr data-id="${provider.id}">
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="../images/provider-avatar.jpg" alt="Provider" style="width: 40px; height: 40px; border-radius: 50%;">
                    <div>
                        <div style="font-weight: 600;">${provider.name}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="id-number">${provider.idNumber}</span>
            </td>
            <td>${provider.phone}</td>
            <td>${provider.email}</td>
            <td>${provider.mainSpecialization}</td>
            <td>${provider.subSpecialization}</td>
            <td>${provider.region}</td>
            <td>${provider.deleteDate}</td>
            <td>${provider.deleteReason}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon text-success" title="استعادة" onclick="restoreProvider(${provider.id})">
                        <i class="fas fa-undo"></i>
                    </button>
                    <button class="btn-icon text-danger" title="حذف نهائي" onclick="deleteProviderPermanently(${provider.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// تحديث الترقيم
function updatePagination() {
    const activeTab = document.querySelector('.tab.active').dataset.tab;
    let totalItems;
    
    switch(activeTab) {
        case 'active-providers':
            totalItems = activeProviders.length;
            break;
        case 'pending-providers':
            totalItems = pendingProviders.length;
            break;
        case 'deleted-providers':
            totalItems = deletedProviders.length;
            break;
    }
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.querySelector('.pagination');
    
    let buttons = `
        <button ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
        buttons += `
            <button class="${i === currentPage ? 'active' : ''}">${i}</button>
        `;
    }
    
    buttons += `
        <button ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    pagination.innerHTML = buttons;
}

// معالجة الترقيم
function handlePagination(event) {
    const button = event.target.closest('button');
    if (!button) return;
    
    if (button.querySelector('i.fa-chevron-right')) {
        currentPage = Math.max(1, currentPage - 1);
    } else if (button.querySelector('i.fa-chevron-left')) {
        const activeTab = document.querySelector('.tab.active').dataset.tab;
        let totalItems;
        switch(activeTab) {
            case 'active-providers':
                totalItems = activeProviders.length;
                break;
            case 'pending-providers':
                totalItems = pendingProviders.length;
                break;
            case 'deleted-providers':
                totalItems = deletedProviders.length;
                break;
        }
        currentPage = Math.min(Math.ceil(totalItems / itemsPerPage), currentPage + 1);
    } else {
        currentPage = parseInt(button.textContent);
    }
    
    renderAllProviders();
}

// معالجة البحث
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const activeTab = document.querySelector('.tab.active').dataset.tab;
    
    switch(activeTab) {
        case 'active-providers':
            const filteredActive = activeProviders.filter(provider => {
                // البحث في البيانات الأساسية
                if (
                    provider.name.toLowerCase().includes(searchTerm) ||
                    provider.email.toLowerCase().includes(searchTerm) ||
                    provider.phone.includes(searchTerm) ||
                    provider.idNumber.includes(searchTerm) ||
                    provider.mainSpecialization.toLowerCase().includes(searchTerm) ||
                    provider.subSpecialization.toLowerCase().includes(searchTerm) ||
                    provider.region.toLowerCase().includes(searchTerm)
                ) {
                    return true;
                }

                // البحث في الطلبات
                if (provider.requests && provider.requests.some(request => 
                    request.customerName.toLowerCase().includes(searchTerm) ||
                    request.service.toLowerCase().includes(searchTerm) ||
                    request.status.toLowerCase().includes(searchTerm)
                )) {
                    return true;
                }

                // البحث في البلاغات
                if (provider.reports && provider.reports.some(report => 
                    report.type.toLowerCase().includes(searchTerm) ||
                    report.description.toLowerCase().includes(searchTerm) ||
                    report.status.toLowerCase().includes(searchTerm)
                )) {
                    return true;
                }

                return false;
            });
            renderActiveProviders(filteredActive);
            break;

        case 'pending-providers':
            const filteredPending = pendingProviders.filter(provider => 
                provider.name.toLowerCase().includes(searchTerm) ||
                provider.email.toLowerCase().includes(searchTerm) ||
                provider.phone.includes(searchTerm) ||
                provider.idNumber.includes(searchTerm) ||
                provider.mainSpecialization.toLowerCase().includes(searchTerm) ||
                provider.subSpecialization.toLowerCase().includes(searchTerm) ||
                provider.region.toLowerCase().includes(searchTerm)
            );
            renderPendingProviders(filteredPending);
            break;

        case 'deleted-providers':
            const filteredDeleted = deletedProviders.filter(provider => 
                provider.name.toLowerCase().includes(searchTerm) ||
                provider.email.toLowerCase().includes(searchTerm) ||
                provider.phone.includes(searchTerm) ||
                provider.idNumber.includes(searchTerm) ||
                provider.mainSpecialization.toLowerCase().includes(searchTerm) ||
                provider.subSpecialization.toLowerCase().includes(searchTerm) ||
                provider.region.toLowerCase().includes(searchTerm) ||
                (provider.deleteReason && provider.deleteReason.toLowerCase().includes(searchTerm))
            );
            renderDeletedProviders(filteredDeleted);
            break;
    }
}

// معالجة الفلاتر
function handleFilter() {
    const statusFilter = document.getElementById('statusFilter').value;
    const specializationFilter = document.getElementById('specializationFilter').value;
    const regionFilter = document.getElementById('regionFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;
    
    let filteredProviders = activeProviders;
    
    if (statusFilter !== 'all') {
        filteredProviders = filteredProviders.filter(p => p.status === statusFilter);
    }
    
    if (specializationFilter !== 'all') {
        filteredProviders = filteredProviders.filter(p => p.mainSpecialization === specializationFilter || p.subSpecialization === specializationFilter);
    }
    
    if (regionFilter !== 'all') {
        filteredProviders = filteredProviders.filter(p => p.region === regionFilter);
    }
    
    if (ratingFilter !== 'all') {
        filteredProviders = filteredProviders.filter(p => p.rating >= parseInt(ratingFilter));
    }
    
    renderActiveProviders(filteredProviders);
}

// تطبيق الفلاتر
function applyFilters() {
    handleFilter();
}

// إعادة تعيين الفلاتر
function resetFilters() {
    document.getElementById('statusFilter').value = 'all';
    document.getElementById('specializationFilter').value = 'all';
    document.getElementById('regionFilter').value = 'all';
    document.getElementById('ratingFilter').value = 'all';
    
    renderActiveProviders(activeProviders);
}

// الحصول على نص الحالة
function getStatusText(status) {
    const statusMap = {
        'active': 'نشط',
        'pending': 'في الانتظار',
        'suspended': 'معلق'
    };
    return statusMap[status] || status;
}

// دوال الإجراءات
function showProviderDetails(providerId) {
    // توجيه المستخدم إلى صفحة تفاصيل مقدم الخدمة
    window.location.href = `provider-details.html?id=${providerId}`;
}

function editProvider(providerId) {
    console.log('تعديل بيانات مقدم الخدمة:', providerId);
}

function suspendProvider(providerId) {
    if (confirm('هل أنت متأكد من حظر هذا مقدم الخدمة؟')) {
        console.log('حظر مقدم الخدمة:', providerId);
    }
}

function viewDocuments(providerId) {
    console.log('عرض وثائق مقدم الخدمة:', providerId);
}

function approveProvider(providerId) {
    if (confirm('هل أنت متأكد من قبول هذا مقدم الخدمة؟')) {
        console.log('قبول مقدم الخدمة:', providerId);
    }
}

function rejectProvider(providerId) {
    if (confirm('هل أنت متأكد من رفض هذا مقدم الخدمة؟')) {
        console.log('رفض مقدم الخدمة:', providerId);
    }
}

function restoreProvider(providerId) {
    if (confirm('هل أنت متأكد من استعادة هذا الحساب؟')) {
        console.log('استعادة حساب مقدم الخدمة:', providerId);
    }
}

function deleteProviderPermanently(providerId) {
    if (confirm('هل أنت متأكد من حذف هذا الحساب نهائياً؟')) {
        console.log('حذف حساب مقدم الخدمة نهائياً:', providerId);
    }
}

// عرض الوثيقة
function showDocument(url, type) {
    const preview = document.getElementById('documentPreview');
    const content = document.getElementById('documentPreviewContent');
    const title = document.querySelector('.document-preview-title');
    
    title.textContent = type;
    content.innerHTML = `
        <img src="${url}" alt="${type}">
        <div style="margin-top: 15px; text-align: center; color: #666;">
            <i class="fas fa-info-circle"></i>
            يمكنك النقر خارج الصورة لإغلاق العرض
        </div>
    `;
    
    preview.classList.add('show');
}

// إغلاق عرض الوثيقة
function closeDocumentPreview() {
    const preview = document.getElementById('documentPreview');
    preview.classList.remove('show');
}

// إغلاق عرض الوثيقة عند النقر خارجها
document.addEventListener('click', function(event) {
    const preview = document.getElementById('documentPreview');
    if (event.target === preview) {
        closeDocumentPreview();
    }
});

// إضافة CSS للنتائج المميزة
const style = document.createElement('style');
style.textContent = `
    .search-highlight {
        background-color: #fff3e0;
    }
    .search-highlight:hover {
        background-color: #ffe0b2;
    }
`;
document.head.appendChild(style); 
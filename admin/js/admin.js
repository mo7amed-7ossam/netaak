// دالة لعرض رسالة التحميل
function showLoadingMessage(message) {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-message';
    loadingDiv.innerHTML = `
        <div class="loading-spinner"></div>
        <span>${message}</span>
    `;
    document.body.appendChild(loadingDiv);
}

// دالة لإخفاء رسالة التحميل
function hideLoadingMessage() {
    const loadingDiv = document.querySelector('.loading-message');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// دالة لعرض رسالة نجاح
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(successDiv);
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// دالة لعرض رسالة خطأ
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(errorDiv);
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// دالة لتحميل آخر الطلبات
function loadRecentOrders() {
    const recentOrders = document.querySelector('.recent-orders');
    if (!recentOrders) return;

    showLoadingMessage('جاري تحميل الطلبات...');

    // محاكاة طلب API
    setTimeout(() => {
        const orders = [
            {
                id: '12345',
                customer: 'أحمد محمد',
                service: 'تنظيف منزل',
                amount: '180 ريال',
                status: 'مكتمل',
                date: '15 مارس 2024'
            },
            {
                id: '12344',
                customer: 'سارة أحمد',
                service: 'صيانة مكيف',
                amount: '250 ريال',
                status: 'قيد التنفيذ',
                date: '14 مارس 2024'
            },
            {
                id: '12343',
                customer: 'محمد علي',
                service: 'تنظيف سجاد',
                amount: '300 ريال',
                status: 'معلق',
                date: '13 مارس 2024'
            }
        ];

        recentOrders.innerHTML = orders.map(order => `
            <div class="order-item">
                <div class="order-info">
                    <div class="order-id">#${order.id}</div>
                    <div class="order-customer">${order.customer}</div>
                    <div class="order-service">${order.service}</div>
                </div>
                <div class="order-details">
                    <div class="order-amount">${order.amount}</div>
                    <div class="order-status ${order.status === 'مكتمل' ? 'status-completed' : order.status === 'قيد التنفيذ' ? 'status-pending' : 'status-pending'}">${order.status}</div>
                    <div class="order-date">${order.date}</div>
                </div>
            </div>
        `).join('');

        hideLoadingMessage();
    }, 1000);
}

// دالة لتحميل آخر المستخدمين
function loadRecentUsers() {
    const recentUsers = document.querySelector('.recent-users');
    if (!recentUsers) return;

    showLoadingMessage('جاري تحميل المستخدمين...');

    // محاكاة طلب API
    setTimeout(() => {
        const users = [
            {
                name: 'أحمد محمد',
                email: 'ahmed@example.com',
                type: 'مقدم خدمة',
                date: '15 مارس 2024'
            },
            {
                name: 'سارة أحمد',
                email: 'sara@example.com',
                type: 'مستهلك',
                date: '14 مارس 2024'
            },
            {
                name: 'محمد علي',
                email: 'mohammed@example.com',
                type: 'مقدم خدمة',
                date: '13 مارس 2024'
            }
        ];

        recentUsers.innerHTML = users.map(user => `
            <div class="user-item">
                <div class="user-avatar">${user.name.charAt(0)}</div>
                <div class="user-info">
                    <div class="user-name">${user.name}</div>
                    <div class="user-email">${user.email}</div>
                </div>
                <div class="user-details">
                    <div class="user-type">${user.type}</div>
                    <div class="user-date">${user.date}</div>
                </div>
            </div>
        `).join('');

        hideLoadingMessage();
    }, 1000);
}

// دالة لتحديث الإحصائيات
function updateStats() {
    const stats = {
        users: {
            total: 1234,
            change: 12
        },
        services: {
            total: 567,
            change: 8
        },
        orders: {
            total: 89,
            change: -3
        }
    };

    // تحديث الإحصائيات في الواجهة
    Object.entries(stats).forEach(([key, value]) => {
        const statNumber = document.querySelector(`.stat-card:nth-child(${key === 'users' ? 1 : key === 'services' ? 2 : key === 'orders' ? 3 : 4}) .stat-number`);
        const statChange = document.querySelector(`.stat-card:nth-child(${key === 'users' ? 1 : key === 'services' ? 2 : key === 'orders' ? 3 : 4}) .stat-change`);

        if (statNumber && statChange) {
            statNumber.textContent = value.total;
            statChange.className = `stat-change ${value.change >= 0 ? 'positive' : 'negative'}`;
            statChange.innerHTML = `
                <i class="fas fa-arrow-${value.change >= 0 ? 'up' : 'down'}"></i>
                ${Math.abs(value.change)}% هذا الشهر
            `;
        }
    });
}

// إضافة الأنماط للرسائل
const style = document.createElement('style');
style.textContent = `
    .loading-message,
    .success-message,
    .error-message {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    }

    .loading-message {
        background: var(--primary-color);
        color: white;
    }

    .success-message {
        background: var(--success-color);
        color: white;
    }

    .error-message {
        background: var(--danger-color);
        color: white;
    }

    .loading-spinner {
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    @keyframes slideIn {
        from { transform: translate(-50%, -100%); }
        to { transform: translate(-50%, 0); }
    }

    .order-item,
    .user-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        border-bottom: 1px solid var(--accent-dark);
    }

    .order-item:last-child,
    .user-item:last-child {
        border-bottom: none;
    }

    .order-info,
    .user-info {
        flex: 1;
        min-width: 0;
    }

    .order-id,
    .user-name {
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 4px;
    }

    .order-customer,
    .order-service,
    .user-email {
        color: var(--text-light);
        font-size: 0.9rem;
    }

    .order-details,
    .user-details {
        text-align: left;
    }

    .order-amount,
    .order-date,
    .user-type,
    .user-date {
        color: var(--text-light);
        font-size: 0.9rem;
        margin-bottom: 4px;
    }

    .order-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
    }

    .status-completed {
        background: rgba(40, 167, 69, 0.1);
        color: var(--success-color);
    }

    .status-pending {
        background: rgba(255, 193, 7, 0.1);
        color: var(--warning-color);
    }

    .user-avatar {
        width: 40px;
        height: 40px;
        background: var(--primary-light);
        color: var(--white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1.1rem;
    }
`;
document.head.appendChild(style);

// تحميل البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    loadRecentOrders();
    loadRecentUsers();
    updateStats();
});

// Time Period Selection
document.addEventListener('DOMContentLoaded', function() {
    const timePeriodButtons = document.querySelectorAll('.time-period-selector button');
    
    timePeriodButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            timePeriodButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected period
            const period = this.dataset.period;
            updateStatistics(period);
        });
    });
});

// Function to update statistics based on selected period
function updateStatistics(period) {
    // Here you would typically make an API call to get the statistics
    // For now, we'll simulate the data update
    const stats = {
        daily: {
            totalUsers: '2,500',
            serviceProviders: '850',
            regularUsers: '1,650',
            categories: 12,
            totalServices: '450'
        },
        monthly: {
            totalUsers: '5,200',
            serviceProviders: '1,800',
            regularUsers: '3,400',
            categories: 15,
            totalServices: '950'
        },
        yearly: {
            totalUsers: '15,800',
            serviceProviders: '4,200',
            regularUsers: '11,600',
            categories: 18,
            totalServices: '3,500'
        }
    };

    // Update the statistics display
    const selectedStats = stats[period];
    
    // Update each stat card
    document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = selectedStats.totalUsers;
    document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = selectedStats.serviceProviders;
    document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = selectedStats.regularUsers;
    document.querySelector('.stat-card:nth-child(4) .stat-number').textContent = selectedStats.categories;
    document.querySelector('.stat-card:nth-child(5) .stat-number').textContent = selectedStats.totalServices;
}

// Initialize with daily statistics
updateStatistics('daily');

// Geographic Analytics
function loadRegionsData() {
    const regionsData = [
        {
            governorate: 'القاهرة',
            regions: 15,
            users: 2500,
            providers: 850,
            requests: 1200,
            rating: 4.5
        },
        {
            governorate: 'الجيزة',
            regions: 12,
            users: 1800,
            providers: 650,
            requests: 950,
            rating: 4.3
        },
        {
            governorate: 'الإسكندرية',
            regions: 10,
            users: 1500,
            providers: 500,
            requests: 800,
            rating: 4.4
        }
    ];

    const tbody = document.querySelector('.regions-table tbody');
    if (!tbody) return;

    tbody.innerHTML = regionsData.map(region => `
        <tr>
            <td>${region.governorate}</td>
            <td>${region.regions}</td>
            <td>${region.users}</td>
            <td>${region.providers}</td>
            <td>${region.requests}</td>
            <td>
                <div class="rating">
                    ${region.rating}
                    <i class="fas fa-star"></i>
                </div>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewRegionDetails('${region.governorate}')">
                    <i class="fas fa-eye"></i>
                    عرض التفاصيل
                </button>
            </td>
        </tr>
    `).join('');
}

// Charts
function initializeCharts() {
    // Site Distribution Chart
    const siteCtx = document.getElementById('siteDistributionChart');
    if (siteCtx) {
        new Chart(siteCtx, {
            type: 'line',
            data: {
                labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                datasets: [{
                    label: 'إجمالي المستخدمين',
                    data: [1200, 1500, 1800, 2100, 2400, 2700, 3000, 3300, 3600, 3900, 4200, 4500],
                    borderColor: '#6f8051',
                    backgroundColor: 'rgba(111, 128, 81, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Cairo',
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'إحصائيات المستخدمين',
                        font: {
                            family: 'Cairo',
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                family: 'Cairo'
                            },
                            callback: function(value) {
                                return value.toLocaleString('ar-EG');
                            }
                        },
                        title: {
                            display: true,
                            text: 'عدد المستخدمين',
                            font: {
                                family: 'Cairo',
                                size: 14
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Cairo'
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    // Providers Growth Chart
    const providersCtx = document.getElementById('providersGrowthChart');
    if (providersCtx) {
        new Chart(providersCtx, {
            type: 'line',
            data: {
                labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                datasets: [{
                    label: 'عدد مقدمي الخدمات',
                    data: [400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950],
                    borderColor: '#919663',
                    backgroundColor: 'rgba(145, 150, 99, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Cairo',
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'إحصائيات مقدمي الخدمات',
                        font: {
                            family: 'Cairo',
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                family: 'Cairo'
                            },
                            callback: function(value) {
                                return value.toLocaleString('ar-EG');
                            }
                        },
                        title: {
                            display: true,
                            text: 'عدد مقدمي الخدمات',
                            font: {
                                family: 'Cairo',
                                size: 14
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Cairo'
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    // Regions Activity Chart
    const regionsCtx = document.getElementById('regionsActivityChart');
    if (regionsCtx) {
        new Chart(regionsCtx, {
            type: 'bar',
            data: {
                labels: ['القاهرة', 'الجيزة', 'الإسكندرية', 'المنوفية', 'الغربية', 'الشرقية', 'البحيرة', 'كفر الشيخ', 'دمياط', 'بورسعيد'],
                datasets: [{
                    label: 'عدد المستخدمين',
                    data: [2500, 1800, 1500, 1200, 1100, 1000, 900, 800, 700, 600],
                    backgroundColor: '#6f8051',
                    borderColor: '#6f8051',
                    borderWidth: 1
                }, {
                    label: 'عدد مقدمي الخدمات',
                    data: [850, 650, 500, 400, 350, 300, 250, 200, 150, 100],
                    backgroundColor: '#919663',
                    borderColor: '#919663',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Cairo',
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'إحصائيات المناطق',
                        font: {
                            family: 'Cairo',
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                family: 'Cairo'
                            },
                            callback: function(value) {
                                return value.toLocaleString('ar-EG');
                            }
                        },
                        title: {
                            display: true,
                            text: 'العدد',
                            font: {
                                family: 'Cairo',
                                size: 14
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Cairo'
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    // Categories Activity Chart
    const categoriesCtx = document.getElementById('categoriesActivityChart');
    if (categoriesCtx) {
        new Chart(categoriesCtx, {
            type: 'bar',
            data: {
                labels: ['تنظيف', 'صيانة', 'كهرباء', 'سباكة', 'دهان', 'نجارة'],
                datasets: [{
                    label: 'عدد الطلبات',
                    data: [450, 380, 320, 280, 250, 200],
                    backgroundColor: '#6f8051'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Cairo',
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'إحصائيات التصنيفات',
                        font: {
                            family: 'Cairo',
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                family: 'Cairo'
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Cairo'
                            }
                        }
                    }
                }
            }
        });
    }
}

// Region Details Modal
function viewRegionDetails(governorate) {
    // Here you would typically fetch the detailed data for the selected governorate
    console.log(`Viewing details for ${governorate}`);
    // Implement modal or expandable row functionality
}

// Initialize all dashboard features
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    loadRegionsData();
    initializeCharts();
});

// دالة لتحميل بيانات المستخدمين
function loadUsers() {
    const tbody = document.querySelector('.data-table tbody');
    if (!tbody) return;

    showLoadingMessage('جاري تحميل بيانات المستخدمين...');

    // محاكاة طلب API
    setTimeout(() => {
        const users = [
            {
                id: 1,
                name: 'أحمد محمد',
                email: 'ahmed@example.com',
                type: 'مستخدم عادي',
                region: 'القاهرة',
                joinDate: '15 مارس 2024',
                status: 'نشط'
            },
            {
                id: 2,
                name: 'سارة أحمد',
                email: 'sara@example.com',
                type: 'مقدم خدمة',
                region: 'الجيزة',
                joinDate: '14 مارس 2024',
                status: 'نشط'
            },
            {
                id: 3,
                name: 'محمد علي',
                email: 'mohammed@example.com',
                type: 'مستخدم عادي',
                region: 'الإسكندرية',
                joinDate: '13 مارس 2024',
                status: 'غير نشط'
            },
            {
                id: 4,
                name: 'فاطمة محمود',
                email: 'fatma@example.com',
                type: 'مقدم خدمة',
                region: 'القاهرة',
                joinDate: '12 مارس 2024',
                status: 'محظور'
            }
        ];

        tbody.innerHTML = users.map(user => `
            <tr>
                <td>
                    <div class="user-info">
                        <div class="user-avatar">${user.name.charAt(0)}</div>
                        <div class="user-name">${user.name}</div>
                    </div>
                </td>
                <td>${user.email}</td>
                <td>
                    <span class="user-type ${user.type === 'مقدم خدمة' ? 'provider' : 'regular'}">
                        ${user.type}
                    </span>
                </td>
                <td>${user.region}</td>
                <td>${user.joinDate}</td>
                <td>
                    <span class="status-badge ${user.status === 'نشط' ? 'status-active' : user.status === 'غير نشط' ? 'status-inactive' : 'status-blocked'}">
                        ${user.status}
                    </span>
                </td>
                <td>
                    <div class="actions">
                        <button class="btn btn-sm btn-primary" onclick="viewUserDetails(${user.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-warning" onclick="editUser(${user.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');

        hideLoadingMessage();
    }, 1000);
}

// دالة لعرض تفاصيل المستخدم
function viewUserDetails(userId) {
    console.log(`عرض تفاصيل المستخدم رقم ${userId}`);
    // سيتم تنفيذ عرض التفاصيل في نافذة منبثقة
}

// دالة لتعديل بيانات المستخدم
function editUser(userId) {
    console.log(`تعديل بيانات المستخدم رقم ${userId}`);
    // سيتم تنفيذ تعديل البيانات في نافذة منبثقة
}

// دالة لحذف المستخدم
function deleteUser(userId) {
    if (confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
        console.log(`حذف المستخدم رقم ${userId}`);
        // سيتم تنفيذ عملية الحذف
    }
}

// إضافة الأنماط للجدول
const tableStyles = `
    .user-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .user-avatar {
        width: 40px;
        height: 40px;
        background: var(--primary-light);
        color: var(--white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1.1rem;
    }

    .user-name {
        font-weight: 600;
        color: var(--text-dark);
    }

    .user-type {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
    }

    .user-type.provider {
        background: rgba(111, 128, 81, 0.1);
        color: var(--primary-color);
    }

    .user-type.regular {
        background: rgba(145, 150, 99, 0.1);
        color: var(--accent-color);
    }

    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
    }

    .status-active {
        background: rgba(40, 167, 69, 0.1);
        color: var(--success-color);
    }

    .status-inactive {
        background: rgba(255, 193, 7, 0.1);
        color: var(--warning-color);
    }

    .status-blocked {
        background: rgba(220, 53, 69, 0.1);
        color: var(--danger-color);
    }

    .actions {
        display: flex;
        gap: 8px;
    }

    .filters-section {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;
        flex-wrap: wrap;
    }

    .filter-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .filter-group label {
        font-weight: 600;
        color: var(--text-dark);
    }

    .form-select {
        padding: 8px 12px;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--white);
        color: var(--text-dark);
        font-family: 'Cairo', sans-serif;
        min-width: 200px;
    }

    .form-select:focus {
        outline: none;
        border-color: var(--primary-color);
    }
`;

// إضافة الأنماط للصفحة
const style = document.createElement('style');
style.textContent = tableStyles;
document.head.appendChild(style);

// تحميل البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.users-content')) {
        loadUsers();
    }
});

// Filter Functions
function applyFilters() {
    const statusFilter = document.getElementById('statusFilter').value;
    const governorateFilter = document.getElementById('governorateFilter').value;
    const centerFilter = document.getElementById('centerFilter').value;
    const regionFilter = document.getElementById('regionFilter').value;
    
    const rows = document.querySelectorAll('.data-table tbody tr');
    
    rows.forEach(row => {
        const status = row.querySelector('.status-badge').classList.contains('status-active') ? 'active' :
                      row.querySelector('.status-badge').classList.contains('status-blocked') ? 'blocked' : 'inactive';
        const region = row.querySelector('td:nth-child(4)').textContent.trim();
        
        const statusMatch = statusFilter === 'all' || status === statusFilter;
        const governorateMatch = governorateFilter === 'all' || region.includes(locationData[governorateFilter]?.name || '');
        const centerMatch = centerFilter === 'all' || region.includes(locationData[governorateFilter]?.centers[centerFilter]?.name || '');
        const regionMatch = regionFilter === 'all' || region === regionFilter;
        
        row.style.display = statusMatch && governorateMatch && centerMatch && regionMatch ? '' : 'none';
    });
}

// بيانات المناطق
const locationData = {
    cairo: {
        name: 'القاهرة',
        centers: {
            'cairo-center': {
                name: 'مركز القاهرة',
                regions: ['وسط البلد', 'المعادي', 'مدينة نصر', 'شبرا', 'مصر الجديدة']
            },
            'giza-center': {
                name: 'مركز الجيزة',
                regions: ['الدقي', 'المهندسين', 'الهرم', '6 أكتوبر']
            }
        }
    },
    giza: {
        name: 'الجيزة',
        centers: {
            'giza-center': {
                name: 'مركز الجيزة',
                regions: ['الجيزة', 'البدرشين', 'الصف', 'أوسيم']
            },
            '6october-center': {
                name: 'مركز 6 أكتوبر',
                regions: ['الشيخ زايد', 'المناطق الصناعية', 'الحي المتميز']
            }
        }
    },
    alexandria: {
        name: 'الإسكندرية',
        centers: {
            'alex-center': {
                name: 'مركز الإسكندرية',
                regions: ['سموحة', 'سيدي جابر', 'العجمي', 'المعمورة']
            },
            'borg-center': {
                name: 'مركز برج العرب',
                regions: ['برج العرب', 'العامرية', 'المنتزه']
            }
        }
    }
    // يمكن إضافة باقي المحافظات هنا
};

// تحديث قائمة المراكز بناءً على المحافظة المختارة
function updateCenters() {
    const governorateSelect = document.getElementById('governorateFilter');
    const centerSelect = document.getElementById('centerFilter');
    const regionSelect = document.getElementById('regionFilter');
    
    // إعادة تعيين قوائم المراكز والمناطق
    centerSelect.innerHTML = '<option value="all">الكل</option>';
    regionSelect.innerHTML = '<option value="all">الكل</option>';
    
    const selectedGovernorate = governorateSelect.value;
    if (selectedGovernorate === 'all' || !locationData[selectedGovernorate]) return;
    
    // إضافة المراكز الخاصة بالمحافظة المختارة
    Object.entries(locationData[selectedGovernorate].centers).forEach(([centerId, centerData]) => {
        const option = document.createElement('option');
        option.value = centerId;
        option.textContent = centerData.name;
        centerSelect.appendChild(option);
    });
}

// تحديث قائمة المناطق بناءً على المركز المختار
function updateRegions() {
    const governorateSelect = document.getElementById('governorateFilter');
    const centerSelect = document.getElementById('centerFilter');
    const regionSelect = document.getElementById('regionFilter');
    
    // إعادة تعيين قائمة المناطق
    regionSelect.innerHTML = '<option value="all">الكل</option>';
    
    const selectedGovernorate = governorateSelect.value;
    const selectedCenter = centerSelect.value;
    
    if (selectedGovernorate === 'all' || selectedCenter === 'all' || 
        !locationData[selectedGovernorate] || 
        !locationData[selectedGovernorate].centers[selectedCenter]) return;
    
    // إضافة المناطق الخاصة بالمركز المختار
    locationData[selectedGovernorate].centers[selectedCenter].regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });
} 
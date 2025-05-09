// Sample user activity data
const userActivities = [
    {
        type: 'request',
        icon: 'fa-tasks',
        title: 'طلب خدمة جديدة',
        description: 'تم إنشاء طلب خدمة تنظيف منزل',
        date: '2024-03-15 14:30',
        status: 'جديد'
    },
    {
        type: 'login',
        icon: 'fa-sign-in-alt',
        title: 'تسجيل الدخول',
        description: 'تم تسجيل الدخول من متصفح Chrome',
        date: '2024-03-15 14:25',
        location: 'القاهرة'
    },
    {
        type: 'profile',
        icon: 'fa-user-edit',
        title: 'تحديث الملف الشخصي',
        description: 'تم تحديث رقم الهاتف',
        date: '2024-03-14 10:15'
    },
    {
        type: 'request',
        icon: 'fa-tasks',
        title: 'إكمال طلب خدمة',
        description: 'تم إكمال طلب خدمة صيانة',
        date: '2024-03-13 16:45',
        status: 'مكتمل'
    },
    {
        type: 'payment',
        icon: 'fa-credit-card',
        title: 'دفع',
        description: 'تم دفع مبلغ 500 جنيه',
        date: '2024-03-13 16:40',
        amount: '500 جنيه'
    }
];

// Sample requests data
const userRequests = [
    {
        id: 'REQ001',
        type: 'تنظيف منزل',
        date: '2024-03-15',
        status: 'جديد',
        amount: '300 جنيه',
        provider: 'محمد أحمد'
    },
    {
        id: 'REQ002',
        type: 'صيانة كهربائية',
        date: '2024-03-13',
        status: 'قيد التنفيذ',
        amount: '500 جنيه',
        provider: 'علي محمود'
    },
    {
        id: 'REQ003',
        type: 'تنظيف سجاد',
        date: '2024-03-10',
        status: 'مكتمل',
        amount: '200 جنيه',
        provider: 'سارة محمد'
    }
];

// Sample payments data
const userPayments = [
    {
        id: 'PAY001',
        amount: '500 جنيه',
        date: '2024-03-13',
        method: 'بطاقة ائتمان',
        status: 'مكتمل',
        requestId: 'REQ002'
    },
    {
        id: 'PAY002',
        amount: '200 جنيه',
        date: '2024-03-10',
        method: 'محفظة إلكترونية',
        status: 'مكتمل',
        requestId: 'REQ003'
    }
];

// Sample badges data
const userBadges = [
    {
        icon: 'fa-star',
        title: 'مستخدم نشط',
        description: 'أكمل 10 طلبات بنجاح'
    },
    {
        icon: 'fa-thumbs-up',
        title: 'تقييم ممتاز',
        description: 'حصل على تقييم 5 نجوم في 5 طلبات'
    },
    {
        icon: 'fa-clock',
        title: 'مستخدم موثوق',
        description: 'مستخدم منذ أكثر من 6 أشهر'
    },
    {
        icon: 'fa-award',
        title: 'عميل مميز',
        description: 'أنفق أكثر من 1000 جنيه'
    }
];

// Sample reports data
const userReports = [
    {
        type: 'بلاغ على مقدم خدمة',
        content: 'تأخر مقدم الخدمة عن الموعد المحدد',
        date: '2024-03-10',
        status: 'resolved',
        resolution: 'تم معاقبة مقدم الخدمة'
    },
    {
        type: 'بلاغ على طلب',
        content: 'جودة الخدمة غير مرضية',
        date: '2024-03-05',
        status: 'pending',
        resolution: 'قيد المراجعة'
    },
    {
        type: 'بلاغ على نظام',
        content: 'مشكلة في عملية الدفع',
        date: '2024-02-28',
        status: 'rejected',
        resolution: 'تم التأكد من عدم وجود مشكلة'
    }
];

// Sample provider reports data
const providerReports = [
    {
        type: 'بلاغ على المستخدم',
        content: 'المستخدم لم يدفع المبلغ المتفق عليه',
        date: '2024-03-12',
        status: 'resolved',
        resolution: 'تم التواصل مع المستخدم وحل المشكلة'
    },
    {
        type: 'بلاغ على سلوك',
        content: 'المستخدم يتعامل بشكل غير لائق',
        date: '2024-03-08',
        status: 'pending',
        resolution: 'قيد المراجعة'
    },
    {
        type: 'بلاغ على تقييم',
        content: 'تقييم غير عادل للخدمة المقدمة',
        date: '2024-03-01',
        status: 'rejected',
        resolution: 'تم مراجعة التقييم وتبين أنه عادل'
    }
];

// Sample cancelled requests data
const cancelledRequests = [
    {
        id: 'REQ004',
        type: 'تنظيف منزل',
        date: '2024-03-14',
        provider: 'محمد أحمد',
        amount: '300 جنيه',
        cancelledBy: 'user',
        cancellationReason: 'تغيير الموعد المطلوب',
        cancellationDate: '2024-03-14 10:30'
    },
    {
        id: 'REQ005',
        type: 'صيانة كهربائية',
        date: '2024-03-12',
        provider: 'علي محمود',
        amount: '500 جنيه',
        cancelledBy: 'provider',
        cancellationReason: 'عدم توفر المعدات المطلوبة',
        cancellationDate: '2024-03-12 15:45'
    },
    {
        id: 'REQ006',
        type: 'تنظيف سجاد',
        date: '2024-03-10',
        provider: 'سارة محمد',
        amount: '200 جنيه',
        cancelledBy: 'system',
        cancellationReason: 'عدم تأكيد الطلب خلال 24 ساعة',
        cancellationDate: '2024-03-11 00:00'
    }
];

// Variables for modal actions
let currentAction = null;
let currentActionCallback = null;

// Function to get user ID from URL
function getUserIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to load user details
function loadUserDetails() {
    const userId = getUserIdFromUrl();
    // في التطبيق الحقيقي، سيتم جلب البيانات من الخادم
    // هنا نستخدم بيانات تجريبية
    const user = {
        name: "أحمد محمد",
        email: "ahmed@example.com",
        phone: "01012345678",
        registrationDate: "15/01/2024",
        totalRequests: 5,
        completedRequests: 3,
        activeRequests: 2
    };

    // تحديث معلومات المستخدم
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('userPhone').textContent = user.phone;
    document.getElementById('registrationDate').textContent = user.registrationDate;
    document.getElementById('totalRequests').textContent = user.totalRequests;
    document.getElementById('completedRequests').textContent = user.completedRequests;
    document.getElementById('activeRequests').textContent = user.activeRequests;
}

// Function to populate activity timeline
function populateActivityTimeline() {
    const timelineContainer = document.getElementById('activityTimeline');
    timelineContainer.innerHTML = '';

    userActivities.forEach(activity => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        let statusBadge = '';
        if (activity.status) {
            statusBadge = `<span class="status-badge ${activity.status === 'مكتمل' ? 'active' : 'new'}">${activity.status}</span>`;
        }

        let locationInfo = '';
        if (activity.location) {
            locationInfo = `<p><i class="fas fa-map-marker-alt"></i> ${activity.location}</p>`;
        }

        let amountInfo = '';
        if (activity.amount) {
            amountInfo = `<p><i class="fas fa-money-bill-wave"></i> ${activity.amount}</p>`;
        }

        timelineItem.innerHTML = `
            <div class="timeline-icon">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="timeline-content">
                <h4>${activity.title} ${statusBadge}</h4>
                <p>${activity.description}</p>
                ${locationInfo}
                ${amountInfo}
                <span class="timeline-date"><i class="fas fa-clock"></i> ${activity.date}</span>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}

// Function to populate requests list
function populateRequestsList() {
    const requestsContainer = document.getElementById('requestsList');
    requestsContainer.innerHTML = '';

    userRequests.forEach(request => {
        const requestItem = document.createElement('div');
        requestItem.className = 'timeline-item';
        requestItem.setAttribute('data-request-id', request.id);
        
        let statusBadge = '';
        switch(request.status) {
            case 'جديد':
                statusBadge = '<span class="status-badge new">جديد</span>';
                break;
            case 'مكتمل':
                statusBadge = '<span class="status-badge active">مكتمل</span>';
                break;
            case 'قيد التنفيذ':
                statusBadge = '<span class="status-badge pending">قيد التنفيذ</span>';
                break;
        }
        
        requestItem.innerHTML = `
            <div class="timeline-icon">
                <i class="fas fa-tasks"></i>
            </div>
            <div class="timeline-content">
                <div class="request-header">
                    <h4>
                        ${request.type}
                        ${statusBadge}
                    </h4>
                </div>
                <p><i class="fas fa-hashtag"></i> ${request.id}</p>
                <p><i class="fas fa-user-tie"></i> ${request.provider}</p>
                <p><i class="fas fa-money-bill-wave"></i> ${request.amount}</p>
                <span class="timeline-date"><i class="fas fa-calendar"></i> ${request.date}</span>
            </div>
        `;
        
        requestsContainer.appendChild(requestItem);
    });
}

// Function to handle request actions
function handleRequestAction(requestId, action) {
    // في التطبيق الحقيقي، سيتم إرسال طلب إلى الخادم
    console.log(`Request ${requestId}: ${action}`);
    
    // تحديث حالة الطلب في الواجهة
    const requestElement = document.querySelector(`[data-request-id="${requestId}"]`);
    if (requestElement) {
        switch(action) {
            case 'accept':
                requestElement.querySelector('.status-badge').className = 'status-badge pending';
                requestElement.querySelector('.status-badge').textContent = 'قيد التنفيذ';
                break;
            case 'reject':
                requestElement.querySelector('.status-badge').className = 'status-badge rejected';
                requestElement.querySelector('.status-badge').textContent = 'مرفوض';
                break;
            case 'complete':
                requestElement.querySelector('.status-badge').className = 'status-badge active';
                requestElement.querySelector('.status-badge').textContent = 'مكتمل';
                break;
            case 'cancel':
                requestElement.querySelector('.status-badge').className = 'status-badge cancelled';
                requestElement.querySelector('.status-badge').textContent = 'ملغي';
                break;
        }
    }
}

// Function to view request details
function viewRequestDetails(requestId) {
    // في التطبيق الحقيقي، سيتم فتح نافذة منبثقة أو الانتقال إلى صفحة التفاصيل
    console.log(`Viewing details for request ${requestId}`);
}

// Function to populate payments list
function populatePaymentsList() {
    const paymentsContainer = document.getElementById('paymentsList');
    paymentsContainer.innerHTML = '';

    userPayments.forEach(payment => {
        const paymentItem = document.createElement('div');
        paymentItem.className = 'timeline-item';
        
        paymentItem.innerHTML = `
            <div class="timeline-icon">
                <i class="fas fa-credit-card"></i>
            </div>
            <div class="timeline-content">
                <h4>
                    عملية دفع
                    <span class="status-badge active">${payment.status}</span>
                </h4>
                <p><i class="fas fa-hashtag"></i> ${payment.id}</p>
                <p><i class="fas fa-money-bill-wave"></i> ${payment.amount}</p>
                <p><i class="fas fa-credit-card"></i> ${payment.method}</p>
                <p><i class="fas fa-link"></i> طلب رقم: ${payment.requestId}</p>
                <span class="timeline-date"><i class="fas fa-calendar"></i> ${payment.date}</span>
            </div>
        `;
        
        paymentsContainer.appendChild(paymentItem);
    });
}

// Function to populate badges
function populateBadges() {
    const badgesContainer = document.getElementById('userBadges');
    badgesContainer.innerHTML = '';

    userBadges.forEach(badge => {
        const badgeCard = document.createElement('div');
        badgeCard.className = 'badge-card';
        
        badgeCard.innerHTML = `
            <div class="badge-icon">
                <i class="fas ${badge.icon}"></i>
            </div>
            <div class="badge-title">${badge.title}</div>
            <div class="badge-description">${badge.description}</div>
        `;
        
        badgesContainer.appendChild(badgeCard);
    });
}

// Function to populate reports
function populateReports() {
    const reportsContainer = document.getElementById('userReports');
    reportsContainer.innerHTML = '';

    userReports.forEach(report => {
        const reportItem = document.createElement('div');
        reportItem.className = 'report-item';
        
        let statusText = '';
        switch(report.status) {
            case 'pending':
                statusText = 'قيد المراجعة';
                break;
            case 'resolved':
                statusText = 'تم الحل';
                break;
            case 'rejected':
                statusText = 'مرفوض';
                break;
        }
        
        reportItem.innerHTML = `
            <div class="report-header">
                <div class="report-type">
                    <i class="fas fa-user"></i>
                    ${report.type}
                </div>
                <div class="report-date">${report.date}</div>
            </div>
            <div class="report-content">${report.content}</div>
            <div class="report-status ${report.status}">${statusText}</div>
            ${report.resolution ? `
                <div class="report-resolution">
                    <i class="fas fa-check-circle"></i>
                    ${report.resolution}
                </div>
            ` : ''}
        `;
        
        reportsContainer.appendChild(reportItem);
    });
}

// Function to populate provider reports
function populateProviderReports() {
    const reportsContainer = document.getElementById('providerReports');
    reportsContainer.innerHTML = '';

    providerReports.forEach(report => {
        const reportItem = document.createElement('div');
        reportItem.className = 'report-item';
        
        let statusText = '';
        switch(report.status) {
            case 'pending':
                statusText = 'قيد المراجعة';
                break;
            case 'resolved':
                statusText = 'تم الحل';
                break;
            case 'rejected':
                statusText = 'مرفوض';
                break;
        }
        
        reportItem.innerHTML = `
            <div class="report-header">
                <div class="report-type">
                    <i class="fas fa-user-tie"></i>
                    ${report.type}
                </div>
                <div class="report-date">${report.date}</div>
            </div>
            <div class="report-content">${report.content}</div>
            <div class="report-status ${report.status}">${statusText}</div>
            ${report.resolution ? `
                <div class="report-resolution">
                    <i class="fas fa-check-circle"></i>
                    ${report.resolution}
                </div>
            ` : ''}
        `;
        
        reportsContainer.appendChild(reportItem);
    });
}

// Function to populate cancelled requests
function populateCancelledRequests() {
    const requestsContainer = document.getElementById('cancelledRequestsList');
    requestsContainer.innerHTML = '';

    cancelledRequests.forEach(request => {
        const requestItem = document.createElement('div');
        requestItem.className = 'cancelled-request-item';
        
        let cancelledByText = '';
        let cancelledByIcon = '';
        switch(request.cancelledBy) {
            case 'user':
                cancelledByText = 'إلغاء من المستخدم';
                cancelledByIcon = 'fa-user';
                break;
            case 'provider':
                cancelledByText = 'إلغاء من مقدم الخدمة';
                cancelledByIcon = 'fa-user-tie';
                break;
            case 'system':
                cancelledByText = 'إلغاء تلقائي';
                cancelledByIcon = 'fa-robot';
                break;
        }
        
        requestItem.innerHTML = `
            <div class="cancelled-request-header">
                <div class="cancelled-request-type">
                    <i class="fas fa-ban"></i>
                    ${request.type}
                </div>
                <div class="cancelled-request-date">
                    <i class="fas fa-calendar"></i>
                    ${request.date}
                </div>
            </div>
            <div class="cancelled-request-details">
                <div class="detail-item">
                    <i class="fas fa-hashtag"></i>
                    <span>${request.id}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-user-tie"></i>
                    <span>${request.provider}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>${request.amount}</span>
                </div>
                <div class="detail-item">
                    <i class="fas ${cancelledByIcon}"></i>
                    <span>${cancelledByText}</span>
                </div>
            </div>
            <div class="cancellation-reason">
                <i class="fas fa-exclamation-circle"></i>
                ${request.cancellationReason}
            </div>
        `;
        
        requestsContainer.appendChild(requestItem);
    });
}

// Function to handle tab switching
function handleTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Function to handle reports tabs
function handleReportsTabs() {
    const reportTabs = document.querySelectorAll('.reports-tab');
    reportTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and sections
            document.querySelectorAll('.reports-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.report-section').forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding section
            tab.classList.add('active');
            const reportType = tab.getAttribute('data-report-type');
            if (reportType === 'user-reports') {
                document.getElementById('userReports').classList.add('active');
            } else {
                document.getElementById('providerReports').classList.add('active');
            }
        });
    });
}

// Function to handle search in activity timeline
function handleActivitySearch() {
    const searchInput = document.querySelector('.header-search input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredActivities = userActivities.filter(activity => 
            activity.title.toLowerCase().includes(searchTerm) ||
            activity.description.toLowerCase().includes(searchTerm)
        );
        
        const timelineContainer = document.getElementById('activityTimeline');
        timelineContainer.innerHTML = '';
        
        filteredActivities.forEach(activity => {
            // نفس كود عرض النشاط من الدالة السابقة
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            let statusBadge = '';
            if (activity.status) {
                statusBadge = `<span class="status-badge ${activity.status === 'مكتمل' ? 'active' : 'new'}">${activity.status}</span>`;
            }

            let locationInfo = '';
            if (activity.location) {
                locationInfo = `<p><i class="fas fa-map-marker-alt"></i> ${activity.location}</p>`;
            }

            let amountInfo = '';
            if (activity.amount) {
                amountInfo = `<p><i class="fas fa-money-bill-wave"></i> ${activity.amount}</p>`;
            }

            timelineItem.innerHTML = `
                <div class="timeline-icon">
                    <i class="fas ${activity.icon}"></i>
                </div>
                <div class="timeline-content">
                    <h4>${activity.title} ${statusBadge}</h4>
                    <p>${activity.description}</p>
                    ${locationInfo}
                    ${amountInfo}
                    <span class="timeline-date"><i class="fas fa-clock"></i> ${activity.date}</span>
                </div>
            `;
            
            timelineContainer.appendChild(timelineItem);
        });
    });
}

// Function to handle cancelled requests filters
function handleCancelledRequestsFilters() {
    const reasonFilter = document.getElementById('cancellationReason');
    const periodFilter = document.getElementById('cancellationPeriod');

    function applyFilters() {
        const selectedReason = reasonFilter.value;
        const selectedPeriod = periodFilter.value;
        
        // في التطبيق الحقيقي، سيتم تطبيق الفلتر على البيانات من الخادم
        // هنا نستخدم البيانات المحلية للعرض
        populateCancelledRequests();
    }

    reasonFilter.addEventListener('change', applyFilters);
    periodFilter.addEventListener('change', applyFilters);
}

// Function to show modal
function showModal(title, message, action, callback) {
    const modal = document.getElementById('confirmationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    currentAction = action;
    currentActionCallback = callback;
    
    modal.classList.add('show');
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('show');
    currentAction = null;
    currentActionCallback = null;
}

// Function to confirm action
function confirmAction() {
    if (currentActionCallback) {
        currentActionCallback();
    }
    closeModal();
}

// Function to handle user blocking
function handleUserBlock() {
    showModal(
        'حظر المستخدم',
        'هل أنت متأكد من حظر هذا المستخدم؟',
        'block',
        () => {
            // في التطبيق الحقيقي، سيتم إرسال طلب إلى الخادم
            const userStatus = document.getElementById('userStatus');
            const blockUserBtn = document.getElementById('blockUserBtn');
            const unblockUserBtn = document.getElementById('unblockUserBtn');

            // تحديث حالة المستخدم في الواجهة
            userStatus.textContent = 'محظور';
            userStatus.className = 'status-badge blocked';
            blockUserBtn.style.display = 'none';
            unblockUserBtn.style.display = 'inline-flex';

            // إظهار رسالة نجاح
            showNotification('تم حظر المستخدم بنجاح', 'success');
        }
    );
}

// Function to handle user unblocking
function handleUserUnblock() {
    showModal(
        'فك حظر المستخدم',
        'هل أنت متأكد من فك حظر هذا المستخدم؟',
        'unblock',
        () => {
            // في التطبيق الحقيقي، سيتم إرسال طلب إلى الخادم
            const userStatus = document.getElementById('userStatus');
            const blockUserBtn = document.getElementById('blockUserBtn');
            const unblockUserBtn = document.getElementById('unblockUserBtn');

            // تحديث حالة المستخدم في الواجهة
            userStatus.textContent = 'نشط';
            userStatus.className = 'status-badge active';
            blockUserBtn.style.display = 'inline-flex';
            unblockUserBtn.style.display = 'none';

            // إظهار رسالة نجاح
            showNotification('تم فك حظر المستخدم بنجاح', 'success');
        }
    );
}

// Function to show notification
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        ${message}
    `;

    // إضافة الإشعار إلى الصفحة
    document.body.appendChild(notification);

    // إظهار الإشعار
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // إخفاء الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadUserDetails();
    populateActivityTimeline();
    populateRequestsList();
    populateCancelledRequests();
    populatePaymentsList();
    populateBadges();
    populateReports();
    populateProviderReports();
    handleTabs();
    handleReportsTabs();
    handleCancelledRequestsFilters();
    handleActivitySearch();
}); 
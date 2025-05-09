// Sample user data
const users = [
    {
        name: "أحمد محمد",
        email: "ahmed@example.com",
        phone: "01012345678",
        userType: "عميل",
        region: "وسط البلد",
        registrationDate: "2024-01-15",
        status: "فعال",
        requestCount: 5
    },
    {
        name: "سارة أحمد",
        email: "sara@example.com",
        phone: "01123456789",
        userType: "عميل",
        region: "المعادي",
        registrationDate: "2024-02-01",
        status: "فعال",
        requestCount: 3
    },
    {
        name: "محمد علي",
        email: "mohamed@example.com",
        phone: "01234567890",
        userType: "عميل",
        region: "مدينة نصر",
        registrationDate: "2024-01-20",
        status: "محظور",
        requestCount: 0
    },
    {
        name: "فاطمة محمود",
        email: "fatima@example.com",
        phone: "01567890123",
        userType: "عميل",
        region: "الزمالك",
        registrationDate: "2024-02-10",
        status: "فعال",
        requestCount: 8
    }
];

// Sample data for deleted accounts
const deletedUsers = [
    {
        name: "أحمد محمد",
        email: "ahmed@example.com",
        phone: "0123456789",
        deletionDate: "2024-03-15",
        deletionReason: "عدم الرضا عن الخدمة"
    },
    {
        name: "سارة أحمد",
        email: "sara@example.com",
        phone: "0123456788",
        deletionDate: "2024-03-14",
        deletionReason: "تغيير رقم الهاتف"
    },
    {
        name: "محمد علي",
        email: "mohamed@example.com",
        phone: "0123456787",
        deletionDate: "2024-03-13",
        deletionReason: "عدم الحاجة للخدمة"
    }
];

// Pagination settings
const ITEMS_PER_PAGE = 5;
let currentActivePage = 1;
let currentDeletedPage = 1;

// Function to paginate data
function paginateData(data, page, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
}

// Function to update pagination buttons
function updatePaginationButtons(totalItems, currentPage, paginationClass) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const paginationContainer = document.querySelector(`.${paginationClass}`);
    const pageNumbers = paginationContainer.querySelector('.page-numbers');
    const prevButton = paginationContainer.querySelector('.btn-outline:first-child');
    const nextButton = paginationContainer.querySelector('.btn-outline:last-child');

    // Update previous button
    prevButton.disabled = currentPage === 1;

    // Update next button
    nextButton.disabled = currentPage === totalPages;

    // Update page numbers
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const button = document.createElement('button');
            button.textContent = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.onclick = () => {
                if (paginationClass === 'active-users-pagination') {
                    currentActivePage = i;
                    populateUsersTable();
                } else {
                    currentDeletedPage = i;
                    populateDeletedAccountsTable();
                }
            };
            pageNumbers.appendChild(button);
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            const span = document.createElement('span');
            span.textContent = '...';
            pageNumbers.appendChild(span);
        }
    }
}

// Function to toggle user status
function toggleUserStatus(userId, currentStatus) {
    const newStatus = currentStatus === 'فعال' ? 'محظور' : 'فعال';
    const user = users.find(u => u.name === userId);
    if (user) {
        user.status = newStatus;
        populateUsersTable();
    }
}

// Function to populate the table with user data
function populateUsersTable() {
    const tbody = document.querySelector('.data-table tbody');
    tbody.innerHTML = '';

    const paginatedUsers = paginateData(users, currentActivePage, ITEMS_PER_PAGE);
    updatePaginationButtons(users.length, currentActivePage, 'active-users-pagination');

    paginatedUsers.forEach(user => {
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => window.location.href = `user-details.html?id=${encodeURIComponent(user.name)}`;
        tr.innerHTML = `
            <td>
                <div class="user-info">
                    <img src="../images/user-avatar.jpg" alt="${user.name}" class="user-avatar">
                    <span>${user.name}</span>
                </div>
            </td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.userType}</td>
            <td>${user.region}</td>
            <td>${user.registrationDate}</td>
            <td>
                <span class="status-badge ${user.status === 'فعال' ? 'active' : 'blocked'}">
                    ${user.status}
                </span>
            </td>
            <td>
                <span class="request-count ${user.requestCount > 0 ? 'has-requests' : 'no-requests'}">
                    ${user.requestCount}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-icon ${user.status === 'فعال' ? 'text-danger' : 'text-success'}" 
                            title="${user.status === 'فعال' ? 'حظر المستخدم' : 'فك حظر المستخدم'}"
                            onclick="event.stopPropagation(); toggleUserStatus('${user.name}', '${user.status}')">
                        <i class="fas ${user.status === 'فعال' ? 'fa-ban' : 'fa-unlock'}"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Function to populate deleted accounts table
function populateDeletedAccountsTable() {
    const tbody = document.querySelector('.deleted-accounts-section .data-table tbody');
    tbody.innerHTML = '';

    const paginatedDeletedUsers = paginateData(deletedUsers, currentDeletedPage, ITEMS_PER_PAGE);
    updatePaginationButtons(deletedUsers.length, currentDeletedPage, 'deleted-users-pagination');

    paginatedDeletedUsers.forEach(user => {
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => window.location.href = `user-details.html?id=${encodeURIComponent(user.name)}&deleted=true`;
        tr.innerHTML = `
            <td>
                <div class="user-info">
                    <img src="../images/avatar.png" alt="${user.name}" class="user-avatar">
                    <span>${user.name}</span>
                </div>
            </td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.deletionDate}</td>
            <td>
                <div class="deletion-reason" title="${user.deletionReason}">
                    ${user.deletionReason}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.header-search input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.phone.includes(searchTerm)
        );
        displayFilteredUsers(filteredUsers);
    });
}

// Function to display filtered users
function displayFilteredUsers(filteredUsers) {
    const tbody = document.querySelector('.data-table tbody');
    tbody.innerHTML = '';

    filteredUsers.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="user-info">
                    <img src="../images/user-avatar.jpg" alt="${user.name}" class="user-avatar">
                    <span>${user.name}</span>
                </div>
            </td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.userType}</td>
            <td>${user.region}</td>
            <td>${user.registrationDate}</td>
            <td>
                <span class="status-badge ${user.status === 'فعال' ? 'active' : 'blocked'}">
                    ${user.status}
                </span>
            </td>
            <td>
                <span class="request-count ${user.requestCount > 0 ? 'has-requests' : 'no-requests'}">
                    ${user.requestCount}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-icon ${user.status === 'فعال' ? 'text-danger' : 'text-success'}" 
                            title="${user.status === 'فعال' ? 'حظر المستخدم' : 'فك حظر المستخدم'}"
                            onclick="toggleUserStatus('${user.name}', '${user.status}')">
                        <i class="fas ${user.status === 'فعال' ? 'fa-ban' : 'fa-unlock'}"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Initialize both tables when the page loads
document.addEventListener('DOMContentLoaded', function() {
    populateUsersTable();
    populateDeletedAccountsTable();
    handleSearch();

    // Add event listeners for pagination buttons
    document.querySelectorAll('.pagination .btn-outline').forEach(button => {
        button.addEventListener('click', function() {
            const isActiveUsers = this.closest('.active-users-pagination') !== null;
            const isNext = this.querySelector('.fa-chevron-left') !== null;
            
            if (isActiveUsers) {
                currentActivePage += isNext ? 1 : -1;
                populateUsersTable();
            } else {
                currentDeletedPage += isNext ? 1 : -1;
                populateDeletedAccountsTable();
            }
        });
    });
}); 
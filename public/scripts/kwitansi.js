// ============================================
// FLORAGATE KWITANSI (OFFICIAL RECEIPT) BUILDER
// ============================================

// Admin credentials (same as invoice for consistency)
const ADMIN_CREDENTIALS = [
  { email: 'admin@floragate.id', password: 'FloragateAdmin2026' },
  { email: 'floragate@gmail.com', password: 'Floragate123' }
];

// ============================================
// AUTH STATE
// ============================================
let isAuthenticated = false;
let currentUser = null;

// ============================================
// KWITANSI DATA STATE
// ============================================
let kwitansiData = {
  kwitansiNo: '',
  invoiceRef: '',
  receiptDate: '',
  receivedFrom: '',
  amount: 0,
  amountWords: '',
  paymentFor: '',
  paymentMethod: 'transfer', // 'transfer', 'qris', 'cash'
  location: 'Kab. Malang',
  useDigitalStamp: true
};

// ============================================
// HELPER: Convert Number to Indonesian Words (Terbilang)
// ============================================
function numberToWords(num) {
  if (num === 0) return 'Nol Rupiah';

  const units = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
  const teens = ['Sepuluh', 'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas', 'Enam Belas', 'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas'];
  const tens = ['', '', 'Dua Puluh', 'Tiga Puluh', 'Empat Puluh', 'Lima Puluh', 'Enam Puluh', 'Tujuh Puluh', 'Delapan Puluh', 'Sembilan Puluh'];

  function convertLessThanThousand(n) {
    if (n === 0) return '';
    if (n < 10) return units[n];
    if (n >= 10 && n < 20) return teens[n - 10];
    if (n < 100) {
      const ten = Math.floor(n / 10);
      const unit = n % 10;
      return tens[ten] + (unit > 0 ? ' ' + units[unit] : '');
    }
    
    const hundred = Math.floor(n / 100);
    const remainder = n % 100;
    let result = (hundred === 1 ? 'Seratus' : units[hundred] + ' Ratus');
    if (remainder > 0) {
      result += ' ' + convertLessThanThousand(remainder);
    }
    return result;
  }

  function convertNumber(n) {
    if (n === 0) return '';
    if (n < 1000) return convertLessThanThousand(n);

    if (n < 1000000) {
      const thousands = Math.floor(n / 1000);
      const remainder = n % 1000;
      let result = (thousands === 1 ? 'Seribu' : convertLessThanThousand(thousands) + ' Ribu');
      if (remainder > 0) {
        result += ' ' + convertLessThanThousand(remainder);
      }
      return result;
    }

    if (n < 1000000000) {
      const millions = Math.floor(n / 1000000);
      const remainder = n % 1000000;
      let result = convertLessThanThousand(millions) + ' Juta';
      if (remainder > 0) {
        result += ' ' + convertNumber(remainder);
      }
      return result;
    }

    if (n < 1000000000000) {
      const billions = Math.floor(n / 1000000000);
      const remainder = n % 1000000000;
      let result = convertLessThanThousand(billions) + ' Miliar';
      if (remainder > 0) {
        result += ' ' + convertNumber(remainder);
      }
      return result;
    }

    return 'Angka terlalu besar';
  }

  return convertNumber(Math.floor(num)) + ' Rupiah';
}

// ============================================
// HELPER: Format Date to Indonesian
// ============================================
function formatDateIndonesian(dateString) {
  if (!dateString) return '-';
  
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
}

// ============================================
// HELPER: Get Today's Date in YYYY-MM-DD
// ============================================
function getTodayString() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

// ============================================
// AUTH: Check if already logged in
// ============================================
function checkAuth() {
  const savedAuth = localStorage.getItem('floragate_kwitansi_auth');
  if (savedAuth) {
    try {
      const authData = JSON.parse(savedAuth);
      currentUser = authData.email;
      isAuthenticated = true;
      showWorkspace();
    } catch (e) {
      console.error('Invalid auth data:', e);
    }
  }
}

// ============================================
// AUTH: Login Form Handler
// ============================================
function setupLoginForm() {
  const form = document.getElementById('kwitansi-login-form');
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const rememberCheckbox = document.getElementById('login-remember');
  const errorEl = document.getElementById('login-error');
  const togglePasswordBtn = document.getElementById('toggle-password-btn');
  const eyeOpenIcon = document.getElementById('eye-open-icon');
  const eyeClosedIcon = document.getElementById('eye-closed-icon');

  // Toggle password visibility
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      eyeOpenIcon.classList.toggle('hidden');
      eyeClosedIcon.classList.toggle('hidden');
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const remember = rememberCheckbox.checked;

    // Validate credentials
    const validUser = ADMIN_CREDENTIALS.find(
      cred => cred.email.toLowerCase() === email && cred.password === password
    );

    if (validUser) {
      currentUser = validUser.email;
      isAuthenticated = true;

      if (remember) {
        localStorage.setItem('floragate_kwitansi_auth', JSON.stringify({ email: validUser.email }));
      }

      showWorkspace();
    } else {
      errorEl.textContent = 'Email atau kata sandi salah. Silakan coba lagi.';
      errorEl.classList.remove('hidden');
    }
  });
}

// ============================================
// UI: Show Workspace
// ============================================
function showWorkspace() {
  document.getElementById('kwitansi-login-gate').classList.add('hidden');
  document.getElementById('kwitansi-workspace').classList.remove('hidden');
  
  const userLabel = document.getElementById('active-user-label');
  if (userLabel) {
    userLabel.textContent = `Masuk sebagai: ${currentUser}`;
  }

  // Show preview panel on desktop
  const previewPanel = document.getElementById('preview-panel');
  if (previewPanel && window.innerWidth >= 1280) {
    previewPanel.classList.remove('hidden');
  }

  initializeKwitansi();
}

// ============================================
// UI: Logout
// ============================================
function setupLogout() {
  const logoutBtn = document.getElementById('btn-logout');
  logoutBtn.addEventListener('click', () => {
    if (confirm('Yakin ingin keluar? Data yang belum disimpan akan hilang.')) {
      localStorage.removeItem('floragate_kwitansi_auth');
      location.reload();
    }
  });
}

// ============================================
// KWITANSI: Initialize
// ============================================
function initializeKwitansi() {
  // Set default date to today
  const dateInput = document.getElementById('f-receipt-date');
  dateInput.value = getTodayString();
  kwitansiData.receiptDate = getTodayString();

  // Check if there's draft data from invoice
  loadDraftFromInvoice();

  // Setup all event listeners
  setupFormListeners();
  setupActionButtons();
  setupMobileTabSwitcher();
  
  // Initial update
  updatePreview();
}

// ============================================
// LOAD: Draft Data from Invoice
// ============================================
function loadDraftFromInvoice() {
  try {
    const draftJSON = localStorage.getItem('floragate_kwitansi_draft');
    if (!draftJSON) return;

    const draft = JSON.parse(draftJSON);
    
    // Only load if created recently (within last 5 minutes)
    const createdTime = new Date(draft.timestamp);
    const now = new Date();
    const diffMinutes = (now - createdTime) / 1000 / 60;
    
    if (diffMinutes > 5) {
      // Draft too old, clear it
      localStorage.removeItem('floragate_kwitansi_draft');
      return;
    }

    // Auto-fill form with draft data
    if (draft.invoiceRef) {
      document.getElementById('f-invoice-ref').value = draft.invoiceRef;
      kwitansiData.invoiceRef = draft.invoiceRef;
      
      // Auto-generate kwitansi number based on invoice
      const kwitansiNo = draft.invoiceRef.replace('INV-', 'KWT-');
      document.getElementById('f-kwitansi-no').value = kwitansiNo;
      kwitansiData.kwitansiNo = kwitansiNo;
    }

    if (draft.receivedFrom) {
      document.getElementById('f-received-from').value = draft.receivedFrom;
      kwitansiData.receivedFrom = draft.receivedFrom;
    }

    if (draft.amount) {
      document.getElementById('f-amount').value = draft.amount;
      kwitansiData.amount = draft.amount;
      
      // Auto-generate terbilang
      const words = numberToWords(draft.amount);
      kwitansiData.amountWords = words;
      document.getElementById('f-amount-words').value = words;
    }

    if (draft.paymentFor) {
      document.getElementById('f-payment-for').value = draft.paymentFor;
      kwitansiData.paymentFor = draft.paymentFor;
    }

    // Clear draft after loading
    localStorage.removeItem('floragate_kwitansi_draft');

    // Show notification
    setTimeout(() => {
      alert('✅ Data dari Invoice berhasil dimuat! Silakan periksa dan lengkapi data kwitansi.');
    }, 500);

  } catch (e) {
    console.error('Error loading draft:', e);
    localStorage.removeItem('floragate_kwitansi_draft');
  }
}

// ============================================
// FORM: Setup All Form Listeners
// ============================================
function setupFormListeners() {
  // Nomor Kwitansi
  document.getElementById('f-kwitansi-no').addEventListener('input', (e) => {
    kwitansiData.kwitansiNo = e.target.value;
    updatePreview();
  });

  // Invoice Reference
  document.getElementById('f-invoice-ref').addEventListener('input', (e) => {
    kwitansiData.invoiceRef = e.target.value;
    updatePreview();
  });

  // Receipt Date
  document.getElementById('f-receipt-date').addEventListener('change', (e) => {
    kwitansiData.receiptDate = e.target.value;
    updatePreview();
  });

  // Set Today button
  document.getElementById('btn-date-today').addEventListener('click', () => {
    const today = getTodayString();
    document.getElementById('f-receipt-date').value = today;
    kwitansiData.receiptDate = today;
    updatePreview();
  });

  // Received From
  document.getElementById('f-received-from').addEventListener('input', (e) => {
    kwitansiData.receivedFrom = e.target.value;
    updatePreview();
  });

  // Amount
  document.getElementById('f-amount').addEventListener('input', (e) => {
    const amount = parseFloat(e.target.value) || 0;
    kwitansiData.amount = amount;
    
    // Auto-generate terbilang
    const words = numberToWords(amount);
    kwitansiData.amountWords = words;
    document.getElementById('f-amount-words').value = words;
    
    updatePreview();
  });

  // Amount Words (manual edit)
  document.getElementById('f-amount-words').addEventListener('input', (e) => {
    kwitansiData.amountWords = e.target.value;
    updatePreview();
  });

  // Payment For
  document.getElementById('f-payment-for').addEventListener('input', (e) => {
    kwitansiData.paymentFor = e.target.value;
    updatePreview();
  });

  // Payment Method buttons
  document.querySelectorAll('[data-method-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const method = btn.getAttribute('data-method-btn');
      kwitansiData.paymentMethod = method;
      
      // Update UI
      document.querySelectorAll('[data-method-btn]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      updatePreview();
    });
  });

  // Location
  document.getElementById('f-location').addEventListener('input', (e) => {
    kwitansiData.location = e.target.value;
    updatePreview();
  });

  // Digital Stamp Toggle
  document.getElementById('f-use-digital-stamp').addEventListener('change', (e) => {
    kwitansiData.useDigitalStamp = e.target.checked;
    updatePreview();
  });
}

// ============================================
// PREVIEW: Update Live Preview
// ============================================
function updatePreview() {
  // Update Kwitansi Number
  document.getElementById('pv-kwitansi-no').textContent = kwitansiData.kwitansiNo || '-';
  
  // Update Invoice Reference
  document.getElementById('pv-invoice-ref').textContent = kwitansiData.invoiceRef || '-';
  
  // Update Received From
  document.getElementById('pv-received-from').textContent = kwitansiData.receivedFrom || '-';
  
  // Update Amount in Words
  document.getElementById('pv-amount-words').textContent = kwitansiData.amountWords || '-';
  
  // Update Payment For
  document.getElementById('pv-payment-for').textContent = kwitansiData.paymentFor || '-';
  
  // Update Amount
  const formattedAmount = new Intl.NumberFormat('id-ID').format(kwitansiData.amount);
  document.getElementById('pv-amount').textContent = `Rp ${formattedAmount}`;
  
  // Update Payment Method Checkboxes
  document.getElementById('pv-method-transfer').checked = kwitansiData.paymentMethod === 'transfer';
  document.getElementById('pv-method-qris').checked = kwitansiData.paymentMethod === 'qris';
  document.getElementById('pv-method-cash').checked = kwitansiData.paymentMethod === 'cash';
  
  // Update Location & Date
  const formattedDate = formatDateIndonesian(kwitansiData.receiptDate);
  document.getElementById('pv-date-formatted').textContent = formattedDate;
  
  // Update Digital Stamp
  const stampImg = document.getElementById('pv-stamp-img');
  const stampPlaceholder = document.getElementById('pv-stamp-placeholder');
  if (kwitansiData.useDigitalStamp) {
    stampImg.classList.remove('hidden');
    stampPlaceholder.classList.add('hidden');
  } else {
    stampImg.classList.add('hidden');
    stampPlaceholder.classList.remove('hidden');
  }
}

// ============================================
// ACTIONS: Setup Action Buttons
// ============================================
function setupActionButtons() {
  // New Kwitansi
  document.getElementById('btn-new-kwitansi').addEventListener('click', () => {
    if (confirm('Buat kwitansi baru? Data saat ini akan dihapus.')) {
      resetKwitansi();
    }
  });

  // Print
  document.getElementById('btn-print-kwitansi').addEventListener('click', () => {
    window.print();
  });

  // Download PDF
  document.getElementById('btn-download-pdf').addEventListener('click', async () => {
    // For now, use print dialog - can be enhanced with jsPDF later
    alert('Gunakan menu Print/Cetak, lalu pilih "Save as PDF" untuk menyimpan sebagai PDF.');
    window.print();
  });
}

// ============================================
// RESET: Clear All Data
// ============================================
function resetKwitansi() {
  kwitansiData = {
    kwitansiNo: '',
    invoiceRef: '',
    receiptDate: getTodayString(),
    receivedFrom: '',
    amount: 0,
    amountWords: '',
    paymentFor: '',
    paymentMethod: 'transfer',
    location: 'Kab. Malang',
    useDigitalStamp: true
  };

  // Reset form inputs
  document.getElementById('f-kwitansi-no').value = '';
  document.getElementById('f-invoice-ref').value = '';
  document.getElementById('f-receipt-date').value = getTodayString();
  document.getElementById('f-received-from').value = '';
  document.getElementById('f-amount').value = '';
  document.getElementById('f-amount-words').value = '';
  document.getElementById('f-payment-for').value = '';
  document.getElementById('f-location').value = 'Kab. Malang';
  document.getElementById('f-use-digital-stamp').checked = true;

  // Reset payment method buttons
  document.querySelectorAll('[data-method-btn]').forEach(b => b.classList.remove('active'));
  
  updatePreview();
}

// ============================================
// MOBILE: Tab Switcher
// ============================================
function setupMobileTabSwitcher() {
  const editTab = document.getElementById('mobile-tab-edit');
  const previewTab = document.getElementById('mobile-tab-preview');
  const editorPanel = document.getElementById('editor-panel');
  const previewPanel = document.getElementById('preview-panel');

  if (!editTab || !previewTab) return;

  editTab.addEventListener('click', () => {
    editTab.classList.add('bg-primary', 'text-white', 'shadow-xs');
    editTab.classList.remove('text-slate-600');
    previewTab.classList.remove('bg-primary', 'text-white', 'shadow-xs');
    previewTab.classList.add('text-slate-600');
    
    editorPanel.classList.remove('hidden');
    previewPanel.classList.add('hidden');
  });

  previewTab.addEventListener('click', () => {
    previewTab.classList.add('bg-primary', 'text-white', 'shadow-xs');
    previewTab.classList.remove('text-slate-600');
    editTab.classList.remove('bg-primary', 'text-white', 'shadow-xs');
    editTab.classList.add('text-slate-600');
    
    editorPanel.classList.add('hidden');
    previewPanel.classList.remove('hidden');
  });

  // Zoom controls
  const zoomIn = document.getElementById('mobile-zoom-in');
  const zoomOut = document.getElementById('mobile-zoom-out');
  const sheet = document.getElementById('kwitansi-sheet');
  let currentScale = 1;

  if (zoomIn) {
    zoomIn.addEventListener('click', () => {
      currentScale = Math.min(currentScale + 0.1, 1.5);
      sheet.style.transform = `scale(${currentScale})`;
    });
  }

  if (zoomOut) {
    zoomOut.addEventListener('click', () => {
      currentScale = Math.max(currentScale - 0.1, 0.5);
      sheet.style.transform = `scale(${currentScale})`;
    });
  }
}

// ============================================
// INIT: Run on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  setupLoginForm();
  setupLogout();
});

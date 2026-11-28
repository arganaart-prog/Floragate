// ============================================
// FLORAGATE KWITANSI (OFFICIAL RECEIPT) BUILDER
// ============================================

// Admin credentials (same SHA-256 hash & session key as invoice.astro)
const AUTH_SESSION_KEY = 'fg_invoice_auth_v1';
const EXPECTED_CRED_HASH = 'f6279a1caffbb9b2da7089512c9a12f806d0c63cb66f3eee046e21692b0dc08d';

function sha256Fallback(ascii) {
  const rightRotate = (value, amount) => (value >>> amount) | (value << (32 - amount));
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  let result = '';
  const words = [];
  const asciiBitLength = ascii.length * 8;
  const hash = [];
  const k = [];
  let primeCounter = 0;
  const isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (let i = 0; i < 313; i += candidate) isComposite[i] = true;
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  ascii += '\x80';
  while ((ascii.length % 64) - 56) ascii += '\x00';
  for (let i = 0; i < ascii.length; i++) {
    const j = ascii.charCodeAt(i);
    if (j >> 8) return '';
    words[i >> 2] |= j << (((3 - i) % 4) * 8);
  }
  words[words.length] = (asciiBitLength / maxWord) | 0;
  words[words.length] = asciiBitLength;
  for (let j = 0; j < words.length; ) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash.slice(0);
    for (let i = 0; i < 64; i++) {
      const w15 = w[i - 15];
      const w2 = w[i - 2];
      const a = hash[0];
      const e = hash[4];
      const temp1 =
        hash[7] +
        (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
        ((e & hash[5]) ^ (~e & hash[6])) +
        k[i] +
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] +
                (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                w[i - 7] +
                (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
              0);
      const temp2 =
        (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
        ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
      hash[7] = hash[6];
      hash[6] = hash[5];
      hash[5] = hash[4];
      hash[4] = (hash[3] + temp1) | 0;
      hash[3] = hash[2];
      hash[2] = hash[1];
      hash[1] = hash[0];
      hash[0] = (temp1 + temp2) | 0;
    }
    for (let i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? '0' : '') + b.toString(16);
    }
  }
  return result;
}

async function hashCredential(email, password) {
  const raw = `${email.trim().toLowerCase()}|${password}`;
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    try {
      const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
      return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    } catch {
      return sha256Fallback(raw);
    }
  }
  return sha256Fallback(raw);
}

// Google Sheets Configuration
const GSHEET_KEY = 'fg_kwitansi_gsheet_url_v1';
const DEFAULT_GSHEET_WEBHOOK = 'https://script.google.com/macros/s/AKfycbwPaMi4dmVdY_KvXv2-QQ07K8jFw_nlJ_HWFJseyKC7xzZRUl4gvYf1y4hGESUnQmdL/exec';
const EXCEL_LOG_KEY = 'fg_kwitansi_excel_log_v1';

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
  try {
    const savedEmail = localStorage.getItem(AUTH_SESSION_KEY) || sessionStorage.getItem(AUTH_SESSION_KEY);
    if (savedEmail) {
      currentUser = savedEmail;
      isAuthenticated = true;
      showWorkspace();
    }
  } catch (e) {
    console.error('Invalid auth data:', e);
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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const remember = rememberCheckbox.checked;
    const hashed = await hashCredential(email, password);

    if (hashed === EXPECTED_CRED_HASH) {
      currentUser = email;
      isAuthenticated = true;
      errorEl.classList.add('hidden');

      try {
        if (remember) {
          localStorage.setItem(AUTH_SESSION_KEY, email);
          sessionStorage.removeItem(AUTH_SESSION_KEY);
        } else {
          sessionStorage.setItem(AUTH_SESSION_KEY, email);
          localStorage.removeItem(AUTH_SESSION_KEY);
        }
      } catch {
        // Ignore storage errors
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
      localStorage.removeItem(AUTH_SESSION_KEY);
      sessionStorage.removeItem(AUTH_SESSION_KEY);
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
    // Record to Excel & Google Sheets before printing
    recordCurrentKwitansiToLog();
    setTimeout(() => {
      window.print();
    }, 300);
  });

  // Download PDF
  document.getElementById('btn-download-pdf').addEventListener('click', async () => {
    // Record to Excel & Google Sheets before downloading
    recordCurrentKwitansiToLog();
    
    // For now, use print dialog - can be enhanced with jsPDF later
    alert('Gunakan menu Print/Cetak, lalu pilih "Save as PDF" untuk menyimpan sebagai PDF.');
    setTimeout(() => {
      window.print();
    }, 300);
  });
}

// ============================================
// EXCEL & GOOGLE SHEETS: Record Kwitansi
// ============================================
function recordCurrentKwitansiToLog() {
  const entry = {
    kwitansiNo: kwitansiData.kwitansiNo || '-',
    invoiceRef: kwitansiData.invoiceRef || '-',
    receiptDate: kwitansiData.receiptDate || getTodayString(),
    receivedFrom: kwitansiData.receivedFrom || '-',
    amount: kwitansiData.amount,
    amountWords: kwitansiData.amountWords || '-',
    paymentFor: kwitansiData.paymentFor || '-',
    paymentMethod: kwitansiData.paymentMethod || 'transfer',
    location: kwitansiData.location || 'Kab. Malang',
    useDigitalStamp: kwitansiData.useDigitalStamp ? 'Ya' : 'Tidak',
    recordedAt: new Date().toISOString(),
    recordedBy: currentUser || 'admin'
  };

  // Save to localStorage
  try {
    const logs = loadExcelLog();
    const existingIdx = logs.findIndex(r => r.kwitansiNo === entry.kwitansiNo);
    if (existingIdx >= 0) {
      logs[existingIdx] = entry;
    } else {
      logs.push(entry);
    }
    localStorage.setItem(EXCEL_LOG_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }

  // Sync to Google Sheets
  syncToGoogleSheet(entry);
}

function loadExcelLog() {
  try {
    const raw = localStorage.getItem(EXCEL_LOG_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function syncToGoogleSheet(entry) {
  const url = localStorage.getItem(GSHEET_KEY) || DEFAULT_GSHEET_WEBHOOK;
  if (!url) return;

  try {
    // Add type identifier for the webhook to distinguish kwitansi from invoice
    const payload = {
      ...entry,
      type: 'kwitansi',
      timestamp: new Date().toISOString()
    };

    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });

    console.log('✓ Sinkron ke Google Sheets berhasil:', entry.kwitansiNo);
    
    // Show success notification
    showNotification('✓ Kwitansi tersimpan ke Google Sheets', 'success');
  } catch (e) {
    console.error('✗ Gagal sinkron ke Google Sheets:', e);
    showNotification('✗ Gagal sinkron. Periksa koneksi internet.', 'error');
  }
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 rounded-xl px-4 py-3 text-sm font-bold shadow-lg transition-all ${
    type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
    type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
    'bg-blue-50 text-blue-800 border border-blue-200'
  }`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
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

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Element References ---
    const balanceEl = document.getElementById('balance');
    const depositBtn = document.getElementById('deposit-btn');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const modal = document.getElementById('transaction-modal');
    const modalTitle = document.getElementById('modal-title');
    const transactionForm = document.getElementById('transaction-form');
    const amountInput = document.getElementById('amount');
    const cancelBtn = document.getElementById('cancel-btn');
    const confirmBtn = document.getElementById('confirm-btn');

    // --- State ---
    let currentBalance = 10250.75;
    let currentTransactionType = null; // 'deposit' or 'withdraw'

    // --- Functions ---

    /**
     * Formats a number as a currency string (e.g., $1,234.56).
     * @param {number} amount - The number to format.
     * @returns {string} The formatted currency string.
     */
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    /**
     * Updates the balance display on the UI.
     */
    const updateBalanceDisplay = () => {
        if (balanceEl) {
            balanceEl.textContent = formatCurrency(currentBalance);
        }
    };

    /**
     * Opens the transaction modal and sets its type.
     * @param {'deposit' | 'withdraw'} type - The type of transaction.
     */
    const openModal = (type) => {
        currentTransactionType = type;
        modalTitle.textContent = `Enter ${type.charAt(0).toUpperCase() + type.slice(1)} Amount`;
        
        // Dynamically change confirm button style based on transaction type
        confirmBtn.className = `w-full py-3 px-4 font-bold rounded-lg transition duration-300 ${
            type === 'deposit' ? 'bg-green-500 text-gray-900 hover:bg-green-400' : 'bg-red-500 text-white hover:bg-red-600'
        }`;
        
        modal.classList.remove('hidden');
        amountInput.focus(); // Automatically focus the input field
    };

    /**
     * Closes the transaction modal and resets the form.
     */
    const closeModal = () => {
        modal.classList.add('hidden');
        transactionForm.reset();
        currentTransactionType = null;
    };

    /**
     * Handles the transaction form submission.
     * @param {Event} e - The form submission event.
     */
    const handleTransaction = (e) => {
        e.preventDefault();
        const amount = parseFloat(amountInput.value);

        if (isNaN(amount) || amount <= 0) {
            // You could add a more sophisticated error message here
            console.error("Invalid amount entered.");
            amountInput.classList.add('border-red-500', 'ring-red-500'); // Add error style
            return;
        }
        
        // Remove error style on valid input
        amountInput.classList.remove('border-red-500', 'ring-red-500');

        if (currentTransactionType === 'deposit') {
            currentBalance += amount;
        } else if (currentTransactionType === 'withdraw') {
            if (amount > currentBalance) {
                // In a real app, show a user-facing error message
                console.error("Insufficient funds.");
                alert("Insufficient funds for this withdrawal."); // Simple alert for now
                closeModal();
                return;
            }
            currentBalance -= amount;
        }

        updateBalanceDisplay();
        closeModal();
    };

    // --- Event Listeners ---
    if (depositBtn) {
        depositBtn.addEventListener('click', () => openModal('deposit'));
    }
    if (withdrawBtn) {
        withdrawBtn.addEventListener('click', () => openModal('withdraw'));
    }
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }
    
    // Also close modal if user clicks on the backdrop
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    if (transactionForm) {
        transactionForm.addEventListener('submit', handleTransaction);
    }
    updateBalanceDisplay();
});

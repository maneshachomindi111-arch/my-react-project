import { useState } from 'react';
import AppIcon from './components/AppIcon';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [filter, setFilter] = useState('All');

  const handleAddExpense = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);
    if (!description.trim() || isNaN(numericAmount) || numericAmount <= 0) {
      alert('Please enter a valid description and a positive amount.');
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: description.trim(),
      amount: numericAmount,
      category: category,
    };

    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
    setCategory('Food');
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const visibleExpenses =
    filter === 'All'
      ? expenses
      : expenses.filter((item) => item.category === filter);

  const total = visibleExpenses.reduce((sum, item) => sum + item.amount, 0);

  const formatLKR = (val) => {
    return `Rs. ${Number(val).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const categoryEmojis = {
    Food: '🍽️',
    Travel: '✈️',
    Supplies: '📦',
    Other: '💼',
  };

  return (
    <div className="min-h-screen py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 flex flex-col items-center">
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-600 text-xs font-semibold tracking-wide shadow-xs backdrop-blur-md">
            <svg
              className="w-4 h-4 text-blue-600 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <path d="M12 6h4" />
              <path d="M12 10h4" />
              <path d="M18 2l3 3-8.5 8.5-3.5.5.5-3.5L18 2z" />
            </svg>
            <span className="uppercase tracking-wider">Calculate your budget</span>
          </div>

          {/* Title with Inline App Icon */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-3">
            <AppIcon size={44} className="shrink-0" />
            <span>Team Expense Tracker</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Keep team spending organized, transparent, and in real time.
          </p>
        </header>

        <main className="glass-card p-7 sm:p-8 rounded-3xl">
          {/* Add Expense Form */}
          <form onSubmit={handleAddExpense} className="space-y-4">
            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Description
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                  📝
                </span>
                <input
                  id="description"
                  type="text"
                  placeholder="e.g., Team Dinner, Office Supplies..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="glass-input w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none text-sm placeholder-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Amount */}
              <div>
                <label htmlFor="amount" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Amount (Rs.)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-bold text-xs">
                    Rs.
                  </span>
                  <input
                    id="amount"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="glass-input w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none text-sm placeholder-slate-400 font-medium"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="glass-input w-full px-4 py-3 rounded-xl focus:outline-none text-sm bg-white/90 text-slate-700 cursor-pointer font-medium"
                >
                  <option value="Food">🍽️ Food</option>
                  <option value="Travel">✈️ Travel</option>
                  <option value="Supplies">📦 Supplies</option>
                  <option value="Other">💼 Other</option>
                </select>
              </div>
            </div>

            {/* Blue Glass Button */}
            <button
              type="submit"
              className="glass-btn-blue w-full py-3.5 px-6 rounded-2xl font-bold text-base cursor-pointer flex items-center justify-center gap-2 mt-3 shadow-md"
            >
              <span className="text-xl font-black leading-none">+</span>
              <span>Add Expense</span>
            </button>
          </form>

          {/* Expense List Section */}
          <div className="mt-8 pt-6 border-t border-slate-200/60">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">Expenses List</h2>
                <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200/60 px-2 py-0.5 rounded-full font-bold">
                  {visibleExpenses.length}
                </span>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 rounded-xl px-2.5 py-1.5 shadow-2xs">
                <span className="text-xs text-slate-400 font-medium">Filter:</span>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="text-xs bg-transparent focus:outline-none cursor-pointer font-semibold text-slate-700"
                >
                  <option value="All">All</option>
                  <option value="Food">🍽️ Food</option>
                  <option value="Travel">✈️ Travel</option>
                  <option value="Supplies">📦 Supplies</option>
                  <option value="Other">💼 Other</option>
                </select>
              </div>
            </div>

            <ul className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {visibleExpenses.length === 0 ? (
                <li className="text-center py-8 text-slate-400 text-sm bg-slate-50/60 rounded-2xl border border-dashed border-slate-200">
                  <p className="font-medium">No expenses yet</p>
                  <p className="text-xs text-slate-400 mt-0.5">Use the form above to log an expense</p>
                </li>
              ) : (
                visibleExpenses.map((expense) => (
                  <li
                    key={expense.id}
                    className="flex justify-between items-center p-3.5 bg-white/80 hover:bg-white border border-slate-200/80 rounded-2xl shadow-2xs transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-base shrink-0 shadow-2xs">
                        {categoryEmojis[expense.category] || '💸'}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{expense.description}</p>
                        <span className="text-[11px] font-medium text-slate-400">
                          {expense.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-900 text-base">
                        {formatLKR(expense.amount)}
                      </span>
                      <button
                        onClick={() => handleDeleteExpense(expense.id)}
                        className="w-7 h-7 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center text-sm font-bold transition-all duration-200 cursor-pointer"
                        title="Delete expense"
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>

            {/* Total Display */}
            <div className="mt-6 p-4 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center shadow-lg shadow-blue-500/20">
              <div className="flex items-center gap-2">
                <span className="text-xl">💳</span>
                <span className="font-medium text-blue-100 text-sm">Total Spending</span>
              </div>
              <span className="text-2xl font-black tracking-tight">
                {formatLKR(total)}
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

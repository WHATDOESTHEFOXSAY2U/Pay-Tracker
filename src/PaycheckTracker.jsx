import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Award,
  Smartphone,
  Camera,
  Bike,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react';

const milestoneIcons = { award: Award, smartphone: Smartphone, camera: Camera, bike: Bike };

const initialData = {
  months: [
    {
      id: 'feb-2025',
      name: 'February',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Feb 6', isoDate: '2025-02-06', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Feb 20', isoDate: '2025-02-20', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Feb 14', isoDate: '2025-02-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Feb 28', isoDate: '2025-02-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'mar-2025',
      name: 'March',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Mar 6', isoDate: '2025-03-06', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Mar 20', isoDate: '2025-03-20', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Mar 14', isoDate: '2025-03-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Mar 28', isoDate: '2025-03-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'apr-2025',
      name: 'April',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Apr 3', isoDate: '2025-04-03', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Apr 17', isoDate: '2025-04-17', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Apr 14', isoDate: '2025-04-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Apr 28', isoDate: '2025-04-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'may-2025',
      name: 'May',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'May 1', isoDate: '2025-05-01', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'May 15', isoDate: '2025-05-15', amount: 2200, received: false },
        { id: 'scotia-3', type: 'scotia', name: 'Scotia Bank', displayDate: 'May 29', isoDate: '2025-05-29', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'May 14', isoDate: '2025-05-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'May 28', isoDate: '2025-05-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'jun-2025',
      name: 'June',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Jun 12', isoDate: '2025-06-12', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Jun 26', isoDate: '2025-06-26', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Jun 14', isoDate: '2025-06-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Jun 28', isoDate: '2025-06-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'jul-2025',
      name: 'July',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Jul 10', isoDate: '2025-07-10', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Jul 24', isoDate: '2025-07-24', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Jul 14', isoDate: '2025-07-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Jul 28', isoDate: '2025-07-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'aug-2025',
      name: 'August',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Aug 7', isoDate: '2025-08-07', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Aug 21', isoDate: '2025-08-21', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Aug 14', isoDate: '2025-08-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Aug 28', isoDate: '2025-08-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'sep-2025',
      name: 'September',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Sep 4', isoDate: '2025-09-04', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Sep 18', isoDate: '2025-09-18', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Sep 14', isoDate: '2025-09-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Sep 28', isoDate: '2025-09-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'oct-2025',
      name: 'October',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Oct 2', isoDate: '2025-10-02', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Oct 16', isoDate: '2025-10-16', amount: 2200, received: false },
        { id: 'scotia-3', type: 'scotia', name: 'Scotia Bank', displayDate: 'Oct 30', isoDate: '2025-10-30', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Oct 14', isoDate: '2025-10-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Oct 28', isoDate: '2025-10-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'nov-2025',
      name: 'November',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Nov 13', isoDate: '2025-11-13', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Nov 27', isoDate: '2025-11-27', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Nov 14', isoDate: '2025-11-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Nov 28', isoDate: '2025-11-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'dec-2025',
      name: 'December',
      year: 2025,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Dec 11', isoDate: '2025-12-11', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Dec 25', isoDate: '2025-12-25', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Dec 14', isoDate: '2025-12-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Dec 28', isoDate: '2025-12-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'jan-2026',
      name: 'January',
      year: 2026,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Jan 8', isoDate: '2026-01-08', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Jan 22', isoDate: '2026-01-22', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Jan 14', isoDate: '2026-01-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Jan 28', isoDate: '2026-01-28', amount: 4200, received: false }
      ]
    },
    {
      id: 'feb-2026',
      name: 'February',
      year: 2026,
      paychecks: [
        { id: 'scotia-1', type: 'scotia', name: 'Scotia Bank', displayDate: 'Feb 5', isoDate: '2026-02-05', amount: 2200, received: false },
        { id: 'scotia-2', type: 'scotia', name: 'Scotia Bank', displayDate: 'Feb 19', isoDate: '2026-02-19', amount: 2200, received: false },
        { id: 'rakuten-1', type: 'rakuten', name: 'Rakuten', displayDate: 'Feb 14', isoDate: '2026-02-14', amount: 4200, received: false },
        { id: 'rakuten-2', type: 'rakuten', name: 'Rakuten', displayDate: 'Feb 28', isoDate: '2026-02-28', amount: 4200, received: false }
      ]
    }
  ],
  milestones: [
    { id: 'milestone-1', amount: 25000, name: 'iMac', icon: 'award', reached: false },
    { id: 'milestone-2', amount: 50000, name: 'Foldable Smartphone', icon: 'smartphone', reached: false },
    { id: 'milestone-3', amount: 75000, name: 'DJI Device', icon: 'camera', reached: false },
    { id: 'milestone-4', amount: 100000, name: 'Motorbike', icon: 'bike', reached: false }
  ]
};

const monthIndex = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};

function getMonthStatus(m) {
  if (m.paychecks.every((p) => p.received)) return 'complete';
  const now = new Date();
  const mIndex = monthIndex[m.name];
  if (m.year > now.getFullYear() || (m.year === now.getFullYear() && mIndex > now.getMonth())) return 'future';
  if (m.year === now.getFullYear() && mIndex === now.getMonth()) return 'current';
  return 'past';
}

function getMonthCardClasses(status) {
  switch (status) {
    case 'complete':
      return 'border-l-4 border-green-400 bg-green-50 dark:bg-green-900 hover:shadow-md hover:shadow-green-200 dark:hover:shadow-none';
    case 'current':
      return 'border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-900 hover:shadow-md hover:shadow-blue-200 dark:hover:shadow-none';
    case 'future':
      return 'border-l-4 border-purple-400 bg-purple-50 dark:bg-purple-900 hover:shadow-md hover:shadow-purple-200 dark:hover:shadow-none';
    default:
      return 'border-l-4 border-gray-400 bg-gray-50 dark:bg-gray-800 hover:shadow-md hover:shadow-gray-200 dark:hover:shadow-none';
  }
}

export default function PaycheckTracker() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('paycheckData');
      return saved ? JSON.parse(saved) : initialData;
    } catch {
      return initialData;
    }
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const [reachedMilestone, setReachedMilestone] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [collapsedYears, setCollapsedYears] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem('paycheckData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const togglePaycheck = (monthId, paycheckId) => {
    const updated = { ...data };
    const month = updated.months.find((m) => m.id === monthId);
    if (!month) return;
    const pay = month.paychecks.find((p) => p.id === paycheckId);
    if (!pay) return;
    pay.received = !pay.received;
    setData(updated);
    checkMilestones(calculateTotal(updated), updated);
  };

  const calculateTotal = (d = data) =>
    d.months.reduce(
      (sum, m) =>
        sum + m.paychecks.reduce((acc, p) => (p.received ? acc + p.amount : acc), 0),
      0
    );

  const calculateMonthTotal = (m) =>
    m.paychecks.reduce((sum, p) => (p.received ? sum + p.amount : sum), 0);

  const calculateMonthMax = (m) =>
    m.paychecks.reduce((sum, p) => sum + p.amount, 0);

  const calculateExpectedTotal = (d = data) =>
    d.months.reduce(
      (sum, m) => sum + m.paychecks.reduce((acc, p) => acc + p.amount, 0),
      0
    );

  const calculateProgress = () => {
    const total = calculateTotal();
    const expected = calculateExpectedTotal();
    return expected ? Math.round((total / expected) * 100) : 0;
  };

  const countReceivedPaychecks = () =>
    data.months.reduce(
      (count, m) => count + m.paychecks.filter((p) => p.received).length,
      0
    );

  const countTotalPaychecks = () =>
    data.months.reduce((count, m) => count + m.paychecks.length, 0);

  const getNextPaycheck = () => {
    const now = new Date();
    const future = [];
    data.months.forEach((m) => {
      m.paychecks.forEach((p) => {
        if (!p.received) {
          const dateObj = new Date(p.isoDate);
          if (dateObj >= now) future.push({ ...p, dateObj });
        }
      });
    });
    if (!future.length) return null;
    future.sort((a, b) => a.dateObj - b.dateObj);
    const next = future[0];
    const daysLeft = Math.ceil((next.dateObj - now) / 86400000);
    return { ...next, daysLeft };
  };

  const checkMilestones = (total, d) => {
    const updated = { ...d };
    let newly = null;
    updated.milestones.forEach((m) => {
      if (!m.reached && total >= m.amount) {
        m.reached = true;
        newly = m;
      }
    });
    if (newly) {
      setData(updated);
      setReachedMilestone(newly);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    }
  };

  const resetData = () => {
    if (!window.confirm('Reset all data?')) return;
    setData(initialData);
    localStorage.removeItem('paycheckData');
  };

  const groupByType = (m) => {
    const out = {};
    m.paychecks.forEach((p) => {
      if (!out[p.type]) out[p.type] = [];
      out[p.type].push(p);
    });
    return out;
  };

  const MilestoneIcon = ({ icon, size = 20, locked }) => {
    const IconComp = milestoneIcons[icon];
    return IconComp ? (
      <IconComp
        size={size}
        className={locked ? 'text-gray-300' : 'text-blue-600 dark:text-blue-300'}
      />
    ) : null;
  };

  const progress = calculateProgress();
  const circleSize = 100;
  const strokeWidth = 10;
  const r = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (progress / 100) * circumference;
  const nextPay = getNextPaycheck();
  const monthsByYear = data.months.reduce((acc, m) => {
    acc[m.year] = acc[m.year] || [];
    acc[m.year].push(m);
    return acc;
  }, {});

  const toggleYear = (year) => {
    setCollapsedYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-slate-700 dark:text-slate-200 transition-colors">
      {showCelebration && reachedMilestone && (
        <>
          <Confetti width={windowSize.width} height={windowSize.height} />
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-center relative max-w-xs w-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500" />
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Milestone!</h3>
              <p className="text-lg">${reachedMilestone.amount.toLocaleString()}</p>
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-300">{reachedMilestone.name}</p>
              <div className="flex justify-center text-5xl mb-4">
                <MilestoneIcon icon={reachedMilestone.icon} size={56} />
              </div>
              <button
                onClick={() => setShowCelebration(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <h1 className="text-3xl font-extrabold text-slate-700 dark:text-slate-100">Paycheck Tracker</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full transition"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={resetData}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full focus:ring-4 focus:ring-red-300 transition"
            title="Reset"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="sticky top-0 z-10 p-4 md:p-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="
              p-6 rounded-xl border hover:shadow-lg transition-transform transform hover:scale-105
              border-l-4 border-cyan-500 dark:border-cyan-400
              bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-900 dark:to-gray-900
              border-gray-200 dark:border-gray-700
            "
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-3 rounded-full flex items-center justify-center bg-cyan-100 dark:bg-cyan-700">
                <Award size={16} className="text-cyan-700 dark:text-cyan-50" />
              </div>
              <h2 className="text-lg font-bold">Overall Progress</h2>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="relative">
                <svg width={circleSize} height={circleSize}>
                  <circle
                    className="text-gray-300 dark:text-gray-700"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={r}
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                  />
                  <circle
                    className="transition-all duration-700"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    fill="transparent"
                    r={r}
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ stroke: 'url(#ringGradient)' }}
                  />
                  <defs>
                    <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base font-bold text-cyan-600 dark:text-cyan-200">
                    {calculateProgress()}%
                  </span>
                </div>
              </div>
              <div className="text-sm">
                {countReceivedPaychecks()} / {countTotalPaychecks()} paychecks
              </div>
              <div className="text-sm">
                <span className="font-semibold mr-1">${calculateTotal().toLocaleString()}</span>
                <span className="opacity-75">/ ${calculateExpectedTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div
            className="
              p-6 rounded-xl border hover:shadow-lg transition-transform transform hover:scale-105
              border-l-4 border-rose-500 dark:border-rose-300
              bg-gradient-to-br from-rose-50 to-white dark:from-rose-900 dark:to-gray-900
              border-gray-200 dark:border-gray-700
            "
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-3 rounded-full flex items-center justify-center bg-rose-100 dark:bg-rose-700">
                <Camera size={16} className="text-rose-700 dark:text-rose-50" />
              </div>
              <h2 className="text-lg font-bold">Milestones</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.milestones.map((mile) => (
                <div key={mile.id} className="flex flex-col items-center text-xs text-center">
                  <div
                    className={
                      mile.reached
                        ? 'w-6 h-6 rounded-full mb-1 flex items-center justify-center bg-rose-500 dark:bg-rose-400'
                        : 'w-6 h-6 rounded-full mb-1 flex items-center justify-center border border-gray-300 dark:border-gray-600'
                    }
                  >
                    <MilestoneIcon icon={mile.icon} size={16} locked={!mile.reached} />
                  </div>
                  <div className="font-semibold">${mile.amount.toLocaleString()}</div>
                  <div className="text-gray-400 dark:text-gray-500 text-[0.65rem] leading-tight">
                    {mile.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              p-6 rounded-xl border hover:shadow-lg transition-transform transform hover:scale-105
              border-l-4 border-emerald-500 dark:border-emerald-300
              bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900 dark:to-gray-900
              border-gray-200 dark:border-gray-700
            "
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-3 rounded-full flex items-center justify-center bg-emerald-100 dark:bg-emerald-700">
                <Sun size={16} className="text-emerald-700 dark:text-emerald-50" />
              </div>
              <h2 className="text-lg font-bold">Next Paycheck</h2>
            </div>
            {nextPay ? (
              <div className="flex flex-col space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">{nextPay.name}</span> on {nextPay.displayDate}
                </p>
                <p className="text-base font-bold text-emerald-600 dark:text-emerald-200">
                  {nextPay.daysLeft} day{nextPay.daysLeft !== 1 && 's'} left
                </p>
                <p className="text-sm">
                  Amount: <span className="font-semibold">${nextPay.amount.toLocaleString()}</span>
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-300">All paychecks received!</p>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 max-w-6xl mx-auto space-y-6">
        {Object.keys(monthsByYear)
          .sort()
          .map((year) => (
            <div key={year}>
              <button
                onClick={() => toggleYear(year)}
                className="
                  flex items-center justify-between w-full text-left mt-4 mb-2
                  text-slate-700 dark:text-slate-200 text-xl font-bold border-b pb-1
                  border-gray-200 dark:border-gray-700
                "
              >
                <span>{year}</span>
                <ChevronDown size={20} />
              </button>
              {!collapsedYears[year] && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {monthsByYear[year].map((month) => {
                    const grouped = groupByType(month);
                    const monthTotal = calculateMonthTotal(month);
                    const monthMax = calculateMonthMax(month);
                    const status = getMonthStatus(month);
                    const classes = getMonthCardClasses(status);
                    return (
                      <div
                        key={month.id}
                        className={`p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition ${classes}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                            {month.name} {month.year}
                          </h3>
                          <span className="font-semibold text-blue-700 dark:text-blue-300">
                            ${monthTotal.toLocaleString()}
                          </span>
                        </div>
                        {Object.entries(grouped).map(([type, pays]) => (
                          <div key={type} className="mb-3">
                            <h4 className="font-medium text-sm text-slate-700 dark:text-slate-200 mb-1 flex items-center">
                              <span
                                className={
                                  `px-2 py-1 rounded font-semibold mr-2 shadow-sm ${
                                    type === 'scotia'
                                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                                      : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                                  }`
                                }
                              >
                                {type === 'scotia' ? 'Scotia' : 'Rakuten'}
                              </span>
                              <span className="text-xs text-gray-400 dark:text-gray-500">
                                (${pays[0].amount.toLocaleString()} each)
                              </span>
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {pays.map((p) => {
                                const receivedClasses = p.received
                                  ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border-green-300 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-700'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700';
                                return (
                                  <button
                                    key={p.id}
                                    onClick={() => togglePaycheck(month.id, p.id)}
                                    className={
                                      `group relative flex items-center justify-between px-3 py-2 rounded text-sm font-medium
                                      transition-all duration-200 border ${receivedClasses}`
                                    }
                                  >
                                    <span className="pointer-events-none">{p.displayDate}</span>
                                    {p.received ? (
                                      <CheckCircle size={16} className="text-green-600 dark:text-green-200" />
                                    ) : (
                                      <XCircle size={16} className="text-gray-400 dark:text-gray-500" />
                                    )}
                                    <div
                                      className="
                                        absolute hidden group-hover:flex pointer-events-none
                                        -top-8 left-1/2 transform -translate-x-1/2
                                        px-2 py-1 bg-black text-white text-xs rounded
                                      "
                                    >
                                      {p.name}, ${p.amount}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                        <div className="pt-3 border-t border-gray-100 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                          <span>Monthly Total</span>
                          <span
                            className={
                              monthTotal > 0
                                ? 'text-green-700 dark:text-green-300 font-medium'
                                : ''
                            }
                          >
                            ${monthTotal.toLocaleString()} / ${monthMax.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

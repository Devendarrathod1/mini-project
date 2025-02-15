import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Clock, Smartphone, Moon, Info, Target, Brain, Battery, Zap, Share2, Gamepad, Film } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const categoryData = {
  labels: ['Social Media', 'Entertainment', 'Work', 'Games', 'Education', 'Communication'],
  datasets: [{
    data: [4.5, 3.2, 6.8, 2.1, 1.5, 2.8],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)',
    ],
  }]
};

const dailyUsageData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Hours',
    data: [8.5, 7.2, 9.1, 6.8, 10.2, 11.5, 9.8],
    backgroundColor: 'rgba(54, 162, 235, 0.8)',
  }]
};

const sleepVsUsageData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Sleep Hours',
      data: [7.5, 6.8, 7.2, 6.5, 7.8, 8.5, 8.2],
      borderColor: 'rgba(75, 192, 192, 0.8)',
      fill: false,
    },
    {
      label: 'Late Night Usage (hours)',
      data: [2.1, 2.8, 1.5, 3.2, 2.5, 3.8, 2.9],
      borderColor: 'rgba(255, 99, 132, 0.8)',
      fill: false,
    }
  ]
};

const appUsageData = {
  labels: ['Instagram', 'Netflix', 'Slack', 'Gmail', 'Chrome', 'WhatsApp'],
  datasets: [{
    label: 'Daily Usage (hours)',
    data: [2.5, 1.8, 3.2, 1.5, 4.2, 1.9],
    backgroundColor: 'rgba(75, 192, 192, 0.8)',
  }]
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Screen Time Analysis</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              A data-driven journey through your digital day, revealing patterns and insights about how you interact with technology
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="prose prose-lg text-gray-700 mb-12 max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed">
            Welcome to your personal digital story. Through careful analysis of your screen time data, 
            we've uncovered fascinating patterns about your relationship with technology. Let's explore 
            what your digital footprint reveals about your daily life.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Your Digital Snapshot</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold">Daily Average</h3>
              </div>
              <p className="text-3xl font-bold text-indigo-600">8.7 hrs</p>
              <p className="text-sm text-gray-600 mt-2">36% of your waking hours</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold">Peak Time</h3>
              </div>
              <p className="text-3xl font-bold text-purple-600">2-4 PM</p>
              <p className="text-sm text-gray-600 mt-2">Your most active period</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Share2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold">Most Used</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">Chrome</p>
              <p className="text-sm text-gray-600 mt-2">4.2 hours daily average</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-6 h-6 text-rose-600" />
                <h3 className="text-lg font-semibold">Night Usage</h3>
              </div>
              <p className="text-3xl font-bold text-rose-600">2.7 hrs</p>
              <p className="text-sm text-gray-600 mt-2">After 10 PM</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Battery className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Digital Time Distribution</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Category Breakdown</h3>
              <p className="text-gray-600 mb-6">Your digital activities by category</p>
              <Pie data={categoryData} options={{ responsive: true }} />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">App Usage Leaders</h3>
              <p className="text-gray-600 mb-6">Your most-used applications</p>
              <Bar data={appUsageData} options={{ responsive: true, indexAxis: 'y' }} />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Moon className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Sleep & Screen Patterns</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Weekly Sleep vs Screen Time</h3>
            <p className="text-gray-600 mb-6">Understanding your rest and digital engagement patterns</p>
            <Line data={sleepVsUsageData} options={{ responsive: true }} />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Info className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">The Story Behind Your Data</h2>
          </div>
          
          <div className="space-y-10">
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Data Collection Journey</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your digital story is crafted from 30 days of careful observation, capturing every 
                interaction with your devices. We've tracked:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-900">Device Interactions</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• App launches and duration</li>
                    <li>• Screen unlock patterns</li>
                    <li>• Active vs. passive usage</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-purple-900">Usage Patterns</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Peak activity times</li>
                    <li>• App category distribution</li>
                    <li>• Focus vs. distraction periods</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-900">Productivity Focus</h4>
                  </div>
                  <p className="text-gray-700">Work apps dominate your morning hours, showing strong focus patterns</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Film className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-900">Entertainment Habits</h4>
                  </div>
                  <p className="text-gray-700">Peak streaming activity occurs between 8-10 PM</p>
                </div>
                <div className="bg-rose-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Gamepad className="w-5 h-5 text-rose-600" />
                    <h4 className="font-semibold text-rose-900">Gaming Balance</h4>
                  </div>
                  <p className="text-gray-700">Weekend gaming sessions average 2.1 hours</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Methodology & Privacy</h3>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                  Your data story is crafted with precision and care, using advanced analytics while 
                  maintaining strict privacy standards. We process your usage data locally, ensuring 
                  your information never leaves your device without your explicit consent.
                </p>
                <p>
                  Our analysis combines raw usage data with machine learning algorithms to identify 
                  patterns and trends, helping you understand your digital habits better.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
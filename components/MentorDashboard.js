import React from "react";
import { DollarSign, Users, BookOpen, Trash2, BarChart2, UserX2, BookPlus } from "lucide-react";
import { motion } from "@/lib/motion";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip } from "chart.js";
import AnimatedText from "./AnimatedText";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip);

// Sample earnings data
const earningsData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Earnings",
      data: [500, 900, 1200, 1600, 1820, 2100],
      backgroundColor: "#34d399",
    },
  ],
};

const studentsData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "New Students",
      data: [10, 25, 18, 30, 22],
      borderColor: "#3b82f6",
      tension: 0.3,
      fill: false,
    },
  ],
};

const MentorDashboard = () => {
  return (
    <section className="py-16 px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center font-roboto"
        >
          <AnimatedText text={"Mentor Dashboard"} />
        </motion.h2>
        <motion.div
          className="mx-auto h-2 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden [--w:200px] md:[--w:350px] mb-4"
          whileInView={{ width: "300px" }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -100px 0px" }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Stay in control of your teaching business. Manage your courses, monitor earnings, and remove suspicious
          students—all from a single, powerful dashboard.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Track Earnings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <DollarSign className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Track Earnings</h3>
            </div>
            <p className="text-gray-600 mb-4">View your total revenue, payouts, and track your monthly growth.</p>
            <div className="bg-gray-100 rounded-md p-4 mb-4 text-sm">
              <div className="flex justify-between mb-2">
                <span>This Month</span>
                <span className="text-green-600 font-semibold">$1,820</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Pending Payouts</span>
                <span className="text-yellow-500 font-semibold">$320</span>
              </div>
              <div className="flex justify-between">
                <span>Total Earnings</span>
                <span className="text-gray-800 font-semibold">$12,430</span>
              </div>
              <div className="mt-3 flex items-center text-gray-400">
                <BarChart2 className="w-4 h-4 mr-1" />
                Based on real-time updates
              </div>
            </div>
            <Bar data={earningsData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </motion.div>

          {/* Manage Students */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Users className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Manage Students</h3>
            </div>
            <p className="text-gray-600 mb-4">Remove suspicious students, view profiles, and monitor engagement.</p>

            <div className="bg-gray-100 rounded-md p-4 mb-4 text-sm">
              <div className="flex justify-between mb-2">
                <span>Total Students</span>
                <span className="font-semibold">235</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Active</span>
                <span className="text-green-500 font-semibold">198</span>
              </div>
              <div className="flex justify-between">
                <span>Flagged</span>
                <span className="text-red-500 font-semibold">7</span>
              </div>
            </div>

            <Line
              data={studentsData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { display: false }, x: { display: false } },
              }}
              className="mb-4"
            />

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Recently Flagged:</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-center text-red-600">
                  <UserX2 className="w-4 h-4 mr-1" />
                  user123 (spam)
                </li>
                <li className="flex items-center text-red-600">
                  <UserX2 className="w-4 h-4 mr-1" />
                  ai_guru (bot activity)
                </li>
              </ul>
            </div>

            <button className="mt-4 flex items-center text-red-500 hover:underline text-sm">
              <Trash2 className="mr-2 w-5 h-5" /> Remove Suspicious Students
            </button>
          </motion.div>

          {/* Edit Courses */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <BookOpen className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Edit Courses</h3>
            </div>
            <p className="text-gray-600 mb-4">Add new lectures, update course content, and manage pricing.</p>

            <ul className="text-sm text-gray-700 bg-gray-100 rounded-md p-4 mb-4 space-y-1">
              <li className="flex justify-between">
                <span>Active Courses</span>
                <span className="font-semibold">12</span>
              </li>
              <li className="flex justify-between">
                <span>Pending Reviews</span>
                <span className="text-yellow-600 font-semibold">3</span>
              </li>
              <li className="flex justify-between">
                <span>Avg. Rating</span>
                <span className="text-green-600 font-semibold">4.7 ★</span>
              </li>
            </ul>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-1">Creation Progress</h4>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "68%" }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">68% complete</p>
            </div>

            <div className="text-sm text-gray-700">
              <h4 className="font-medium mb-2">By Category</h4>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>Design</span> <span className="font-semibold">5</span>
                </li>
                <li className="flex justify-between">
                  <span>Development</span> <span className="font-semibold">4</span>
                </li>
                <li className="flex justify-between">
                  <span>Marketing</span> <span className="font-semibold">3</span>
                </li>
              </ul>
            </div>

            <button className="mt-4 flex items-center text-purple-600 hover:underline text-sm">
              <BookPlus className="mr-2 w-5 h-5" /> Add New Lecture
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorDashboard;

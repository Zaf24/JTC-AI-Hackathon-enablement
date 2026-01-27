import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Stage3Step2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-container pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/stage/3"
              className="inline-flex items-center text-mission-primary hover:text-mission-primary/80 mb-4 transition-colors"
            >
              <span className="mr-2">←</span> Back to Stage 3 Overview
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              📊 Stage 3.2: Test Code Interpreter
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Call Sign:</span> Data Analysis
            </p>
            <p className="text-lg text-gray-600">
              Test the Code Interpreter capabilities with your uploaded vendor review dataset. Run comparisons, charts, and insights to complete the Mission Debrief.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-blue-50 border-l-4 border-mission-primary p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-3">Mission Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              In this step, you&apos;ll put Code Interpreter to work. You&apos;ll ask the agent to compare vendors, generate visualizations, and surface 
              insights based on the vendor review CSV you uploaded in Stage 3.1. The focus here is on validating that analytics and visualizations 
              align with procurement needs.
            </p>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Step-by-Step Instructions</h2>
            
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Open the Playground</h3>
                  <p className="text-gray-700 mb-4">
                    Open the Vendor Scout Agent playground where Code Interpreter and the vendor review CSV are configured.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Go to Microsoft AI Foundry</li>
                    <li>Open the resource where your Vendor Scout Agent is configured</li>
                    <li>Navigate to <strong>Agents</strong> and select your <strong>Vendor Scout</strong> agent</li>
                    <li>Click <strong>Try in playground</strong> to open the chat interface</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Run Comparison & Insights Prompt</h3>
                  <p className="text-gray-700 mb-4">
                    Start by asking the agent to compare all caterers and highlight value for money and delivery timing performance.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                    <p className="text-blue-800 font-semibold mb-3">📝 Suggested Test Prompt:</p>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="font-mono text-blue-900">
                        Can you compare all the caterers and show me value for money and delivery timing performance?
                      </p>
                    </div>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Type the suggested prompt into the playground chat interface</li>
                    <li>The agent should detect analysis intent and use Code Interpreter with the uploaded CSV</li>
                    <li>Watch for a chart or table that compares caterers on cost and delivery timing</li>
                    <li>Read the agent&apos;s explanation of the chart and the procurement insights provided</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Explore Additional Analysis Prompts</h3>
                  <p className="text-gray-700 mb-4">
                    Try a few more prompts to explore vendor performance, trade-offs, and rankings using Code Interpreter.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg mb-4">
                    <p className="text-green-800 font-semibold mb-3">🧪 Additional Suggested Prompts:</p>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="font-mono bg-white px-2 py-1 rounded">
                          Show me a bar chart comparing each caterer&apos;s average rating and average delivery time.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="font-mono bg-white px-2 py-1 rounded">
                          Which three caterers offer the best balance between cost and delivery reliability?
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="font-mono bg-white px-2 py-1 rounded">
                          Can you plot a scatter chart of cost versus satisfaction score for all caterers?
                        </span>
                      </li>
                    </ul>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Run each prompt one at a time</li>
                    <li>Confirm that Code Interpreter loads the CSV and generates appropriate charts or tables</li>
                    <li>Check that each visualization includes clear titles, labeled axes, and readable vendor names</li>
                    <li>Review the written explanation and procurement takeaways provided by the agent</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Review Behavior and Constraints</h3>
                  <p className="text-gray-700 mb-4">
                    While testing, verify that the agent follows the analysis rules and constraints you configured in the instructions.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Confirm that the agent only uses data from the uploaded CSV (no fabricated metrics or vendors)</li>
                    <li>Check that visualizations are simple, clear, and follow the guidance from section 9.2 (bar charts, grouped bars, scatter plots)</li>
                    <li>Ensure each chart is accompanied by an explanation and a practical procurement insight</li>
                    <li>Verify that no email workflows are triggered during analysis</li>
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Completion Check */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="mr-2">✅</span> Completion Checklist
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Opened the Vendor Scout Agent playground with Code Interpreter enabled and CSV uploaded</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Ran the prompt: <strong>“Can you compare all the caterers and show me value for money and delivery timing performance?”</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Observed a comparison of caterers on cost and delivery timing, with a clear explanation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Executed at least two additional analysis prompts (charts, rankings, or trade-off visualizations)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Verified that all analysis followed the visualization and behavior rules from section 9</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Confirmed that no email workflows were triggered during analysis</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-600 rounded">
              <p className="text-green-800 font-semibold">
                🎉 Great work! You have successfully tested the Code Interpreter capabilities for Mission Debrief and validated that your Procurement Command Centre can generate data-driven insights on vendor performance.
              </p>
            </div>
          </div>

          {/* Next Stage CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-mission-primary to-mission-secondary text-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">🎯 Mission Debrief Complete!</h2>
            <div className="mb-6">
              <p className="text-blue-100 mb-4 leading-relaxed">
                You&apos;ve now completed Mission Debrief. Your Procurement Command Centre can match vendors, automate RFPs, and analyze outcomes with data-driven clarity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/stage/3"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Back to Stage 3 Overview
              </Link>
              <Link
                to="/stages"
                className="px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-400/50 text-center"
              >
                View All Stages →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}


import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Stage2Step3() {
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
              to="/stage/2"
              className="inline-flex items-center text-mission-primary hover:text-mission-primary/80 mb-4 transition-colors"
            >
              <span className="mr-2">←</span> Back to Stage 2 Overview
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              📧 Stage 2.3: Test RFP Automation
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Call Sign:</span> RFP Automation
            </p>
            <p className="text-lg text-gray-600">
              Test the complete RFP automation workflow end-to-end. Validate that the agent correctly triggers email workflows when users request to contact vendors.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-blue-50 border-l-4 border-mission-primary p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-3">Mission Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              In this step, you'll test the complete RFP automation workflow that you've built. You'll interact with the Vendor Scout Agent 
              to request vendor recommendations, and then test the automated email workflow by requesting to send an RFP email to a vendor. 
              This testing phase validates that the entire system works seamlessly from vendor discovery to automated email distribution.
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
                    Access the playground to test your Vendor Scout Agent with the RFP automation workflow.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Navigate to your Vendor Scout Agent in Microsoft AI Foundry</li>
                    <li>On the "Setup" pane, click the "Try in playground" button</li>
                    <li>You will be brought to the playground page where you can interact with your agent</li>
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
                  <h3 className="text-2xl font-semibold mb-2">Request Vendor Recommendations</h3>
                  <p className="text-gray-700 mb-4">
                    Start by requesting vendor recommendations for your end of fiscal year event catering needs.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                    <p className="text-blue-800 font-semibold mb-3">📝 Initial Test Prompt:</p>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="font-mono text-blue-900">
                        "I need catering services for our end of fiscal year celebration event"
                      </p>
                    </div>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Type the initial prompt into the playground chat interface</li>
                    <li>The agent should respond with vendor recommendations for catering services</li>
                    <li>Review the vendors suggested by the agent</li>
                    <li>Select a vendor that you'd like to contact</li>
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
                  <h3 className="text-2xl font-semibold mb-2">Request to Send Email to Vendor</h3>
                  <p className="text-gray-700 mb-4">
                    Request the agent to send an email to the selected vendor. The agent should detect your intent and collect the required information.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg mb-4">
                    <p className="text-green-800 font-semibold mb-3">📝 Email Request Prompts:</p>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="font-mono bg-white px-2 py-1 rounded">"Send an email to this vendor"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="font-mono bg-white px-2 py-1 rounded">"I'd like to request a quote from [vendor name]"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="font-mono bg-white px-2 py-1 rounded">"Please reach out to them for our end of FY event"</span>
                      </li>
                    </ul>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Use one of the email request prompts shown above</li>
                    <li>The agent should detect your email intent and move to information collection mode</li>
                    <li>The agent will ask you for the required information: event summary, expected delivery date, and items/quantities</li>
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
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Provide Required Information</h3>
                  <p className="text-gray-700 mb-4">
                    Provide the mandatory information that the agent requests for the RFP email.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-4">
                    <p className="text-yellow-800 font-semibold mb-3">📋 Sample Information for End of FY Event:</p>
                    <ul className="space-y-2 text-yellow-700 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Event Summary:</strong> "End of fiscal year celebration event for 150 employees. We need catering services including buffet-style lunch, beverages, and dessert options."
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Expected Delivery Date:</strong> "March 31, 2026" or "End of March 2026"
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Items and Quantities:</strong> "Buffet lunch for 150 people, including vegetarian options, soft drinks, and dessert selection"
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Answer the agent's questions about the event summary</li>
                    <li>Provide the expected delivery date (end of fiscal year - typically March 31st)</li>
                    <li>Specify the items and quantities needed for the catering service</li>
                    <li>Wait for the agent to confirm that all required information has been collected</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  5
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Verify Email Workflow Trigger</h3>
                  <p className="text-gray-700 mb-4">
                    Once all information is provided, the agent should automatically trigger the Logic Apps workflow to send the RFP email.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>After providing all required information, the agent should call the OpenAPI tool</li>
                    <li>The agent should inform you that the email has been sent successfully</li>
                    <li>Check your email or the Logic Apps workflow run history to verify the email was sent</li>
                    <li>Verify that the email contains all the information you provided</li>
                  </ol>
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <p className="text-blue-800 font-semibold mb-2">💡 Verification Tips:</p>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Check the Logic Apps workflow run history in Azure Portal to see if the workflow was triggered</li>
                      <li>• Verify the email was sent to the vendor's email address</li>
                      <li>• Confirm the email body contains the correct event summary, delivery date, and items</li>
                      <li>• If the workflow fails, check the error message and troubleshoot accordingly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  6
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Test Additional Scenarios</h3>
                  <p className="text-gray-700 mb-4">
                    Test the workflow with different scenarios to ensure it works reliably.
                  </p>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg mb-4">
                    <p className="text-purple-800 font-semibold mb-3">🔄 Additional Test Scenarios:</p>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Test with different vendor:</strong> Try requesting a quote from a different catering vendor to ensure the workflow works for multiple vendors
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Test with incomplete information:</strong> Try providing incomplete information to see if the agent correctly asks for missing details
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Test error handling:</strong> If possible, test what happens if the Logic Apps workflow fails
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Try the workflow with different vendors and requirements</li>
                    <li>Test edge cases and error scenarios</li>
                    <li>Verify that the agent handles all scenarios correctly</li>
                    <li>Document any issues or improvements needed</li>
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
                <span>Successfully opened the playground for the Vendor Scout Agent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Requested vendor recommendations for end of FY event catering</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Selected a catering vendor from the recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Requested to send an email to the vendor using one of the test prompts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Provided event summary for the end of FY celebration event</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Provided expected delivery date (end of fiscal year)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Provided items and quantities for the catering service</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Verified that the agent triggered the Logic Apps workflow</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Confirmed that the RFP email was sent successfully to the vendor</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Verified the email content contains all the correct information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Tested additional scenarios to ensure workflow reliability</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-600 rounded">
              <p className="text-green-800 font-semibold">
                🎉 Congratulations! You have successfully tested the complete RFP automation workflow! Your Procurement Command Centre can now automatically match vendors, collect requirements, and send professional RFP emails seamlessly!
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
            <h2 className="text-3xl font-bold mb-4">🎯 Stage 2 Complete!</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">What's Next: Stage 3 - Mission Debrief (Data Analysis)</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                You've successfully built and tested the RFP automation workflow! Now you're ready to move on to Stage 3, where you'll use Code Interpreter 
                with Python to analyze vendor data, generate insights, and create visualizations for decision support.
              </p>
              <ul className="space-y-2 text-blue-100 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Prepare data for analysis using Code Interpreter</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Run Python scripts to calculate metrics and compare vendors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Generate visualizations for vendor comparisons and cost analysis</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/stage/2"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Back to Stage 2 Overview
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

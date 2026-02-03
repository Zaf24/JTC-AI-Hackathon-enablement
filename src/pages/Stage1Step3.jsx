import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getImagePath } from '../utils/basePath'

export default function Stage1Step3() {
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
              to="/stage/1"
              className="inline-flex items-center text-mission-primary hover:text-mission-primary/80 mb-4 transition-colors"
            >
              <span className="mr-2">←</span> Back to Stage 1 Overview
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🔍 Stage 1.3: Test Vendor Scout
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Call Sign:</span> Vendor Scout
            </p>
            <p className="text-lg text-gray-600">
              Test the Vendor Scout Agent with sample queries to validate its ability to match vendors accurately and deliver ranked recommendations.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-blue-50 border-l-4 border-mission-primary p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-3">Mission Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              In this step, you'll test the Vendor Scout Agent that you've configured with instructions and knowledge base. You'll use the playground 
              to interact with the agent and validate its ability to understand procurement requirements, search through vendor profiles, and provide 
              accurate vendor recommendations. This testing phase ensures your agent is ready to help users find the perfect vendor match.
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
                    Access the playground to test your Vendor Scout Agent.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>On your "Setup" pane, click the "Try in playground" button</li>
                    <li>You will be brought to the playground page where you can interact with your agent</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={getImagePath('stage-1-3-step-1.png')}
                      alt="Try in playground button on Setup pane"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Setup pane with "Try in playground" button</p>
                  </div>
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
                  <h3 className="text-2xl font-semibold mb-2">Test with Sample Queries</h3>
                  <p className="text-gray-700 mb-4">
                    Try these prompts to test the agent you have built so far. The agent will likely follow up with more questions. 
                    Feel free to give more details to get a vendor selected for you!
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                    <p className="text-blue-800 font-semibold mb-3">📝 Sample Test Prompts:</p>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="font-mono bg-white px-2 py-1 rounded">"I need caterers for an event I'm organizing"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="font-mono bg-white px-2 py-1 rounded">"I need trophies for a corporate fun competition"</span>
                      </li>
                    </ul>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Type one of the sample prompts into the playground chat interface</li>
                    <li>Observe how the agent responds and what questions it asks</li>
                    <li>The agent will likely follow up with clarifying questions to better understand your requirements</li>
                    <li>Provide additional details when prompted to help the agent narrow down vendor options</li>
                    <li>Continue the conversation until the agent recommends suitable vendors</li>
                    <li>Try the second sample prompt to test different scenarios</li>
                  </ol>
                  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                    <p className="text-yellow-800 font-semibold mb-2">💡 Testing Tips:</p>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Pay attention to how the agent interprets your requirements</li>
                      <li>• Notice how it uses the knowledge base to find relevant vendors</li>
                      <li>• Observe the quality of vendor recommendations and explanations</li>
                      <li>• Test with different types of requirements (catering, hardware, services, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Review Agent Performance</h3>
                  <p className="text-gray-700 mb-4">
                    Evaluate how well the agent performs and identify any areas for improvement.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Review the vendor recommendations provided by the agent</li>
                    <li>Check if the agent correctly understood your requirements</li>
                    <li>Verify that the agent used the knowledge base effectively</li>
                    <li>Assess the quality of explanations for why vendors were recommended</li>
                    <li>Note any areas where the agent could be improved or clarified</li>
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
                <span>Successfully clicked "Try in playground" button on the Setup pane</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Opened the playground interface for testing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Tested the agent with the prompt: "I need caterers for an event I'm organizing"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Tested the agent with the prompt: "I need trophies for a corporate fun competition"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Interacted with the agent's follow-up questions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Provided additional details when prompted by the agent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Received vendor recommendations from the agent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Reviewed and evaluated the agent's performance</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-600 rounded">
              <p className="text-green-800 font-semibold">
                🎉 Congratulations! You have built and tested out the "Vendor Scout" capabilities of the Procurement Command Centre! It's time to move on to the RFP automation capability when you are ready!
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
            <h2 className="text-3xl font-bold mb-4">🎯 Stage 1 Complete!</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">What's Next: Stage 2 - Mission Comms (RFP Automation)</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                You've successfully built and tested the Vendor Scout Agent! Now you're ready to move on to Stage 2, where you'll create Logic Apps 
                workflows to automate RFP email distribution, track responses, and manage approval workflows.
              </p>
              <ul className="space-y-2 text-blue-100 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Build Logic Apps workflows for RFP automation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Create OpenAPI connections for email distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Set up approval workflows and response tracking</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/stage/1"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Back to Stage 1 Overview
              </Link>
              <Link
                to="/stage/2"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Continue to Stage 2 →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

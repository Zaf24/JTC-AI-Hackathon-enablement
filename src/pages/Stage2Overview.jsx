import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Stage2Overview() {
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
              to="/stages" 
              className="inline-flex items-center text-mission-primary hover:text-mission-primary/80 mb-4 transition-colors"
            >
              <span className="mr-2">←</span> Back to Stages
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              📧 Stage 2: Mission Comms
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Call Sign:</span> RFP Automation
            </p>
            <p className="text-lg text-gray-600">
              Create Logic Apps workflows to automate RFP email distribution, track responses, and manage approval workflows.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-blue-50 border-l-4 border-mission-primary p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-3">Mission Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In Stage 2, you'll build the Mission Comms system - an automated RFP (Request for Proposal) workflow that 
              streamlines vendor communication. You'll create Logic Apps workflows that automatically send RFP emails to 
              vendors, track responses, and manage approval processes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Mission Comms system integrates seamlessly with the Vendor Scout Agent, enabling automated email distribution 
              when vendors are selected, ensuring efficient and consistent communication throughout the procurement process.
            </p>
          </div>

          {/* Important Note */}
          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 mb-8 shadow-md">
            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center">
              <span className="mr-2" aria-hidden="true">⚠️</span>
              Important — Please Read
            </h3>
            <ul className="space-y-2 text-amber-900 font-medium">
              <li className="flex items-start">
                <span className="mr-2 mt-0.5">1.</span>
                You will be sharing Logic Apps with other groups; ensure you name your workflows with a unique group name.
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5">2.</span>
                Do not access other teams' workflows and connections — please stick to your own workflows.
              </li>
            </ul>
          </div>

          {/* Stage Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Stage 2 Steps</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 2.1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-mission-primary transition-colors"
              >
                <div className="text-3xl mb-3">2.1</div>
                <h3 className="text-xl font-semibold mb-3">Navigate to Logic Apps and Build Workflows</h3>
                <p className="text-gray-700 mb-4">
                  Navigate to Logic Apps and build the necessary workflows for RFP automation. Create workflows that 
                  handle HTTP requests and send automated emails to vendors.
                </p>
                <Link
                  to="/stage/2/step/2.1"
                  className="inline-block px-4 py-2 bg-mission-primary text-white rounded-lg hover:bg-mission-primary/90 transition-colors text-sm font-medium"
                >
                  Start Step 2.1 →
                </Link>
              </motion.div>

              {/* Step 2.2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-mission-primary transition-colors"
              >
                <div className="text-3xl mb-3">2.2</div>
                <h3 className="text-xl font-semibold mb-3">Create OpenAPI Connections</h3>
                <p className="text-gray-700 mb-4">
                  Create OpenAPI connections for the Logic Apps workflows. Connect the Vendor Scout Agent to the 
                  RFP automation workflow.
                </p>
                <Link
                  to="/stage/2/step/2.2"
                  className="inline-block px-4 py-2 bg-mission-primary text-white rounded-lg hover:bg-mission-primary/90 transition-colors text-sm font-medium"
                >
                  Start Step 2.2 →
                </Link>
              </motion.div>

              {/* Step 2.3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-mission-primary transition-colors"
              >
                <div className="text-3xl mb-3">2.3</div>
                <h3 className="text-xl font-semibold mb-3">Test</h3>
                <p className="text-gray-700 mb-4">
                  Test the RFP automation workflows. Validate that emails are sent correctly and responses are tracked properly.
                </p>
                <Link
                  to="/stage/2/step/2.3"
                  className="inline-block px-4 py-2 bg-mission-primary text-white rounded-lg hover:bg-mission-primary/90 transition-colors text-sm font-medium"
                >
                  Start Step 2.3 →
                </Link>
              </motion.div>
            </div>
          </div>

          {/* What You'll Build */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-green-200">
            <h2 className="text-2xl font-bold mb-4">What You'll Build</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>Automated RFP email workflows</strong> that send professional proposal requests to vendors 
                  with all necessary details
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>Logic Apps integration</strong> that connects the Vendor Scout Agent to email automation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>HTTP-triggered workflows</strong> that accept structured data and generate personalized emails
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>Email template system</strong> that dynamically populates vendor and requirement information
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-mission-primary to-mission-secondary text-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">🚀 Ready to Start?</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Begin with Step 2.1 to build your Logic Apps workflow. This will create the foundation for automated RFP email distribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/stage/2/step/2.1"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Start Step 2.1: Build Workflows →
              </Link>
              <Link
                to="/stages"
                className="px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-400/50 text-center"
              >
                View All Stages
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

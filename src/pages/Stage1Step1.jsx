import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Stage1Step1() {
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
              🔍 Stage 1.1: Provision Agent
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Call Sign:</span> Vendor Scout
            </p>
            <p className="text-lg text-gray-600">
              Set up the AI model for vendor matching by creating a Microsoft AI Foundry resource and deploying the GPT-4.1 model.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-blue-50 border-l-4 border-mission-primary p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-3">Mission Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              In this step, you'll provision the AI model that will power the Vendor Scout Agent. You'll create a 
              Microsoft AI Foundry resource and deploy the GPT-4.1 model, which will be the intelligence behind 
              matching vendors with precision.
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
                  <h3 className="text-2xl font-semibold mb-2">Access Microsoft AI Foundry</h3>
                  <p className="text-gray-700 mb-4">
                    Go to Microsoft AI Foundry. You should already be logged in from Stage 0.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Open your web browser and go to <a href="https://ai.azure.com" target="_blank" rel="noopener noreferrer" className="text-mission-primary hover:underline">https://ai.azure.com</a></li>
                    <li>You should already be logged in with the same account you used in Stage 0</li>
                    <li>If you are not logged in, sign in again with your credentials for this workshop</li>
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
                  <h3 className="text-2xl font-semibold mb-2">Identify Pre-Created Resource</h3>
                  <p className="text-gray-700 mb-4">
                    At the home page, identify the resource pre-created for you.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>On the Microsoft AI Foundry Overview (home) page, locate the resource in the dropdown or Endpoints and keys section</li>
                    <li>The resource name is <strong>aaf-hackathon-prdizapp-i02jyfn</strong> (ends with i02jyfn)</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-1-1-step-2-updated.png`}
                      alt="Microsoft AI Foundry Overview page showing resource aaf-hackathon-prdizapp-i02jyfn"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Microsoft AI Foundry Overview page with pre-created resource</p>
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
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Navigate to Agents</h3>
                  <p className="text-gray-700 mb-4">
                    Once your agent is provisioned, you'll see the resource page. Navigate to the Agents section.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Wait for your resource to be provisioned</li>
                    <li>Once provisioned, you will see the resource page</li>
                    <li>Click on "Agents" on the side pane</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-1-1-step-step-5.png`}
                      alt="Click on Agents in the side pane"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Resource page with Agents option in side pane</p>
                  </div>
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
                  <h3 className="text-2xl font-semibold mb-2">Rename agent to "[Your-Team-Name] Vendor Scout"</h3>
                  <p className="text-gray-700 mb-4">
                    The agent will be deployed with a random name. Rename it to "<strong>[Your-Team-Name] Vendor Scout</strong>" (e.g. "JTC Team A Vendor Scout") for easy identification.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>You will see the agent deployed with a random name</li>
                    <li>Click on the name to edit it</li>
                    <li>Change the name to <strong>"[Your-Team-Name] Vendor Scout"</strong></li>
                    <li>Save the changes</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-1-1-step-step-8.png`}
                      alt="Rename model to [Your-Team-Name] Vendor Scout"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Renamed model to [Your-Team-Name] Vendor Scout</p>
                  </div>
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
                <span>Successfully accessed Microsoft AI Foundry</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Created Microsoft Foundry Resource in the correct resource group</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Selected Southeast Asia as the region</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Navigated to Agents section</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Selected and deployed gpt-4o model with Global Standard deployment type</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Renamed the agent to "[Your-Team-Name] Vendor Scout"</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-600 rounded">
              <p className="text-green-800 font-semibold">
                🎉 Great Job! You have set up your foundry resource and deployed the model required for Procurement Command Centre!
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
            <h2 className="text-3xl font-bold mb-4">🎯 Ready for Step 1.2?</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Step 1.2: Upload Instructions and Knowledge Base</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Now that your AI model is provisioned, you'll configure the knowledge base with vendor profiles and 
                capabilities. You'll upload instructions that will guide the agent in matching vendors accurately.
              </p>
              <ul className="space-y-2 text-blue-100 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Upload vendor profiles and capabilities to the knowledge base</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Configure instructions for the Vendor Scout Agent</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Set up the matching logic and scoring criteria</span>
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
                to="/stage/1/step/1.2"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Continue to Step 1.2 →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Stage3Overview() {
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
              📊 Stage 3: Mission Debrief
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Call Sign:</span> Data Analysis
            </p>
            <p className="text-lg text-gray-600">
              Use Code Interpreter with Python to analyze vendor data, generate insights, and create visualizations for decision support.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-blue-50 border-l-4 border-mission-primary p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-3">Mission Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In Stage 3, you will move into Mission Debrief — turning all the data collected from your Vendor Scout Agent and RFP workflows 
              into actionable insights. You will enable Code Interpreter, upload your vendor and RFP data, and run analyses that help Sarah 
              make data-driven procurement decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This stage focuses on enabling rich analytics, KPI tracking, and visual storytelling so stakeholders can clearly understand 
              vendor performance, costs, and recommendation outcomes.
            </p>
          </div>

          {/* Stage Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Stage 3 Steps</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Step 3.1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-mission-primary transition-colors"
              >
                <div className="text-3xl mb-3">3.1</div>
                <h3 className="text-xl font-semibold mb-3">Enable Code Interpreter & Upload Data</h3>
                <p className="text-gray-700 mb-4">
                  Enable Code Interpreter and upload your vendor and RFP data. Prepare data files and context so Python can run 
                  meaningful analysis on vendor performance, costs, and recommendations.
                </p>
                <Link
                  to="/stage/3/step/3.1"
                  className="inline-block px-4 py-2 bg-mission-primary text-white rounded-lg hover:bg-mission-primary/90 transition-colors text-sm font-medium"
                >
                  Start Step 3.1 →
                </Link>
              </motion.div>

              {/* Step 3.2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-mission-primary transition-colors"
              >
                <div className="text-3xl mb-3">3.2</div>
                <h3 className="text-xl font-semibold mb-3">Test</h3>
                <p className="text-gray-700 mb-4">
                  Test your analysis workflows. Run Python notebooks or Code Interpreter sessions to validate calculations, 
                  generate visualizations, and confirm that insights match expectations.
                </p>
                <Link
                  to="/stage/3/step/3.2"
                  className="inline-block px-4 py-2 bg-mission-primary text-white rounded-lg hover:bg-mission-primary/90 transition-colors text-sm font-medium"
                >
                  Start Step 3.2 →
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
                  <strong>Data analysis workspace</strong> powered by Code Interpreter that can ingest and explore vendor and RFP data.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>Python-based analysis flows</strong> that calculate metrics, compare vendors, and highlight trends.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>Visualizations and reports</strong> that clearly communicate vendor performance, costs, and recommendation scores.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>Mission debrief assets</strong> that help stakeholders understand outcomes and make confident decisions.
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
            <h2 className="text-3xl font-bold mb-4">🚀 Get Ready for Mission Debrief</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Once enabled, Code Interpreter will help you transform raw vendor and RFP data into clear, compelling insights. 
              You'll be able to answer questions like \"Which vendor performed best?\" and \"How did our costs compare across vendors?\".
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/stage/3/step/3.1"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Start Stage 3.1 →
              </Link>
              <Link
                to="/stages"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
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


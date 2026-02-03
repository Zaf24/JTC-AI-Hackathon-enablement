import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Stage0Step() {
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
              🛠️ Stage 0: Prepare Equipment
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Call Sign:</span> Prepare equipments
            </p>
            <p className="text-lg text-gray-600">
              Sign in and navigate resource group
            </p>
          </div>

          {/* Overview */}
          <div className="bg-blue-50 border-l-4 border-mission-primary p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-3">Mission Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Before we begin building the Procurement Command Center, we need to prepare our equipment by setting up 
              access to Azure Portal and Microsoft AI Foundry. This step will guide you through signing in to both platforms 
              and identifying your resource group that has been created for this session.
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
                  <h3 className="text-2xl font-semibold mb-2">Sign in to Azure Portal</h3>
                  <p className="text-gray-700 mb-4">
                    Go to the Azure Portal and sign in using your hackathon credentials.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Open your web browser and go to <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer" className="text-mission-primary hover:underline">https://portal.azure.com</a></li>
                    <li>You will be prompted to sign in</li>
                    <li>Sign in using your tech pass credentials</li>
                    <li>You will see the Azure Portal homepage</li>
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
                  <h3 className="text-2xl font-semibold mb-2">Go to Virtual machines</h3>
                  <p className="text-gray-700 mb-4">
                    &quot;Virtual machines&quot; may appear on your Azure Portal home page. In this case, just click on the button. Otherwise, look up Virtual machines in the search bar.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>On the Azure Portal home page, look for &quot;Virtual machines&quot;</li>
                    <li>If visible, click on it; otherwise search for &quot;Virtual machines&quot; in the search bar</li>
                  </ol>
                  <div className="mt-4">
                    <img src={`${import.meta.env.BASE_URL}images/stage-0-step-2-vm.png`} alt="Azure Portal Virtual machines" className="rounded-lg shadow-md border border-gray-200 max-w-full" />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Azure Portal with Virtual machines</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Click on the jumphost VM</h3>
                  <p className="text-gray-700 mb-4">
                    Click on the jumphost VM that your team has been assigned to (see Appendix A for your team&apos;s VM).
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>From the Virtual machines list, locate your team&apos;s jumphost VM</li>
                    <li>Click on it to open the VM landing page</li>
                  </ol>
                  <div className="mt-4">
                    <img src={`${import.meta.env.BASE_URL}images/stage-0-step-3.png`} alt="Jumphost VM selection" className="rounded-lg shadow-md border border-gray-200 max-w-full" />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Select your team&apos;s jumphost VM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Click on Connect via Bastion</h3>
                  <p className="text-gray-700 mb-4">
                    On the landing page for your team&apos;s VM, hover over &quot;Connect&quot; and click &quot;Connect via Bastion&quot;.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>On your team&apos;s VM page, find the Connect option</li>
                    <li>Hover over &quot;Connect&quot; and select &quot;Connect via Bastion&quot;</li>
                  </ol>
                  <div className="mt-4">
                    <img src={`${import.meta.env.BASE_URL}images/stage-0-step-4-bastion.png`} alt="Connect via Bastion" className="rounded-lg shadow-md border border-gray-200 max-w-full" />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Connect via Bastion option</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  5
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Connect via Bastion</h3>
                  <p className="text-gray-700 mb-4">
                    Protocol should be set to RDP. Port should be set to 3389. Authentication Type should be set to VM Password. Log in with your GCC AD credentials (not your usual Windows AD login). You might be prompted to change password on first log in.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
                    <p className="text-amber-900 font-medium">Note that each VM can only support two concurrent users. If more than two users try to access the VM, you will be prompted to boot one user out.</p>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Set Protocol to RDP, Port to 3389, Authentication Type to VM Password</li>
                    <li>Log in with your GCC AD credentials</li>
                    <li>Your VM should appear in a new window</li>
                  </ol>
                  <div className="mt-4">
                    <img src={`${import.meta.env.BASE_URL}images/stage-0-step-5.png`} alt="Connect via Bastion settings" className="rounded-lg shadow-md border border-gray-200 max-w-full" />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Bastion connection settings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  6
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Change GCC AD password (first-time log in only)</h3>
                  <p className="text-gray-700 mb-4">
                    Only for first-time log in for each user: Change your GCC AD password. Press <strong>Ctrl+Alt+End</strong> on your keyboard. (On the HP Dragonfly, this would be Ctrl+Alt+Function+Right button.) Change your password to your own password. This will be your new GCC AD password for the jumphost VM. Make sure to remember this password!
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Press Ctrl+Alt+End (or Ctrl+Alt+Function+Right on HP Dragonfly)</li>
                    <li>Change your password when prompted</li>
                    <li>Remember your new GCC AD password for future VM access</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Step 7 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  7
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Launch Microsoft Edge on your VM desktop</h3>
                  <p className="text-gray-700 mb-4">
                    On your VM desktop, open Microsoft Edge. You will use this browser to access Microsoft AI Foundry in the next step.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>On the VM desktop, launch Microsoft Edge</li>
                    <li>You will use this browser for Microsoft AI Foundry in Step 8</li>
                  </ol>
                  <div className="mt-4">
                    <img src={`${import.meta.env.BASE_URL}images/stage-0-step-7.png`} alt="Microsoft Edge on VM desktop" className="rounded-lg shadow-md border border-gray-200 max-w-full" />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Launch Microsoft Edge on VM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 8 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  8
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Navigate to Microsoft AI Foundry</h3>
                  <p className="text-gray-700 mb-4">
                    Sign in to Azure AI Foundry using your JTC email via the techpass.gov.sg organization.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Go to <a href="https://ai.azure.com" target="_blank" rel="noopener noreferrer" className="text-mission-primary hover:underline">https://ai.azure.com</a></li>
                    <li>Click on &quot;Sign in options&quot;, followed by &quot;Sign in to an organization&quot;</li>
                    <li>Type in &quot;techpass.gov.sg&quot;</li>
                    <li>Enter your JTC email on the techpass screen</li>
                  </ol>
                  <div className="mt-4">
                    <img src={`${import.meta.env.BASE_URL}images/stage-0-step-8.jpeg`} alt="Azure AI Foundry sign-in page with Sign in options" className="rounded-lg shadow-md border border-gray-200 max-w-full" />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Sign in to Azure AI Foundry — Sign in options</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 9 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-8"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  9
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Verify Setup Complete</h3>
                  <p className="text-gray-700 mb-4">
                    Confirm that you have successfully accessed Microsoft AI Foundry.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-mission-primary p-4 rounded-r-lg mb-4">
                    <p className="text-gray-800 font-medium">
                      Look for the project <strong>&quot;hackathon-project01&quot;</strong> — that is the project pre-created for you for this session.
                    </p>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>You should see the Microsoft AI Foundry page</li>
                    <li>Verify that you are logged in with the correct account</li>
                    <li>You should now have access to both Azure Portal and Microsoft AI Foundry</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-0-step-4.png`}
                      alt="Microsoft AI Foundry page"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Microsoft AI Foundry page</p>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <p className="text-green-800 font-semibold">
                      🎉 Congratulations! You have set up all the equipment you need to build Procurement Command Centre!
                    </p>
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
                <span>Successfully signed in to Azure Portal using hackathon credentials</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Navigated to Virtual machines and selected your team&apos;s jumphost VM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Connected via Bastion with GCC AD credentials</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Changed GCC AD password on first-time log in (if applicable)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Launched Microsoft Edge on VM desktop</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Navigated to Microsoft AI Foundry (ai.azure.com)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Verified access to Microsoft AI Foundry page</span>
              </li>
            </ul>
          </div>

          {/* Next Stage CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-mission-primary to-mission-secondary text-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">🎯 Ready for Stage 1?</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Stage 1: Vendor Scout Agent</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Now that your Azure environment is ready, you'll build an AI-powered agent with knowledge base 
                integration to match vendors with precision and deliver ranked recommendations. Stage 1 includes:
              </p>
              <ul className="space-y-2 text-blue-100 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span><strong>1.1 Provision Agent:</strong> Set up the AI model for vendor matching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span><strong>1.2 Upload instructions and knowledge base:</strong> Configure the knowledge base with vendor profiles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span><strong>1.3 Test:</strong> Validate the vendor matching agent</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/stages"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                View All Stages
              </Link>
              <Link
                to="/stage/1"
                className="px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-400/50 text-center"
              >
                Continue to Stage 1 →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

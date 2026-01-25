import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Stage2Step1() {
  const jsonSchema = `{
  "type": "object",
  "properties": {
    "transactionId": {
      "type": "string"
    },
    "action": {
      "type": "string"
    },
    "requester": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "role": {
          "type": "string"
        },
        "organizationName": {
          "type": "string"
        }
      }
    },
    "vendor": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "category": {
          "type": "string"
        },
        "serviceType": {
          "type": "string"
        }
      }
    },
    "rfp": {
      "type": "object",
      "properties": {
        "eventOrRequestTitle": {
          "type": "string"
        },
        "eventSummary": {
          "type": "string"
        },
        "expectedDeliveryDate": {
          "type": "string"
        },
        "itemsSummary": {
          "type": "string"
        },
        "notes": {
          "type": "string"
        }
      }
    },
    "metadata": {
      "type": "object",
      "properties": {
        "source": {
          "type": "string"
        },
        "timestamp": {
          "type": "string"
        }
      }
    }
  }
}`

  const emailTemplate = `Hello {{VendorName}},

We are currently reviewing vendors for an upcoming requirement and would like to request a proposal from your team.

Summary of Requirement / Event
{{EventSummary}}

Items and Quantities
{{ItemsSummary}}

Expected Delivery / Service Date
{{ExpectedDeliveryDate}}

We would appreciate it if you could include the following in your proposal:
- Pricing and quotation details
- Lead times and delivery approach
- Any assumptions or dependencies
- Validity period of the quotation

If you require any clarification, please feel free to reach out.

Thank you, and we look forward to your proposal.

Best regards,
&lt;Your team Name&gt;`

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
              📧 Stage 2.1: Navigate to Logic Apps and Build Workflows
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Call Sign:</span> RFP Automation
            </p>
            <p className="text-lg text-gray-600">
              Navigate to Logic Apps and build the necessary workflows for RFP automation. Create workflows that handle HTTP requests and send automated emails to vendors.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-blue-50 border-l-4 border-mission-primary p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-3">Mission Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              In this step, you'll create a Logic Apps workflow that automates RFP email distribution. You'll build a stateful workflow 
              that accepts HTTP requests with vendor and requirement data, then automatically sends professional proposal requests via email. 
              This workflow will integrate with the Vendor Scout Agent to enable seamless RFP automation.
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
                  <h3 className="text-2xl font-semibold mb-2">Access Azure Portal</h3>
                  <p className="text-gray-700 mb-4">
                    Go to the Azure Portal and ensure you're signed in with the account provided for this session.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Open your web browser and go to <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer" className="text-mission-primary hover:underline">https://portal.azure.com</a></li>
                    <li>Ensure you're signed in to the account given to you for this session</li>
                    <li>If you are not logged in, sign in with your credentials for this workshop</li>
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
                  <h3 className="text-2xl font-semibold mb-2">Navigate to Resource Group</h3>
                  <p className="text-gray-700 mb-4">
                    Go to the Resource group created for you for this session and access the Logic Apps.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Go to the Resource group created for you for this session</li>
                    <li>You will see the resource group page</li>
                    <li>Click on the logic apps pre-created for you in this Resource Group</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-2.png`}
                      alt="Resource group page with Logic Apps"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Resource group page showing Logic Apps</p>
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
                  <h3 className="text-2xl font-semibold mb-2">Create New Workflow</h3>
                  <p className="text-gray-700 mb-4">
                    On the Logic Apps page, create a new workflow.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>On the Logic Apps page, click on "Workflows" on the side pane</li>
                    <li>Click "Create" to create a new workflow</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-3.png`}
                      alt="Logic Apps page with Workflows and Create button"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Logic Apps page with Workflows option and Create button</p>
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
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Configure Workflow Type and Name</h3>
                  <p className="text-gray-700 mb-4">
                    Select the workflow type and provide a name for your workflow.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>On the "Create workflow" pop-up pane, select "Stateful"</li>
                    <li>Enter the Name: <strong>"RFP-email-automation"</strong></li>
                    <li>Complete the creation process</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-4.png`}
                      alt="Create workflow pop-up with Stateful option and name field"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Create workflow pop-up pane</p>
                  </div>
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
                  <h3 className="text-2xl font-semibold mb-2">Open Workflow Designer</h3>
                  <p className="text-gray-700 mb-4">
                    After the workflow is created, open it to access the designer page.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>After the workflow is created, click on the "RFP-email-automation" workflow</li>
                    <li>You will be brought to the "Designer" page</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  6
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Add HTTP Request Trigger</h3>
                  <p className="text-gray-700 mb-4">
                    Add a trigger to start the workflow when an HTTP request is received.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Click on the "Add a trigger" node</li>
                    <li>Add "When a HTTP request is made" under the "Request" trigger</li>
                    <li>Add this as a description for the trigger: <strong>"Use this trigger to start the RFP email"</strong></li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-6.png`}
                      alt="Add trigger node with HTTP request trigger"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Designer page with Add trigger node</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 7 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  7
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Configure Request Body JSON Schema</h3>
                  <p className="text-gray-700 mb-4">
                    Under the Request Body JSON schema box, insert the JSON schema that defines the structure of the incoming request.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-4">
                    <p className="text-yellow-800 font-semibold mb-2">📋 Copy and Paste JSON Schema</p>
                    <p className="text-yellow-700 text-sm">
                      Please copy the entire JSON schema below and paste it into the Request Body JSON schema box in the trigger configuration.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">JSON Schema to Copy:</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(jsonSchema)
                          alert('JSON schema copied to clipboard!')
                        }}
                        className="px-3 py-1 bg-mission-primary text-white rounded text-sm hover:bg-mission-primary/90 transition-colors"
                      >
                        📋 Copy All
                      </button>
                    </div>
                    <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono overflow-x-auto max-h-96 overflow-y-auto">
                      {jsonSchema}
                    </pre>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>In the trigger configuration, locate the "Request Body JSON schema" box</li>
                    <li>Copy the JSON schema shown above (use the "Copy All" button for convenience)</li>
                    <li>Paste the JSON schema into the Request Body JSON schema box</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-8.png`}
                      alt="Add action with Office 365 Outlook Send an E-mail (V2) option"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Add action with Office 365 Outlook connector</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 8 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  8
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Add Send Email Action</h3>
                  <p className="text-gray-700 mb-4">
                    Add an action to send the RFP email using Office 365 Outlook.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Click the "+" icon below the trigger node</li>
                    <li>Select "Add an action"</li>
                    <li>Look for the "Office 365 Outlook" connector</li>
                    <li>Add a "Send an E-mail (V2)" node</li>
                    <li>The pop-up side pane will request you to sign in - click "Sign in" and create the connection</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Step 9 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  9
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Configure Email To and Subject</h3>
                  <p className="text-gray-700 mb-4">
                    Configure the recipient email address and subject line for the RFP email.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>In the "Send an E-mail (V2)" action configuration, locate the "To" field</li>
                    <li>Click the Lightning symbol that pops up and choose "See more"</li>
                    <li>Select "email" from the dynamic content options (this will use the vendor email from the request)</li>
                    <li>In the "Subject" field, enter: <strong>"Request for quote from &lt;fill in your team name&gt;"</strong></li>
                    <li>Replace "&lt;fill in your team name&gt;" with your actual team name</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-10.png`}
                      alt="Email configuration with To and Subject fields"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Email action configuration showing To and Subject fields</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 10 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  10
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Configure Email Body Template</h3>
                  <p className="text-gray-700 mb-4">
                    Configure the email body with a professional template that will be dynamically populated with vendor and requirement information.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-4">
                    <p className="text-yellow-800 font-semibold mb-2">📋 Copy and Paste Email Template</p>
                    <p className="text-yellow-700 text-sm">
                      Please copy the email template below and paste it into the Body section of the email action. You will then replace the placeholders with dynamic content.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Email Template to Copy:</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(emailTemplate)
                          alert('Email template copied to clipboard!')
                        }}
                        className="px-3 py-1 bg-mission-primary text-white rounded text-sm hover:bg-mission-primary/90 transition-colors"
                      >
                        📋 Copy All
                      </button>
                    </div>
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono overflow-x-auto max-h-96 overflow-y-auto">
                      {emailTemplate}
                    </pre>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>In the "Send an E-mail (V2)" action configuration, locate the "Body" field</li>
                    <li>Copy the email template shown above (use the "Copy All" button for convenience)</li>
                    <li>Paste the template into the Body section</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Step 11 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  11
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Replace Dynamic Content in Email Body</h3>
                  <p className="text-gray-700 mb-4">
                    Replace all the placeholder text in {'{{ }}'} with matching dynamic content from the request.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Change all the text in {'{{ }}'} by replacing it with the matching dynamic content</li>
                    <li>Click on the Lightning symbol next to each placeholder</li>
                    <li>Select the matching dynamic content from the available options:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li><strong>{'{{'}VendorName{'}}'}</strong> → Select "name" from vendor object</li>
                        <li><strong>{'{{'}EventSummary{'}}'}</strong> → Select "eventSummary" from rfp object</li>
                        <li><strong>{'{{'}ItemsSummary{'}}'}</strong> → Select "itemsSummary" from rfp object</li>
                        <li><strong>{'{{'}ExpectedDeliveryDate{'}}'}</strong> → Select "expectedDeliveryDate" from rfp object</li>
                      </ul>
                    </li>
                    <li>Also replace "&lt;Your team Name&gt;" at the bottom with your actual team name</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-12.png`}
                      alt="Email body with dynamic content replacement example"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Example of replacing dynamic content in email body</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 12 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  12
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Save Workflow</h3>
                  <p className="text-gray-700 mb-4">
                    Save the workflow to complete the configuration.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>Click "Save" on the top task bar</li>
                  </ol>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-13.png`}
                      alt="Saved workflow showing HTTP URL"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Saved workflow with HTTP URL displayed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 13 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mb-8"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-mission-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  13
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">Note HTTP URL</h3>
                  <p className="text-gray-700 mb-4">
                    After saving, take note of the HTTP URL that will be used to trigger the workflow.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
                    <li>After saving, take note of the HTTP URL that will be generated</li>
                    <li>Copy and save this URL in a safe place for later use</li>
                  </ol>
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <p className="text-blue-800 font-semibold mb-2">💡 Important Note:</p>
                    <p className="text-blue-700 text-sm">
                      <strong>Important:</strong> This HTTP URL is very important - you will need it in the next stage to connect the workflow to the agent. 
                      The HTTP URL is generated after saving the workflow. It will be displayed in the trigger configuration. 
                      Make sure to copy this URL as you'll need it to connect the Vendor Scout Agent to this workflow in the next step.
                    </p>
                  </div>
                  <div className="mt-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/stage-2-1-step-14.png`}
                      alt="Complete workflow configuration"
                      className="rounded-lg shadow-md border border-gray-200 max-w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Complete workflow with trigger and email action</p>
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
                <span>Successfully accessed Azure Portal and signed in</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Navigated to the Resource group and accessed Logic Apps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Created a new stateful workflow named "RFP-email-automation"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Opened the workflow designer page</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Added "When a HTTP request is made" trigger with description</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Configured Request Body JSON schema in the trigger</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Added "Send an E-mail (V2)" action from Office 365 Outlook connector</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Signed in and created the Office 365 Outlook connection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Configured email "To" field with dynamic vendor email</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Configured email "Subject" with team name</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Pasted email template in the Body section</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Replaced all dynamic content placeholders ({'{{'}VendorName{'}}'}, {'{{'}EventSummary{'}}'}, {'{{'}ItemsSummary{'}}'}, {'{{'}ExpectedDeliveryDate{'}}'})</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Replaced "&lt;Your team Name&gt;" with actual team name</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Saved the workflow successfully</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☑</span>
                <span>Copied and saved the HTTP URL for use in the next stage</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-600 rounded">
              <p className="text-green-800 font-semibold">
                🎉 Congratulations! You have just built the Logic Apps workflow that will carry out the automated RFP email! Move on to the next step to connect this workflow to our agent when you're ready!
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
            <h2 className="text-3xl font-bold mb-4">🎯 Ready for Step 2.2?</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Step 2.2: Create OpenAPI Connections</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Now that your Logic Apps workflow is built, you'll create OpenAPI connections to link the Vendor Scout Agent 
                to the RFP automation workflow. This will enable the agent to trigger email workflows automatically.
              </p>
              <ul className="space-y-2 text-blue-100 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Create OpenAPI connection for the Logic Apps workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Connect the Vendor Scout Agent to the RFP automation workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <span>Configure the connection with the HTTP URL from your workflow</span>
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
                to="/stage/2/step/2.2"
                className="px-6 py-3 bg-white text-mission-primary rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Continue to Step 2.2 →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

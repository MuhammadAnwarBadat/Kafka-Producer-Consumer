// Import the Kafka client instance from the client module
const { kafka } = require("./client");
// Import the readline module to read input from the command line
const readline = require("readline");

// Create a readline interface for user input and output via the console
const rl = readline.createInterface({
  input: process.stdin,  // Use standard input (keyboard)
  output: process.stdout, // Use standard output (console)
});

// Asynchronous function to initialize the Kafka producer
async function init() {
  // Create a new Kafka producer instance
  const producer = kafka.producer();

  // Log the connection attempt and connect the producer
  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  // Prompt the user for input
  rl.setPrompt("> "); // Display prompt symbol
  rl.prompt(); // Wait for user input

  // Listen for the 'line' event, which triggers when the user enters input
  rl.on("line", async function (line) {
    // Split the input by space into riderName and location
    const [riderName, location] = line.split(" ");

    // Send a message to the "rider-updates" topic with partition logic based on location
    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          // Send the message to partition 0 if location is "north", otherwise to partition 1
          partition: location.toLowerCase() === "north" ? 0 : 1,
          key: "location-update", // Key for the message
          value: JSON.stringify({ name: riderName, location }), // Message payload as a JSON string
        },
      ],
    });
  })
  // Handle the 'close' event when the input stream is closed (e.g., Ctrl+C)
  .on("close", async () => {
    // Disconnect the producer when the input stream closes
    await producer.disconnect();
  });
}

// Call the init function to execute the Kafka producer logic
init();

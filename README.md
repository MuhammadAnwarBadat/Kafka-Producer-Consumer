---

## Kafka Application Setup Guide

Welcome to the Kafka Application setup guide. This application demonstrates the use of Apache Kafka for message streaming, utilizing KafkaJS to implement Kafka Consumer and Producer functionalities.

### Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (recommended version 14.x or higher)
- Docker (for running Kafka in a container)
- A basic understanding of Kafka concepts like topics, producers, and consumers.

### Getting Started

#### 1. Clone the Repository
First, clone the repository to your local machine using Git:
```bash
git clone https://github.com/MuhammadAnwarBadat/Kafka-Producer-Consumer.git
```
#### 2. Install Dependencies
Navigate to the project directory and install the necessary Node.js dependencies:
```bash
cd kafka-app
npm install
```

#### 3. Run Kafka using Docker
To run Kafka and Zookeeper using Docker, execute the following commands:

Start Zookeeper:
```bash
docker run -d --name zookeeper -p 2181:2181 zookeeper
```

Start Kafka:
```bash
docker run -d --name kafka -p 9092:9092 --env KAFKA_ZOOKEEPER_CONNECT=<YOUR IP ADDRESS>:2181 --env KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<YOUR IP ADDRESS>:9092 --env KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
```
Replace **\<YOUR IP ADDRESS\>** with the IP address of your machine if necessary.

### Running the Application

#### Start the Kafka Admin
Initialize topics and other administrative tasks:
```bash
node admin.js
```
This script connects to Kafka, creates the necessary topics, and then exits.

#### Start the Kafka Producer
To send messages to a Kafka topic:
```bash
node producer.js
```
Follow the on-screen prompts to input data. This script reads user input and sends it as messages to the Kafka topic.

#### Start the Kafka Consumer
To start consuming messages from the Kafka topic:
```bash
node consumer.js
```
This script continuously listens for new messages on the specified topic and logs them to the console.

### Usage Example
- Start the consumer script in one terminal.
- Start the producer script in another terminal.
- In the producer terminal, input a name and a location. For example:
  ```
  John north
  ```
  This sends a message to the Kafka topic, which is then picked up by the consumer.

### Troubleshooting

- **Issue: Docker doesn't start**  
  Ensure Docker is running on your system. Use `docker info` to check the status.

- **Issue: Kafka topics not found**  
  Make sure the `admin.js` script is run at least once before starting the producer or consumer to create necessary topics.

### Contributing

Contributions to this project are welcome! Please fork the repository and submit pull requests with your enhancements.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

---

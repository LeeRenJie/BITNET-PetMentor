# BITNET-PetMentor
![Workflow](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/PetMentor-Voice.jpg)
![Workflow](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/workflow.png)

# Tech Stack
- React
- Django
- Firebase
- Tensorflow
- Arduino IDE
- CockroachDB
- EdgeImpulse

# The problem PetMentor solves
PetMentor offers an all-inclusive platform that emphasizes transparency, traceability, and crowdsourced verification to produce unbiased health-related recommendations for pet parents/owners. The aim in building this platform is to create a system that can seamlessly integrate into the average pet parent’s life, and simplify informed decision-making. The platform is enhanced by IoT connected devices, an advanced AI, and a digital currency, which serves as the basis for a micro-economy rich with trusted pet products and services. Train you pet using our reinforcement learning devices which makes sure your pet learns things faster and better. The platform is enhanced by IoT connected devices, an advanced AI, and a digital currency, which serves as the basis for a micro-economy rich with trusted pet products and services. Other features would be as follows:
1.Machine learning on edge to detect for animal behavior and motion activities
2. Use TinyML voice and sound classification to understand animal health and mood
3. GPS and GPRS to make geofence feature to pet tracking
4. tinyML vision camera to detect if pets like cats or dogs are eating mud, wood chips, plastic and use vibration modules to assign habit building factors
5. Dashboard to connect nearby dogs and owners, compare their dog statistics with other breeds or same breed. Track pet through GPS feature in collar. Live dog activities tracking
All devices can share the data and with each transanction on the network the user gets paid for sharing the data in form of PetMentor bitcoin tokens.

# Challenges we ran into
- The main challenge was deciding devcie hardware platform and data collection part 
- For device hardware we were finding a multi-core ARM architecture capable of running two or more tinyML programs on separate cores but we could not make final fimware of combine two packages into a single program do due to time shortage. However we have explained how the project proceeds. 
- Also choosing tinyML engine or TensorflowLite paid off most of our jobs, we also tried to incorporate webapp for the dashboard features like pet-owners chatbox, pet health, status, etc.

# Tracks
- Data Science and AI (the basis of our project),
- Cloud (why?),
- Blockchain(why?),
- IoT (why?),
- Best Hardware Hack (as a part of IoT for implementing this project in IoT in pet collar),
- Best Beginner Hackers (Three out of four members in our team are first-timer in hackathons).

# Getting Started 
### Setup the repository to your local environment.
1. `fork` the repository - Creates a replica of repository to your local environment.
1. Clone the repository using `git clone https://github.com/YOUR-USERNAME/BITNET-PetMentor.git` - Downloads all repo files to your machine.
1. `cd BITNET-PetMentor/` - Takes you to the root directory of the project.

# Frontend 
Following are the steps to run the frontend of the BITNET-PetMentor. All the frontend code will go in the frontend directory.

- Navigate to `frontend` folder using `cd frontend/`
- Run `npm install`. It will install all the required packages and dependencies.'
- Configuring Firebase for chat function
- Go to your firebase console:
- Console > Authenthication > Sign-in method > Enable log in with Google
- Console > Project Overview > Project Settings > Scroll below and `Add App` > Copy the code for firebase.initializeApp > Paste it into chat.js 
- `firebase.initializeApp` stucture:
    ```javascript
    firebase.initializeApp({
      apiKey:
      authDomain:
      projectId:
      storageBucket:
      messagingSenderId: 
      appId: 
      measurementId:
      }); 
     ```
- Run `npm start` to run the server.
- Navigate to http://localhost:3000 to view it in the browser.


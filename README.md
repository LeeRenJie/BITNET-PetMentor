# BITNET-PetMentor
![Workflow](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/PetMentor-Voice.jpg)
![Workflow](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/PetMentorActivityMonitor.jpg)
![Workflow](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/workflow.png)

# Tech Stack
- React
- Django
- Firebase
- Tensorflow
- Arduino IDE
- CockroachDB
- EdgeImpulse

# Project For <img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/KU_hackfest.png" width="20%" />
# The problem PetMentor solves
PetMentor offers an all-inclusive platform that emphasizes transparency, traceability, and crowdsourced verification to produce unbiased health-related recommendations for pet parents/owners. The aim in building this platform is to create a system that can seamlessly integrate into the average pet parent’s life, and simplify informed decision-making. The platform is enhanced by IoT connected devices, an advanced AI, and a digital currency, which serves as the basis for a micro-economy rich with trusted pet products and services. Train you pet using our reinforcement learning devices which makes sure your pet learns things faster and better. The platform is enhanced by IoT connected devices, an advanced AI, and a digital currency, which serves as the basis for a micro-economy rich with trusted pet products and services. Other features would be as follows:

- Machine learning on edge to detect for animal behavior and motion activities
- Use TinyML voice and sound classification to understand animal health and mood
- GPS and GPRS to make geofence feature for pet tracking
- tinyML vision camera to detect if pets like cats or dogs are eating mud, wood chips, plastic and use buzz tone, vibration modules to assign habit building factors
- Dashboard to connect nearby dogs and owners, compare their dog statistics with other breeds or same breed. Track pet through GPS feature in collar. Live dog activities tracking
- All devices can share the data and with each transanction on the network the user gets paid for sharing the data in form of PetMentor bitcoin tokens.

# Detailed Documentations
- [Edge Impulse Motion Classifier For Pet Movement Recognition](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/PetMentor-ActivityRecognition/README.md)
- [PetMentor TinyML Program For Automatic Dog Clicker](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/PetMentor_PetClickerTraining/README.md)
- [Final Device Firmware](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/PetMentor_FinalDevice_Firmware/info.md)

# Challenges we ran into
- The main challenge was deciding devcie hardware platform and data collection part 
- For device hardware we were finding a multi-core ARM architecture capable of running two or more tinyML programs on separate cores but we could not make final fimware of combine two packages into a single program do due to time shortage. However we have explained how the project proceeds. 
- Also choosing tinyML engine or TensorflowLite paid off most of our jobs, we also tried to incorporate webapp for the dashboard features like pet-owners chatbox, pet health, status, etc.

# Tracks
- Data Science and AI 
    - PetMentor's AI will make data-driven pet care recommendations by performing a personalized assessment drawing from personal data, existing databases, and community supplied correlations. TinyMl based reinforcement behaviour learning.
- Cloud   
    - PetMentor devices are cloud connected and secured, with each data device collecting and reporting pet health, movement and location data to a unified user dashboard which makes easier to securely connect relevant veterinary professionals.
- Blockchain
    - PetMentor will use blockchain technology to empower its users to own and monetize their pet's data while protecting the privacy and the best interests of all participants on the platform.
- IoT 
    - PetMentor devices will feed data into PetMentor's AI web-dashboard, data owners will receive bitcoin tokens in compensation just like any other data source. Our pet-specific IoT devices would too have GPS, feature to measure heart rate. These devices will encourage non-technical people to join the PetMentor platform making it simple to monetize their data. Our device also runs tinyML algorithms locally to force good habits by generating a buzz tone if the pet trainer voice commands are obeyed by the pet.
- Open Innovation
    - When the world is busy fighting covid we want to stop another zoonotic diseases by ensuring our pets are safe and help them learn new tricks anytime, anywhere even during lockdowns. Making pet owners feel proud of their pet data sharing and earning bitcoin tokens too in the transaction.
- Best Hardware Hack
    - Running tinyML algorithms in tiny devices are fun especially with your pets to train and monitor their activities. Working with Arduino and EdgeImpulse seems like a perfect combination of mind and body. 
- Best Beginner Hackers 
    - Three out of four members in our team are first-timer in hackathons which is more than 50%.

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

# Backend

# BITNET-PetMentor
![Workflow](https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/workflow.png)

# Tech Stack
- React
- Django
- Firebase

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


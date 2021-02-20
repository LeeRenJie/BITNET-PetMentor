<h1>PetMentor TinyML program for automatic dog clicker</h1>

Clicker training, or mark and reward, is a form of positive reinforcement dog training. A clicker is simply a small mechanical noisemaker. The techniques are based on the science of animal learning, which says that behaviors that are rewarded are more likely to be repeated in the future. In our application, moves like sit, jump, and rollover are indicated with different lights and buzzer tones for feedback. Whenever our pet performs the desired trick, a buzzer tone is played to reinforce the behaviour, cookies and treats can also be brought into play.

<img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/12/24120642/labrador-retriever-with-man-training-in-autumn-field.jpg" height="300" width="300"> | <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/12/24112853/Husky-Getting-a-Treat.jpg" height="300" width="300"> | 
<img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/12/24120922/AdobeStock_181053145.jpg" height="300" width="300">

<a href="https://www.akc.org/expert-advice/training/clicker-training-your-dog-mark-and-reward/">American Kennel Club - Mark & Reward: Using Clicker Training to Communicate With Your Dog</a>

<h2> Building Instructions </h2>

The smart dog collar is based on Arduino Nano BLE 33 Sense Development board which runs a faster processor for onboard DSP algorithms and can run TensflowLite binaries as well. The idea is very simple, the first part of device runs Voice command recognition program to listen for 6 pet training commands like sleep, jump, sit, roll, stop, run. We use Edge Impulse Studio to train the Neural Net and optimized binary file for device. 

<img src="https://pbs.twimg.com/media/EIzb-VrWwAAGwmu.jpg" height="300" width="300">|<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/PetMentor-Voice.jpg" height="300" width="600">



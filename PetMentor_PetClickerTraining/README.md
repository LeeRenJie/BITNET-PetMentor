<h1>PetMentor TinyML program for automatic dog clicker</h1>

Clicker training, or mark and reward, is a form of positive reinforcement dog training. A clicker is simply a small mechanical noisemaker. The techniques are based on the science of animal learning, which says that behaviors that are rewarded are more likely to be repeated in the future. In our application, moves like sit, jump, and rollover are indicated with different lights and buzzer tones for feedback. Whenever our pet performs the desired trick, a buzzer tone is played to reinforce the behaviour, cookies and treats can also be brought into play.

<img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/12/24120642/labrador-retriever-with-man-training-in-autumn-field.jpg" height="300" width="320"> | <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/12/24112853/Husky-Getting-a-Treat.jpg" height="300" width="320"> | 
<img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/12/24120922/AdobeStock_181053145.jpg" height="300" width="320">

<a href="https://www.akc.org/expert-advice/training/clicker-training-your-dog-mark-and-reward/">American Kennel Club - Mark & Reward: Using Clicker Training to Communicate With Your Dog</a>

<h2> Building Instructions </h2>

The smart dog collar is based on Arduino Nano BLE 33 Sense Development board which runs a faster processor for onboard DSP algorithms and can run TensflowLite binaries as well. The idea is very simple, the first part of device runs Voice command recognition program to listen for 6 pet training commands like sleep, jump, sit, roll, stop, run. We use Edge Impulse Studio to train the Neural Net and optimized binary file for device. 

<img src="https://pbs.twimg.com/media/EIzb-VrWwAAGwmu.jpg" height="350" width="400">|<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/PetMentor-Voice.jpg" height="350" width="600">

The first step is collecting .wav sound files for the utterances of those commands for training in EdgeImpulse Studio. If you have those voice command dataset you can skip sreaming data via edge impulse data uploader for Arduino Nano 33 BLE Sense. Note: Due to time and resource limitation, we are only training device to recognise two command out of six, those are stop and go. 

<h3>This is how your uploaded data looks like in EdgeImpulse Studio.</h3>
<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/DataUploaderAndLabels.jpg">

<h3>Creating the Impulse to train the data on Neural Networks.</h3>
<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/ImpulseTraining.jpg">
With the data set in place you can design an impulse. An impulse takes the raw data, slices it up in smaller windows, uses signal processing blocks to extract features, and then uses a learning block to classify new data. Signal processing blocks always return the same values for the same input and are used to make raw data easier to process, while learning blocks learn from past experiences. For this tutorial we'll use the "MFCC" signal processing block. MFCC stands for Mel Frequency Cepstral Coefficients. We'll then pass this simplified audio data into a Neural Network block, which will learn to distinguish between the three classes of audio.

<h3>Training the model with 100 epoch.</h3>
<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/2021-02-20-22-30-04.gif">





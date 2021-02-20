<h1>Edge Impulse Motion Classifier for pet movement recognition</h1>

<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/PetMentorActivityMonitor.jpg">
<pre></pre>
The concept for this is very simple, we utilize the IMU sensor data to recognise different pet activity. Moreover we plan to build activity detection and classification for pet overall health monitoring as well with our web-application. 

<h2>Building Instructions</h2>
First of all let us gather some IMU data, for that we use data forwader of EdgeImpulse studio and write a simple program to Serial.print() x,y,x accelerometer readings. Below is the process of data acquisition. Download Edge Impulse CLI via mentioned commands
<pre><b>$ npm install -g edge-impulse-cli</b></pre>
<b>Run Serial daemon:</b>The daemon is used to onboard new devices, configure upload settings, and acts as a proxy for devices without an IP connection. To use the daemon, connect an Edge Impulse developer kit to your computer and run: 
<pre><b>$ edge-impulse-daemon</b></pre>
<b>Data forwarder:</b> The data forwarder is used to easily relay data from any device to Edge Impulse over serial. Devices write sensor values over a serial connection, and the data forwarder collects the data, signs the data and sends the data to the ingestion service.
<pre><b>$ edge-impulse-data-forwarder</b></pre>

<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/2021-02-21-01-57-23.gif">

<h2>Making our Impulse for pet motion recognition</h2>

<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/Motionrecognition.png">
We are using Spectral Analysis block for processing IMU motion activities data. This block applies a filter, performs spectral analysis on the signal, and extracts frequency and spectral power data. Then we'll use a 'Neural Network' learning block, that takes these spectral features and learns to distinguish between the four (stop, go, sleep, jump) classes.

<h2>Analyzing Spectral features</h2>
<img src="https://github.com/LeeRenJie/BITNET-PetMentor/blob/master/backend/bitnet_assets/Spectrafeatures.gif">

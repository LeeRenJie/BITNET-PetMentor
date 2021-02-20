<h1>Running your model locally on any newer MCU with C++11 compiler support</h1> 

This packages all your signal processing blocks, configuration and learning blocks up into a single package. You can include this package in your own application to run the impulse locally. The library does not have any external dependencies and can be built with any C++11 compiler.

<h2>Input to the run_classifier function</h2>
The input to the run_classifier function is always a signal_t structure with raw sensor values. This structure has two properties:
1. <b>total_length</b> - the total number of values. This should be equal to EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE (from model_metadata.h). E.g. if you have 3 sensor axes, 100Hz sensor data, and 2 seconds of data this should be 600.
get_data - a function that retrieves slices of data required by the DSP process. This is used in some DSP algorithms (like all audio-based ones) to page in the required data, and thus saves memory. Using this function you can store (f.e.) the raw data in flash or external RAM, and page it in when required.
F.e. this is how you would page in data from flash:

Directly quantize image data
If you're doing image classification and have a quantized model, the data is automatically quantized when reading the data from the signal to save memory. This is automatically enabled when you call run_impulse. To control the size of the buffer that's used to read from the signal in this case you can set the EI_DSP_IMAGE_BUFFER_STATIC_SIZE macro (which also allocates the buffer statically).

Static allocation
To statically allocate the neural network model, set this macro:

EI_CLASSIFIER_ALLOCATION_STATIC=1
Additionally we support full static allocation for quantized image models. To do so set this macro:

EI_DSP_IMAGE_BUFFER_STATIC_SIZE=1024
 

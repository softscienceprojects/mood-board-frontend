#Mood Board

Mood board is a Rails API that uses the Parallel Dots Emotion Analysis API (v4) to analyse the emotional tone of user-submitted messages. After the message has been analysed, each entry is given a hexadecimal colour based on the presence of each 'mood' from the analysis. The higher the ranking from the analysis API, the greater the presence of that colour.

The colours and emotions are as follows:  
R: Angry  
R: Fear  
G: Happy  
G: Excited  
B: Sad  
B: Bored  

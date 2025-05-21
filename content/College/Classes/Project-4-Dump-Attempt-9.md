
LSTM attempt Bidirectional  - 150 epochs
Gets up to 77% train and 75% test on epoch 78, stagnates there and sloooowly increases up to 80.1% and 78.96% on epoch 150
- I copied and pasted this, and it describes it very similarly?

- Batch = 2048
- LR = 3e-5
- Hidden = 256
- Layers = 2 
- Bidirectional = True
- Dropout = 0.5


```
torch running with cuda
torch running with cuda
torch running with cuda
************ Start ************
dataset: Movie Reviews and Ratings , method: RNN , setting: train and test , result: saver , evaluation: accuracy
method running...
--start training...
.vector_cache/glove.6B.zip: 862MB [02:39, 5.41MB/s]               
100% 399999/400000 [00:18<00:00, 21154.79it/s]
23973 unknown words out of a 97266 vocab
0
evaluating performance...

Epoch: 0 Accuracy in batch of size 2048 : 0.48291015625 Loss: 0.6934759616851807
evaluating performance...
Test Accuracy: 0.49968
1
evaluating performance...

Epoch: 1 Accuracy in batch of size 2048 : 0.53369140625 Loss: 0.6926542520523071
2
evaluating performance...

Epoch: 2 Accuracy in batch of size 2048 : 0.513671875 Loss: 0.6928986310958862
evaluating performance...
Test Accuracy: 0.50652
3
evaluating performance...

Epoch: 3 Accuracy in batch of size 2048 : 0.51611328125 Loss: 0.6927064657211304
4
evaluating performance...

Epoch: 4 Accuracy in batch of size 2048 : 0.5068359375 Loss: 0.6931322813034058
evaluating performance...
Test Accuracy: 0.50604
5
evaluating performance...

Epoch: 5 Accuracy in batch of size 2048 : 0.48046875 Loss: 0.6934247016906738
6
evaluating performance...

Epoch: 6 Accuracy in batch of size 2048 : 0.501953125 Loss: 0.6929331421852112
evaluating performance...
Test Accuracy: 0.50616
7
evaluating performance...

Epoch: 7 Accuracy in batch of size 2048 : 0.501953125 Loss: 0.6927833557128906
8
evaluating performance...

Epoch: 8 Accuracy in batch of size 2048 : 0.51416015625 Loss: 0.6924601793289185
evaluating performance...
Test Accuracy: 0.50612
9
evaluating performance...

Epoch: 9 Accuracy in batch of size 2048 : 0.50732421875 Loss: 0.692533016204834
10
evaluating performance...

Epoch: 10 Accuracy in batch of size 2048 : 0.50146484375 Loss: 0.6927482485771179
evaluating performance...
Test Accuracy: 0.5062
11
evaluating performance...

Epoch: 11 Accuracy in batch of size 2048 : 0.5107421875 Loss: 0.6922647953033447
12
evaluating performance...

Epoch: 12 Accuracy in batch of size 2048 : 0.51953125 Loss: 0.6917253136634827
evaluating performance...
Test Accuracy: 0.50652
13
evaluating performance...

Epoch: 13 Accuracy in batch of size 2048 : 0.5087890625 Loss: 0.6917424201965332
14
evaluating performance...

Epoch: 14 Accuracy in batch of size 2048 : 0.505859375 Loss: 0.6914740800857544
evaluating performance...
Test Accuracy: 0.50652
15
evaluating performance...

Epoch: 15 Accuracy in batch of size 2048 : 0.50244140625 Loss: 0.691604495048523
16
evaluating performance...

Epoch: 16 Accuracy in batch of size 2048 : 0.5205078125 Loss: 0.6906434893608093
evaluating performance...
Test Accuracy: 0.50736
17
evaluating performance...

Epoch: 17 Accuracy in batch of size 2048 : 0.5244140625 Loss: 0.6893516182899475
18
evaluating performance...

Epoch: 18 Accuracy in batch of size 2048 : 0.4892578125 Loss: 0.6906793713569641
evaluating performance...
Test Accuracy: 0.51072
19
evaluating performance...

Epoch: 19 Accuracy in batch of size 2048 : 0.529296875 Loss: 0.6854020953178406
20
evaluating performance...

Epoch: 20 Accuracy in batch of size 2048 : 0.5205078125 Loss: 0.6867988109588623
evaluating performance...
Test Accuracy: 0.53048
21
evaluating performance...

Epoch: 21 Accuracy in batch of size 2048 : 0.54638671875 Loss: 0.6749871969223022
22
evaluating performance...

Epoch: 22 Accuracy in batch of size 2048 : 0.55322265625 Loss: 0.6736152172088623
evaluating performance...
Test Accuracy: 0.53684
23
evaluating performance...

Epoch: 23 Accuracy in batch of size 2048 : 0.5458984375 Loss: 0.6772003173828125
24
evaluating performance...

Epoch: 24 Accuracy in batch of size 2048 : 0.55029296875 Loss: 0.6751911640167236
evaluating performance...
Test Accuracy: 0.5388
25
evaluating performance...

Epoch: 25 Accuracy in batch of size 2048 : 0.5693359375 Loss: 0.6660807132720947
26
evaluating performance...

Epoch: 26 Accuracy in batch of size 2048 : 0.56201171875 Loss: 0.6708775758743286
evaluating performance...
Test Accuracy: 0.56072
27
evaluating performance...

Epoch: 27 Accuracy in batch of size 2048 : 0.61474609375 Loss: 0.6488282680511475
28
evaluating performance...

Epoch: 28 Accuracy in batch of size 2048 : 0.68212890625 Loss: 0.6024949550628662
evaluating performance...
Test Accuracy: 0.66684
29
evaluating performance...

Epoch: 29 Accuracy in batch of size 2048 : 0.70703125 Loss: 0.5964356660842896
30
evaluating performance...

Epoch: 30 Accuracy in batch of size 2048 : 0.68896484375 Loss: 0.6010889410972595
evaluating performance...
Test Accuracy: 0.69356
31
evaluating performance...

Epoch: 31 Accuracy in batch of size 2048 : 0.71826171875 Loss: 0.6139215230941772
32
evaluating performance...

Epoch: 32 Accuracy in batch of size 2048 : 0.7412109375 Loss: 0.56959068775177
evaluating performance...
Test Accuracy: 0.7194
33
evaluating performance...

Epoch: 33 Accuracy in batch of size 2048 : 0.6728515625 Loss: 0.6249262094497681
34
evaluating performance...

Epoch: 34 Accuracy in batch of size 2048 : 0.73828125 Loss: 0.5708609819412231
evaluating performance...
Test Accuracy: 0.72756
35
evaluating performance...

Epoch: 35 Accuracy in batch of size 2048 : 0.716796875 Loss: 0.5880758762359619
36
evaluating performance...

Epoch: 36 Accuracy in batch of size 2048 : 0.7236328125 Loss: 0.5792627334594727
evaluating performance...
Test Accuracy: 0.72236
37
evaluating performance...

Epoch: 37 Accuracy in batch of size 2048 : 0.74658203125 Loss: 0.5540421009063721
38
evaluating performance...

Epoch: 38 Accuracy in batch of size 2048 : 0.7255859375 Loss: 0.5740175247192383
evaluating performance...
Test Accuracy: 0.72932
39
evaluating performance...

Epoch: 39 Accuracy in batch of size 2048 : 0.751953125 Loss: 0.5590519905090332
40
evaluating performance...

Epoch: 40 Accuracy in batch of size 2048 : 0.7333984375 Loss: 0.5696041584014893
evaluating performance...
Test Accuracy: 0.70424
41
evaluating performance...

Epoch: 41 Accuracy in batch of size 2048 : 0.59765625 Loss: 0.7007777690887451
42
evaluating performance...

Epoch: 42 Accuracy in batch of size 2048 : 0.60400390625 Loss: 0.6634621620178223
evaluating performance...
Test Accuracy: 0.59388
43
evaluating performance...

Epoch: 43 Accuracy in batch of size 2048 : 0.6435546875 Loss: 0.6288725137710571
44
evaluating performance...

Epoch: 44 Accuracy in batch of size 2048 : 0.671875 Loss: 0.607274055480957
evaluating performance...
Test Accuracy: 0.666
45
evaluating performance...

Epoch: 45 Accuracy in batch of size 2048 : 0.71484375 Loss: 0.5851368308067322
46
evaluating performance...

Epoch: 46 Accuracy in batch of size 2048 : 0.73291015625 Loss: 0.5737804174423218
evaluating performance...
Test Accuracy: 0.7124
47
evaluating performance...

Epoch: 47 Accuracy in batch of size 2048 : 0.732421875 Loss: 0.5765681862831116
48
evaluating performance...

Epoch: 48 Accuracy in batch of size 2048 : 0.73291015625 Loss: 0.5725311636924744
evaluating performance...
Test Accuracy: 0.71256
49
evaluating performance...

Epoch: 49 Accuracy in batch of size 2048 : 0.724609375 Loss: 0.583369791507721
50
evaluating performance...

Epoch: 50 Accuracy in batch of size 2048 : 0.73779296875 Loss: 0.58289635181427
evaluating performance...
Test Accuracy: 0.73364
51
evaluating performance...

Epoch: 51 Accuracy in batch of size 2048 : 0.75439453125 Loss: 0.5743452906608582
52
evaluating performance...

Epoch: 52 Accuracy in batch of size 2048 : 0.755859375 Loss: 0.5573635101318359
evaluating performance...
Test Accuracy: 0.73596
53
evaluating performance...

Epoch: 53 Accuracy in batch of size 2048 : 0.7392578125 Loss: 0.5882179141044617
54
evaluating performance...

Epoch: 54 Accuracy in batch of size 2048 : 0.7578125 Loss: 0.5649933815002441
evaluating performance...
Test Accuracy: 0.7412
55
evaluating performance...

Epoch: 55 Accuracy in batch of size 2048 : 0.75634765625 Loss: 0.5568566918373108
56
evaluating performance...

Epoch: 56 Accuracy in batch of size 2048 : 0.7587890625 Loss: 0.5522128343582153
evaluating performance...
Test Accuracy: 0.7432
57
evaluating performance...

Epoch: 57 Accuracy in batch of size 2048 : 0.75341796875 Loss: 0.549231231212616
58
evaluating performance...

Epoch: 58 Accuracy in batch of size 2048 : 0.76806640625 Loss: 0.538536012172699
evaluating performance...
Test Accuracy: 0.74428
59
evaluating performance...

Epoch: 59 Accuracy in batch of size 2048 : 0.74951171875 Loss: 0.5477837324142456
60
evaluating performance...

Epoch: 60 Accuracy in batch of size 2048 : 0.74169921875 Loss: 0.5603054761886597
evaluating performance...
Test Accuracy: 0.73732
61
evaluating performance...

Epoch: 61 Accuracy in batch of size 2048 : 0.75537109375 Loss: 0.5436538457870483
62
evaluating performance...

Epoch: 62 Accuracy in batch of size 2048 : 0.74755859375 Loss: 0.5543311834335327
evaluating performance...
Test Accuracy: 0.74732
63
evaluating performance...

Epoch: 63 Accuracy in batch of size 2048 : 0.75732421875 Loss: 0.549230694770813
64
evaluating performance...

Epoch: 64 Accuracy in batch of size 2048 : 0.7509765625 Loss: 0.5440036654472351
evaluating performance...
Test Accuracy: 0.7444
65
evaluating performance...

Epoch: 65 Accuracy in batch of size 2048 : 0.759765625 Loss: 0.5419912338256836
66
evaluating performance...

Epoch: 66 Accuracy in batch of size 2048 : 0.76806640625 Loss: 0.5319458246231079
evaluating performance...
Test Accuracy: 0.75068
67
evaluating performance...

Epoch: 67 Accuracy in batch of size 2048 : 0.7646484375 Loss: 0.5281806588172913
68
evaluating performance...

Epoch: 68 Accuracy in batch of size 2048 : 0.75244140625 Loss: 0.5399856567382812
evaluating performance...
Test Accuracy: 0.7486
69
evaluating performance...

Epoch: 69 Accuracy in batch of size 2048 : 0.75146484375 Loss: 0.5408267378807068
70
evaluating performance...

Epoch: 70 Accuracy in batch of size 2048 : 0.7783203125 Loss: 0.5233606696128845
evaluating performance...
Test Accuracy: 0.75168
71
evaluating performance...

Epoch: 71 Accuracy in batch of size 2048 : 0.759765625 Loss: 0.5399463176727295
72
evaluating performance...

Epoch: 72 Accuracy in batch of size 2048 : 0.76513671875 Loss: 0.5294749140739441
evaluating performance...
Test Accuracy: 0.75252
73
evaluating performance...

Epoch: 73 Accuracy in batch of size 2048 : 0.77783203125 Loss: 0.5158849954605103
74
evaluating performance...

Epoch: 74 Accuracy in batch of size 2048 : 0.7841796875 Loss: 0.5112022161483765
evaluating performance...
Test Accuracy: 0.75292
75
evaluating performance...

Epoch: 75 Accuracy in batch of size 2048 : 0.7685546875 Loss: 0.5168603658676147
76
evaluating performance...

Epoch: 76 Accuracy in batch of size 2048 : 0.79443359375 Loss: 0.4934374690055847
evaluating performance...
Test Accuracy: 0.75364
77
evaluating performance...

Epoch: 77 Accuracy in batch of size 2048 : 0.76513671875 Loss: 0.5363000631332397
78
evaluating performance...

Epoch: 78 Accuracy in batch of size 2048 : 0.77197265625 Loss: 0.5208666920661926
evaluating performance...
Test Accuracy: 0.75428
79
evaluating performance...

Epoch: 79 Accuracy in batch of size 2048 : 0.7666015625 Loss: 0.531282901763916
80
evaluating performance...

Epoch: 80 Accuracy in batch of size 2048 : 0.7685546875 Loss: 0.5282087326049805
evaluating performance...
Test Accuracy: 0.75384
81
evaluating performance...

Epoch: 81 Accuracy in batch of size 2048 : 0.77392578125 Loss: 0.5124440789222717
82
evaluating performance...

Epoch: 82 Accuracy in batch of size 2048 : 0.763671875 Loss: 0.5212860107421875
evaluating performance...
Test Accuracy: 0.75248
83
evaluating performance...

Epoch: 83 Accuracy in batch of size 2048 : 0.7734375 Loss: 0.5155371427536011
84
evaluating performance...

Epoch: 84 Accuracy in batch of size 2048 : 0.77392578125 Loss: 0.5283727645874023
evaluating performance...
Test Accuracy: 0.75556
85
evaluating performance...

Epoch: 85 Accuracy in batch of size 2048 : 0.78369140625 Loss: 0.5031077861785889
86
evaluating performance...

Epoch: 86 Accuracy in batch of size 2048 : 0.76904296875 Loss: 0.5209384560585022
evaluating performance...
Test Accuracy: 0.75456
87
evaluating performance...

Epoch: 87 Accuracy in batch of size 2048 : 0.79150390625 Loss: 0.4958067536354065
88
evaluating performance...

Epoch: 88 Accuracy in batch of size 2048 : 0.7783203125 Loss: 0.5141457319259644
evaluating performance...
Test Accuracy: 0.76036
89
evaluating performance...

Epoch: 89 Accuracy in batch of size 2048 : 0.76708984375 Loss: 0.518721878528595
90
evaluating performance...

Epoch: 90 Accuracy in batch of size 2048 : 0.77099609375 Loss: 0.5085906386375427
evaluating performance...
Test Accuracy: 0.75768
91
evaluating performance...

Epoch: 91 Accuracy in batch of size 2048 : 0.76025390625 Loss: 0.515673041343689
92
evaluating performance...

Epoch: 92 Accuracy in batch of size 2048 : 0.79541015625 Loss: 0.49297845363616943
evaluating performance...
Test Accuracy: 0.76284
93
evaluating performance...

Epoch: 93 Accuracy in batch of size 2048 : 0.78076171875 Loss: 0.5116029381752014
94
evaluating performance...

Epoch: 94 Accuracy in batch of size 2048 : 0.779296875 Loss: 0.5066297054290771
evaluating performance...
Test Accuracy: 0.76296
95
evaluating performance...

Epoch: 95 Accuracy in batch of size 2048 : 0.77734375 Loss: 0.5100122690200806
96
evaluating performance...

Epoch: 96 Accuracy in batch of size 2048 : 0.7724609375 Loss: 0.5248238444328308
evaluating performance...
Test Accuracy: 0.76376
97
evaluating performance...

Epoch: 97 Accuracy in batch of size 2048 : 0.78125 Loss: 0.5043687224388123
98
evaluating performance...

Epoch: 98 Accuracy in batch of size 2048 : 0.7666015625 Loss: 0.5309299826622009
evaluating performance...
Test Accuracy: 0.76452
99
evaluating performance...

Epoch: 99 Accuracy in batch of size 2048 : 0.7802734375 Loss: 0.5004246830940247
100
evaluating performance...

Epoch: 100 Accuracy in batch of size 2048 : 0.77099609375 Loss: 0.5246583819389343
evaluating performance...
Test Accuracy: 0.76352
101
evaluating performance...

Epoch: 101 Accuracy in batch of size 2048 : 0.76220703125 Loss: 0.5384435057640076
102
evaluating performance...

Epoch: 102 Accuracy in batch of size 2048 : 0.7724609375 Loss: 0.5269254446029663
evaluating performance...
Test Accuracy: 0.7652
103
evaluating performance...

Epoch: 103 Accuracy in batch of size 2048 : 0.77880859375 Loss: 0.5158458948135376
104
evaluating performance...

Epoch: 104 Accuracy in batch of size 2048 : 0.78466796875 Loss: 0.4981696605682373
evaluating performance...
Test Accuracy: 0.76624
105
evaluating performance...

Epoch: 105 Accuracy in batch of size 2048 : 0.79541015625 Loss: 0.48965609073638916
106
evaluating performance...

Epoch: 106 Accuracy in batch of size 2048 : 0.79443359375 Loss: 0.4848872423171997
evaluating performance...
Test Accuracy: 0.76788
107
evaluating performance...

Epoch: 107 Accuracy in batch of size 2048 : 0.77783203125 Loss: 0.5029799342155457
108
evaluating performance...

Epoch: 108 Accuracy in batch of size 2048 : 0.8056640625 Loss: 0.47319263219833374
evaluating performance...
Test Accuracy: 0.76868
109
evaluating performance...

Epoch: 109 Accuracy in batch of size 2048 : 0.78955078125 Loss: 0.4914991855621338
110
evaluating performance...

Epoch: 110 Accuracy in batch of size 2048 : 0.78515625 Loss: 0.4941611886024475
evaluating performance...
Test Accuracy: 0.76892
111
evaluating performance...

Epoch: 111 Accuracy in batch of size 2048 : 0.80419921875 Loss: 0.46906036138534546
112
evaluating performance...

Epoch: 112 Accuracy in batch of size 2048 : 0.79541015625 Loss: 0.4878866672515869
evaluating performance...
Test Accuracy: 0.77012
113
evaluating performance...

Epoch: 113 Accuracy in batch of size 2048 : 0.78662109375 Loss: 0.49138379096984863
114
evaluating performance...

Epoch: 114 Accuracy in batch of size 2048 : 0.779296875 Loss: 0.4977504312992096
evaluating performance...
Test Accuracy: 0.76904
115
evaluating performance...

Epoch: 115 Accuracy in batch of size 2048 : 0.7900390625 Loss: 0.48404139280319214
116
evaluating performance...

Epoch: 116 Accuracy in batch of size 2048 : 0.79833984375 Loss: 0.5019073486328125
evaluating performance...
Test Accuracy: 0.77308
117
evaluating performance...

Epoch: 117 Accuracy in batch of size 2048 : 0.79296875 Loss: 0.4774886965751648
118
evaluating performance...

Epoch: 118 Accuracy in batch of size 2048 : 0.7919921875 Loss: 0.4898722767829895
evaluating performance...
Test Accuracy: 0.77484
119
evaluating performance...

Epoch: 119 Accuracy in batch of size 2048 : 0.78076171875 Loss: 0.4912572205066681
120
evaluating performance...

Epoch: 120 Accuracy in batch of size 2048 : 0.79443359375 Loss: 0.4972730576992035
evaluating performance...
Test Accuracy: 0.77508
121
evaluating performance...

Epoch: 121 Accuracy in batch of size 2048 : 0.791015625 Loss: 0.48983675241470337
122
evaluating performance...

Epoch: 122 Accuracy in batch of size 2048 : 0.80126953125 Loss: 0.48803457617759705
evaluating performance...
Test Accuracy: 0.77536
123
evaluating performance...

Epoch: 123 Accuracy in batch of size 2048 : 0.79638671875 Loss: 0.4854810833930969
124
evaluating performance...

Epoch: 124 Accuracy in batch of size 2048 : 0.7978515625 Loss: 0.4808216691017151
evaluating performance...
Test Accuracy: 0.77428
125
evaluating performance...

Epoch: 125 Accuracy in batch of size 2048 : 0.79833984375 Loss: 0.46794354915618896
126
evaluating performance...

Epoch: 126 Accuracy in batch of size 2048 : 0.80029296875 Loss: 0.47740501165390015
evaluating performance...
Test Accuracy: 0.7786
127
evaluating performance...

Epoch: 127 Accuracy in batch of size 2048 : 0.80224609375 Loss: 0.4803348779678345
128
evaluating performance...

Epoch: 128 Accuracy in batch of size 2048 : 0.7900390625 Loss: 0.48752981424331665
evaluating performance...
Test Accuracy: 0.77656
129
evaluating performance...

Epoch: 129 Accuracy in batch of size 2048 : 0.798828125 Loss: 0.47813838720321655
130
evaluating performance...

Epoch: 130 Accuracy in batch of size 2048 : 0.8046875 Loss: 0.4664357006549835
evaluating performance...
Test Accuracy: 0.77712
131
evaluating performance...

Epoch: 131 Accuracy in batch of size 2048 : 0.79931640625 Loss: 0.47225266695022583
132
evaluating performance...

Epoch: 132 Accuracy in batch of size 2048 : 0.79443359375 Loss: 0.4744194447994232
evaluating performance...
Test Accuracy: 0.77788
133
evaluating performance...

Epoch: 133 Accuracy in batch of size 2048 : 0.80322265625 Loss: 0.4732412099838257
134
evaluating performance...

Epoch: 134 Accuracy in batch of size 2048 : 0.818359375 Loss: 0.45650774240493774
evaluating performance...
Test Accuracy: 0.7774
135
evaluating performance...

Epoch: 135 Accuracy in batch of size 2048 : 0.78955078125 Loss: 0.503957211971283
136
evaluating performance...

Epoch: 136 Accuracy in batch of size 2048 : 0.791015625 Loss: 0.47773057222366333
evaluating performance...
Test Accuracy: 0.77784
137
evaluating performance...

Epoch: 137 Accuracy in batch of size 2048 : 0.8017578125 Loss: 0.46747952699661255
138
evaluating performance...

Epoch: 138 Accuracy in batch of size 2048 : 0.8017578125 Loss: 0.4520528316497803
evaluating performance...
Test Accuracy: 0.78116
139
evaluating performance...

Epoch: 139 Accuracy in batch of size 2048 : 0.81005859375 Loss: 0.4598241448402405
140
evaluating performance...

Epoch: 140 Accuracy in batch of size 2048 : 0.80126953125 Loss: 0.47466224431991577
evaluating performance...
Test Accuracy: 0.78304
141
evaluating performance...

Epoch: 141 Accuracy in batch of size 2048 : 0.7998046875 Loss: 0.45794594287872314
142
evaluating performance...

Epoch: 142 Accuracy in batch of size 2048 : 0.79345703125 Loss: 0.47844260931015015
evaluating performance...
Test Accuracy: 0.78216
143
evaluating performance...

Epoch: 143 Accuracy in batch of size 2048 : 0.81396484375 Loss: 0.43681561946868896
144
evaluating performance...

Epoch: 144 Accuracy in batch of size 2048 : 0.80419921875 Loss: 0.45682498812675476
evaluating performance...
Test Accuracy: 0.78512
145
evaluating performance...

Epoch: 145 Accuracy in batch of size 2048 : 0.7998046875 Loss: 0.45039963722229004
146
evaluating performance...

Epoch: 146 Accuracy in batch of size 2048 : 0.798828125 Loss: 0.46739038825035095
evaluating performance...
Test Accuracy: 0.7838
147
evaluating performance...

Epoch: 147 Accuracy in batch of size 2048 : 0.8037109375 Loss: 0.44789549708366394
148
evaluating performance...

Epoch: 148 Accuracy in batch of size 2048 : 0.81640625 Loss: 0.44205957651138306
evaluating performance...
Test Accuracy: 0.78864
149
evaluating performance...

Epoch: 149 Accuracy in batch of size 2048 : 0.80859375 Loss: 0.4475514888763428
Figure(640x480)
--start testing...
saving results...
evaluating performance...
************ Overall Performance ************

MLP Test Accuracy: 0.7896

************ Finish ************
```
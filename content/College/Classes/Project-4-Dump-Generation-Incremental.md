

LSTM:
- Incremental data
- hidden size = 100
- dense hidden = 128
- layers = 2
- bidirectional = false
- dropout = 0.5

```
torch running with cuda
torch running with cuda
************ Start ************
dataset: Movie Reviews and Ratings , method: RNN , setting: train and test , result: saver , evaluation: accuracy
Hint: ['what'] | Answer did
Hint: ['what', 'did'] | Answer the
Hint: ['what', 'did', 'the'] | Answer bartender
Hint: ['what', 'did', 'the', 'bartender'] | Answer say
Hint: ['what', 'did', 'the', 'bartender', 'say'] | Answer to
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to'] | Answer the
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the'] | Answer jumper
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper'] | Answer cables
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables'] | Answer ?
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?'] | Answer you
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?', 'you'] | Answer better
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?', 'you', 'better'] | Answer not
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?', 'you', 'better', 'not'] | Answer try
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?', 'you', 'better', 'not', 'try'] | Answer to
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?', 'you', 'better', 'not', 'try', 'to'] | Answer start
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?', 'you', 'better', 'not', 'try', 'to', 'start'] | Answer anything
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?', 'you', 'better', 'not', 'try', 'to', 'start', 'anything'] | Answer .
Hint: ['what', 'did', 'the', 'bartender', 'say', 'to', 'the', 'jumper', 'cables', '?', 'you', 'better', 'not', 'try', 'to', 'start', 'anything', '.'] | Answer <eos>
Hint: ["don't"] | Answer you
Hint: ["don't", 'you'] | Answer hate
Hint: ["don't", 'you', 'hate'] | Answer jokes
Hint: ["don't", 'you', 'hate', 'jokes'] | Answer about
Hint: ["don't", 'you', 'hate', 'jokes', 'about'] | Answer german
Hint: ["don't", 'you', 'hate', 'jokes', 'about', 'german'] | Answer sausage
Hint: ["don't", 'you', 'hate', 'jokes', 'about', 'german', 'sausage'] | Answer ?
Hint: ["don't", 'you', 'hate', 'jokes', 'about', 'german', 'sausage', '?'] | Answer they're
Hint: ["don't", 'you', 'hate', 'jokes', 'about', 'german', 'sausage', '?', "they're"] | Answer the
Hint: ["don't", 'you', 'hate', 'jokes', 'about', 'german', 'sausage', '?', "they're", 'the'] | Answer wurst
Hint: ["don't", 'you', 'hate', 'jokes', 'about', 'german', 'sausage', '?', "they're", 'the', 'wurst'] | Answer !
Hint: ["don't", 'you', 'hate', 'jokes', 'about', 'german', 'sausage', '?', "they're", 'the', 'wurst', '!'] | Answer <eos>
Hint: ['two'] | Answer artists
Hint: ['two', 'artists'] | Answer had
Hint: ['two', 'artists', 'had'] | Answer an
Hint: ['two', 'artists', 'had', 'an'] | Answer art
Hint: ['two', 'artists', 'had', 'an', 'art'] | Answer contest
Hint: ['two', 'artists', 'had', 'an', 'art', 'contest'] | Answer ...
Hint: ['two', 'artists', 'had', 'an', 'art', 'contest', '...'] | Answer it
Hint: ['two', 'artists', 'had', 'an', 'art', 'contest', '...', 'it'] | Answer ended
Hint: ['two', 'artists', 'had', 'an', 'art', 'contest', '...', 'it', 'ended'] | Answer in
Hint: ['two', 'artists', 'had', 'an', 'art', 'contest', '...', 'it', 'ended', 'in'] | Answer a
Hint: ['two', 'artists', 'had', 'an', 'art', 'contest', '...', 'it', 'ended', 'in', 'a'] | Answer draw
Hint: ['two', 'artists', 'had', 'an', 'art', 'contest', '...', 'it', 'ended', 'in', 'a', 'draw'] | Answer <eos>
Hint: ['why'] | Answer did
Hint: ['why', 'did'] | Answer the
Hint: ['why', 'did', 'the'] | Answer chicken
Hint: ['why', 'did', 'the', 'chicken'] | Answer cross
Hint: ['why', 'did', 'the', 'chicken', 'cross'] | Answer the
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the'] | Answer playground
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground'] | Answer ?
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?'] | Answer to
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to'] | Answer get
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get'] | Answer to
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to'] | Answer the
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to', 'the'] | Answer other
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to', 'the', 'other'] | Answer slide
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to', 'the', 'other', 'slide'] | Answer .
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to', 'the', 'other', 'slide', '.'] | Answer <eos>
Hint: ['what'] | Answer gun
Hint: ['what', 'gun'] | Answer do
Hint: ['what', 'gun', 'do'] | Answer you
Hint: ['what', 'gun', 'do', 'you'] | Answer use
Hint: ['what', 'gun', 'do', 'you', 'use'] | Answer to
Hint: ['what', 'gun', 'do', 'you', 'use', 'to'] | Answer hunt
Hint: ['what', 'gun', 'do', 'you', 'use', 'to', 'hunt'] | Answer a
Hint: ['what', 'gun', 'do', 'you', 'use', 'to', 'hunt', 'a'] | Answer moose
Hint: ['what', 'gun', 'do', 'you', 'use', 'to', 'hunt', 'a', 'moose'] | Answer ?
Hint: ['what', 'gun', 'do', 'you', 'use', 'to', 'hunt', 'a', 'moose', '?'] | Answer a
Hint: ['what', 'gun', 'do', 'you', 'use', 'to', 'hunt', 'a', 'moose', '?', 'a'] | Answer moosecut
Hint: ['what', 'gun', 'do', 'you', 'use', 'to', 'hunt', 'a', 'moose', '?', 'a', 'moosecut'] | Answer !
Hint: ['what', 'gun', 'do', 'you', 'use', 'to', 'hunt', 'a', 'moose', '?', 'a', 'moosecut', '!'] | Answer <eos>
Hint: ['if'] | Answer life
Hint: ['if', 'life'] | Answer gives
Hint: ['if', 'life', 'gives'] | Answer you
Hint: ['if', 'life', 'gives', 'you'] | Answer melons
Hint: ['if', 'life', 'gives', 'you', 'melons'] | Answer ,
Hint: ['if', 'life', 'gives', 'you', 'melons', ','] | Answer you
Hint: ['if', 'life', 'gives', 'you', 'melons', ',', 'you'] | Answer might
Hint: ['if', 'life', 'gives', 'you', 'melons', ',', 'you', 'might'] | Answer have
Hint: ['if', 'life', 'gives', 'you', 'melons', ',', 'you', 'might', 'have'] | Answer dyslexia
Hint: ['if', 'life', 'gives', 'you', 'melons', ',', 'you', 'might', 'have', 'dyslexia'] | Answer .
Hint: ['if', 'life', 'gives', 'you', 'melons', ',', 'you', 'might', 'have', 'dyslexia', '.'] | Answer <eos>
Hint: ['broken'] | Answer pencils
Hint: ['broken', 'pencils'] | Answer ... ...
Hint: ['broken', 'pencils', '... ...'] | Answer are
Hint: ['broken', 'pencils', '... ...', 'are'] | Answer pointless
Hint: ['broken', 'pencils', '... ...', 'are', 'pointless'] | Answer .
Hint: ['broken', 'pencils', '... ...', 'are', 'pointless', '.'] | Answer <eos>
Hint: ['what'] | Answer did
Hint: ['what', 'did'] | Answer one
Hint: ['what', 'did', 'one'] | Answer snowman
Hint: ['what', 'did', 'one', 'snowman'] | Answer say
Hint: ['what', 'did', 'one', 'snowman', 'say'] | Answer to
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to'] | Answer the
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the'] | Answer other
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other'] | Answer snowman
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman'] | Answer ?
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman', '?'] | Answer '
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman', '?', "'"] | Answer do
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman', '?', "'", 'do'] | Answer you
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman', '?', "'", 'do', 'you'] | Answer smell
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman', '?', "'", 'do', 'you', 'smell'] | Answer carrots
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman', '?', "'", 'do', 'you', 'smell', 'carrots'] | Answer ?
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman', '?', "'", 'do', 'you', 'smell', 'carrots', '?'] | Answer '
Hint: ['what', 'did', 'one', 'snowman', 'say', 'to', 'the', 'other', 'snowman', '?', "'", 'do', 'you', 'smell', 'carrots', '?', "'"] | Answer <eos>
Hint: ['how'] | Answer many
Hint: ['how', 'many'] | Answer hipsters
Hint: ['how', 'many', 'hipsters'] | Answer does
Hint: ['how', 'many', 'hipsters', 'does'] | Answer it
Hint: ['how', 'many', 'hipsters', 'does', 'it'] | Answer take
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take'] | Answer to
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to'] | Answer change
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change'] | Answer a
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a'] | Answer lightbulb
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb'] | Answer ?
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?'] | Answer it's
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's"] | Answer a
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a'] | Answer really
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really'] | Answer obscure
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure'] | Answer number
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number'] | Answer .
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number', '.'] | Answer you've
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number', '.', "you've"] | Answer probably
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number', '.', "you've", 'probably'] | Answer never
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number', '.', "you've", 'probably', 'never'] | Answer heard
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number', '.', "you've", 'probably', 'never', 'heard'] | Answer of
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number', '.', "you've", 'probably', 'never', 'heard', 'of'] | Answer it
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number', '.', "you've", 'probably', 'never', 'heard', 'of', 'it'] | Answer .
Hint: ['how', 'many', 'hipsters', 'does', 'it', 'take', 'to', 'change', 'a', 'lightbulb', '?', "it's", 'a', 'really', 'obscure', 'number', '.', "you've", 'probably', 'never', 'heard', 'of', 'it', '.'] | Answer <eos>
Hint: ['where'] | Answer do
Hint: ['where', 'do'] | Answer sick
Hint: ['where', 'do', 'sick'] | Answer boats
Hint: ['where', 'do', 'sick', 'boats'] | Answer go
Hint: ['where', 'do', 'sick', 'boats', 'go'] | Answer ?
Hint: ['where', 'do', 'sick', 'boats', 'go', '?'] | Answer the
Hint: ['where', 'do', 'sick', 'boats', 'go', '?', 'the'] | Answer dock
Hint: ['where', 'do', 'sick', 'boats', 'go', '?', 'the', 'dock'] | Answer !
Hint: ['where', 'do', 'sick', 'boats', 'go', '?', 'the', 'dock', '!'] | Answer <eos>
Hint: ['i'] | Answer like
Hint: ['i', 'like'] | Answer my
Hint: ['i', 'like', 'my'] | Answer slaves
Hint: ['i', 'like', 'my', 'slaves'] | Answer like
Hint: ['i', 'like', 'my', 'slaves', 'like'] | Answer i
Hint: ['i', 'like', 'my', 'slaves', 'like', 'i'] | Answer like
Hint: ['i', 'like', 'my', 'slaves', 'like', 'i', 'like'] | Answer my
Hint: ['i', 'like', 'my', 'slaves', 'like', 'i', 'like', 'my'] | Answer coffee
Hint: ['i', 'like', 'my', 'slaves', 'like', 'i', 'like', 'my', 'coffee'] | Answer :
Hint: ['i', 'like', 'my', 'slaves', 'like', 'i', 'like', 'my', 'coffee', ':'] | Answer free
Hint: ['i', 'like', 'my', 'slaves', 'like', 'i', 'like', 'my', 'coffee', ':', 'free'] | Answer .
Hint: ['i', 'like', 'my', 'slaves', 'like', 'i', 'like', 'my', 'coffee', ':', 'free', '.'] | Answer <eos>
Hint: ['my'] | Answer girlfriend
Hint: ['my', 'girlfriend'] | Answer told
Hint: ['my', 'girlfriend', 'told'] | Answer me
Hint: ['my', 'girlfriend', 'told', 'me'] | Answer she
Hint: ['my', 'girlfriend', 'told', 'me', 'she'] | Answer was
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was'] | Answer leaving
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving'] | Answer me
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me'] | Answer because
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because'] | Answer i
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i'] | Answer keep
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep'] | Answer pretending
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending'] | Answer to
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to'] | Answer be
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be'] | Answer a
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a'] | Answer transformer
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer'] | Answer ...
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...'] | Answer i
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i'] | Answer said
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said'] | Answer ,
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ','] | Answer no
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ',', 'no'] | Answer ,
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ',', 'no', ','] | Answer wait
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ',', 'no', ',', 'wait'] | Answer !
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ',', 'no', ',', 'wait', '!'] | Answer i
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ',', 'no', ',', 'wait', '!', 'i'] | Answer can
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ',', 'no', ',', 'wait', '!', 'i', 'can'] | Answer change
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ',', 'no', ',', 'wait', '!', 'i', 'can', 'change'] | Answer !
Hint: ['my', 'girlfriend', 'told', 'me', 'she', 'was', 'leaving', 'me', 'because', 'i', 'keep', 'pretending', 'to', 'be', 'a', 'transformer', '...', 'i', 'said', ',', 'no', ',', 'wait', '!', 'i', 'can', 'change', '!'] | Answer <eos>
Hint: ['old'] | Answer chinese
Hint: ['old', 'chinese'] | Answer proverb
Hint: ['old', 'chinese', 'proverb'] | Answer :
Hint: ['old', 'chinese', 'proverb', ':'] | Answer man
Hint: ['old', 'chinese', 'proverb', ':', 'man'] | Answer who
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who'] | Answer not
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not'] | Answer shower
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not', 'shower'] | Answer in
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not', 'shower', 'in'] | Answer 7
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not', 'shower', 'in', '7'] | Answer days
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not', 'shower', 'in', '7', 'days'] | Answer makes
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not', 'shower', 'in', '7', 'days', 'makes'] | Answer one
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not', 'shower', 'in', '7', 'days', 'makes', 'one'] | Answer reek
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not', 'shower', 'in', '7', 'days', 'makes', 'one', 'reek'] | Answer .
Hint: ['old', 'chinese', 'proverb', ':', 'man', 'who', 'not', 'shower', 'in', '7', 'days', 'makes', 'one', 'reek', '.'] | Answer <eos>
Hint: ['what'] | Answer did
Hint: ['what', 'did'] | Answer the
Hint: ['what', 'did', 'the'] | Answer owner
Hint: ['what', 'did', 'the', 'owner'] | Answer of
Hint: ['what', 'did', 'the', 'owner', 'of'] | Answer a
Hint: ['what', 'did', 'the', 'owner', 'of', 'a'] | Answer brownie
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie'] | Answer factory
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory'] | Answer say
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say'] | Answer when
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when'] | Answer his
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his'] | Answer factory
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory'] | Answer caught
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught'] | Answer fire
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire'] | Answer ?
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?'] | Answer "
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"'] | Answer i'm
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"', "i'm"] | Answer getting
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"', "i'm", 'getting'] | Answer the
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"', "i'm", 'getting', 'the'] | Answer fudge
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"', "i'm", 'getting', 'the', 'fudge'] | Answer outta
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"', "i'm", 'getting', 'the', 'fudge', 'outta'] | Answer here
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"', "i'm", 'getting', 'the', 'fudge', 'outta', 'here'] | Answer !
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"', "i'm", 'getting', 'the', 'fudge', 'outta', 'here', '!'] | Answer "
Hint: ['what', 'did', 'the', 'owner', 'of', 'a', 'brownie', 'factory', 'say', 'when', 'his', 'factory', 'caught', 'fire', '?', '"', "i'm", 'getting', 'the', 'fudge', 'outta', 'here', '!', '"'] | Answer <eos>
Hint: ['what'] | Answer form
Hint: ['what', 'form'] | Answer of
Hint: ['what', 'form', 'of'] | Answer radiation
Hint: ['what', 'form', 'of', 'radiation'] | Answer bakes
Hint: ['what', 'form', 'of', 'radiation', 'bakes'] | Answer you
Hint: ['what', 'form', 'of', 'radiation', 'bakes', 'you'] | Answer cookies
Hint: ['what', 'form', 'of', 'radiation', 'bakes', 'you', 'cookies'] | Answer ?
Hint: ['what', 'form', 'of', 'radiation', 'bakes', 'you', 'cookies', '?'] | Answer a
Hint: ['what', 'form', 'of', 'radiation', 'bakes', 'you', 'cookies', '?', 'a'] | Answer gramma
Hint: ['what', 'form', 'of', 'radiation', 'bakes', 'you', 'cookies', '?', 'a', 'gramma'] | Answer ray
Hint: ['what', 'form', 'of', 'radiation', 'bakes', 'you', 'cookies', '?', 'a', 'gramma', 'ray'] | Answer <eos>
Hint: ['bee'] | Answer jokes
Hint: ['bee', 'jokes'] | Answer ,
Hint: ['bee', 'jokes', ','] | Answer courtesy
Hint: ['bee', 'jokes', ',', 'courtesy'] | Answer of
Hint: ['bee', 'jokes', ',', 'courtesy', 'of'] | Answer my
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my'] | Answer niece
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece'] | Answer (
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '('] | Answer age
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age'] | Answer 8)
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)'] | Answer .
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.'] | Answer what
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what'] | Answer did
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did'] | Answer the
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the'] | Answer bee
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee'] | Answer use
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use'] | Answer to
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to'] | Answer dry
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry'] | Answer off
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off'] | Answer after
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after'] | Answer swimming
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming'] | Answer ?
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?'] | Answer a
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a'] | Answer *
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*'] | Answer bee
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee'] | Answer *
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*'] | Answer ch
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch'] | Answer towel
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel'] | Answer .
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.'] | Answer what
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what'] | Answer did
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did'] | Answer the
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the'] | Answer bee
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee'] | Answer use
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use'] | Answer to
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to'] | Answer get
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'get'] | Answer out
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'get', 'out'] | Answer the
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'get', 'out', 'the'] | Answer tangles
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'get', 'out', 'the', 'tangles'] | Answer ?
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'get', 'out', 'the', 'tangles', '?'] | Answer a
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'get', 'out', 'the', 'tangles', '?', 'a'] | Answer honeycomb
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'get', 'out', 'the', 'tangles', '?', 'a', 'honeycomb'] | Answer .
Hint: ['bee', 'jokes', ',', 'courtesy', 'of', 'my', 'niece', '(', 'age', '8)', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'dry', 'off', 'after', 'swimming', '?', 'a', '*', 'bee', '*', 'ch', 'towel', '.', 'what', 'did', 'the', 'bee', 'use', 'to', 'get', 'out', 'the', 'tangles', '?', 'a', 'honeycomb', '.'] | Answer <eos>
Hint: ["what's"] | Answer the
Hint: ["what's", 'the'] | Answer loudest
Hint: ["what's", 'the', 'loudest'] | Answer economic
Hint: ["what's", 'the', 'loudest', 'economic'] | Answer system
Hint: ["what's", 'the', 'loudest', 'economic', 'system'] | Answer ?
Hint: ["what's", 'the', 'loudest', 'economic', 'system', '?'] | Answer capitalism
Hint: ["what's", 'the', 'loudest', 'economic', 'system', '?', 'capitalism'] | Answer <eos>
Hint: ['i'] | Answer went
Hint: ['i', 'went'] | Answer for
Hint: ['i', 'went', 'for'] | Answer a
Hint: ['i', 'went', 'for', 'a'] | Answer job
Hint: ['i', 'went', 'for', 'a', 'job'] | Answer interview
Hint: ['i', 'went', 'for', 'a', 'job', 'interview'] | Answer today
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today'] | Answer ...
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...'] | Answer the
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the'] | Answer interviewer
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer'] | Answer said
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said'] | Answer to
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to'] | Answer me
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me'] | Answer ,
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ','] | Answer what
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what'] | Answer would
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would'] | Answer you
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you'] | Answer say
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say'] | Answer your
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your'] | Answer greatest
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest'] | Answer weakness
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness'] | Answer is
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is'] | Answer ?
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?'] | Answer i
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i'] | Answer said
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said'] | Answer ,
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ','] | Answer i
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i'] | Answer think
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think'] | Answer id
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id'] | Answer have
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have'] | Answer to
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to'] | Answer say
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say'] | Answer my
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say', 'my'] | Answer listening
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say', 'my', 'listening'] | Answer skills
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say', 'my', 'listening', 'skills'] | Answer are
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say', 'my', 'listening', 'skills', 'are'] | Answer my
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say', 'my', 'listening', 'skills', 'are', 'my'] | Answer greatest
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say', 'my', 'listening', 'skills', 'are', 'my', 'greatest'] | Answer strength
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say', 'my', 'listening', 'skills', 'are', 'my', 'greatest', 'strength'] | Answer .
Hint: ['i', 'went', 'for', 'a', 'job', 'interview', 'today', '...', 'the', 'interviewer', 'said', 'to', 'me', ',', 'what', 'would', 'you', 'say', 'your', 'greatest', 'weakness', 'is', '?', 'i', 'said', ',', 'i', 'think', 'id', 'have', 'to', 'say', 'my', 'listening', 'skills', 'are', 'my', 'greatest', 'strength', '.'] | Answer <eos>
Hint: ['who'] | Answer was
Hint: ['who', 'was'] | Answer the
Hint: ['who', 'was', 'the'] | Answer knight
Hint: ['who', 'was', 'the', 'knight'] | Answer that
Hint: ['who', 'was', 'the', 'knight', 'that'] | Answer invented
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented'] | Answer the
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the'] | Answer round
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round'] | Answer table
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table'] | Answer ?
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?'] | Answer sir
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir'] | Answer cumference
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference'] | Answer .
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.'] | Answer (
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '('] | Answer via
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via'] | Answer friend
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend'] | Answer who
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who'] | Answer got
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got'] | Answer this
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this'] | Answer from
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from'] | Answer a
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a'] | Answer street
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street'] | Answer performance
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance'] | Answer group
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance', 'group'] | Answer in
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance', 'group', 'in'] | Answer the
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance', 'group', 'in', 'the'] | Answer england
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance', 'group', 'in', 'the', 'england'] | Answer area
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance', 'group', 'in', 'the', 'england', 'area'] | Answer of
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance', 'group', 'in', 'the', 'england', 'area', 'of'] | Answer epcot
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance', 'group', 'in', 'the', 'england', 'area', 'of', 'epcot'] | Answer )
Hint: ['who', 'was', 'the', 'knight', 'that', 'invented', 'the', 'round', 'table', '?', 'sir', 'cumference', '.', '(', 'via', 'friend', 'who', 'got', 'this', 'from', 'a', 'street', 'performance', 'group', 'in', 'the', 'england', 'area', 'of', 'epcot', ')'] | Answer <eos>
Hint: ['what'] | Answer did
Hint: ['what', 'did'] | Answer the
Hint: ['what', 'did', 'the'] | Answer german
Hint: ['what', 'did', 'the', 'german'] | Answer air
Hint: ['what', 'did', 'the', 'german', 'air'] | Answer force
Hint: ['what', 'did', 'the', 'german', 'air', 'force'] | Answer eat
Hint: ['what', 'did', 'the', 'german', 'air', 'force', 'eat'] | Answer for
Hint: ['what', 'did', 'the', 'german', 'air', 'force', 'eat', 'for'] | Answer breakfast
Hint: ['what', 'did', 'the', 'german', 'air', 'force', 'eat', 'for', 'breakfast'] | Answer during
Hint: ['what', 'did', 'the', 'german', 'air', 'force', 'eat', 'for', 'breakfast', 'during'] | Answer ww2
Hint: ['what', 'did', 'the', 'german', 'air', 'force', 'eat', 'for', 'breakfast', 'during', 'ww2'] | Answer ?
Hint: ['what', 'did', 'the', 'german', 'air', 'force', 'eat', 'for', 'breakfast', 'during', 'ww2', '?'] | Answer luftwaffles
Hint: ['what', 'did', 'the', 'german', 'air', 'force', 'eat', 'for', 'breakfast', 'during', 'ww2', '?', 'luftwaffles'] | Answer <eos>
Hint: ['i'] | Answer the
Hint: ['i', 'the'] | Answer shell
Hint: ['i', 'the', 'shell'] | Answer off
Hint: ['i', 'the', 'shell', 'off'] | Answer a
Hint: ['i', 'the', 'shell', 'off', 'a'] | Answer snail
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail'] | Answer yesterday
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday'] | Answer ...
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...'] | Answer you'd
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd"] | Answer think
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think'] | Answer it
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it'] | Answer would
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would'] | Answer move
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move'] | Answer faster
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster'] | Answer ,
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster', ','] | Answer but
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster', ',', 'but'] | Answer it
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster', ',', 'but', 'it'] | Answer was
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster', ',', 'but', 'it', 'was'] | Answer really
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster', ',', 'but', 'it', 'was', 'really'] | Answer kinda
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster', ',', 'but', 'it', 'was', 'really', 'kinda'] | Answer sluggish
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster', ',', 'but', 'it', 'was', 'really', 'kinda', 'sluggish'] | Answer .
Hint: ['i', 'the', 'shell', 'off', 'a', 'snail', 'yesterday', '...', "you'd", 'think', 'it', 'would', 'move', 'faster', ',', 'but', 'it', 'was', 'really', 'kinda', 'sluggish', '.'] | Answer <eos>
Hint: ['what'] | Answer did
Hint: ['what', 'did'] | Answer the
Hint: ['what', 'did', 'the'] | Answer number
Hint: ['what', 'did', 'the', 'number'] | Answer zero
Hint: ['what', 'did', 'the', 'number', 'zero'] | Answer say
Hint: ['what', 'did', 'the', 'number', 'zero', 'say'] | Answer to
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to'] | Answer the
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the'] | Answer number
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the', 'number'] | Answer eight
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the', 'number', 'eight'] | Answer ?
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the', 'number', 'eight', '?'] | Answer "
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the', 'number', 'eight', '?', '"'] | Answer nice
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the', 'number', 'eight', '?', '"', 'nice'] | Answer belt
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the', 'number', 'eight', '?', '"', 'nice', 'belt'] | Answer .
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the', 'number', 'eight', '?', '"', 'nice', 'belt', '.'] | Answer "
Hint: ['what', 'did', 'the', 'number', 'zero', 'say', 'to', 'the', 'number', 'eight', '?', '"', 'nice', 'belt', '.', '"'] | Answer <eos>
Hint: ["what's"] | Answer worse
Hint: ["what's", 'worse'] | Answer than
Hint: ["what's", 'worse', 'than'] | Answer a
Hint: ["what's", 'worse', 'than', 'a'] | Answer centipede
Hint: ["what's", 'worse', 'than', 'a', 'centipede'] | Answer with
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with'] | Answer sore
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore'] | Answer feet
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore', 'feet'] | Answer ?
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore', 'feet', '?'] | Answer a
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore', 'feet', '?', 'a'] | Answer giraffe
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore', 'feet', '?', 'a', 'giraffe'] | Answer with
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore', 'feet', '?', 'a', 'giraffe', 'with'] | Answer a
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore', 'feet', '?', 'a', 'giraffe', 'with', 'a'] | Answer sore
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore', 'feet', '?', 'a', 'giraffe', 'with', 'a', 'sore'] | Answer throat
Hint: ["what's", 'worse', 'than', 'a', 'centipede', 'with', 'sore', 'feet', '?', 'a', 'giraffe', 'with', 'a', 'sore', 'throat'] | Answer <eos>
Hint: ["what's"] | Answer red
Hint: ["what's", 'red'] | Answer and
Hint: ["what's", 'red', 'and'] | Answer bad
Hint: ["what's", 'red', 'and', 'bad'] | Answer for
Hint: ["what's", 'red', 'and', 'bad', 'for'] | Answer your
Hint: ["what's", 'red', 'and', 'bad', 'for', 'your'] | Answer teeth
Hint: ["what's", 'red', 'and', 'bad', 'for', 'your', 'teeth'] | Answer ?
Hint: ["what's", 'red', 'and', 'bad', 'for', 'your', 'teeth', '?'] | Answer a
Hint: ["what's", 'red', 'and', 'bad', 'for', 'your', 'teeth', '?', 'a'] | Answer brick
Hint: ["what's", 'red', 'and', 'bad', 'for', 'your', 'teeth', '?', 'a', 'brick'] | Answer .
Hint: ["what's", 'red', 'and', 'bad', 'for', 'your', 'teeth', '?', 'a', 'brick', '.'] | Answer <eos>
Hint: ['why'] | Answer did
Hint: ['why', 'did'] | Answer the
Hint: ['why', 'did', 'the'] | Answer chicken
Hint: ['why', 'did', 'the', 'chicken'] | Answer cross
Hint: ['why', 'did', 'the', 'chicken', 'cross'] | Answer the
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the'] | Answer playground
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground'] | Answer ?
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?'] | Answer to
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to'] | Answer get
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get'] | Answer to
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to'] | Answer the
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to', 'the'] | Answer other
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to', 'the', 'other'] | Answer slide
Hint: ['why', 'did', 'the', 'chicken', 'cross', 'the', 'playground', '?', 'to', 'get', 'to', 'the', 'other', 'slide'] | Answer <eos>
Hint: ['did'] | Answer you
Hint: ['did', 'you'] | Answer hear
Hint: ['did', 'you', 'hear'] | Answer about
Hint: ['did', 'you', 'hear', 'about'] | Answer the
Hint: ['did', 'you', 'hear', 'about', 'the'] | Answer french
Hint: ['did', 'you', 'hear', 'about', 'the', 'french'] | Answer chef
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef'] | Answer who
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who'] | Answer committed
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who', 'committed'] | Answer suicide
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who', 'committed', 'suicide'] | Answer ?
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who', 'committed', 'suicide', '?'] | Answer he
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who', 'committed', 'suicide', '?', 'he'] | Answer lost
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who', 'committed', 'suicide', '?', 'he', 'lost'] | Answer the
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who', 'committed', 'suicide', '?', 'he', 'lost', 'the'] | Answer huile
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who', 'committed', 'suicide', '?', 'he', 'lost', 'the', 'huile'] | Answer d'olive
Hint: ['did', 'you', 'hear', 'about', 'the', 'french', 'chef', 'who', 'committed', 'suicide', '?', 'he', 'lost', 'the', 'huile', "d'olive"] | Answer <eos>
Hint: ['wanna'] | Answer hear
Hint: ['wanna', 'hear'] | Answer a
Hint: ['wanna', 'hear', 'a'] | Answer joke
Hint: ['wanna', 'hear', 'a', 'joke'] | Answer about
Hint: ['wanna', 'hear', 'a', 'joke', 'about'] | Answer unemployed
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed'] | Answer people
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed', 'people'] | Answer ?
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed', 'people', '?'] | Answer nevermind
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed', 'people', '?', 'nevermind'] | Answer ,
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed', 'people', '?', 'nevermind', ','] | Answer they
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed', 'people', '?', 'nevermind', ',', 'they'] | Answer don't
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed', 'people', '?', 'nevermind', ',', 'they', "don't"] | Answer work
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed', 'people', '?', 'nevermind', ',', 'they', "don't", 'work'] | Answer .
Hint: ['wanna', 'hear', 'a', 'joke', 'about', 'unemployed', 'people', '?', 'nevermind', ',', 'they', "don't", 'work', '.'] | Answer <eos>
Hint: ['knock'] | Answer knock
Hint: ['knock', 'knock'] | Answer who's
Hint: ['knock', 'knock', "who's"] | Answer there
Hint: ['knock', 'knock', "who's", 'there'] | Answer boo
Hint: ['knock', 'knock', "who's", 'there', 'boo'] | Answer !
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!'] | Answer !
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!'] | Answer boo
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo'] | Answer who
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who'] | Answer ?
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who', '?'] | Answer don't
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who', '?', "don't"] | Answer cry
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who', '?', "don't", 'cry'] | Answer ,
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who', '?', "don't", 'cry', ','] | Answer it's
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who', '?', "don't", 'cry', ',', "it's"] | Answer only
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who', '?', "don't", 'cry', ',', "it's", 'only'] | Answer a
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who', '?', "don't", 'cry', ',', "it's", 'only', 'a'] | Answer joke
Hint: ['knock', 'knock', "who's", 'there', 'boo', '!', '!', 'boo', 'who', '?', "don't", 'cry', ',', "it's", 'only', 'a', 'joke'] | Answer <eos>
Hint: ['how'] | Answer much
Hint: ['how', 'much'] | Answer did
Hint: ['how', 'much', 'did'] | Answer the
Hint: ['how', 'much', 'did', 'the'] | Answer skeleton
Hint: ['how', 'much', 'did', 'the', 'skeleton'] | Answer charge
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge'] | Answer for
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge', 'for'] | Answer his
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge', 'for', 'his'] | Answer excellent
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge', 'for', 'his', 'excellent'] | Answer legal
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge', 'for', 'his', 'excellent', 'legal'] | Answer services
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge', 'for', 'his', 'excellent', 'legal', 'services'] | Answer ?
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge', 'for', 'his', 'excellent', 'legal', 'services', '?'] | Answer an
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge', 'for', 'his', 'excellent', 'legal', 'services', '?', 'an'] | Answer arm
Hint: ['how', 'much', 'did', 'the', 'skeleton', 'charge', 'for', 'his', 'excellent', 'legal', 'services', '?', 'an', 'arm'] | Answer and
Number of rows: 28403
method running...
--start training...
487 unknown words out of a 4765 vocab
0
evaluating performance...

Epoch: 0 Accuracy in batch of size 64 : 0.0 Loss: 8.484801292419434
what did one... barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian
horse walks into... barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian
why did the... barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian
what did the... barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian
who is the... barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian
why couldn't the... barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian barbarian
1
evaluating performance...

Epoch: 1 Accuracy in batch of size 64 : 0.171875 Loss: 5.558748722076416
2
evaluating performance...

Epoch: 2 Accuracy in batch of size 64 : 0.140625 Loss: 5.393744468688965
3
evaluating performance...

Epoch: 3 Accuracy in batch of size 64 : 0.265625 Loss: 4.555189609527588
4
evaluating performance...

Epoch: 4 Accuracy in batch of size 64 : 0.265625 Loss: 4.37385892868042
5
evaluating performance...

Epoch: 5 Accuracy in batch of size 64 : 0.25 Loss: 4.153340816497803
6
evaluating performance...

Epoch: 6 Accuracy in batch of size 64 : 0.203125 Loss: 4.07818078994751
7
evaluating performance...

Epoch: 7 Accuracy in batch of size 64 : 0.375 Loss: 3.004899740219116
8
evaluating performance...

Epoch: 8 Accuracy in batch of size 64 : 0.34375 Loss: 3.379976272583008
9
evaluating performance...

Epoch: 9 Accuracy in batch of size 64 : 0.359375 Loss: 3.23494029045105
10
evaluating performance...

Epoch: 10 Accuracy in batch of size 64 : 0.265625 Loss: 3.6375999450683594
what did one... snowman say to the other ? " " you're not my fault " <eos>
horse walks into... a bar ... and says , " i don't know " " " <eos>
why did the... chicken cross the road ? because it was a little dressing . <eos>
what did the... 0 say to the 8 ? nice belt . <eos>
who is the... best sad ? it was a little tomato . <eos>
why couldn't the... chicken cross the road ? because it was a little dressing . <eos>
11
evaluating performance...

Epoch: 11 Accuracy in batch of size 64 : 0.453125 Loss: 2.587388038635254
12
evaluating performance...

Epoch: 12 Accuracy in batch of size 64 : 0.421875 Loss: 2.7427499294281006
13
evaluating performance...

Epoch: 13 Accuracy in batch of size 64 : 0.46875 Loss: 2.3763961791992188
14
evaluating performance...

Epoch: 14 Accuracy in batch of size 64 : 0.53125 Loss: 1.8480240106582642
15
evaluating performance...

Epoch: 15 Accuracy in batch of size 64 : 0.578125 Loss: 1.664027214050293
16
evaluating performance...

Epoch: 16 Accuracy in batch of size 64 : 0.65625 Loss: 1.5699403285980225
17
evaluating performance...

Epoch: 17 Accuracy in batch of size 64 : 0.59375 Loss: 1.836391806602478
18
evaluating performance...

Epoch: 18 Accuracy in batch of size 64 : 0.6875 Loss: 1.3740565776824951
19
evaluating performance...

Epoch: 19 Accuracy in batch of size 64 : 0.546875 Loss: 2.117886543273926
20
evaluating performance...

Epoch: 20 Accuracy in batch of size 64 : 0.6875 Loss: 1.347936987876892
what did one... frog say to the other ? time's fun to make me hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand hand . <eos>
horse walks into... a bar ... and asks " ow " <eos>
why did the... chicken cross the road ? to get to the other slide <eos>
what did the... german physicist go to his baby new jersey ? * * * * * oinkment ! * * * ( this exchange to the win to be this joke here " . <eos>
who is the... only superhuman frozone have at ? they both hugo . <eos>
why couldn't the... fisherman go to prom ? he had no body to go to . <eos>
21
evaluating performance...

Epoch: 21 Accuracy in batch of size 64 : 0.625 Loss: 1.6347545385360718
22
evaluating performance...

Epoch: 22 Accuracy in batch of size 64 : 0.78125 Loss: 0.9360159039497375
23
evaluating performance...

Epoch: 23 Accuracy in batch of size 64 : 0.8125 Loss: 0.6805884838104248
24
evaluating performance...

Epoch: 24 Accuracy in batch of size 64 : 0.75 Loss: 0.9897468090057373
25
evaluating performance...

Epoch: 25 Accuracy in batch of size 64 : 0.828125 Loss: 0.6874589920043945
26
evaluating performance...

Epoch: 26 Accuracy in batch of size 64 : 0.84375 Loss: 0.7985538244247437
27
evaluating performance...

Epoch: 27 Accuracy in batch of size 64 : 0.71875 Loss: 0.9617300033569336
28
evaluating performance...

Epoch: 28 Accuracy in batch of size 64 : 0.75 Loss: 1.053717017173767
29
evaluating performance...

Epoch: 29 Accuracy in batch of size 64 : 0.828125 Loss: 0.8400622010231018
30
evaluating performance...

Epoch: 30 Accuracy in batch of size 64 : 0.734375 Loss: 0.812606692314148
what did one... snowman say to the other ? do you smell carrots ? <eos>
horse walks into... a bar ... and says , " i'll have a burger and ... a coke . " the waitress says , " okay . but , i asked out to me " and get be me . " <eos>
why did the... chicken cross the road ? to get to the other side . <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... roundest knight of king arthur's table ? sir cumference . ( via friend who got this from a street performance group in the england area of epcot ) <eos>
why couldn't the... lifeguard save the hippie from drowning ? he was * too far out , maaan * . <eos>
31
evaluating performance...

Epoch: 31 Accuracy in batch of size 64 : 0.796875 Loss: 0.7610763311386108
32
evaluating performance...

Epoch: 32 Accuracy in batch of size 64 : 0.890625 Loss: 0.38212981820106506
33
evaluating performance...

Epoch: 33 Accuracy in batch of size 64 : 0.828125 Loss: 0.7199290990829468
34
evaluating performance...

Epoch: 34 Accuracy in batch of size 64 : 0.875 Loss: 0.43080806732177734
35
evaluating performance...

Epoch: 35 Accuracy in batch of size 64 : 0.828125 Loss: 0.6299449801445007
36
evaluating performance...

Epoch: 36 Accuracy in batch of size 64 : 0.8125 Loss: 0.7059307098388672
37
evaluating performance...

Epoch: 37 Accuracy in batch of size 64 : 0.84375 Loss: 0.6915516257286072
38
evaluating performance...

Epoch: 38 Accuracy in batch of size 64 : 0.921875 Loss: 0.2657407522201538
39
evaluating performance...

Epoch: 39 Accuracy in batch of size 64 : 0.78125 Loss: 0.7245223522186279
40
evaluating performance...

Epoch: 40 Accuracy in batch of size 64 : 0.890625 Loss: 0.42916110157966614
what did one... math book say to the other ? don't bother me ; i've got my own * problems ! * <eos>
horse walks into... a bar ... and asks the second " " i'm wearing a burger and a coke . " <eos>
why did the... chicken cross the road ? to get to the moron's house . * knock knock * ^ ^ whose ^ ^ there ? * the chicken ... * <eos>
what did the... fish say when it hit the wall ? dam <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... melons be together ? everyone knows melons cantaloupe . <eos>
41
evaluating performance...

Epoch: 41 Accuracy in batch of size 64 : 0.890625 Loss: 0.4200010895729065
42
evaluating performance...

Epoch: 42 Accuracy in batch of size 64 : 0.859375 Loss: 0.4935111403465271
43
evaluating performance...

Epoch: 43 Accuracy in batch of size 64 : 0.90625 Loss: 0.6141175627708435
44
evaluating performance...

Epoch: 44 Accuracy in batch of size 64 : 0.890625 Loss: 0.43942201137542725
45
evaluating performance...

Epoch: 45 Accuracy in batch of size 64 : 0.765625 Loss: 0.9832807779312134
46
evaluating performance...

Epoch: 46 Accuracy in batch of size 64 : 0.890625 Loss: 0.3897707760334015
47
evaluating performance...

Epoch: 47 Accuracy in batch of size 64 : 0.8125 Loss: 0.8698973059654236
48
evaluating performance...

Epoch: 48 Accuracy in batch of size 64 : 0.765625 Loss: 0.928824245929718
49
evaluating performance...

Epoch: 49 Accuracy in batch of size 64 : 0.828125 Loss: 0.6441388130187988
50
evaluating performance...

Epoch: 50 Accuracy in batch of size 64 : 0.828125 Loss: 0.5397167801856995
what did one... frog say to the other ? time's fun when you're having flies . <eos>
horse walks into... a bar ... and asks a beer and a mop . <eos>
why did the... chicken cross the road half-way ? she wanted to lay it on the line . <eos>
what did the... fish say when it hit the concrete wall ? dam <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... skeleton cross the street ? because he didn't have the guts ! <eos>
51
evaluating performance...

Epoch: 51 Accuracy in batch of size 64 : 0.921875 Loss: 0.26423773169517517
52
evaluating performance...

Epoch: 52 Accuracy in batch of size 64 : 0.859375 Loss: 0.4254838526248932
53
evaluating performance...

Epoch: 53 Accuracy in batch of size 64 : 0.90625 Loss: 0.4456446170806885
54
evaluating performance...

Epoch: 54 Accuracy in batch of size 64 : 0.890625 Loss: 0.49655675888061523
55
evaluating performance...

Epoch: 55 Accuracy in batch of size 64 : 0.796875 Loss: 0.8125154972076416
56
evaluating performance...

Epoch: 56 Accuracy in batch of size 64 : 0.9375 Loss: 0.32654425501823425
57
evaluating performance...

Epoch: 57 Accuracy in batch of size 64 : 0.875 Loss: 0.49585866928100586
58
evaluating performance...

Epoch: 58 Accuracy in batch of size 64 : 0.859375 Loss: 0.44777530431747437
59
evaluating performance...

Epoch: 59 Accuracy in batch of size 64 : 0.78125 Loss: 0.6132527589797974
60
evaluating performance...

Epoch: 60 Accuracy in batch of size 64 : 0.890625 Loss: 0.433160662651062
what did one... ocean say to the other ocean ? nothing , they just waved . <eos>
horse walks into... a bar , and a golfer , the bartender says , " what is this , what is a rabbit ? " " this is this a cellist layoffs for a cellist layoffs for a joke ? " <eos>
why did the... chicken cross the road ? to get to the other side . <eos>
what did the... fish say when it hit the wall ? dam <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... skeleton cross the street ? because he didn't have the guts ! <eos>
61
evaluating performance...

Epoch: 61 Accuracy in batch of size 64 : 0.921875 Loss: 0.2744027376174927
62
evaluating performance...

Epoch: 62 Accuracy in batch of size 64 : 0.90625 Loss: 0.2833002507686615
63
evaluating performance...

Epoch: 63 Accuracy in batch of size 64 : 0.875 Loss: 0.3616673946380615
64
evaluating performance...

Epoch: 64 Accuracy in batch of size 64 : 0.90625 Loss: 0.3253234326839447
65
evaluating performance...

Epoch: 65 Accuracy in batch of size 64 : 0.90625 Loss: 0.3161003887653351
66
evaluating performance...

Epoch: 66 Accuracy in batch of size 64 : 0.953125 Loss: 0.33763203024864197
67
evaluating performance...

Epoch: 67 Accuracy in batch of size 64 : 0.875 Loss: 0.5546090006828308
68
evaluating performance...

Epoch: 68 Accuracy in batch of size 64 : 0.875 Loss: 0.5163622498512268
69
evaluating performance...

Epoch: 69 Accuracy in batch of size 64 : 0.859375 Loss: 0.5478627681732178
70
evaluating performance...

Epoch: 70 Accuracy in batch of size 64 : 0.9375 Loss: 0.3914349675178528
what did one... casket say to the other ? " is that you coffin ? " <eos>
horse walks into... a bar ... and asks the nearest person " hey , is the bar tender here ? " <eos>
why did the... chicken cross the playground ? to get to the other slide . <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... melons be together ? everyone knows melons cantaloupe . <eos>
71
evaluating performance...

Epoch: 71 Accuracy in batch of size 64 : 0.890625 Loss: 0.44266581535339355
72
evaluating performance...

Epoch: 72 Accuracy in batch of size 64 : 0.875 Loss: 0.4411865174770355
73
evaluating performance...

Epoch: 73 Accuracy in batch of size 64 : 0.828125 Loss: 0.7326526641845703
74
evaluating performance...

Epoch: 74 Accuracy in batch of size 64 : 0.796875 Loss: 0.6487791538238525
75
evaluating performance...

Epoch: 75 Accuracy in batch of size 64 : 0.90625 Loss: 0.29420575499534607
76
evaluating performance...

Epoch: 76 Accuracy in batch of size 64 : 0.859375 Loss: 0.6143924593925476
77
evaluating performance...

Epoch: 77 Accuracy in batch of size 64 : 0.859375 Loss: 0.5556854605674744
78
evaluating performance...

Epoch: 78 Accuracy in batch of size 64 : 0.875 Loss: 0.4252113401889801
79
evaluating performance...

Epoch: 79 Accuracy in batch of size 64 : 0.84375 Loss: 0.5743739008903503
80
evaluating performance...

Epoch: 80 Accuracy in batch of size 64 : 0.90625 Loss: 0.41830453276634216
what did one... snowman say to the other snowman ? ' do you smell carrots ? ' <eos>
horse walks into... a bar ... and orders a martini . the bartender asks " olive ' er twist ? " <eos>
why did the... chicken cross the road ? to get to the other side . <eos>
what did the... fish say when it hit the wall ? dam <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... hunter cook breakfast ? the game warden found out he poached his eggs ! <eos>
81
evaluating performance...

Epoch: 81 Accuracy in batch of size 64 : 0.890625 Loss: 0.38799747824668884
82
evaluating performance...

Epoch: 82 Accuracy in batch of size 64 : 0.90625 Loss: 0.5023730397224426
83
evaluating performance...

Epoch: 83 Accuracy in batch of size 64 : 0.953125 Loss: 0.2893097698688507
84
evaluating performance...

Epoch: 84 Accuracy in batch of size 64 : 0.84375 Loss: 0.5921840667724609
85
evaluating performance...

Epoch: 85 Accuracy in batch of size 64 : 0.90625 Loss: 0.4505969285964966
86
evaluating performance...

Epoch: 86 Accuracy in batch of size 64 : 0.890625 Loss: 0.366454154253006
87
evaluating performance...

Epoch: 87 Accuracy in batch of size 64 : 0.953125 Loss: 0.2592593729496002
88
evaluating performance...

Epoch: 88 Accuracy in batch of size 64 : 0.8125 Loss: 0.7084031701087952
89
evaluating performance...

Epoch: 89 Accuracy in batch of size 64 : 0.84375 Loss: 0.6129031777381897
90
evaluating performance...

Epoch: 90 Accuracy in batch of size 64 : 0.875 Loss: 0.42430639266967773
what did one... math book say to the other ? don't bother me ; i've got my own * problems ! * <eos>
horse walks into... a bar ... and asks a nearest person " hey , is the bar tender here ? " <eos>
why did the... chicken cross the road ? to get away from gordon ramsey <eos>
what did the... fish say when it ran into the wall ? dam <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... melons be together ? everyone knows melons cantaloupe . <eos>
91
evaluating performance...

Epoch: 91 Accuracy in batch of size 64 : 0.875 Loss: 0.39870479702949524
92
evaluating performance...

Epoch: 92 Accuracy in batch of size 64 : 0.9375 Loss: 0.17069293558597565
93
evaluating performance...

Epoch: 93 Accuracy in batch of size 64 : 0.84375 Loss: 0.5896261930465698
94
evaluating performance...

Epoch: 94 Accuracy in batch of size 64 : 0.890625 Loss: 0.42592594027519226
95
evaluating performance...

Epoch: 95 Accuracy in batch of size 64 : 0.9375 Loss: 0.3123335838317871
96
evaluating performance...

Epoch: 96 Accuracy in batch of size 64 : 0.921875 Loss: 0.24841588735580444
97
evaluating performance...

Epoch: 97 Accuracy in batch of size 64 : 0.90625 Loss: 0.42842432856559753
98
evaluating performance...

Epoch: 98 Accuracy in batch of size 64 : 0.90625 Loss: 0.42968276143074036
99
evaluating performance...

Epoch: 99 Accuracy in batch of size 64 : 0.84375 Loss: 0.6485122442245483
100
evaluating performance...

Epoch: 100 Accuracy in batch of size 64 : 0.8125 Loss: 0.5794530510902405
what did one... math book say to the other math book ? we've got a lot of problems . <eos>
horse walks into... a bar ... and asks the nearest person " hey , is the bar tender here ? " <eos>
why did the... chicken cross the playground ? to get to the other slide <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... only superhuman frozone can't deal with ? thor . <eos>
why couldn't the... melons be together ? everyone knows melons cantaloupe . <eos>
101
evaluating performance...

Epoch: 101 Accuracy in batch of size 64 : 0.90625 Loss: 0.45222923159599304
102
evaluating performance...

Epoch: 102 Accuracy in batch of size 64 : 0.875 Loss: 0.38435158133506775
103
evaluating performance...

Epoch: 103 Accuracy in batch of size 64 : 0.859375 Loss: 0.48147547245025635
104
evaluating performance...

Epoch: 104 Accuracy in batch of size 64 : 0.828125 Loss: 0.5563457012176514
105
evaluating performance...

Epoch: 105 Accuracy in batch of size 64 : 0.921875 Loss: 0.23781047761440277
106
evaluating performance...

Epoch: 106 Accuracy in batch of size 64 : 0.875 Loss: 0.5662254095077515
107
evaluating performance...

Epoch: 107 Accuracy in batch of size 64 : 0.828125 Loss: 0.533923327922821
108
evaluating performance...

Epoch: 108 Accuracy in batch of size 64 : 0.859375 Loss: 0.5331335067749023
109
evaluating performance...

Epoch: 109 Accuracy in batch of size 64 : 0.890625 Loss: 0.33526790142059326
110
evaluating performance...

Epoch: 110 Accuracy in batch of size 64 : 0.84375 Loss: 0.53985595703125
what did one... ocean say to the other ocean ? nothing , they just waved . <eos>
horse walks into... a bar ... and says , " oh , i'm going for one , and a drink . " <eos>
why did the... chicken cross the road ? to get to the moron's house . * knock knock * ^ ^ whose ^ ^ there ? * the chicken ... * <eos>
what did the... fish say when it hit the wall ? dam <eos>
who is the... only superhuman frozone can't deal with ? thor . <eos>
why couldn't the... pirate learn the alphabet ? because he was always lost at c . <eos>
111
evaluating performance...

Epoch: 111 Accuracy in batch of size 64 : 0.828125 Loss: 0.6124285459518433
112
evaluating performance...

Epoch: 112 Accuracy in batch of size 64 : 0.859375 Loss: 0.47103187441825867
113
evaluating performance...

Epoch: 113 Accuracy in batch of size 64 : 0.890625 Loss: 0.4835622310638428
114
evaluating performance...

Epoch: 114 Accuracy in batch of size 64 : 0.890625 Loss: 0.3721567988395691
115
evaluating performance...

Epoch: 115 Accuracy in batch of size 64 : 0.90625 Loss: 0.403899610042572
116
evaluating performance...

Epoch: 116 Accuracy in batch of size 64 : 0.84375 Loss: 0.7210693359375
117
evaluating performance...

Epoch: 117 Accuracy in batch of size 64 : 0.90625 Loss: 0.3325784504413605
118
evaluating performance...

Epoch: 118 Accuracy in batch of size 64 : 0.90625 Loss: 0.2507900297641754
119
evaluating performance...

Epoch: 119 Accuracy in batch of size 64 : 0.921875 Loss: 0.33287864923477173
120
evaluating performance...

Epoch: 120 Accuracy in batch of size 64 : 0.90625 Loss: 0.47354719042778015
what did one... slice of bread say to the other at the end of a game of chess ? " it's stale , mate . " <eos>
horse walks into... a bar ... and orders a martini . the bartender asks " olive ' er twist ? " <eos>
why did the... chicken cross the road ? to get to the moron's house . * knock knock * ^ ^ whose ^ ^ there ? * the chicken ... * <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... only superhuman frozone can't deal with ? thor . <eos>
why couldn't the... woman date a german man ? because she was klaustrophobic ! <eos>
121
evaluating performance...

Epoch: 121 Accuracy in batch of size 64 : 0.875 Loss: 0.44664108753204346
122
evaluating performance...

Epoch: 122 Accuracy in batch of size 64 : 0.859375 Loss: 0.45294541120529175
123
evaluating performance...

Epoch: 123 Accuracy in batch of size 64 : 0.859375 Loss: 0.4242992103099823
124
evaluating performance...

Epoch: 124 Accuracy in batch of size 64 : 0.921875 Loss: 0.36826470494270325
125
evaluating performance...

Epoch: 125 Accuracy in batch of size 64 : 0.859375 Loss: 0.524135947227478
126
evaluating performance...

Epoch: 126 Accuracy in batch of size 64 : 0.875 Loss: 0.4518047869205475
127
evaluating performance...

Epoch: 127 Accuracy in batch of size 64 : 0.875 Loss: 0.4307476580142975
128
evaluating performance...

Epoch: 128 Accuracy in batch of size 64 : 0.90625 Loss: 0.39367449283599854
129
evaluating performance...

Epoch: 129 Accuracy in batch of size 64 : 0.921875 Loss: 0.2531358003616333
130
evaluating performance...

Epoch: 130 Accuracy in batch of size 64 : 0.859375 Loss: 0.5535259246826172
what did one... ocean say to the other ocean ? nothing , they just waved . <eos>
horse walks into... a bar , and there is no punchline , because ruining music isn't funny . <eos>
why did the... chicken cross the road ? to get away from gordon ramsey <eos>
what did the... fish say when it hit the concrete wall ? dam <eos>
who is the... only superhuman frozone can't deal with ? thor . <eos>
why couldn't the... alligator satisfy his lover ? he had a reptile dysfunction . <eos>
131
evaluating performance...

Epoch: 131 Accuracy in batch of size 64 : 0.9375 Loss: 0.5072172284126282
132
evaluating performance...

Epoch: 132 Accuracy in batch of size 64 : 0.890625 Loss: 0.3535669147968292
133
evaluating performance...

Epoch: 133 Accuracy in batch of size 64 : 0.921875 Loss: 0.32012349367141724
134
evaluating performance...

Epoch: 134 Accuracy in batch of size 64 : 0.828125 Loss: 0.5467897653579712
135
evaluating performance...

Epoch: 135 Accuracy in batch of size 64 : 0.8125 Loss: 0.534837543964386
136
evaluating performance...

Epoch: 136 Accuracy in batch of size 64 : 0.859375 Loss: 0.5284005999565125
137
evaluating performance...

Epoch: 137 Accuracy in batch of size 64 : 0.9375 Loss: 0.16212424635887146
138
evaluating performance...

Epoch: 138 Accuracy in batch of size 64 : 0.84375 Loss: 0.5049421787261963
139
evaluating performance...

Epoch: 139 Accuracy in batch of size 64 : 0.953125 Loss: 0.1574110984802246
140
evaluating performance...

Epoch: 140 Accuracy in batch of size 64 : 0.90625 Loss: 0.3009650707244873
what did one... math book say to the other ? don't bother me ; i've got my own * problems ! * <eos>
horse walks into... a bar , and asks ... ' is this bad ' same is . " <eos>
why did the... chicken cross the playground ? to get to the other slide <eos>
what did the... fish say when it hit the wall ? dam <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... pony sing ? he was a little horse . <eos>
141
evaluating performance...

Epoch: 141 Accuracy in batch of size 64 : 0.890625 Loss: 0.33197787404060364
142
evaluating performance...

Epoch: 142 Accuracy in batch of size 64 : 0.890625 Loss: 0.45322537422180176
143
evaluating performance...

Epoch: 143 Accuracy in batch of size 64 : 0.890625 Loss: 0.3633648455142975
144
evaluating performance...

Epoch: 144 Accuracy in batch of size 64 : 0.859375 Loss: 0.3864445686340332
145
evaluating performance...

Epoch: 145 Accuracy in batch of size 64 : 0.859375 Loss: 0.3852071762084961
146
evaluating performance...

Epoch: 146 Accuracy in batch of size 64 : 0.921875 Loss: 0.33622676134109497
147
evaluating performance...

Epoch: 147 Accuracy in batch of size 64 : 0.921875 Loss: 0.280120313167572
148
evaluating performance...

Epoch: 148 Accuracy in batch of size 64 : 0.8125 Loss: 0.6737222075462341
149
evaluating performance...

Epoch: 149 Accuracy in batch of size 64 : 0.90625 Loss: 0.4339830279350281
150
evaluating performance...

Epoch: 150 Accuracy in batch of size 64 : 0.90625 Loss: 0.4934132695198059
what did one... frog say to the other frog ? time's fun when you're having flies . <eos>
horse walks into... a bar ... and orders a martini . the bartender asks " olive ' er twist ? " <eos>
why did the... chicken cross the road ? to get away from gordon ramsey <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... hunter cook breakfast ? the game warden found out he poached his eggs ! <eos>
151
evaluating performance...

Epoch: 151 Accuracy in batch of size 64 : 0.953125 Loss: 0.22162941098213196
152
evaluating performance...

Epoch: 152 Accuracy in batch of size 64 : 0.890625 Loss: 0.5403765439987183
153
evaluating performance...

Epoch: 153 Accuracy in batch of size 64 : 0.9375 Loss: 0.3107669949531555
154
evaluating performance...

Epoch: 154 Accuracy in batch of size 64 : 0.859375 Loss: 0.48975327610969543
155
evaluating performance...

Epoch: 155 Accuracy in batch of size 64 : 0.859375 Loss: 0.46624070405960083
156
evaluating performance...

Epoch: 156 Accuracy in batch of size 64 : 0.921875 Loss: 0.3167779743671417
157
evaluating performance...

Epoch: 157 Accuracy in batch of size 64 : 0.875 Loss: 0.4394097328186035
158
evaluating performance...

Epoch: 158 Accuracy in batch of size 64 : 0.9375 Loss: 0.31130507588386536
159
evaluating performance...

Epoch: 159 Accuracy in batch of size 64 : 0.90625 Loss: 0.2515385150909424
160
evaluating performance...

Epoch: 160 Accuracy in batch of size 64 : 0.828125 Loss: 0.5557294487953186
what did one... ocean say to the other ocean ? nothing , they just waved . <eos>
horse walks into... a bar , orders a beer . the bartender says , " why the long face ? " and the horse answers , " they've started a round of layoffs at the plant . ! ! " <eos>
why did the... chicken cross the road half-way ? she wanted to lay it on the line . <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... alligator satisfy his lover ? he had a reptile dysfunction . <eos>
161
evaluating performance...

Epoch: 161 Accuracy in batch of size 64 : 0.859375 Loss: 0.50250244140625
162
evaluating performance...

Epoch: 162 Accuracy in batch of size 64 : 0.890625 Loss: 0.33578723669052124
163
evaluating performance...

Epoch: 163 Accuracy in batch of size 64 : 0.890625 Loss: 0.35039085149765015
164
evaluating performance...

Epoch: 164 Accuracy in batch of size 64 : 0.953125 Loss: 0.16015100479125977
165
evaluating performance...

Epoch: 165 Accuracy in batch of size 64 : 0.921875 Loss: 0.3803696036338806
166
evaluating performance...

Epoch: 166 Accuracy in batch of size 64 : 0.84375 Loss: 0.5355112552642822
167
evaluating performance...

Epoch: 167 Accuracy in batch of size 64 : 0.9375 Loss: 0.2136787623167038
168
evaluating performance...

Epoch: 168 Accuracy in batch of size 64 : 0.9375 Loss: 0.1939457356929779
169
evaluating performance...

Epoch: 169 Accuracy in batch of size 64 : 0.875 Loss: 0.4505603015422821
170
evaluating performance...

Epoch: 170 Accuracy in batch of size 64 : 0.859375 Loss: 0.4121028184890747
what did one... ocean say to the other ocean ? nothing , they just waved . <eos>
horse walks into... a bar , orders a beer . a beer , a mop <eos>
why did the... chicken cross the road ? to get to the other side . <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... only superhuman frozone can't deal with ? thor . <eos>
why couldn't the... pony sing ? he was a little horse . <eos>
171
evaluating performance...

Epoch: 171 Accuracy in batch of size 64 : 0.859375 Loss: 0.3841279149055481
172
evaluating performance...

Epoch: 172 Accuracy in batch of size 64 : 0.859375 Loss: 0.4921673834323883
173
evaluating performance...

Epoch: 173 Accuracy in batch of size 64 : 0.90625 Loss: 0.4489007592201233
174
evaluating performance...

Epoch: 174 Accuracy in batch of size 64 : 0.84375 Loss: 0.5455082654953003
175
evaluating performance...

Epoch: 175 Accuracy in batch of size 64 : 0.890625 Loss: 0.35699865221977234
176
evaluating performance...

Epoch: 176 Accuracy in batch of size 64 : 0.875 Loss: 0.3187406063079834
177
evaluating performance...

Epoch: 177 Accuracy in batch of size 64 : 0.953125 Loss: 0.24802827835083008
178
evaluating performance...

Epoch: 178 Accuracy in batch of size 64 : 0.890625 Loss: 0.36777740716934204
179
evaluating performance...

Epoch: 179 Accuracy in batch of size 64 : 0.90625 Loss: 0.3484022617340088
180
evaluating performance...

Epoch: 180 Accuracy in batch of size 64 : 0.921875 Loss: 0.30392760038375854
what did one... math book say to the other math book ? we've got a lot of problems . <eos>
horse walks into... a bar , orders a beer . the bartender says , " why the long face ? " and the horse answers , " they've started a round of layoffs at the plant . " <eos>
why did the... chicken cross the road ? to get to the other side . <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... alligator satisfy his lover ? he had a reptile dysfunction . <eos>
181
evaluating performance...

Epoch: 181 Accuracy in batch of size 64 : 0.953125 Loss: 0.19172079861164093
182
evaluating performance...

Epoch: 182 Accuracy in batch of size 64 : 0.90625 Loss: 0.26117292046546936
183
evaluating performance...

Epoch: 183 Accuracy in batch of size 64 : 0.90625 Loss: 0.36099737882614136
184
evaluating performance...

Epoch: 184 Accuracy in batch of size 64 : 0.875 Loss: 0.3974109888076782
185
evaluating performance...

Epoch: 185 Accuracy in batch of size 64 : 0.859375 Loss: 0.5123835206031799
186
evaluating performance...

Epoch: 186 Accuracy in batch of size 64 : 0.859375 Loss: 0.5904452204704285
187
evaluating performance...

Epoch: 187 Accuracy in batch of size 64 : 0.859375 Loss: 0.48660358786582947
188
evaluating performance...

Epoch: 188 Accuracy in batch of size 64 : 0.859375 Loss: 0.44242578744888306
189
evaluating performance...

Epoch: 189 Accuracy in batch of size 64 : 0.859375 Loss: 0.5530902147293091
190
evaluating performance...

Epoch: 190 Accuracy in batch of size 64 : 0.9375 Loss: 0.40352949500083923
what did one... frog say to the other frog ? time's fun when you're having flies . <eos>
horse walks into... a bar , and asks " it's christmas that is too many kind of house . " a final truck told to me " . " <eos>
why did the... chicken cross the road ? to get to the moron's house . * knock knock * ^ ^ whose ^ ^ there ? * the chicken ... * <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... pirate learn the alphabet ? because he was always lost at c . <eos>
191
evaluating performance...

Epoch: 191 Accuracy in batch of size 64 : 0.9375 Loss: 0.24369725584983826
192
evaluating performance...

Epoch: 192 Accuracy in batch of size 64 : 0.84375 Loss: 0.4799259305000305
193
evaluating performance...

Epoch: 193 Accuracy in batch of size 64 : 0.875 Loss: 0.4586425721645355
194
evaluating performance...

Epoch: 194 Accuracy in batch of size 64 : 0.921875 Loss: 0.20771533250808716
195
evaluating performance...

Epoch: 195 Accuracy in batch of size 64 : 0.9375 Loss: 0.2608312964439392
196
evaluating performance...

Epoch: 196 Accuracy in batch of size 64 : 0.921875 Loss: 0.31286609172821045
197
evaluating performance...

Epoch: 197 Accuracy in batch of size 64 : 0.84375 Loss: 0.46407264471054077
198
evaluating performance...

Epoch: 198 Accuracy in batch of size 64 : 0.90625 Loss: 0.4924899637699127
199
evaluating performance...

Epoch: 199 Accuracy in batch of size 64 : 0.953125 Loss: 0.18749293684959412
200
evaluating performance...

Epoch: 200 Accuracy in batch of size 64 : 0.890625 Loss: 0.3665885925292969
what did one... ocean say to the other ocean ? nothing , they just waved . <eos>
horse walks into... a bar , orders a beer . the bartender says , " why the long face ? " and the horse answers , " they've started a round of layoffs at the plant . " <eos>
why did the... chicken cross the road ? to get to the moron's house . * knock knock * ^ ^ whose ^ ^ there ? * the chicken ... * <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... hunter cook breakfast ? the game warden found out he poached his eggs ! <eos>
201
evaluating performance...

Epoch: 201 Accuracy in batch of size 64 : 0.859375 Loss: 0.35708314180374146
202
evaluating performance...

Epoch: 202 Accuracy in batch of size 64 : 0.921875 Loss: 0.33879777789115906
203
evaluating performance...

Epoch: 203 Accuracy in batch of size 64 : 0.921875 Loss: 0.24687981605529785
204
evaluating performance...

Epoch: 204 Accuracy in batch of size 64 : 0.984375 Loss: 0.20358824729919434
205
evaluating performance...

Epoch: 205 Accuracy in batch of size 64 : 0.859375 Loss: 0.5656560063362122
206
evaluating performance...

Epoch: 206 Accuracy in batch of size 64 : 0.921875 Loss: 0.3862191438674927
207
evaluating performance...

Epoch: 207 Accuracy in batch of size 64 : 0.796875 Loss: 0.6550686359405518
208
evaluating performance...

Epoch: 208 Accuracy in batch of size 64 : 0.875 Loss: 0.48698800802230835
209
evaluating performance...

Epoch: 209 Accuracy in batch of size 64 : 0.90625 Loss: 0.30993151664733887
210
evaluating performance...

Epoch: 210 Accuracy in batch of size 64 : 0.90625 Loss: 0.2901729941368103
what did one... frog say to the other frog ? time's fun when you're having flies . <eos>
horse walks into... a bar ... he says " ow " <eos>
why did the... chicken cross the road ? to show the opossum it could be done . <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... only superhuman frozone can't deal with ? thor . <eos>
why couldn't the... lifeguard save the hippie from drowning ? he was * too far out , maaan * . <eos>
211
evaluating performance...

Epoch: 211 Accuracy in batch of size 64 : 0.875 Loss: 0.3168528079986572
212
evaluating performance...

Epoch: 212 Accuracy in batch of size 64 : 0.84375 Loss: 0.6198964715003967
213
evaluating performance...

Epoch: 213 Accuracy in batch of size 64 : 0.953125 Loss: 0.1431003361940384
214
evaluating performance...

Epoch: 214 Accuracy in batch of size 64 : 0.953125 Loss: 0.1838856190443039
215
evaluating performance...

Epoch: 215 Accuracy in batch of size 64 : 0.859375 Loss: 0.5373489856719971
216
evaluating performance...

Epoch: 216 Accuracy in batch of size 64 : 0.953125 Loss: 0.22681723535060883
217
evaluating performance...

Epoch: 217 Accuracy in batch of size 64 : 0.890625 Loss: 0.4948083758354187
218
evaluating performance...

Epoch: 218 Accuracy in batch of size 64 : 0.859375 Loss: 0.5383189916610718
219
evaluating performance...

Epoch: 219 Accuracy in batch of size 64 : 0.890625 Loss: 0.4217422902584076
220
evaluating performance...

Epoch: 220 Accuracy in batch of size 64 : 0.890625 Loss: 0.3838508427143097
what did one... frog say to the other ? time's fun when you're having flies . <eos>
horse walks into... a bar ... so nickelback walks into a bar , and there is no punchline , because ruining music isn't funny . <eos>
why did the... chicken cross the road ? to get to the moron's house . * knock knock * ^ ^ whose ^ ^ there ? * the chicken ... * <eos>
what did the... fish say when it ran into the wall ? dam <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... lifeguard save the hippie from drowning ? he was * too far out , maaan * . <eos>
221
evaluating performance...

Epoch: 221 Accuracy in batch of size 64 : 0.90625 Loss: 0.4321269989013672
222
evaluating performance...

Epoch: 222 Accuracy in batch of size 64 : 0.953125 Loss: 0.2018306851387024
223
evaluating performance...

Epoch: 223 Accuracy in batch of size 64 : 0.921875 Loss: 0.3579108715057373
224
evaluating performance...

Epoch: 224 Accuracy in batch of size 64 : 0.90625 Loss: 0.3351978659629822
225
evaluating performance...

Epoch: 225 Accuracy in batch of size 64 : 0.90625 Loss: 0.26871079206466675
226
evaluating performance...

Epoch: 226 Accuracy in batch of size 64 : 0.96875 Loss: 0.17532530426979065
227
evaluating performance...

Epoch: 227 Accuracy in batch of size 64 : 0.953125 Loss: 0.2899528443813324
228
evaluating performance...

Epoch: 228 Accuracy in batch of size 64 : 0.9375 Loss: 0.2785237431526184
229
evaluating performance...

Epoch: 229 Accuracy in batch of size 64 : 0.953125 Loss: 0.2577624022960663
230
evaluating performance...

Epoch: 230 Accuracy in batch of size 64 : 0.9375 Loss: 0.23943836987018585
what did one... frog say to the other ? time's fun when you're having flies . <eos>
horse walks into... a bar ... but [ ' ( s ) : ( http://www.gettyimages.com/detail/photo/friends-at-cafe-bar-high-res-stock-photography/156534295 ) <eos>
why did the... chicken cross the road ? to get to the moron's house . * knock knock * ^ ^ whose ^ ^ there ? * the chicken ... * <eos>
what did the... fish say when it hit the wall ? dam <eos>
who is the... only superhuman frozone can't deal with ? thor . <eos>
why couldn't the... hunter cook breakfast ? the game warden found out he poached his eggs ! <eos>
231
evaluating performance...

Epoch: 231 Accuracy in batch of size 64 : 0.953125 Loss: 0.18082502484321594
232
evaluating performance...

Epoch: 232 Accuracy in batch of size 64 : 0.9375 Loss: 0.3231048583984375
233
evaluating performance...

Epoch: 233 Accuracy in batch of size 64 : 0.96875 Loss: 0.13719302415847778
234
evaluating performance...

Epoch: 234 Accuracy in batch of size 64 : 0.921875 Loss: 0.24359600245952606
235
evaluating performance...

Epoch: 235 Accuracy in batch of size 64 : 0.953125 Loss: 0.18643009662628174
236
evaluating performance...

Epoch: 236 Accuracy in batch of size 64 : 0.828125 Loss: 0.4704538583755493
237
evaluating performance...

Epoch: 237 Accuracy in batch of size 64 : 0.890625 Loss: 0.414680540561676
238
evaluating performance...

Epoch: 238 Accuracy in batch of size 64 : 0.84375 Loss: 0.4636786878108978
239
evaluating performance...

Epoch: 239 Accuracy in batch of size 64 : 0.890625 Loss: 0.30697140097618103
240
evaluating performance...

Epoch: 240 Accuracy in batch of size 64 : 0.921875 Loss: 0.261513888835907
what did one... math book say to the other ? don't bother me ; i've got my own * problems ! * <eos>
horse walks into... a bar ... and orders a martini . the bartender asks " olive ' er twist ? " <eos>
why did the... chicken cross the playground ? to get to the other slide . <eos>
what did the... fish say when it hit the wall ? dam <eos>
who is the... only superhuman frozone can't deal with ? thor . <eos>
why couldn't the... lifeguard save the hippie from drowning ? he was * too far out , maaan * . <eos>
241
evaluating performance...

Epoch: 241 Accuracy in batch of size 64 : 0.875 Loss: 0.43792977929115295
242
evaluating performance...

Epoch: 242 Accuracy in batch of size 64 : 0.859375 Loss: 0.5228660702705383
243
evaluating performance...

Epoch: 243 Accuracy in batch of size 64 : 0.84375 Loss: 0.5511810779571533
244
evaluating performance...

Epoch: 244 Accuracy in batch of size 64 : 0.890625 Loss: 0.5496217608451843
245
evaluating performance...

Epoch: 245 Accuracy in batch of size 64 : 0.921875 Loss: 0.3683527112007141
246
evaluating performance...

Epoch: 246 Accuracy in batch of size 64 : 0.890625 Loss: 0.5663173794746399
247
evaluating performance...

Epoch: 247 Accuracy in batch of size 64 : 0.90625 Loss: 0.33841344714164734
248
evaluating performance...

Epoch: 248 Accuracy in batch of size 64 : 0.90625 Loss: 0.35838547348976135
249
evaluating performance...

Epoch: 249 Accuracy in batch of size 64 : 0.921875 Loss: 0.2434207648038864
250
evaluating performance...

Epoch: 250 Accuracy in batch of size 64 : 0.875 Loss: 0.5339662432670593
what did one... frog say to the other frog ? time's fun when you're having flies . <eos>
horse walks into... a bar ... he orders a martini . the bartender asks " olive ' er twist ? " <eos>
why did the... chicken cross the road ? to get to the moron's house . * knock knock * ^ ^ whose ^ ^ there ? * the chicken ... * <eos>
what did the... fish say when it hit the wall ? dam . <eos>
who is the... roundest knight at king arthur's table ? sir cumference . <eos>
why couldn't the... hunter cook breakfast ? the game warden found out he poached his eggs ! <eos>
251
evaluating performance...

Epoch: 251 Accuracy in batch of size 64 : 0.90625 Loss: 0.39040887355804443
252
evaluating performance...

Epoch: 252 Accuracy in batch of size 64 : 0.921875 Loss: 0.37863072752952576
253
evaluating performance...

Epoch: 253 Accuracy in batch of size 64 : 0.890625 Loss: 0.40042123198509216
254
evaluating performance...

Epoch: 254 Accuracy in batch of size 64 : 0.84375 Loss: 0.4927188754081726
255
evaluating performance...

Epoch: 255 Accuracy in batch of size 64 : 0.828125 Loss: 0.4663769006729126
```
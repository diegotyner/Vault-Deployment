---
created:
  - " 06-09-2024 17:47"
tags:
  - Resource
  - Method
Method-For: Data Processing
---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```



# 📗 -> Text Tokenization and Vectorization in NLP
[Medium Article](https://medium.com/@WojtekFulmyk/text-tokenization-and-vectorization-in-nlp-ac5e3eb35b85)


## 🎤 Vocab
- **NLP:** Using algorithms to analyze and process human language.
- **Tokenization:** Splitting text into smaller units such as words or phrases.
- **Vectorization:** Converting text into numerical representations for ML models.
- **Reformatting:** Changing the structure or representation of data.


## ❗ Information
### Text Tokenization
- Text tokenization is when text is converted to smaller units called "tokens".
- One of the first and most important steps in NLP
- Different models exist:
	- Basic methods just split text on whitespace or punctuation
	- Advanced split words themselves and tokenize linguistic units
- The goal is to best represent text for ML purposes

- ` nltk.tokenize.word_tokenize(text) `

### Text Vectorization:
- Turning text into numerical representations (vectors) so that they can be understood by ML models.
Common Methods:
- *One-hot encoding:* (assigning a unique integer value to each word)
- *Bag-of-words:* (counting the occurrence of words within each document)
	- `from sklearn.feature_extraction.text import CountVectorizer`
- *Word embeddings:* (mapping words to vectors so as to capturing meaning)

## 📄 -> Methodology 
- Simple or full description 

## ✒️ -> Usage
- How and where is it used

## 🧪-> Example
- Define examples where it can be used

## 🔗 -> Related Word
- Fun fact! Word tokenization was first used in the NLP program SHRDLU in the 1960s, which was the original [[Blocks-World]]


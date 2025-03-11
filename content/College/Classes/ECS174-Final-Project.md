
[Proposal](https://docs.google.com/document/d/1obwJHyeMLVeYI_FJfb0udcRlrbHcrdjjUblgzoREejU/edit?tab=t.0)
[Resource](https://www.isical.ac.in/~vlrg/sites/default/files/Pulak/Off-Line%20Handwritten%20OCR.pdf)
[[CV-Projects]]
[[Handwritten-Text-Recognition-CNN-LSTM]]
### Methods
Limiting the scope of the project, by requiring data to be entered into isolated boxes, or only classifying a certain script / font.

Image preprocessing:
- Convert image to greyscale or black and white
	- This could be done through a sigmoid on the color intensity
- Line and word detection
- Character isolation
- Noise removal
- Cropping, dilation, and other forms of macro image adjustment

Data Processing:
- Feature extraction
	- Decompose important features of the data, like lines or loops, and use these to feed into the model
> Histogram of Oriented Gradients (HOG): Useful for capturing edge information.
> Zoning Methods: Dividing the image into zones to extract features from specific areas.
> Pixel Intensity Patterns: Discuss how patterns in pixel intensity can be leveraged to recognize different handwriting styles.

Classification:
- A convolutional neural network is a good first approach, able to extract important features from the network by itself
- A recurrent neural network might also be a good approach, able to use a context window to analyze the text.
- Using near-neighbor analysis to use context clues in the words to correct errors in initial classification

Training is done based on the correct labelings, this can be done at both the image level and the character level.


```
%matplotlib inline
import os
os.environ["KMP_DUPLICATE_LIB_OK"]="TRUE"
import random
import numpy as np
import torch
import torchvision
import torchvision.transforms as transforms
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
from torch.utils.data import Dataset
import matplotlib.pyplot as plt
import cv2
import time
from PIL import Image, ImageEnhance

# ---

vocab_set = set()
max_label_length = 0
vocab_size = 53 # change this
input_size = 512
output_size = vocab_size
hidden_size = 256
batch_size = 64
dropout_rate = 0.1
epochs = 150 # change this to >=100 after testing a little
learning_rate = 0.0003
in_channels = 1 # need to define this
height = 32
width = 128

# ---

import kagglehub
path = kagglehub.dataset_download("nibinv23/iam-handwriting-word-database")
#path = "/root/.cache/kagglehub/datasets/nibinv23/iam-handwriting-word-database/versions/2/"
path = "/Users/hufen/.cache/kagglehub/datasets/nibinv23/iam-handwriting-word-database/versions/2/"
for root, dirs, files in os.walk(path):
    print(f"Root: {root}, Files: {files}")

# ---

def sanitize_filename(filename):
    # Replace invalid characters with an underscore
    return re.sub(r'[<>:"/\\|?*\x00-\x1F]', '_', filename)

def gray_scale_check(inputPath, outputPath):
  try:
    image = Image.open(inputPath)
    if image.mode == "RGB": #only convert if RBG
        pixels = image.load()
        width, height = image.size
        grayscaleImage = Image.new("L", (width, height))
        grayscalePixels = grayscaleImage.load()
        for x in range(width):
            for y in range(height):
                r, g, b = pixels[x, y]
                grayValue = int(0.299 * r + 0.587 * g + 0.114 * b) #grayscale formula
                grayscalePixels[x, y] = grayValue
        grayscaleImage.save(outputPath)
        return grayscaleImage
    else:
        image.save(outputPath)
        return image
  except(OSError, Image.UnidentifiedImageError) as e:
      print(f"Image processing error, return none")
      return None #these images will be excluded from the dataset

def label_augment_preprocess():
    #datasetRoot = "/root/.cache/kagglehub/datasets/nibinv23/iam-handwriting-word-database/versions/2/"
    datasetRoot = "/Users/hufen/.cache/kagglehub/datasets/nibinv23/iam-handwriting-word-database/versions/2/"
    wordsNewPath = os.path.join(datasetRoot, "words_new.txt")
    Path = os.path.join(datasetRoot, "iam_words/words.txt")
    iamWordsDir = os.path.join(datasetRoot, "iam_words/words")
    #outputDir = "/content/labeledImages"
    #inputFolder = "/content/labeledImages"
    #preprocessedFolder = "/content/preprocessed"
    outputDir = "/Users/hufen/Coding/ECS 174/Project/labeledImages"
    inputFolder = "/Users/hufen/Coding/ECS 174/Project/labeledImages"
    preprocessedFolder = "/Users/hufen/Coding/ECS 174/Project/preprocessed"

    Labels = {}
    with open(wordsNewPath, "r") as f:
        lines = f.readlines()
    for line in lines:
        if line.startswith("#") or len(line.strip()) == 0: continue
        cols = line.split()
        if cols[1] == "err": continue #just skip if theres an error
        fileId = cols[0]
        transcription = " ".join(cols[8:])
        Labels[fileId] = transcription
    os.makedirs(preprocessedFolder, exist_ok=True)

    for root, _, files in os.walk(iamWordsDir):
        for filename in files:
            if filename.endswith(('.png', '.jpg', '.jpeg')): #valid etension
                fileId = filename.rsplit('.', 1)[0]
                if fileId in Labels:
                    label = Labels[fileId]
                    # Sanitize the label to remove invalid characters
                    label = sanitize_filename(label)
                    labelDir = os.path.join(outputDir, label)
                    global max_label_length
                    global vocab_set
                    if len(label) > max_label_length:
                        max_label_length = len(label)
                    for char in label: # The block is to adjust the vocab size
                      vocab_set.add(char)

                    os.makedirs(labelDir, exist_ok=True)
                    inputPath = os.path.join(root, filename)
                    outputPath = os.path.join(labelDir, filename)

                    try:
                        with open(inputPath, 'rb') as srcFile, open(outputPath, 'wb') as destFile:
                            destFile.write(srcFile.read())
                    except(OSError, Image.UnidentifiedImageError) as e:
                        print(f"Image processing error: {e}")

    for root, _, files in os.walk(inputFolder):
        for filename in files:
            if filename.endswith(('.png', '.jpg', '.jpeg')):
                inputPath = os.path.join(root, filename)
                relativePath = os.path.relpath(inputPath, inputFolder)
                outputPath = os.path.join(preprocessedFolder, relativePath)

                os.makedirs(os.path.dirname(outputPath), exist_ok=True)
                grayscaleImage = gray_scale_check(inputPath, outputPath)

                if grayscaleImage is None:
                  continue #exclude image from handling

                imgWidth, imgHeight = grayscaleImage.size
                cropWidth, cropHeight = int((imgWidth * 0.95)), int((imgHeight * 0.95)) #crop to 95% input height and width at most
                croppedImage = None
                if imgWidth >= width and imgHeight >= height:
                    top = random.randint(0, imgHeight - cropHeight)
                    left = random.randint(0, imgWidth - cropWidth)
                    right = left + cropWidth
                    bottom = top + cropHeight
                    croppedImage = grayscaleImage.crop((left, top, right, bottom))
                    #only crops if it is large enough to be cropped

                bFactor = random.uniform(0.8, 1.2)
                cFactor = random.uniform(0.8, 1.2)

                brightnessAdjusted = (ImageEnhance.Brightness(grayscaleImage)).enhance(bFactor)
                contrastAdjusted = ImageEnhance.Contrast(brightnessAdjusted).enhance(cFactor)
                if croppedImage:
                    croppedOutputPath = outputPath.replace('.png', '_crop.png').replace('.jpg', '_crop.jpg')
                    croppedImage.save(croppedOutputPath) #finally save augmented images
                contrastAdjustedOutputPath = outputPath.replace('.png', '_bc.png').replace('.jpg', '_bc.jpg')

                contrastAdjusted.save(contrastAdjustedOutputPath) # ^^

label_augment_preprocess()

# ---

# Instantiate a dataset class
class HandwritingDataset(Dataset):
    def __init__(self, preprocessedFolder, vocab, transform=None):
        self.data_dir = preprocessedFolder
        self.transform = transform
        self.vocab = vocab
        self.image_paths = []
        self.labels = []

        for root, _, files in os.walk(self.data_dir):
          for file in files:
            if file.endswith(('.png', '.jpg', '.jpeg')):
              self.image_paths.append(os.path.join(root, file))
              self.labels.append(os.path.basename(root))

    def __len__(self):
        return len(self.image_paths)

    def __getitem__(self, idx):
      image_path = self.image_paths[idx]
      label = self.labels[idx]
      image = Image.open(image_path)

      # transform (resizing and conversion to tensor)
      if self.transform:
            image = self.transform(image)

      # convert label into a tensor and pad it to the max length
      label = torch.tensor([self.vocab[char] for char in label], dtype = torch.long)

      padding_length = max_label_length - label.size(0)
      if padding_length > 0:
            label = torch.cat([label, torch.zeros(padding_length, dtype=torch.long)])

      return image, label

# Initialize folders and the datasets
#preprocessedFolder = "/content/preprocessed"
#nonprocessedFolder = "/content/labeledImages"
preprocessedFolder = "/Users/hufen/Coding/ECS 174/Project/preprocessed"
nonprocessedFolder = "/Users/hufen/Coding/ECS 174/Project/labeledImages"

# Manually add in characters that were sanitized from preprocessing
vocab_set.add('_')
vocab_set.add('*')
vocab_set.add('<')
vocab_set.add('>')
vocab_set.add(':')
vocab_set.add('/')
vocab_set.add('\\')
vocab_set.add('?')
vocab_set.add('"')


# Make a dictionary for vocab
vocab = {char: idx for idx, char in enumerate(sorted(vocab_set))}
vocab_size = len(vocab)
output_size = vocab_size

transform = transforms.Compose([transforms.Resize((32, 128)),
                                transforms.ToTensor(),
                                transforms.Normalize((0.5,), (0.5,))])

trainset = HandwritingDataset(preprocessedFolder, vocab, transform = transform)
trainloader = torch.utils.data.DataLoader(trainset, batch_size = batch_size, shuffle=True, num_workers = 0, pin_memory=True)

testset = HandwritingDataset(nonprocessedFolder, vocab, transform = transform)
testloader = torch.utils.data.DataLoader(testset, batch_size = batch_size, shuffle=False, num_workers = 0, pin_memory=True)

print(vocab)
print(f"Number of training samples: {len(trainloader.dataset)}")
print(f"Number of test samples: {len(testloader.dataset)}")

# ---

# cnn
# cnn
class testCNN(nn.Module):
  def __init__(self, in_channels: int, out_channels: int):
    super(testCNN, self).__init__()
    self.conv1 = nn.Conv2d(in_channels, out_channels, kernel_size=3, stride=1, padding=1)
    self.bn1 = nn.BatchNorm2d(out_channels)

    self.conv2 = nn.Conv2d(out_channels, 64, kernel_size=3, stride=1, padding=1)
    self.bn2 = nn.BatchNorm2d(64)

    self.conv3 = nn.Conv2d(64, 128, kernel_size=3, stride=1, padding=1)
    self.bn3 = nn.BatchNorm2d(128)

    self.conv4 = nn.Conv2d(128, 256, kernel_size=3, stride=1, padding=1)
    self.bn4 = nn.BatchNorm2d(256)

    self.pool = nn.MaxPool2d(kernel_size=2, stride=2)

    # could change droupout
    self.dropout = nn.Dropout(0.3)

  def forward(self, x):
    x = self.pool(F.relu(self.bn1(self.conv1(x))))
    x = self.pool(F.relu(self.bn2(self.conv2(x))))
    x = self.dropout(x)
    x = self.pool(F.relu(self.bn3(self.conv3(x))))
    x = self.dropout(x)
    x = self.pool(F.relu(self.bn4(self.conv4(x))))
    x = self.dropout(x)

    return x

# ---

# 2 LSTM layers
# 2 LSTM layers
class BidirectionalLSTM(nn.Module):
    def __init__(self, input_size, hidden_size, output_size, dropout_rate):
        super().__init__()
        # cnn layers
        self.cnnLayer = testCNN(1, 32)
        # lstm layers
        self.lstm = nn.LSTM(input_size = input_size, hidden_size = hidden_size, num_layers = 2, bias = True, batch_first = False, dropout = dropout_rate, bidirectional = True)
        self.fc = nn.Linear(hidden_size * 2, output_size)

    def forward(self, x):
        x = self.cnnLayer(x)
        # reshape output from cnn
        batch_size, channels, height, width = x.size()
        x = x.permute(3, 0, 2, 1).contiguous()
        x = x.view(width, batch_size, -1)

        x, _ = self.lstm(x)
        x = self.fc(x)
        x = F.log_softmax(x, dim = 2)
        return x

# ---

# Loss and optimizers
model = BidirectionalLSTM(input_size = input_size, hidden_size = hidden_size, output_size = output_size, dropout_rate = dropout_rate)
criterion = nn.CTCLoss(blank = 0, zero_infinity = True)
optimizer = optim.Adam(model.parameters(), lr = learning_rate)

# ---

# Lists to store metrics for plotting
loss_metric = []
training_accuracy = []
test_accuracy = []

# ---

# Training
t0 = time.time()
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

for epoch in range(epochs):

    # Statistics
    correct = 0
    total = 0
    running_loss = 0.0
    for i, data in enumerate(trainloader, 0):
        # get the inputs; data is a list of [inputs, labels]
        inputs, labels = data
        inputs, labels = inputs.to(device), labels.to(device)

        # zero the parameter gradients
        optimizer.zero_grad()

        # forward + backward + optimize
        outputs = model(inputs) # as of right now there is some error with the forward pass that causes nans to appear

        # introduce input and target lengths for ctc loss
        input_lengths = torch.full((outputs.size(1),), outputs.size(0), dtype=torch.long, device=device)
        target_lengths = torch.tensor([len(label[label > 0]) for label in labels], dtype=torch.long, device=device)
        flattened_labels = labels[labels > 0].view(-1).to(device)

        loss = criterion(outputs, flattened_labels, input_lengths, target_lengths)
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
        optimizer.step()

        # print statistics and calculate accuracy
        running_loss += loss.item()

        # Decode predictions
        _, predicted = outputs.max(2)
        predicted = predicted.transpose(0, 1)

        # Remove blanks from predictions
        decoded_preds = []
        for seq in predicted:
            decoded_seq = []
            prev_char = None
            for char in seq:
                if char != prev_char:
                    decoded_seq.append(char.item())
                    prev_char = char
            decoded_preds.append(decoded_seq)

        for pred, label in zip(decoded_preds, labels):
            if pred == label[label > 0].tolist():
                correct += 1
        total += labels.size(0)

        if i % 400 == 399:    # print every 400 mini-batches
            print(f'[{epoch + 1}, {i + 1:5d}] loss: {running_loss / 400:.3f}')
            print(f'accuracy: {correct / total * 100:.2f}%')
            running_loss = 0.0

    # Record the training accuracy and loss
    epoch_loss = running_loss / len(trainloader)
    epoch_accuracy = correct / total
    loss_metric.append(epoch_loss)
    training_accuracy.append(epoch_accuracy)

    # Record the testing accuracy
    correct = 0
    total = 0
    with torch.no_grad():
        try:
            for data in testloader:
                images, labels = data
                images, labels = images.to(device), labels.to(device)
                outputs = model(images)

                _, predicted = outputs.max(2)
                predicted = predicted.transpose(0, 1)

                decoded_preds = []
                for seq in predicted:
                    decoded_seq = []
                    prev_char = None
                    for char in seq:
                        if char != prev_char:
                            decoded_seq.append(char.item())
                        prev_char = char
                    decoded_preds.append(decoded_seq)

                for pred, label in zip(decoded_preds, labels):
                    if pred == label[label > 0].tolist():
                        correct += 1
                total += labels.size(0)
        except(OSError, Image.UnidentifiedImageError) as e:
            terr = time.time()
            print(f"Skipping image due to unidentified image: {e}")

    acc = correct / total
    test_accuracy.append(acc)

    t1 = time.time()
    total_time = t1-t0
    print(f"Training and Testing took {total_time:.2f} seconds until now")

print('Finished Training')

# Plot loss
plt.subplot(1, 3, 1)
plt.plot(loss_metric, label='Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.title('Training Loss')
plt.grid(True)

# Plot training accuracy
plt.subplot(1, 3, 2)
plt.plot(training_accuracy, label='Training Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy (%)')
plt.title('Training Accuracy')
plt.grid(True)

# Plot test accuracy
plt.subplot(1, 3, 3)
plt.plot(test_accuracy, label='Test Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy (%)')
plt.title('Test Accuracy')
plt.grid(True)

plt.tight_layout()
plt.show()


# ---
```
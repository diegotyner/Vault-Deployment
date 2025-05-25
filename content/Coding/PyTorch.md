---
created:
  - " 05-23-2025 15:47"
tags:
  - Resource
  - Coding
---

[PyTorch Docs](https://docs.pytorch.org/docs/stable/index.html)
A python framework for building deep learning models. It provides a number of tools for quickly doing math to facilitate this, differential algebra and linear algebra.
It has a ton of resources for training pipelines, including model creators, dataset loaders, tokenizers, tensor manipulation, and much more.


Since im most unfamiliar with how to work with tensors, I'm going to start there with this guide.

### Tensors - [docs](https://docs.pytorch.org/docs/stable/tensors.html)
Tensors naturally have types, some of the most common: 
- torch.float32
- torch.short (int16)
- torch.int (int32)
- torch.long (torch.int64)
- and more...

##### Creation:
They are constructed from lists, or from torch.tensor constructor
```python
# The below create copies 
>>> torch.tensor([[1., -1.], [1., -1.]]) # From list
tensor([[ 1.0000, -1.0000],
        [ 1.0000, -1.0000]])
>>> torch.tensor(np.array([[1, 2, 3], [4, 5, 6]])) # From NP
tensor([[ 1,  2,  3],
        [ 4,  5,  6]])

# By reference, no copy
torch.as_tensor(np.array([[1, 2, 3], [4, 5, 6]]))
```

Can be created directly as well, notice support for dimensions, data types, and device:
```python
>>> torch.zeros([2, 4], dtype=torch.int32)
tensor([[ 0,  0,  0,  0],
        [ 0,  0,  0,  0]], dtype=torch.int32)
>>> cuda0 = torch.device('cuda:0')
>>> torch.ones([2, 4], dtype=torch.float64, device=cuda0)
tensor([[ 1.0000,  1.0000,  1.0000,  1.0000],
        [ 1.0000,  1.0000,  1.0000,  1.0000]], dtype=torch.float64, device='cuda:0')
```

Additionally, tensors can be created with `requires_grad=true` to record gradients/differentiate
```python
# The below is saying, that the derivative of out with respect to x is 2. "If I nudge x slightly, how much does out change?"
>>> x = torch.tensor([[1., -1.], [1., 1.]], requires_grad=True)
>>> out = x.pow(2).sum()
>>> out.backward()
>>> x.grad
tensor([[ 2.0000, -2.0000],
        [ 2.0000,  2.0000]])
```

##### Interaction:
Tensors dont naturally yield items, need to use `torch.tensor.item()`
```python
>>> x = torch.tensor([[1]])
>>> x
tensor([[ 1]])
>>> x.item()
1
```

#### Tensor views
You can make views of other tensors, allowing fast and efficient reshaping, slicing, and element-wise operations
```python
>>> t = torch.rand(4, 4)
>>> b = t.view(2, 8)
>>> t.storage().data_ptr() == b.storage().data_ptr()  # `t` and `b` share the same underlying data.
True
# Modifying view tensor changes base tensor as well.
>>> b[0][0] = 3.14
>>> t[0][0]
tensor(3.14)
```
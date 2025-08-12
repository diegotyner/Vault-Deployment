---
created:
  - " 08-04-2025 17:14"
tags:
---



I'm trying to make my configs more reproducible, so I thought I'd log some things here while I install them all on a new pc:


### First
Most of my important configs are stored [here, on github dotfiles](https://github.com/diegotyner/dotfiles)
Then, I symlink them using stow (`sudo apt install stow`)

In root (`~`), I run `git clone https://github.com/diegotyner/dotfiles`, which will give me a folder of all my configs. This makes it easier to maintain on github, where I then symlink them out.
#### Nvim
Setting it up on wsl, so exact setup may vary:
1) Install nvim from source: [github](https://github.com/neovim/neovim) - then go to install from source (installing the minimum build requirements)
2) Then, I installed my ~/.config/nvim file using kickstart.nvim. It's probably unnecessary, but it's reproducible
3) Then, I symlink it `~/dotfiles $ stow nvim -t ~/.config/nvim`
	- From here it should run somewhat, but theres still more dependencies to install:
##### Deps
Mason
- Cargo - `curl https://sh.rustup.rs -sSf | sh`
- Npm:
	- Nvm - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
		- This then needs to be exported to path, but I think its handled in my bashrc dotfile?
	- Npm - `nvm install node`
- Unzip - `sudo apt install unzip`
- Pip - `sudo apt install python3-pip`
- Venv - `sudo apt install python3-venv`

Telescope
- ripgrep (rg) - `sudo apt install ripgrep`
- fd-find - `sudo apt install fd-find`

vim.provider:
- python3 provider: `python3 -m pip install --user --upgrade neovim`
	- dont know if this is needed: `python3 -m pip install --user --upgrade pynvim`
- npm: `npm install -g neovim`

#### Bashrc and sh-utils 
Very straightforward
`stow bashrc` - automatically symlinks to root
`mkdir ~/sh-utils && stow sh-utils ~/sh-utils`

#### tmux
`sudo apt install tmux` (is it already installed in wsl2?)
`stow tmux`


### Obsidian
Managed through dropbox mostly, super easy to install and set vault to that location

### Vscode
Managed through account synk through github acc
If doing WSL, make sure so to install on windows, then install on linux afterwards by doing `code .` , which will link itself

	
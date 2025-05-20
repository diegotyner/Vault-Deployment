


" ==== Run Unmaps at the beggining ===== "
nunmap s
vunmap s
nunmap H
vunmap H
nunmap L
vunmap L

" ========== Basic Movement Remaps ==========
" Haven't figured out, I think multiple expressions aren't supported
"nmap <C-u> <C-u>zz
"nmap <C-d> <C-d>zz
"vmap <C-u> <C-u>zz
"vmap <C-d> <C-d>zz

" Clear Search Highlight
nmap <Esc> :nohl<CR>

" Have j and k navigate visual lines rather than logical ones
nmap j gj
nmap k gk
" Then swap them backwards for easy nav? Get to it later ig

" I like using H and L for beginning/end of line
nmap H ^
nmap L $
vmap H ^
vmap L $

" Quickly remove search highlights
nmap <F9> :nohl<CR>

" Yank to system clipboard
set clipboard=unnamed

exmap surround_wiki surround [[ ]]
exmap surround_double_quotes surround " "
exmap surround_single_quotes surround ' '
exmap surround_backticks surround ` `
exmap surround_brackets surround ( )
exmap surround_square_brackets surround [ ]
exmap surround_curly_brackets surround { }

" NOTE: must use 'map' and not 'nmap'
map [[ :surround_wiki<CR>
map s' :surround_single_quotes<CR>
map s" :surround_double_quotes<CR>
map s` :surround_backticks<CR>
map sb :surround_brackets<CR>
map s( :surround_brackets<CR>
map s) :surround_brackets<CR>
map s[ :surround_square_brackets<CR>
map s] :surround_square_brackets<CR>
map s{ :surround_curly_brackets<CR>
map s} :surround_curly_brackets<CR>





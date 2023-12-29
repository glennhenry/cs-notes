# will rearrange folder number assuming they are sorted
# this is useful if a folder number jumps
# for example, from 01-folder1 jumps to 03-folder2
# this will be renamed to 01-folder1 and 02-folder2 

import os

base_path = "D:\\Programming\\Projects\\cs-notes\\docs\\operating-system"
folders = os.listdir(base_path)

for num, folder_name in enumerate(folders) :
    folder_title = folder_name.split("-", 1)[1]
    path = os.path.join(base_path, folder_name)

    if os.path.isdir(path): 
        renamed = os.path.join(base_path, f"{num + 1:02d}-{folder_title}")
        os.rename(path, renamed)
        print(f"{folder_name} renamed to {num + 1:02d}-{folder_title}")

# This script will renumber folder of a particular topic, assuming they are sorted.
# Typically used when a folder number jumps, usually when adding or deleting a page.
# For example, next page after 01-folder1 is 03-folder2.
# This will be renamed to 01-folder1 and 02-folder2

import os

path_to_topic_folder = os.path.join("docs", "digital-signal-processing")
all_pages = os.listdir(path_to_topic_folder)

for num, folder_name in enumerate(all_pages) :
    folder_title = folder_name.split("-", 1)[1]
    path = os.path.join(path_to_topic_folder, folder_name)

    if os.path.isdir(path): 
        renamed = os.path.join(path_to_topic_folder, f"{num + 1:02d}-{folder_title}")
        os.rename(path, renamed)
        print(f"{folder_name} renamed to {num + 1:02d}-{folder_title}")

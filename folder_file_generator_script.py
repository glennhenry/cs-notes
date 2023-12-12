# Python script to generate default notes template including folder and md file
# May not work for some title with uppercase abbreviation e.g. HTML CSS, need to use content_title

import os

topic_title = "computer-organization-and-architecture"

# List of content in kebab title
content_id = [
    "coa-fundamentals",
    "boolean-logic",
    "ram-and-registers",
    "cpu",
    "assembly-language",
    "input-output",
    "system-bus",
    "von-neumman",
    "harvard",
    "isa",
    "computer-memory",
    "gpu",
    "vector-processors-and-tpu",
]

# List of content in title case
content_title = [
    "COA Fundamentals",
    "Boolean Logic",
    "RAM & Registers",
    "CPU",
    "Assembly Language",
    "Input/Output",
    "System Bus",
    "Von Neumman",
    "Harvard",
    "ISA",
    "Computer Memory",
    "GPU",
    "Vector Processors & TPU",
]

# Create temp folder for debugging
parent_folder = "C:\\Users\\USER\\Desktop\\temp"
os.makedirs(parent_folder, exist_ok=True)

# Title Case -> title-case
def toKebabCase(title):
    return title.capitalize().replace('-', ' ')

# title-case -> Title Case
def toTitleCase(kebab):
    return " ".join(word.capitalize() for word in kebab.split('-'))

# Doesn't create file, just print output in terminal
def generate_topic_links():
    for i, kebab_title in enumerate(content_id, start=0):
        os.makedirs(parent_folder, exist_ok=True)
        print(f"- [{content_title[i]}]({topic_title}/{kebab_title})")

# Doesn't create file aswell
def generate_topic_sidebars():
    for i, kebab_title in enumerate(content_id, start=0):
        title = toTitleCase(kebab_title)
        print(f'"{topic_title}/{kebab_title}/{kebab_title}",')

# Creates actual folder and file
def generate_folder_file():
    # Create folders and MD files
    for i, kebab_title in enumerate(content_id, start=1):
        title = content_title[i - 1]

        # Folder numbering system e.g. 01-title ... 99-title
        folder_name = f"{i:02d}-{kebab_title}"
        folder_path = os.path.join(parent_folder, folder_name)
        os.makedirs(folder_path, exist_ok=True)

        md_file_name = f"{kebab_title}.md"
        md_file_path = os.path.join(folder_path, md_file_name)

        # Write content to MD file
        with open(md_file_path, "w") as md_file:

            # Write YAML header
            md_file.write(f"---\n")
            md_file.write(f"slug: /{topic_title}/{kebab_title}\n")
            md_file.write(f"id: {kebab_title}\n")
            md_file.write(f"title: {title}\n")
            md_file.write(f"description: {title}\n")
            md_file.write(f"---\n\n")

            # Write default template
            md_file.write(f"**Main Source :**\n\n")
            md_file.write(f"- [] \n\n")
            md_file.write(f"{title} page\n")

    print("Project structure and MD files created successfully!")

# main

# generate_folder_file()
# generate_topic_links()
generate_topic_sidebars()

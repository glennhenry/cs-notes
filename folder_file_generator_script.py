# Python script to generate default notes template including folder and md file
# May not work for some title with uppercase abbreviation e.g. HTML CSS, need to use content_title

import os

topic_title = "programming-language-theory"

# List of content in kebab title
content_id = [
    "plt-fundamentals",
    "syntax",
    "names-binding-scoping",
    "semantic-analysis",
    "target-architecture",
    "control-flow",
    "data-types",
    "subroutines",
    "data-abstraction",
    "functional-languages",
    "logic-languages",
    "concurrency",
    "implementation"
]

# List of content in title case
content_title = [
    "PLT Fundamentals",
    "Syntax",
    "Names, Binding, Scoping",
    "Semantic Analysis",
    "Target Architecture",
    "Control Flow",
    "Data Types",
    "Subroutines",
    "Data Abstraction",
    "Functional Languages",
    "Logic Languages",
    "Concurrency",
    "Implementation"
]

# Create temp folder for debugging
parent_folder = "C:\\Users\\USER\\Desktop\\temp"
os.makedirs(parent_folder, exist_ok=True)


def toKebabCase(title):
    """
    Title Case -> title-case
    """
    return title.capitalize().replace('-', ' ')


def toTitleCase(kebab):
    """
    title-case -> Title Case
    """
    return " ".join(word.capitalize() for word in kebab.split('-'))


def generate_topic_links():
    """
    Doesn't create file, just print output in terminal
    """
    for i, kebab_title in enumerate(content_id, start=0):
        os.makedirs(parent_folder, exist_ok=True)
        print(f"- [{content_title[i]}]({topic_title}/{kebab_title})")


def generate_topic_sidebars():
    """
    Doesn't create file aswell
    """
    for i, kebab_title in enumerate(content_id, start=0):
        title = toTitleCase(kebab_title)
        print(f'"{topic_title}/{kebab_title}/{kebab_title}",')


def generate_folder_file():
    """
    Creates actual folder and file
    """
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


if __name__ == "__main__":
    # generate_folder_file()
    # generate_topic_links()
    # generate_topic_sidebars()
    pass

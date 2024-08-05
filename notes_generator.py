# Python script to generate empty note with its folder, sidebar entries, and topic links.

import os

topic_title = "compilers-and-programming-langauges"

# List of pages in kebab-title
pages_id = [
    "cpl-fundamentals",
    "syntax",
    "scanning",
    "parsing",
    "semantic-analysis",
    "names-scopes-bindings",
    "control-flow",
    "data-types",
    "subroutines",
    "data-abstraction",
    "target-architecture",
    "intermediate-representation",
    "assembly-language",
    "code-generation",
    "compiler-optimization",
    "functional-languages",
    "logic-languages",
    "concurrency",
    "scripting-languages",
]

# List of pages in Title Case
pages_title = [
    "CPL Fundamentals",
    "Syntax",
    "Scanning",
    "Parsing",
    "Semantic Analysis",
    "Names, Scopes, Bindings",
    "Control Flow",
    "Data Types",
    "Subroutines",
    "Data Abstraction",
    "Target Architecture",
    "Intermediate Representation",
    "Assembly Language",
    "Code Generation",
    "Compiler Optimization",
    "Functional Languages",
    "Logic Languages",
    "Concurrency",
    "Scripting Languages"
]


def to_kebab_case(title):
    """
    Title Case -> title-case
    """
    return title.capitalize().replace('-', ' ')


def to_title_case(kebab):
    """
    title-case -> Title Case
    """
    return " ".join(word.capitalize() for word in kebab.split('-'))


def generate_topic_links():
    """
    Print topic links on console.
    """
    for i, kebab_title in enumerate(pages_id, start=0):
        print(f"- [{pages_title[i]}]({topic_title}/{kebab_title})")


def generate_topic_sidebars():
    """
    Print sidebar entries on console.
    """
    for i, kebab_title in enumerate(pages_id, start=0):
        title = to_title_case(kebab_title)
        print(f'"{topic_title}/{kebab_title}/{kebab_title}",')


def generate_folder_file():
    """
    Creates folder and file on temp folder.
    """
    # Create folders and MD files
    for i, kebab_title in enumerate(pages_id, start=1):
        title = pages_title[i - 1]

        # Folder numbering system: 01-title, 02-title, 03-title ... 99-title
        folder_name = f"{i:02d}-{kebab_title}"
        folder_path = os.path.join("temp", folder_name)
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
    # Temp folder for generate_folder_file output
    os.makedirs("temp", exist_ok=True)

    generate_folder_file()
    # generate_topic_links()
    # generate_topic_sidebars()
    pass

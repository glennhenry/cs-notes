# Python script to generate empty note with its folder, sidebar entries, and topic links.
# Output for file will be in .temp folder. Sidebar entries and topic links will be outputted in .temp/link.txt or .temp/sidebar.txt
# Run the script in terminal with input of 0, 1, or 2 (generate_folder_file, generate_topic_links, generate_topic_sidebars) e.g., `python notes_generator.py 0`

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
    Generate topic links (to put in topic's intro). Still need to list sub-topics manually.
    """
    os.makedirs(".temp", exist_ok=True)
    with open(os.path.join(".temp", "link.txt"), "w") as f:
        for i, kebab_title in enumerate(pages_id):
            a = f"- [{pages_title[i]}](/cs-notes/{topic_title}/{kebab_title})\n"
            f.write(a)
            print("Generated: ", a[:len(a) - 1])


def generate_topic_sidebars():
    """
    Generate sidebar entires (to put in astro.config.mjs). Still need to list create sidebar group for the topic and sub-topics manually.
    """
    os.makedirs(".temp", exist_ok=True)
    with open(os.path.join(".temp", "sidebar.txt"), "w") as f:
        for kebab_title in pages_id:
            a = f"\"{topic_title}/{kebab_title}/{kebab_title}\",\n"
            f.write(a)
            print("Generated: ", a[:len(a) - 1])


def generate_folder_file():
    """
    Creates folder and file on temp folder.
    """
    # Create folders and MD files
    for i, kebab_title in enumerate(pages_id, start=1):
        title = pages_title[i - 1]

        # Folder numbering system: 01-title, 02-title, 03-title ... 99-title
        folder_name = f"{i:02d}-{kebab_title}"
        folder_path = os.path.join(".temp", folder_name)
        os.makedirs(folder_path, exist_ok=True)

        md_file_name = f"{kebab_title}.md"
        md_file_path = os.path.join(folder_path, md_file_name)

        # Write content to MD file
        with open(md_file_path, "w") as md_file:

            # Write YAML header
            md_file.write(f"---\n")
            md_file.write(f"title: {title}\n")
            md_file.write(f"slug: {topic_title}/{kebab_title}\n")
            md_file.write(f"description: {title}\n")
            md_file.write(f"---\n\n")

            # Write default template (main source on the bottom)
            md_file.write(f"{title} page\n\n")
            md_file.write(f"**Main Source:**\n\n")
            md_file.write(f"- [] \n")

            print("Generated: ", folder_name)


if __name__ == "__main__":
    # Temp folder for generate_folder_file output
    os.makedirs(".temp", exist_ok=True)

    import sys

    if len(sys.argv) > 1 and 0 <= int(sys.argv[1]) <= 2:
        option = int(sys.argv[1])
        if option == 0:
            generate_folder_file()
        if option == 1:
            generate_topic_links()
        if option == 2:
            generate_topic_sidebars()
    else:
        print("Invalid input")
        sys.exit(0)

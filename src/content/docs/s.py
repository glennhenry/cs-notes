import os
import re

# Only these link parts will be replaced
valid_links = [
    "android-development", "android-os", "backend-system", "cloud-computing-and-distributed-system",
    "compilers-and-programming-languages", "computer-and-programming-fundamentals", "computer-graphics",
    "computer-networking", "computer-organization-and-architecture", "computer-security",
    "data-structures-and-algorithms", "database-system", "deep-learning", "digital-media-processing",
    "digital-signal-processing", "internet-and-web", "machine-learning", "operating-system",
    "software-engineering", "theory-of-computation-and-automata"
]


def replace_links(md_content, base_path, replaced_links, file_path):
    # Matches: [text](/valid-link/...) or [text](/valid-link)
    pattern = r'(\[.*?\])\((\/([a-zA-Z0-9\-]+)(\/[^)]*)?)\)'

    def replacer(match):
        full_match = match.group(0)
        text = match.group(1)
        full_link = match.group(2)  # /valid-link/extra/stuff
        root_link = match.group(3)  # valid-link

        if root_link in valid_links and not full_link.startswith(f'/{base_path}'):
            new_link = f'/{base_path}{full_link}'
            replaced_links.append((file_path, full_link, new_link))
            return f"{text}({new_link})"
        return full_match

    return re.sub(pattern, replacer, md_content)


def process_directory(directory, base_path):
    replaced_links = []

    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                updated_content = replace_links(
                    content, base_path, replaced_links, file_path)

                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(updated_content)

    return replaced_links


if __name__ == "__main__":
    base_path = "cs-notes"
    target_directory = "."  # Change this to your root directory of markdown files

    links = process_directory(target_directory, base_path)

    if links:
        print("✅ Replaced Links:\n")
        for file, old, new in links:
            print(f"{file}: {old} ➜ {new}")
    else:
        print("No matching links found for replacement.")

import heapq
import os

def stats(directory):
    total_sum = 0
    alls = []
    count = 0

    for root, dirs, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".md") or filename.endswith(".mdx"):
                file_path = os.path.join(root, filename)
                count += 1

                with open(file_path, "r", encoding="utf-8") as file:
                    content = file.read()
                    char_sum = len(content)
                    total_sum += char_sum
                    alls.append((-char_sum, filename))
                    print(f"Note: {file_path}, Characters: {char_sum}")

    print(f"\nTotal Characters in All Notes: {total_sum}")
    print(f"Total notes: {count}")
    print(f"\nLongest notes:")
    heapq.heapify(alls)
    for _ in range(5):
        c, n = heapq.heappop(alls)
        print(f"  Character: {-c} | {n}")

directory_path = "D:\\Programming\\Projects\\cs-notes\\docs"
stats(directory_path)

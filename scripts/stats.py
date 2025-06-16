# A script to find out how many notes are there, how many characters in each notes and the total of the; and the longest notes.

import heapq
import os


def stats(directory):
    total_char = 0
    total_word = 0
    alls1 = []
    alls2 = []
    count = 0

    for root, dirs, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".md") or filename.endswith(".mdx"):
                file_path = os.path.join(root, filename)
                count += 1

                with open(file_path, "r", encoding="utf-8") as file:
                    content = file.read()

                    total_char_file = len(content)
                    total_word_file = len(content.split(" "))

                    total_char += total_char_file
                    total_word += total_word_file

                    alls1.append((-total_char_file, filename))
                    alls2.append((-total_word_file, filename))
                    print(f"Note: {file_path}, Characters: {total_char_file}")
                    print(f"Note: {file_path}, Characters: {total_word_file}")

    print(f"\nTotal Characters in All Notes: {total_char}")
    print(f"\nTotal Characters in All Notes: {total_word}")
    print(f"Total notes: {count}")
    print(f"\nLongest notes:")

    heapq.heapify(alls1)
    for _ in range(5):
        c, n = heapq.heappop(alls1)
        print(f"  Character: {-c} | {n}")

    heapq.heapify(alls2)
    for _ in range(5):
        c, n = heapq.heappop(alls2)
        print(f"  Word: {-c} | {n}")


stats("docs")

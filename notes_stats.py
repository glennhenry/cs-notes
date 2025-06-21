# A script to find out how many notes are there, how many characters and words in each notes and the 5 longest notes.

import heapq
import os

BASE_PATH = os.path.join("src", "content", "docs")


def notes_stats(should_print=False):
    total_char = 0
    total_word = 0
    alls1 = []
    alls2 = []
    count = 0

    for root, dirs, files in os.walk(BASE_PATH):
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
                    if should_print:
                        print(
                            f"Note: {file_path}, Characters: {total_char_file}")
                        print(
                            f"Note: {file_path}, Characters: {total_word_file}")

    if should_print:
        print(f"Total notes: {count}")
        print(f"\nTotal Characters in All Notes: {total_char}")
        print(f"\nTotal Words in All Notes: {total_word}")
        print(f"\nLongest notes:")

    heapq.heapify(alls1)
    char_rank = []
    for _ in range(5):
        c, n = heapq.heappop(alls1)
        char_rank.append((-c, n))
        if should_print:
            print(f"  Character: {-c} | {n}")

    heapq.heapify(alls2)
    word_rank = []
    for _ in range(5):
        w, n = heapq.heappop(alls2)
        word_rank.append((-w, n))
        if should_print:
            print(f"  Word: {-w} | {n}")

    return [count, total_char, total_word, word_rank, char_rank]

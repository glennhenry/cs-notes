---
slug: /operating-system/file-system
id: file-system
title: File System
description: File System
---

**Main Source :**

- []

**File System** is a logical construct, a method, or structure used by an operating system to organize and store data on the storage.

At the lowest level, disk stores data in binary 0s and 1s, grouped together into sectors and blocks. Having file system provide a more convenient way to access data, it serves as an abstraction layer between the physical storage medium and the operating system when doing file operation.

### File

File is a named collection of related data that is stored on a storage medium. File contains information, depending on the file format, it can either be binary data (machine-readable) or plain text data (human-readable), which is encoded in specific encoding format such as [ASCII](/computer-and-programming-fundamentals/data-representation#ascii) or [UTF-8](/computer-and-programming-fundamentals/data-representation#utf).

File have specific format that explain how the file is structured. For example, image file format such as [PNG](/digital-media-processing/png) structure it's contents such that, computer know how to interpret it meaningfully. It may contain information about the file or the actual file information; in the case of images, it is the pixel data.

![File content](./file-content.png)  
Source : [PNG file](https://twitter.com/likev/status/1395285523460083714), [TXT file](https://www.techtarget.com/whatis/definition/ASCII-American-Standard-Code-for-Information-Interchange)

#### File Attributes

The file system keep track of the data information, file has many attributes :

- **Name** : Every file has a unique name, which is human-readable, that identifies it within the file system. The name is used to reference and locate the file.
- **Size** : The size of a file refers to the amount of storage space it occupies on the storage medium, usually measured in bytes, kilobytes, megabytes, or larger units.
- **Type/Format** : Examples include text files (e.g., .txt), image files (e.g., .jpg, .png), audio files (e.g., .mp3), video files (e.g., .mp4), and many more.
- **Location** : The location of a file refers to its physical position or address on the storage medium.
- **Metadata** : Other information about the file, such as creation and modification timestamps, file permissions, file owner, file attributes, and other relevant details.
- **Protection** : Security related information, such as, who is allowed to read or write, is it visible, is it read-only, etc.

#### File Operation

- **Create** : Create a new file entry along with information associated with the file, this requires allocating space for the file, and a directory to store the file.
- **Write** : The write operation is used to modify the contents of a file or append new data to it. Through [system call](/operating-system/system-call), we will specify the target file, starting position, and the data to be written. The OS translates the logical file address to a physical disk location and writes the data to the appropriate sectors or blocks on the storage medium.
- **Read** : The read operation retrieves data from a file and transfers it into memory. It involves specifying the file to read, the starting position, and the number of bytes to read. The OS translates the logical file address to a physical disk location, retrieves the requested data, and transfers it to the requesting process or buffer.
- **Reposition / Seek** : The seek operation is used to reposition the current read/write position within a file. It involves specifying an offset from a reference point (e.g., the beginning, current position, or end of the file) and a direction (forward or backward). The OS updates the file's read/write pointer accordingly, allowing subsequent read or write operations to occur at the desired location.
- **Delete** : The delete operation removes a file from the file system. It involves locating the file's metadata, freeing the associated disk space, and updating directory entries or file system structures to reflect the deletion.
- **Truncate** : Truncating a file adjusts its size by removing or discarding a portion of its contents, based on the specified target size. The OS updates file metadata and frees disk space as needed. Truncation can both shrink and expand a file, making discarded data inaccessible.
- **Open** : Establishes a connection or handle to a file, enabling subsequent operations on it. It involves specifying the file's name or identifier, access mode (e.g., read-only, write-only, or read-write), and other optional parameters. The OS verifies access permissions, allocates necessary resources (e.g., file descriptors), and prepares the file for subsequent operations.
- **Close** : The close operation terminates the connection or handle to an open file. It involves releasing any resources associated with the file, such as file descriptors or locks.

:::tip
Terminology :

- **File pointer** is reference or indicator that points to a specific location within a file, in which next read or write operation will occur. File pointer for read operation is called **read-pointer** and for write operation, it is called **write-pointer**.
- **File descriptors** are unique identifiers or numerical representations that represent access to a file, socket, or other I/O resources.
- **File locks** are mechanism to restrict access to a file or a portion of a file to a single process or thread, to prevent concurrent access. File locks can be **shared lock**, which allows multiple processes to read concurrently, or **exclusive lock**, which grants exclusive access to a process for writing to the file.
- **File-open count** is a number of times a file has been opened by different processes or within the same process. It helps keeping track of how many processes currently have the file open.
  :::

#### File Types

executable..

#### File Security

Access permision, access control, permission in unix rw--d-l

### File Organization

Directories: list, tree, hashtable
paths
data structure used,

### File Allocation

contiguous, linkeed, indexed

### File System Implementation

### File System Example

#### FAT

- dd
- dd

#### NTFS

- dd
- dd

#### EXT4

- dd
- dd

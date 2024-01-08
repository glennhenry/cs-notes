---
slug: /operating-system/disk-management
id: disk-management
title: Disk Management
description: Disk Management
---

**Main Source :**

- **[Chapter 10 Mass-Storage Structure - Abraham Silberschatz-Operating System Concepts (9th,2012_12)]**

Operating system provides necessary abstractions and services for disk management. By disk, it means they are secondary or tertiary storage, which are non-volatile storage device that retains data even when the power is turned off.

### Mass-Storage Structure

Mass-storage structure is the organization and management of storage devices, which encompasses the physical and logical components that enable the disk to store, access, and retrieve large amounts of data.

There are 3 common secondary storage :

- **Magnetic Disk (Hard Disk Drive [HDD])** :

  - **Structure** : Magnetic disk consist of platter disks stacked on top of each other on a spindle. Each plate has a special coating that can hold a magnetic field. The plates are enclosed within an assembly arm, where each plate has a read/write head above it.
  - **Working Principle** : HDDs use magnetism to store and retrieve data. The head can rotate to move across the surface of the platter. The rotation speed of the head is measured in revolutions per minute (RPM). A higher RPM indicates faster rotation speed, which imply a faster data access times. The heads can read and write data by changing the magnetic orientation of tiny regions on the platter's surface, representing the 0s and 1s of digital data.
  - **Data Access** : When data is written, the read/write heads apply a magnetic field to a specific location on the platter, aligning the magnetic particles in the desired orientation. When reading data, the heads detect the magnetic field on the platter and convert it into electrical signals that represent the stored data. The heads move across the platter surfaces to access different tracks and sectors, allowing random access to data.

    ![Magnetic disk](./magnetic-disk.png)  
    Source : https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/10_MassStorage.html

- **Solid-State Drive (SSD)** :

  - **Structure** : An SSD consists of multiple [flash memory](/computer-organization-and-architecture/coa-fundamentals#flash-memory) chips organized into memory blocks. Each memory block contains multiple memory cells, which are further organized into pages. The SSD also contains a controller that manages the data flow between the flash memory chips and the computer system.
  - **Working Principle** : SSDs use [flash memory](/computer-organization-and-architecture/coa-fundamentals#flash-memory), a type of non-volatile memory, to store and retrieve data. Flash memory is made up of floating-gate transistors that can hold an electric charge, representing the 0s and 1s of digital data.
  - **Data Access** : To write data, the controller sends electrical signals that charge the floating-gate transistors, altering their electrical state and storing the data. To read data, the controller measures the electrical charge in the transistors to determine the stored data. Unlike HDDs, SSDs have no moving parts, allowing for faster data access and improved reliability.

- **Magnetic Tape** :

  - **Structure** : Magnetic tape is wound on reels or cartridges. The tape is passed over a read/write head, which magnetically writes data onto the tape or reads data from it.
  - **Working Principle** : Magnetic tape is a sequential storage medium that uses magnetism to record and retrieve data. It consists of a long, narrow strip of plastic coated with a magnetic material.
  - **Data Access** : Magnetic tape is designed for sequential access, which means that data is read or written linearly from one end of the tape to the other. To access a specific piece of data, the tape must be fast-forwarded or rewound until the desired location is reached. Magnetic tape is commonly used for backup and archival purposes due to its relatively low cost and high storage capacity, although it tends to have slower access times compared to disk-based storage.

    ![Magnetic tape](./magnetic-tape.png)  
    Source : https://cs.hofstra.edu/~cscvjc/Fall06/Slides/Sess09/img25.html

### Disk Structure

Disk is divided into several logical components :

- **Track** : A track is a concentric circular path on a disk's platter. It is defined as a complete circle around the disk's surface at a specific radius.
- **Sector** : A sector is the smallest addressable unit of storage on a disk. It represents a fixed-size section of a track. Sectors are typically formatted to hold a specific amount of data, such as 512 bytes or 4 kilobytes. Data is written to and read from sectors using the disk's read/write heads. These sectors are grouped together into larger units called blocks. The block size can vary depending on the [file system](/operating-system/file-system) and disk configuration.
- **Cluster** : A cluster, also known as an allocation unit, is a group of blocks that are treated as a single unit by the file system. It is the smallest addressable unit of disk space for file allocation.

  ![Disk structure](./disk-structure.png)  
   Source : https://www.kompasiana.com/image/stevenmlf/5e8ae37ed541df08e35c66b2/bagaimana-harddisk-membaca-data-dan-arsitektur-sektor?page=1

### Disk Scheduling

To read/write data to disk, we will issue [system call](/operating-system/system-call) provided by the operating system. The I/O request require :

- **Input or Output** : Specify whether it's an input (read) or output (write) operation.
- **Disk Address** : Specify the location on the disk including information about the track, sector, and cylinder.
- **Memory Address** : The address or the location in memory where the data to be read from or written to the disk is stored. It represents a buffer or a specific region of memory allocated for the I/O operation.
- **Number of Sectors** : Indicates the size or quantity of data to be transferred between the disk and memory.

**Disk Scheduling** is a technique used by operating systems to determine the order in which disk I/O requests are serviced. It is crucial to optimize disk access and minimize the **seek time**, which is the time taken for the disk's read/write heads to move to the desired location on the disk.

Some example of disk scheduling algorithms :

- **First-Come, First-Served (FCFS)** : This is a simple disk scheduling algorithm that services requests in the order they arrive. However, it does not consider the location of the requests on the disk, which can lead to poor performance if requests are scattered across the disk.

  ![FCFS scheduling](./fcfs.png)  
   Source : https://www.geeksforgeeks.org/difference-between-fcfs-and-sstf-disk-scheduling-algorithm/

- **Shortest Seek Time First (SSTF)** : This algorithm selects the request that requires the least movement of the read/write heads from the current position. It aims to minimize the seek time by prioritizing the closest request.

  ![SSTF scheduling](./sstf.png)  
   Source : https://www.geeksforgeeks.org/difference-between-sstf-and-look-disk-scheduling-algorithm/

- **SCAN (elevator algorithm)** : The SCAN algorithm moves the read/write heads in one direction (e.g., from the outermost track to the innermost track) and services all the requests in that direction. When it reaches the end, it reverses direction and services the remaining requests. There is also a variant of SCAN, C-SCAN (Circular SCAN), which jump immediately to the other end instead of reversing the direction.

  ![SCAN scheduling](./scan.png)  
   Source : https://stackoverflow.com/questions/58289534/scan-and-cscan-algorithm-in-operating-system

### Disk Management

#### Disk Formatting

Disk formatting is the process of preparing a storage device to be used by an operating system. Disk formatting involves three process :

- **Physical Formatting** : Initialize the physical tracks and sectors on the disk, as well as configuring parameters such as sector size. Physical formatting is typically performed by the manufacturer during the production of the disk and is not normally necessary or accessible to end-users.
- **Partition** : Disk is typically divided into logical regions that can be managed separately, called **partition**.
- **Logical Formatting** : Involves creating the file system structures such as creating an empty file or directory and the necessary metadata.

#### Boot Sector

When the computer goes through the [boot process](/operating-system/booting), it needs an initial program to run. A portion of the program data is stored in a read-only memory (ROM), while another portion resides in the **boot sector**, which is a fixed position on the disk dedicated to storing the initial program.

![Boot sector](./boot-sector.png)  
Source : https://en.wikipedia.org/wiki/Boot_sector#/media/File:GNU_GRUB_components.svg

#### Bad Sector

Bad sector refers to a portion of a storage device that is physically damaged or unable to reliably store data. A bad sector can occur due to various reasons, including manufacturing defects, physical damage, aging, or other issues with the disk.

There are two types of bad sectors :

- **Hard Bad Sector** : It is a permanent physical defect on the disk's surface. It cannot be repaired or recovered because it represents a physical flaw, such as a scratch, magnetic degradation, or a faulty read/write head.
- **Soft Bad Sector** : It is a logical or temporary issue that arises due to problems with data storage or retrieval. Soft bad sectors can occur due to data corruption, software errors, or issues with the disk's internal mechanisms. In some cases, soft bad sectors can be repaired by performing disk maintenance operations.

When bad sector is found, it is flagged to be unusable. If it is possible to recover the bad sector, we can remap the bad sector to a reserved spare sector. This process involves updating the disk's internal mapping table to redirect any read or write operations from the original bad sector to the spare sector.

#### Free-space management

#### Storage allocation

### RAID

### Backup & Recovery

### Defragmentation

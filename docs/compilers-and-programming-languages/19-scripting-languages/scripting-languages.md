---
slug: /compilers-and-programming-languages/scripting-languages
id: scripting-languages
title: Scripting Languages
description: Scripting Languages
---

**Main Source:**

- **Book 2 chapter 13**
- **[Scripting language — Wikipedia](https://en.wikipedia.org/wiki/Scripting_language)**

Scripting languages are programming language designed to manipulate, customize, or automate an existing system, typically within a specific domain.

### Characteristics

The characteristics of scripting language is, they are often [interpreted](/computer-and-programming-fundamentals/interpreter) rather than [compiled](/computer-and-programming-fundamentals/compilation). They usually take input, evaluate it, then print the output. This interaction is known as **read-eval-loop (REPL)**. Most of them has simple syntax (minimum boilerplate) as well as easy to write and learn, because they are intended to modify a system through high-level scripts.

For example, a "Hello, World!" program written in Java requires a class and a main function to run, while Python accomplishes it in a single line of code.

```javascript
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

```python
print("Hello World!")
```

Furthermore, they provide high-level data types such as lists, sets, and dictionaries, as well as high-level functions through built-in functionality for common tasks like file manipulation and string manipulation. They are often [dynamically typed](/compilers-and-programming-languages/data-types#type-systems), providing flexibility in declaring and operating with variables (e.g., allows [implicit type conversion](/compilers-and-programming-languages/data-types#type-conversion)), allowing programmers to write code quickly.

They do not even require variable to be declared, undeclared variable may be automatically associated to the global scope.

```javascript
function myFunction() {
  let x = 10;
  y = 20;
  console.log(x); // Outputs 10
  console.log(y); // Outputs 20
}

myFunction();
console.log(y); // Outputs 20
console.log(x); // ReferenceError: x is not defined
```

In JavaScript, the `let` keyword is used to declare variable within a local scope. Without it (or similar keyword), variable would be associated in the global scope.

Scripting languages that are used to "glue" or connect together existing program into a larger system are called **glue languages**. It can be a language like Python, which may be used to glue a C library to a GUI app made in Python itself.

Scripting language that extends the capabilities of an application is known as an **extension language**. Examples include languages like Lua, which is often used to define game logic, create quests, and modify gameplay behavior without having to recompile the entire game engine (game modding).

### Examples

Programming language can be categorized based on their purposes, **general purpose language (GPL)** and **domain-specific language (DSL)**. The former is designed to be versatile for wide range of domains and use cases, while the latter specifically made to address the needs of a particular domain or problem space. Example of GPL are Java, C++, Python, C#, and examples for DSL are SQL (for database), HTML/CSS (for web markup and styling), MATLAB (for numerical computing).

Scripting languages can be any of the two, examples are:

- **Python**: While it is a general purpose language, it is known for its simplicity and readability. It is widely used for scripting tasks, such as automation, web scraping, manipulating files, sending email, etc.
- **JavaScript**: JavaScript was once a highly specific DSL intended to manipulate applications ([web browsers](/internet-and-web/web-browser)) through a specific API called the [DOM](/internet-and-web/html#html-dom) to add interactivity and dynamic behavior to webpages. With [Node JS](/internet-and-web/javascript#node-js), it evolved from a browser scripting language into general purpose language capable to be run on server-side application.
- **PowerShell**: It is a scripting language developed by Microsoft for Windows systems. It provides [command-line shell](/computer-and-programming-fundamentals/computer-and-programming-terminology#command-line-command-prompt-shell-bash-terminal-console) environment to allows system administrators to automate tasks, manage system configurations, and interact with various Windows services and components.

#### Shell

Shell languages are specifically designed to interact with and control operating system shells. It includes language like Bash, PowerShell, and sh.

Some features of shell languages (Bash):

- **Wildcard**: Also known as **globbing**, they are related to string manipulation and pattern matching. It is commonly used for matching or expanding patterns in file or directory names. Commonly used wildcards include `*` (matches any sequence of characters), `?` (matches any single character), and `[ ]` (matches a range of characters). For example, `ls *.txt` lists all files with the ".txt" extension in the current directory.
- **Variables**: Variables are assigned values using the `=` operator and accessed using the `$` symbol. For example, `name="John"` assigns the value "John" to the variable name, and `echo $name` prints the value of the name variable.
- **Simple Loop**: We can put an entire loop within just a single line of code by separating each line with a semicolon. The code `for i in {1..5}; do echo $i; done` prints number 1 to 5 in each line.
- **Pipes**: Pipes with the symbol (|) connect the output of one command to the input of another, allowing for the chaining of commands together. For example, `ls -l | grep ".txt"` lists all files in long format (long format includes file's detailed information) and then filters the output to show only files with the ".txt" extension.
- **Output Redirection**: We can direct the output of a command to a file or another location. The `>` symbol redirects standard output to a file, overwriting its contents, while `>>` appends the output to the file. For example, `ls > file.txt` redirects the output of the `ls` command to the file "file.txt".
- **Function**: User can also define function.

  ```bash
  greet() {
    echo "Hello, $1!"
  }

  greet "Alice"  # Output: Hello, Alice!
  ```

  Where the `$1` represent the first parameter, `$2` represent the second, and so on.

Unix-based system also provide command-line utilities:

- **wget**: wget is a command-line utility used for retrieving files from the web. It allows us to download files from HTTP, HTTPS, and FTP servers. It supports various protocols, advanced options, and features like recursive downloading, resuming interrupted downloads, and handling proxies. It is commonly used in shell scripts for automated file retrieval.
- **curl**: curl is a command-line tool for making HTTP requests. It can retrieve files, send data, perform authentication, handle cookies, and more. It is frequently used for tasks like downloading files, testing APIs, performing data transfers, and automation.
- **sed**: sed (stream editor) is a command-line utility for text manipulation. It reads input line by line, applies specified operations (commands), and outputs the result.
- **awk**: awk is a more powerful text-processing tool, typically used for manipulating and analyzing structured text data. Similarly, it operates on a per-line basis, reads input records, apply patterns, and execute actions based on those patterns. It is included with programming constructs such as array, control flow like `if`, `else`, `while`, etc.

#### Web

The web, surfed by web browsers, is primarily intended to render web pages from HTML and CSS documents. Furthermore, they are added with interactivity with the JavaScript scripting language. JavaScript can manipulate the DOM (the representation of the web page structure), handle user interactions, make server requests, perform client-side validation, and more.

Scripting done on the client-side, mostly with JavaScript, which can typically be achieved without involving the server, is called **client-side scripting**. On the other hand, tasks that need to be controlled from the server, or content that needs to be dynamically generated on the server, are referred to as **server-side scripting**. Examples of server-side scripting language are Perl and PHP.

For example, validating a form, such as checking if all fields have been filled or not, is considered client-side scripting because it doesn't need to be directly controlled from the server. Furthermore, such trivial tasks would be better if done locally, as it reduces server load and bandwidth. Tasks such as checking whether a username has been taken or not may require server-side scripting to query the database and actually verify if the username already exists.

A JavaScript on client-side may look like below.

```javascript
// Retrieve the username from the form
const username = document.getElementById("username").value;

if (username.length < 5) {
  alert("Username must be at least 5 characters long.");
}
```

Retrieving the form through DOM API and sending an alert if it violates some rules. Client-side scripting is run on the client machine. It will need an interpreter that can run JavaScript, which is typically the web browser.

The server-side uses Perl.

```python
my $cgi = CGI->new;

# Retrieve the username from the form data
my $username = $cgi->param('username');

my $response;
if ($username) {
    # Example: Check if username exists in the database
    my $isUsernameAvailable = checkUsernameAvailability($username);

    if ($isUsernameAvailable) {
        $response = "Username is available";
    } else {
        $response = "Username is not available";
    }
} else {
    $response = "Please enter a username";
}

# Set content type and print response
print $cgi->header('text/plain');
print $response;
```

The script above uses **Common Gateway Interface (CGI)**. It is a protocol that defines how web servers execute external programs or scripts to process HTTP requests, typically to generate dynamic web content.

The client-side would send an HTTP request to the server posting the username form. The script then retrieves it and check based on defined business logic on the server side. The `checkUsernameAvailability` is a placeholder function that may query the database for availability.

The last two lines of code changes the content-type of the response and print it. The response is actually supposed to be sent back to the client.

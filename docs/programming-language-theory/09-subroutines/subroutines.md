---
slug: /programming-language-theory/subroutines
id: subroutines
title: Subroutines
description: Subroutines
---

**Main Source :**

- **Book chapter 8**
- **[Call stack - Wikipedia](https://en.wikipedia.org/wiki/Call_stack)**

Subroutines can abstract away a piece of code that perform a specific task or carry out a sequence of operations. They are feature like functions, procedures (typically refer to function without return statement), and methods.

Subroutine typically needs parameter (also known as formal parameter), which is the data it takes as input. The caller provide argument (also known as actual parameter) for the subroutine.

### Call Stack

Programmers can call subroutines as needed. Upon calling subroutines, the program will keep track all the active subroutine in a data structure called **call stack**. The call stack is divided into several sections called **stack frames** (also known as activation records or activation frames). Each stack frame correspond to a single subroutine call.

![Call stack](./call-stack.png)  
Source : https://en.wikipedia.org/wiki/Call_stack

When a subroutine is called, the program transfers control from the current execution point to the subroutine's code. A stack frame is created, which includes parameters, local variables, and a **return address**. This return address is the memory address of the next instruction after the function call, allowing the program to continue its execution after the subroutine is finished. After a subroutine is finished, its stack frame will be removed from the call stack. If it returns some value, it will be saved on the stack, in some register, or in a specific memory location.

Within the call stack, there are two pointers used for managing the stack frames : the **stack pointer (SP)** and the **frame pointer (FP)**. SP keeps track the top of the stack, while FP is the reference point within a stack frame.

:::info
When a function is being called many times (e.g., in recursion), a potential error called [stack overflow](/data-structures-and-algorithms/recursion#call-stack) may occur. It happens when the call stack becomes full or exceeds its allocated size.
:::

### Calling Sequences

Calling sequences are instructions executed before and after subroutine call. The code executed at the beginning is called **prologue**, while the code executed at the end is called **epilogue**. Calling sequence is responsible for executing task like passing parameters, saving return address, returning function values, deallocating call stack, etc.

During the execution of program, registers are used to store the current execution context. When a subroutine is called, it may need to use registers to perform its operations. Therefore, it is required to save the registers value before calling the subroutine. There are two approach of saving the register :

- **Caller-saves** : In this case, the responsibility of saving register is given to the caller. It saves all the register that are used before subroutine call and restore them afterwards.
- **Callee-saves** : In this case, the callee or the subroutine being called is responsible for saving and restoring the registers it will overwrite.

#### Static Chain

In nested subroutine, it is possible that there is a need to access variables from outer scopes within inner scopes.

- Case one, when nested subroutine is directly inside the caller, then the caller passes its own position on the call stack (using frame pointer) to the callee for it to access it directly. This passing of frame pointer establish a link called **static link**. The static link will be considered as "hidden argument" to the callee.
- Case two, when nested subroutine and caller is both nested in another subroutine, then it's the caller responsibility to follow its own **static chain** (a series of static link) a certain number of times to reach the appropriate scope.

#### Example

We can then conclude a typical calling sequence, what will happen during a subroutine call :

1. Caller (prologue) :
   - Save registers if using caller-saves register.
   - Evaluate the arguments to be passed to the subroutine.
   - Compute static link if needed.
   - Push the return address onto the stack.
2. Callee (prologue) :
   - Allocates a stack frame.
   - Save the caller's frame pointer for later.
   - Save registers if using callee-saves register.
3. Execution of subroutine code.
4. Epilogue :
   - Moves return value to register or any preserved location.
   - Restore callee-saves register if needed.
   - Restore frame and stack pointer.
   - Jumps back to return address.
5. Caller (after the function call) :
   - Restore caller-saves register if needed.
   - Access the return value.

### Parameter Passing

#### Parameter Modes

There are different ways of how parameter is passed to subroutine.

- **Pass-by-value** : The value of the arguments are copied and passed to the callee. The callee maintain a local copy of the parameter value, which means any modifications doesn't affect the original arguments. It is a simple approach, but it may not be preferred when to copy large object.
- **Pass-by-reference** : A reference of the arguments is passed to the callee. As a result, the callee can directly access and modify the original parameter in the caller's scope. Pass-by-reference is more efficient when the passed object are large.

  Some languages allow for read only pass-by-reference. This approach allows us to avoid copying large object, while also keeping the original value immutable.

- **Pass-by-pointer** : Also known as **call-by-sharing**, this approach creates a pointer, which callee can dereference to obtain the actual value. It can be used when the subroutine needs to modify the structure of the parameters directly (e.g., modifying a linked list).
- **Pass-by-name** : This approach simply passes the name of the parameter. It is done in a way similar to a macro, where the name of the parameter is substituted with the actual value. It allows for lazy evaluation of parameters, which are dynamically evaluated.

Some languages may use multiple approach. A common combination is using pass-by-value for primitive objects (e.g., integer, char, boolean) and pass-by-pointer for complex object.

Function can also be passed as parameters. It is typically passed by reference or as a reference to the function object. For example, in C++, function as parameter is achieved through function pointer.

```cpp
void apply_operation(void (*operation)(int), int x) {
    operation(x);
}
```

`void (*operation)(int)` denotes a function that we call as `operation` which takes an `int`, and return `void` (nothing). We can simply use the passed function as usual.

#### Special Parameters

Some parameter that are considered special :

- **Conformant Arrays** : Conformant arrays are array whose size are determined at runtime. When passing them as parameter, we will need to provide additional information about the array's size.
- **Optional / Default Parameter** : When parameters are optional, the compiler will set a default value for them. The compiler handles the task of substituting default values for missing arguments during the function call.
- **Named Parameter** : Some languages (e.g., Python) allow us to denote which argument correspond to which parameter in the function call. It may look like this `set(key=2, value=12)`, which will improve readability and clarity for function call. The compiler will map the named arguments to the correct parameters based on their names.
- **Variable Number of Arguments** : Function may accept variable number of argument, often specified with ellipsis notation (e.g., ...). Internally, the arguments are usually stored in a collection such as an array or a list, which the compiler iterates through.

#### Returns

Return is the mechanism to finish the execution of subroutine immediately, and possibly return a value to the caller. The typical syntax for return statement is `return expression`.

Some languages allow functions that don't return anything to omit the `return` keyword. Regardless, the function may still use return statement as early termination.

In static typed language, the function return typically has a defined type, indicating what type of value the function is expected to return. Obviously the function needs to return value whose type is same as specified, otherwise a compile-time error may occur.
